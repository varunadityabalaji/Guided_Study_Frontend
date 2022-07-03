import "./graph.css";
import Box from "@mui/material/Box";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import React from "react";

function LineGraph() {
  const data = {
    labels: [1, 2, 3, 4, 6, 7],
    datasets: [{ label: "Graph over 7 days", data: [5, 6, 7, 8, 9, 10, 11] }],
    borderColor: "#084de0"
  };
  return (
    <div className="linegraph">
      <Box>
        <Line data={data} />
      </Box>
    </div>
  );
}

export default LineGraph;
