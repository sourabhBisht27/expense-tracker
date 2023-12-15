import React from "react";
import {
  categoriesSelectOptions,
  getCategoryIcon,
} from "../../helpers/CategoriesSelect";
import "./Transaction.css";
const Transaction = ({ transaction }) => {
  const renderIcon = () => {
    const Icon = getCategoryIcon(transaction.category);
    return <Icon size={30} />;
  };
  const renderPlusOrMinus = () => {
    return transaction.type === "expense" ? "-" : "+";
  };
  const categoryName =
    categoriesSelectOptions[transaction.type][transaction.category];
  return (
    <li key={transaction._id} className="transaction">
      <div>
        <div className="transac__catIcon">{renderIcon()}</div>
      </div>
      <div className="transac__title">
        <p>{transaction.title}</p>
        <p className="transac__description">{categoryName}</p>
      </div>
      <div className="transac__amount">
        <span className={transaction.type}>{renderPlusOrMinus()}</span>
        <p> $ {transaction.amount}</p>
      </div>
    </li>
  );
};

export default Transaction;
