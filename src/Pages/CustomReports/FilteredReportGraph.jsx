import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import "./CustomReport.css";

const FilteredReportGraph = ({ averageReport }) => {
  const hasBODData = averageReport.hasOwnProperty("BOD");
  const hasCODData = averageReport.hasOwnProperty("COD");
  const hasTSSData = averageReport.hasOwnProperty("TSS");
  const hasPhData = averageReport.hasOwnProperty("pH");
  const hasFlowData = averageReport.hasOwnProperty("flow");

  const data = Object.entries(averageReport.COD).map(([datetime, codValue]) => {
    const entry = { datetime };
    if (hasBODData) entry["BOD"] = averageReport.BOD[datetime] || null;
    if (hasCODData) entry["COD"] = codValue;
    if (hasTSSData) entry["TSS"] = averageReport.TSS[datetime] || null;
    if (hasPhData) entry["Ph"] = averageReport.pH[datetime] || null;
    if (hasFlowData) entry["Flow"] = averageReport.flow[datetime] || null;
    return entry;
  });

  return (
    <div className="filteredReport__graph">
      <h2 className="filteredreport__typeheader">Report Graph View</h2>
      <LineChart
        width={1000}
        height={400}
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <XAxis dataKey="datetime" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        {hasBODData && (
          <Line type="monotone" dataKey="BOD" stroke="#FFFF00" dot={true} />
        )}
        {hasCODData && (
          <Line type="monotone" dataKey="COD" stroke="#FF0000" dot={true} /> // red
        )}
        {hasTSSData && (
          <Line type="monotone" dataKey="TSS" stroke="#0000FF" dot={true} /> // blue
        )}
        {hasPhData && (
          <Line type="monotone" dataKey="Ph" stroke="#008000" dot={true} />
        )}
        {hasFlowData && (
          <Line type="monotone" dataKey="Flow" stroke="#82ca9d" dot={true} />
        )}
      </LineChart>
    </div>
  );
};

export default FilteredReportGraph;
