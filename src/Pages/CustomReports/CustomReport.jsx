import React from "react";
import { generateReportApi } from "../../Store/Slices/generateReportSlice";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import GenerateReport from "./GenerateReport";

const CustomReport = () => {
  return (
    <ApiProvider api={generateReportApi}>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni cumque
      at. Soluta!
      <GenerateReport />
    </ApiProvider>
  );
};

export default CustomReport;
