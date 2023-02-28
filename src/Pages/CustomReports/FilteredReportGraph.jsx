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
    <LineChart
      width={800}
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
        <Line type="monotone" dataKey="BOD" stroke="#8884d8" dot={true} />
      )}
      {hasCODData && (
        <Line type="monotone" dataKey="COD" stroke="#82ca9d" dot={true} />
      )}
      {hasTSSData && (
        <Line type="monotone" dataKey="TSS" stroke="#ffc658" dot={true} />
      )}
      {hasPhData && (
        <Line type="monotone" dataKey="Ph" stroke="#8884d8" dot={true} />
      )}
      {hasFlowData && (
        <Line type="monotone" dataKey="Flow" stroke="#82ca9d" dot={true} />
      )}
    </LineChart>
  );
};

export default FilteredReportGraph;
