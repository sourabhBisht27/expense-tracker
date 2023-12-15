import instance from "./instance";

export const createNewTransaction = (transaction) => {
  return instance.post("/api/v1/transactions", transaction);
};

export const updateTransaction = (transaction, transactionId) => {
  return instance.patch(`/api/v1/transactions/${transactionId}`, transaction);
};

export const getTransaction = (transactionId) => {
  return instance.get(`/api/v1/transactions/${transactionId}`);
};
export const getAllTransactions = ({
  filter = "",
  skip = 0,
  startDate,
  endDate,
}) => {
  return instance.get(`/api/v1/transactions`, {
    params: {
      filter,
      skip,
      startDate,
      endDate,
    },
  });
};

export const getTransactionsDashboard = () => {
  return instance.get("/api/v1/transactions/dashboard");
};
