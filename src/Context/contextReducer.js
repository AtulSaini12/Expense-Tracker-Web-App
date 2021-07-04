import React from "react";

export default function contextReducer(state, action) {
  let transactions;

  switch (action.type) {
    case "ADD_TRANSACTIONS":
      transactions = [action.payload, ...state];
      return transactions;

    case "DELETE_TRANSACTIONS":
      transactions = state.filter(
        (transaction) => transaction.id !== action.payload
      );
      return transactions;
    default:
      return state;
  }
}
