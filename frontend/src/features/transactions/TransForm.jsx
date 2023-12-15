import React from "react";
import AmountField from "./AmountField";
import "./TransForm.css";
import CategorySelect from "./CategorySelect";
import TypeOfTransSelect from "./TypeOfTransSelect";
import Button from "./Button";
import {
  createNewTransaction,
  updateTransaction,
} from "../../api/transactions.api";
import { toast } from "react-toastify";
import { isAxiosError } from "axios";
const TransForm = ({ transaction, onChangeTransaction }) => {
  const amount = transaction.amount;
  const onSubmitTransForm = async (e) => {
    e.preventDefault();
    const transactionDto = {
      ...transaction,
      amount: parseFloat(parseFloat(transaction.amount).toFixed(2)),
    };
    try {
      const { data } = transaction._id
        ? await updateTransaction(transactionDto, transaction._id)
        : await createNewTransaction(transactionDto);
      toast.success(data.message);
    } catch (error) {
      toast.error(
        isAxiosError(error) ? error.response.data.message : "Some error occured"
      );
    }
  };
  return (
    <form onSubmit={onSubmitTransForm} className="trans__form">
      <input
        type="date"
        name="date"
        id="date"
        onChange={onChangeTransaction}
        value={transaction.date}
      />
      <AmountField amount={amount} onChangeTransaction={onChangeTransaction} />
      <input
        type="text"
        name="title"
        value={transaction.title}
        required
        onChange={onChangeTransaction}
        id="title"
        minLength={3}
        maxLength={50}
        placeholder="Title"
        className="input__control"
      />
      <textarea
        value={transaction.description}
        minLength={3}
        maxLength={250}
        onChange={onChangeTransaction}
        name="description"
        id="description"
        placeholder="Describe where and when the transaction took place"
      />
      <CategorySelect
        type={transaction.type}
        category={transaction.category}
        onChangeTransaction={onChangeTransaction}
      />
      <TypeOfTransSelect
        type={transaction.type}
        onChangeTransaction={onChangeTransaction}
      />
      <Button />
    </form>
  );
};

export default TransForm;
