import React from "react";
import ChartBar from "./ChartBar";

import "./Chart.css";

const Chart = function (props) {
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar />
      ))}
    </div>
  );
};

export default Chart;
