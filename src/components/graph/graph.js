import "./graph.css";
import Box from "@mui/material/Box";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import React from "react";
import { useState } from "react";
import Plot from 'react-plotly.js';

function LineGraph(props) {
  console.log(props.data)
  // const data = {
  //   labels: [1, 2, 3, 4, 6, 7],
  //   datasets: [{ label: "Graph over 7 days", data: props.data }],
  //   borderColor: "#084de0"
  // };

  return (
    <div className="linegraph">
      <Box>
        {/* <Line data={data} /> */}
        <Plot
        data={[
          {
            x: [1, 2, 3,4,5,6,7],
            y: props.data,
            type: 'scatter',
            mode: 'lines+markers',
            marker: {color: 'red'},

          },
        ]}
        layout={{autosize: true, title: 'Stock Price Over the past 7 days'}}
        useResizeHandler
      />
      </Box>
    </div>
  );
}

export default LineGraph;
