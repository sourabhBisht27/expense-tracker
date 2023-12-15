import React from "react";
import { useParams } from "react-router-dom";
import useTransaction from "../../hooks/useTransaction";
import MainSectionContainer from "../common/MainSectionContainer";
import FullLoader from "../common/Fullloader";
import "./SingleTransactionPage.css";
import {
  categoriesSelectOptions,
  getCategoryIcon,
} from "../../helpers/CategoriesSelect";
import FloatingAddButton from "../dashboard/FloatingAddButton";
const SingleTransactionPage = () => {
  const { transactionId = "" } = useParams();
  const { transaction, status } = useTransaction({ transactionId });
  const loading = status === "loading";
  const renderIcon = () => {
    const Icon = transaction ? getCategoryIcon(transaction.category) : null;
    return Icon ? <Icon size={40} /> : null;
  };
  const categoryName = transaction
    ? categoriesSelectOptions[transaction.type][transaction.category]
    : null;
  if (loading) {
    return <FullLoader />;
  }
  return (
    <MainSectionContainer>
      {transaction ? (
        <div className="single">
          {renderIcon()}
          <h2>{transaction.title}</h2>
          <p>{transaction.description}</p>
          <p>Type : {transaction.type}</p>
          {categoryName ? <p>Category : {categoryName}</p> : null}
          <p>
            Transaction Done on :{" "}
            {new Intl.DateTimeFormat(new Date(transaction.date)).format()}
          </p>
        </div>
      ) : (
        <h1>Transaction was removed</h1>
      )}
      <FloatingAddButton />
    </MainSectionContainer>
  );
};

export default SingleTransactionPage;
