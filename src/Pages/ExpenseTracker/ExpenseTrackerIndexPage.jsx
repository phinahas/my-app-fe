import React from "react";
import ETGraphComponent from "../../Components/ETGraphComponent/ETGraphComponent";
import ETTableComponent from "../../Components/ETTableComponent/ETTableComponent";

import "./ExpenseTrackerIndexPageStyle.css";

function ExpenseTrackerIndexPage() {
  return (
    <div className="container etip-main-container">
      
      <div className="row"></div>
      <div className="row etip-graph-container">
        <ETGraphComponent />
      </div>
      <div className="toggler-main-layout">
        <div className="graph-btn"></div>
        <div className="detail-btn"></div>
      </div>
      <button className="btn btn-primary">Add</button>
      
      <ETTableComponent/>
    </div>
  );
}

export default ExpenseTrackerIndexPage;
