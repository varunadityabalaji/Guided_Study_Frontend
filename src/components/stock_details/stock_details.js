import "./stock_details.css";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import React from "react";

function StockDetails() {
  return (
    <div className="stock_details">
      <Box style={{ backgroundColor: "black"}}>
        <h2>Opening Price Today: </h2>
        <h2>Predicted Closing Price: </h2>
      </Box>
    </div>
  );
}

export default StockDetails;
