const { isValidObjectId } = require("mongoose");
const requestAsyncHandler = require("../handlers/async.handler");
const Transaction = require("../models/Transaction");
const { transactionDto } = require("../validator/transaction.validator");
const { TransactionNotFound } = require("../errors/transaction");

exports.createTransaction = requestAsyncHandler(async (req, res) => {
    const transactionBody = await transactionDto.validateAsync(req.body);
    const transaction = { ...transactionBody, user: req.user._id };
    const newTransaction = await Transaction.createNew(transaction);
    return res.status(201).json({ status: true, message: `New transaction added with id : ${newTransaction._id}`, data: newTransaction })
})

exports.getAllTransactions = requestAsyncHandler(async (req, res) => {
    const { filter, limit, select, skip } = req.query;
    const transactions = await Transaction.find(filter).select(select).skip(skip).limit(limit)
    const count = await Transaction.countDocuments(filter);
    return res.status(200).json({ status: true, data: { transactions, limit, skip, count } })
})

exports.getTransaction = requestAsyncHandler(async (req, res) => {
    const transactionId = req.params.transactionId;
    if (!isValidObjectId(transactionId)) {
        throw new TransactionNotFound();
    }
    const transaction = await Transaction.findOne({ user: req.user._id, _id: req.params.transactionId });
    if (!transaction) {
        throw new TransactionNotFound();
    }
    return res.status(200).json({ status: true, data: transaction })
})

exports.updateTransaction = requestAsyncHandler(async (req, res) => {
    const transactionId = req.params.transactionId;
    if (!isValidObjectId(transactionId)) {
        throw new TransactionNotFound();
    }
    const transactionBody = await transactionDto.validateAsync(req.body);

    const updatedTransaction = await Transaction.findOneAndUpdate({ _id: req.params.transactionId, user: req.user._id }, transactionBody, { new: true });
    if (!updatedTransaction) {
        throw new TransactionNotFound();
    }
    return res.status(201).json({ status: true, message: `Transaction updated with id : ${transactionId}`, data: updatedTransaction })

})

exports.deleteTransaction = requestAsyncHandler(async (req, res) => {
    const transactionId = req.params.transactionId;
    if (!isValidObjectId(transactionId)) {
        throw new TransactionNotFound();
    }
    const deletedTransaction = await Transaction.findOneAndDelete({ user: req.user._id, _id: transactionId });
    if (!deletedTransaction) {
        throw new TransactionNotFound();
    };
    return res.status(200).json({ status: true, message: "Success" })
})


