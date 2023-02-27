import React from "react";
import "./SiteSummary.css";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { siteSummaryApi } from "../../Store/Slices/siteSummarySlice";
// import SiteSummarySlider from "./SiteSummaryMain"
import SiteSummaryMain from "./SiteSummaryMain";

const SiteSummary = () => {
  return (
    <div className="sitesummary">
      sitesummary
      <ApiProvider api={siteSummaryApi}>
        <SiteSummaryMain />
      </ApiProvider>
    </div>
  );
};

export default SiteSummary;
