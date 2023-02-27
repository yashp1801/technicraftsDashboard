import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import "./SiteStatusData.css";

const SiteLiveReadings = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <div className="realtimereport__livereading">
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab label="Ambient" value="1" />
                <Tab label="Emission" value="2" />
                <Tab label="Effluent" value="3" />
              </TabList>
            </Box>
          </TabContext>
        </Box>
      </div>
    </div>
  );
};

export default SiteLiveReadings;
