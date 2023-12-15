import { useEffect, useState } from "react";
import { getAllTransactions } from "../api/transactions.api";
import { getSevenDaysBeforeDate } from "../helpers/DatesHelper";
const usePaginatedTransaction = () => {
  const [skip, setSkip] = useState(0);
  const [searchForm, setSearchForm] = useState({
    filter: "",
    startDate: getSevenDaysBeforeDate(new Date()).toISOString().split("T")[0],
    endDate: new Date().toISOString().split("T")[0],
  });
  const [transactions, setTransactions] = useState([]);
  const [status, setStatus] = useState("loading");
  const [showLoadMore, setShowLoadMore] = useState(true);
  useEffect(() => {
    transactionsFetch("normal")();
  }, [skip]);
  const transactionsFetch = (state) => {
    return async () => {
      setStatus("loading");
      try {
        if (state === "searched") {
          setTransactions([]);
        }
        const { data } = await getAllTransactions({ ...searchForm, skip });
        setShowLoadMore(
          data.data.transactions.length + transactions.length < data.data.count
        );
        setTransactions([...transactions, ...data.data.transactions]);
        setStatus("success");
      } catch (error) {
        setStatus("failure");
      }
    };
  };
  const onIncrementSkip = () => {
    setSkip((prev) => prev + 10);
  };
  return {
    skip,
    onIncrementSkip,
    status,
    transactions,
    showLoadMore,
    searchForm,
    onClickSearch: transactionsFetch("searched"),
  };
};

export default usePaginatedTransaction;
