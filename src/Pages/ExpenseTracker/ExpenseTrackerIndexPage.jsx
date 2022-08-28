import React from "react";
import ETGraphComponent from "../../Components/ETGraphComponent/ETGraphComponent";

import "./ExpenseTrackerIndexPageStyle.css";

function ExpenseTrackerIndexPage() {
  return (
    <div className="container etip-main-container">
      Expense tracker
      <div className="row"></div>
      <div className="row etip-graph-container">
        <ETGraphComponent />
      </div>
      <div className="toggler-main-layout">
        <div className="graph-btn"></div>
        <div className="detail-btn"></div>
      </div>
    </div>
  );
}

export default ExpenseTrackerIndexPage;
