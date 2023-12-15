import useTransactionForm from "../../hooks/useTransactionForm";
import MainSectionContainer from "../common/MainSectionContainer";
import TransForm from "./TransForm";

export default function TransactionFormPage() {
  const { transaction, onChangeTransaction } = useTransactionForm();

  return (
    <MainSectionContainer>
      <h1>{transaction._id ? "Transaction" : "New Transaction"}</h1>
      <TransForm
        transaction={transaction}
        onChangeTransaction={onChangeTransaction}
      />
    </MainSectionContainer>
  );
}
