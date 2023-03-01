import * as React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import "./SiteStatusData.css";
import SiteStatusDataTable from "../../Components/SiteStatusDataTable";
import { BiCurrentLocation } from "react-icons/bi";
import { TbBuildingFactory2 } from "react-icons/tb";
import SiteStatusRealTimeReport from "./SiteStatusRealTimeReport";
import SiteLiveReadings from "./SiteLiveReadings";

export default function SiteStatusData() {
  const [value, setValue] = React.useState("1");
  const [data, setData] = useState([]);
  const location = useLocation();
  const userId = location.state.id;

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="sitestatusdata">
      <div className="sitestatusdata__header__content">
        <h1 className="sitestatusdata__headingtitle">BASF India PVT LTD</h1>
        <div className="sitestatusdatalocation__type">
          <BiCurrentLocation className="sitestatusdatalocation__type__icon" />
          <p>Navi Mumbai , Maharashtra</p>
          <TbBuildingFactory2 className="sitestatusdatalocation__type__icon" />
          <p>Chemical</p>
        </div>
      </div>
      <div className="sitestatusdata__container">
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab label="Record view" value="1" />
                <Tab label="Real Time Report" value="2" />
                <Tab label="Live Readings" value="3" />
              </TabList>
            </Box>
            {/* Tab 1 */}
            <TabPanel value="1">
              <SiteStatusDataTable data={data} />
            </TabPanel>
            {/* Tab 2 */}

            <TabPanel value="2">
              <SiteStatusRealTimeReport data={data} />
            </TabPanel>
            {/* Tab 3 */}

            <TabPanel value="3">
              <SiteLiveReadings data={data} />
            </TabPanel>
          </TabContext>
        </Box>
      </div>
    </div>
  );
}
