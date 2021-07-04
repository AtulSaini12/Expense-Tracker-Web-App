import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import ExpenseTrackerProvider from "./Context/Context";

import App from "./components/App";

ReactDOM.render(
  <React.StrictMode>
    <ExpenseTrackerProvider>
      <App />
    </ExpenseTrackerProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
