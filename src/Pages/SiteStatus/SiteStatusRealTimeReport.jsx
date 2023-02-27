import React from "react";
import "./SiteStatusRealTimeReport.css";
import { TfiReload } from "react-icons/tfi";

const SiteStatusRealTimeReport = (props) => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  console.log(props);
  return (
    <div className="realtimereport__container">
      <div className="realtimereport__data__wrapper">
        <div className="realtimereport__data__card">
          <p>Data Last Recived on</p>
          <span>21.12.2022</span>
        </div>
        <div className="realtimereport__data__card">
          <p>Configuration Updated on</p>
          <span>01.01.2023</span>
        </div>
        <div className="realtimereport__data__card">
          <p>Calibration at</p>
          <span>01.01.2023</span>
        </div>

        <button className="realtimereport__data__cardbtn">
          {" "}
          <TfiReload className="realtimereport__data__cardbtn__icon" /> Refresh
        </button>

        <div className="realtimereport__data__card">
          <p>AAQMS</p>
          <span>0</span>
        </div>
        <div className="realtimereport__data__card">
          <p>CEMS</p>
          <span>1</span>
        </div>
        <div className="realtimereport__data__card">
          <p>EQMS</p>
          <span>1</span>
        </div>
        <div className="realtimereport__data__card">
          <p>Total Stations</p>
          <span>2</span>
        </div>
      </div>
    </div>
  );
};

export default SiteStatusRealTimeReport;
