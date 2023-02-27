import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useGetSiteSummaryDataQuery , useGetCurrentSiteDataQuery } from "../../Store/Slices/siteSummarySlice";
import Loader from "../../scenes/global/Loader";
import SiteSummaryDataMain from "./SiteSummaryDataMain";

const SiteSummaryMain = () => {
  const [siteId, setSiteId] = useState("");
  const res = useGetSiteSummaryDataQuery();

  if (res.isLoading) return <Loader />;
  return (
    <div className="sitesummarymain__dropdown">
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Select Site Name</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={siteId}
          label="Select Site Name"
          onChange={(e) => setSiteId(e.target.value)}
        >
          {res.data.map((item) => {
            return <MenuItem value={item.id}>{item.name}</MenuItem>;
          })}
        </Select>
        {siteId && <SiteSummaryDataMain />}
      </FormControl>
    </div>
  );
};

export default SiteSummaryMain;
