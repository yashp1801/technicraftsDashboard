import React, { useState, useEffect } from "react";
import "./SiteStatus.css";
import { BiSearchAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import * as XLSX from "xlsx";
import { SiMicrosoftexcel } from "react-icons/si";
import Tooltip from "@mui/material/Tooltip";

const SiteStatus = () => {
  // States
  const [globalFilter, setGlobalFilter] = useState("");
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  // Data fetching
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setFilteredData(data);
      });
  }, []);

  // Search
  const handleSearch = (e) => {
    const searchValue = e.target.value.toLowerCase();
    setGlobalFilter(searchValue);
    setFilteredData(
      data.filter(
        (item) =>
          item.name.toLowerCase().includes(searchValue) ||
          item.email.toLowerCase().includes(searchValue)
      )
    );
  };

  // Site Status data navigation
  const navigate = useNavigate();
  const navigateToSiteStatusData = (id) => {
    navigate("/user/sitestatusdata", { state: { id: id } });
  };

  // Exporting to Excel
  const exportToExcel = () => {
    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
    XLSX.writeFile(wb, "data.xlsx");
  };

  return (
    <div className="sitestatus">
      <div className="global__search">
        <div className="">
          <h1 className="sitestatus__title">Live Industry Status</h1>
        </div>
        <div className="global__search__wrapper">
          <Tooltip title="Export to Excel">
            <button
              onClick={exportToExcel}
              className="global__search__exportbtn"
            >
              <SiMicrosoftexcel className="global__search__exportbtn__icon" />
            </button>
          </Tooltip>
          <BiSearchAlt className="global__search__icon" />
          <input
            type="text"
            placeholder="Search by Category , Exceedance Status , etc"
            onChange={handleSearch}
            className="global__search__input"
          />
        </div>
      </div>
      <div className="sitestatus__table__wrapper">
        <table className="sitestatus__table">
          <thead className="sitestatus__table__header">
            <tr>
              <th>Sr.No</th>
              <th>Action</th>
              <th>Site Name</th>
              <th>Address</th>
              <th>Connected Parameters</th>
              <th>Connected Parameters</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, index) => (
              <tr key={index}>
                <td className="centered__content__rows">{item.id}</td>
                <td className="centered__content__rows">
                  <button onClick={(e) => navigateToSiteStatusData(item.id)}>
                    View Details
                  </button>
                </td>
                <td>{item.name}</td>
                <td>{item.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SiteStatus;
