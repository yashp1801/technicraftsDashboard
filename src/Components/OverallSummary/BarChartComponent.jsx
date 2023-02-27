// import React from "react";
// import { useGetStateWiseCountQuery } from "../../Store/Slices/overallSummarySlice";

// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
// } from "recharts";

// const MyBarChart = () => {
//   const responseInfo = useGetStateWiseCountQuery();
//   const siteData = [
//     { name: "Active", pv: responseInfo.data.data.active },
//     { name: "Inactive", pv: responseInfo.data.data.inactive },
//     { name: "Delayed", pv: responseInfo.data.data.delayed },
//   ];

//   return (
//     <BarChart
//       width={900}
//       height={340}
//       data={siteData}
//       margin={{
//         top: 5,
//         right: 30,
//         left: 20,
//         bottom: 5,
//       }}
//     >
//       <CartesianGrid strokeDasharray="3 3" />
//       <XAxis dataKey="name" />
//       <YAxis />
//       <Tooltip />
//       <Legend />
//       {siteData.map((item) => {
//         return 
//         (
//           <>
//            <Bar dataKey={item.name} fill="orange" />;
//            <Bar dataKey={item.name} fill="red" />;
//            <Bar dataKey={item.name} fill="blue" />;
//           </>
//         )
//       })}
//     </BarChart>
//   );
// };

// export default MyBarChart;
