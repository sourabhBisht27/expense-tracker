const { Router } = require("express");
const { createTransaction, getAllTransactions, getTransaction, deleteTransaction, updateTransaction } = require("../controllers/transaction.controller");
const { paginate } = require("../handlers/paginate.handler");


const transactionRouter = Router();

transactionRouter.post("/", createTransaction);
transactionRouter.get("/", paginate, getAllTransactions);
transactionRouter.get("/:transactionId", getTransaction);
transactionRouter.delete("/:transactionId", deleteTransaction);
transactionRouter.patch("/:transactionId", updateTransaction);

module.exports = transactionRouter;