import React from "react";

import {
  Legend,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

import "./ETGraphComponentStyle.css";

function ETGraphComponent() {
  const data = [
    { name: "Porotta", value: 100 },
    { name: "Dosa", value: 50 },
    { name: "Masala Dosa", value: 100 },
    { name: "Pouri", value: 200 },
    { name: "Panner", value: 190 },
    { name: "chamanthi", value: 10 },
    { name: "Pourid", value: 10 },
    { name: "ouri", value: 102 },
  ];
  return (
    <div className="col-md-12 graph-container">
      
      <BarChart
        // style={{ backgroundColor: "red" }}
        width={1000}
        height={300}
        data={data}
     
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
        barSize={20}
      >
        <XAxis dataKey="name" scale="point" style={{fill: '#F5F2E7'}} padding={{ left: 10, right: 10 }} />
        <YAxis style={{fill: '#F5F2E7'}} />
        <Tooltip />
        <Legend />
        <CartesianGrid strokeDasharray="3 3" />
        <Bar dataKey="value" fill="#2666CF" background={{ fill: "#F5F2E7" }} />
      </BarChart>
    </div>
  );
}

export default ETGraphComponent;
