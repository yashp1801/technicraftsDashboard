import React from "react";

const SiteSummaryDataHeader = () => {
  return (
    <div className="sitesummarydataheader">
      <div className="sitesummary__data__maincard__wrapper">
        <div className="sitesummary__data__maincard ">
          <p>Monitoring stations</p>
          <h1>1</h1>
        </div>
        <div className="sitesummary__data__maincard">
          <p>Parameters Monitored</p>
          <h1>5</h1>
        </div>
        <div className="sitesummary__data__maincard ">
          <p>Total Parameters Monitored</p>
          <h1>5</h1>
        </div>
        <div className="sitesummary__data__maincard">
          <p>Exceeding Parameters</p>
          <h1>-</h1>
        </div>
        <div className="sitesummary__data__maincard">
          <p>Total Exccedences</p>
          <h1>-</h1>
        </div>
        <div className="sitesummary__data__maincard">
          <p></p>
          <h1>-</h1>
        </div>
      </div>
      <div className="sitesummary__data__maincard__siteDetails">
        <p>City : Mumbai</p>
        <p>State : Maharahtra</p>
        <p>Category : Checimal</p>
        <p>Congigured Date : 2022-11-07</p>
        <p>Status : Active</p>
      </div>
    </div>
  );
};

export default SiteSummaryDataHeader;
