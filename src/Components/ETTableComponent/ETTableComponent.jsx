import React from "react";

import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";

import "./ETTableComponentStyle.css";

function ETTableComponent() {
  return (
    <div className="col-md-12 mt-4 table-main-layout">
      <div className="table-content-div">
        <h6>10-10-2022</h6>
        <h4>500</h4>
        <RemoveRedEyeOutlinedIcon />
      </div>
    </div>
  );
}

export default ETTableComponent;
