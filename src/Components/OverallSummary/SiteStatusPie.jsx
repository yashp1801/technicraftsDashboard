import React from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import "./PieChart.css";
import {
  useGetStateWiseCountQuery,
  useGetTotalStationsQuery,
} from "../../Store/Slices/overallSummarySlice";
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#fb3b1e"];

const SiteStatusPie = () => {
  const responseInfo = useGetStateWiseCountQuery();
  const totalStationsRes = useGetTotalStationsQuery();

  const siteData = [
    { name: "Active", value: responseInfo.data.data.active },
    { name: "Inactive", value: responseInfo.data.data.inactive },
    { name: "Delayed", value: responseInfo.data.data.delayed },
  ];

  const stationData = [
    { name: "Active", value: totalStationsRes.data.data.effluent },
    { name: "Inactive", value: totalStationsRes.data.data.emission },
  ];

  return (
    <div>
      <div className="piechart__wrapper">
        <p>Statewise Status</p>
        <PieChart width={300} height={300} className="piechart">
          <Pie
            data={siteData}
            cx={140}
            cy={130}
            outerRadius={80}
            fill="#8884d8"
            label
            dataKey="value"
          >
            {siteData.map((entry, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </div>
      <div className="piechart__wrapper">
        <p>Total Stations</p>
        <PieChart width={300} height={300} className="piechart">
          <Pie
            data={stationData}
            cx={140}
            cy={130}
            outerRadius={80}
            fill="#8884d8"
            label
            dataKey="value"
          >
            {stationData.map((entry, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </div>
    </div>
  );
};

export default SiteStatusPie;
