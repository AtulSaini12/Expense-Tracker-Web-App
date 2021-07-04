import React, { useReducer, createContext } from "react";

import contextReducer from "./contextReducer";

const initialState = [
  {
    id: 1,
    type: "Income",
    category: "Salary",
    amount: "220",
    date: new Date(),
  },
];

export const ExpenseTrackerContext = createContext(initialState);

export default function ExpenseTrackerProvider({ children }) {
  const [transactions, dispatch] = useReducer(contextReducer, initialState);

  const deleteTransaction = (id) => {
    dispatch({ type: "DELETE_TRANSACTION", payload: id });
  };

  const addTransaction = (transaction) => {
    dispatch({ type: "ADD_TRANSACTION", payload: transaction });
  };

  return (
    <ExpenseTrackerContext.Provider
      value={{
        deleteTransaction,
        addTransaction,
        transactions,
      }}
    >
      {children}
    </ExpenseTrackerContext.Provider>
  );
}