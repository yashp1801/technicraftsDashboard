import React from "react";
import {
  useGenerateReportDataQuery,
  useSiteNameQuery,
  useStationNameQuery,
  useParametersQuery,
  useAverageReportQuery,
} from "../../Store/Slices/generateReportSlice";
import "./CustomReport.css";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import { DatePicker } from "antd";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useEffect, useState } from "react";
import { FormHelperText } from "@mui/material";
import Loader from "../../scenes/global/Loader";
import InputLabel from "@mui/material/InputLabel";
import FilteredCustomReport from "./FilteredCustomReport";
import ReportBuildLoader from "../../scenes/global/ReportBuildLoader";
import FilteredReportGraph from "./FilteredReportGraph";

// DropDown Chip Code
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
const { RangePicker } = DatePicker;
const label = { inputProps: { "aria-label": "Checkbox demo" } };

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const GenerateReport = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSiteId, setSelectedSiteId] = useState();
  const [station, setStation] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [chipDropDown, setChipDropDown] = useState("");
  const [value, setValue] = useState([]); // Chip Value
  const [selectedDate, setSelectedDate] = useState();
  const [selectedTimeInterval, setSelectedTimeInterval] = useState();
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [averageReport, setAverageReport] = useState();
  const [loading, setLoading] = useState();

  const categoryData = useGenerateReportDataQuery();
  const siteNames = useSiteNameQuery();
  const stationName = useStationNameQuery(selectedSiteId);
  const parameters = useParametersQuery(selectedSiteId);

  const siteLabel = stationName.data?.map((item) => {
    return item.site_label;
  })[0];

  // Parameters DropDown Chip

  const theme = useTheme();

  // Handle Change for Dropdown Chip
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setChipDropDown(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
    setValue(event.target.value);
  };
  const url = `http://envicrafts.com:8080/data/average?from=${startDate}&to=${endDate}&site=${siteLabel}&station=${station}&interval=5${value
    .map((item) => `&parameters=${item}`)
    .join("")}`;
  // setting Selected Date in a State
  const onDateChange = (dates, dateStrings) => {
    setStartDate(dateStrings[0]);
    setEndDate(dateStrings[1]);
  };

  const getAverageReportData = () => {
    const headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + "bdRqZw97UrvVWe1eeUgfebeGlaWzVF",
    };
    setLoading(true);
    fetch(url, {
      method: "GET",
      headers: headers,
    })
      .then((response) => response.json())
      .then((response) => {
        setAverageReport(response);
        setLoading(false);
        setIsOpen(true);
      })

      .catch((error) => console.error(error));
  };

  if (siteNames.isLoading) return <Loader />;
  if (categoryData.isLoading) return <Loader />;
  if (stationName.isLoading) return <Loader />;
  if (parameters.isLoading) return <Loader />;
  if (loading === true) return <ReportBuildLoader />;

  // Url build for Getting final report

  // Calling built url
  console.log(averageReport);

  const filterSiteNames = siteNames.data.filter(
    (item) => item.category === selectedCategory
  );
  return (
    <div className="generatereport">
      <div className="generatereport__filter__wrapper">
        <FormControl className="generatereport__filter">
          <label>Select Category</label>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={selectedCategory}
            className="generatereport__filter"
            onChange={(e) => {
              setSelectedCategory(e.target.value);
            }}
          >
            {categoryData.isLoading ? (
              <p>Loading...</p>
            ) : (
              categoryData.data.map((item) => {
                return (
                  <MenuItem key={item.id} value={item.category}>
                    {item.category}
                  </MenuItem>
                );
              })
            )}
          </Select>
        </FormControl>
        {/* Select Site Name */}

        <FormControl fullWidth>
          <label>Select Site Name</label>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={selectedSiteId}
            onChange={(e) => setSelectedSiteId(e.target.value)}
          >
            {filterSiteNames.map((item) => {
              return <MenuItem value={item.id}>{item.name}</MenuItem>;
            })}
          </Select>
        </FormControl>
        {/* Station Name */}
        <FormControl fullWidth>
          <label>Select Station</label>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={station}
            onChange={(e) => setStation(e.target.value)}
          >
            {stationName.data?.map((item) => {
              return <MenuItem value={item.station}>{item.station}</MenuItem>;
            })}
          </Select>
        </FormControl>
        {/* Parameters  */}

        <FormControl fullWidth className="generatereport__filter">
          <label>Select Parameter</label>
          <Select
            placeholder="select"
            id="demo-multiple-chip"
            multiple
            className="generatereport__filter"
            value={value}
            onChange={handleChange}
            input={<OutlinedInput id="select-multiple-chip" />}
            renderValue={(selected) => (
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                {selected.map((value) => (
                  <Chip key={value} label={value} />
                ))}
              </Box>
            )}
            MenuProps={MenuProps}
          >
            {parameters.data?.map((item) => (
              <MenuItem
                key={item.id}
                value={item.parameter}
                // style={getStyles( personName, theme)}
              >
                {item.parameter}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <label>Select Time Interval</label>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={selectedTimeInterval}
            onChange={(e) => setSelectedTimeInterval(e.target.value)}
          >
            <MenuItem value={1}>1 Minute</MenuItem>
            <MenuItem value={5}>5 Minutes</MenuItem>
            <MenuItem value={15}>15 Minutes</MenuItem>
            <MenuItem value={30}>30 Minutes</MenuItem>
            <MenuItem value={45}>45 Minutes</MenuItem>
          </Select>
        </FormControl>
        <RangePicker
          className="generatereport__datePicker"
          onChange={onDateChange}
        />
        <button onClick={getAverageReportData}>Get Report</button>
      </div>
      {isOpen && (
        <>
          <FilteredCustomReport
            averageReport={averageReport}
            setIsOpen={setIsOpen}
            // siteName={siteName}
          />
          <FilteredReportGraph averageReport={averageReport} />
        </>
      )}
    </div>
  );
};

export default GenerateReport;
