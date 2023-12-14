import MainSectionContainer from "../common/MainSectionContainer";
import DateFilter from "./DateFilter";

export default function TransactionsPage() {
    return <MainSectionContainer>
        <h2>Transactions</h2>
        <DateFilter />
    </MainSectionContainer>
}