import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { ImFilter } from "react-icons/im";
import { TbBuildingFactory } from "react-icons/tb";
import "./SiteStatus.css";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        height: 224,
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: "divider" }}
      >
        <Tab label="Emission" />
        <Tab label="Effluent" />
        <Tab label="Ambient" />
      </Tabs>
      <TabPanel value={value} index={0}>
        <div className="realtimereport__livereading">
          <div className="realtimereport__livereading__card">
            <div className="realtimereport__livereading__card__icon">
              <TbBuildingFactory />
            </div>
            <div className="realtimereport__livereading__card__content">
              <p>Nm3</p>
              <p>ETP - Dust</p>
              <p>
                15 MisAvg : <span>105.7 Nm3</span>
              </p>
              <p>Limit : 0 - 100 Nm3 Range 0 - 100</p>
            </div>
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className="realtimereport__livereading">
          <div className="realtimereport__livereading__card">
            <div className="realtimereport__livereading__card__icon">
              <ImFilter />
            </div>
            <div className="realtimereport__livereading__card__content">
              <p>mg/l</p>
              <p>ETP - BOD</p>
              <p>
                15 MisAvg : <span>14.67 mg/l</span>
              </p>
              <p>Limit : 0 - 100 mg/l Range 0 - 1000</p>
            </div>
          </div>
          <div className="realtimereport__livereading__card">
            <div className="realtimereport__livereading__card__icon">
              <ImFilter />
            </div>
            <div className="realtimereport__livereading__card__content">
              <p>mg/l</p>
              <p>ETP - COD</p>
              <p>
                15 MisAvg : <span>12.67 mg/l</span>
              </p>
              <p>Limit : 0 - 250 mg/l Range 0 - 1000</p>
            </div>
          </div>
          <div className="realtimereport__livereading__card">
            <div className="realtimereport__livereading__card__icon">
              <ImFilter />
            </div>
            <div className="realtimereport__livereading__card__content">
              <p>mg/l</p>
              <p>ETP - TSS</p>
              <p>
                15 MisAvg : <span>19.90 mg/l</span>
              </p>
              <p>Limit : 0 - 100 mg/l Range 0 - 1000</p>
            </div>
          </div>
          <div className="realtimereport__livereading__card">
            <div className="realtimereport__livereading__card__icon">
              <ImFilter />
            </div>
            <div className="realtimereport__livereading__card__content">
              <p>pH</p>
              <p>ETP - pH</p>
              <p>
                15 MisAvg : <span>6.67 pH</span>
              </p>
              <p>Limit : 5.5 - 8.5 pH Range 0-14</p>
            </div>
          </div>
          <div className="realtimereport__livereading__card">
            <div className="realtimereport__livereading__card__icon">
              <ImFilter />
            </div>
            <div className="realtimereport__livereading__card__content">
              <p>m3/hr</p>
              <p>ETP - Flow</p>
              <p>
                15 MisAvg : <span>14.67 m3/hr</span>
              </p>
              <p>Limit : 0 - 100 mg/l Range 0 - 1000</p>
            </div>
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </Box>
  );
}
