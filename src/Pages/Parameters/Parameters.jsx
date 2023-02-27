import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import "../../Pages/OverallSummary/overallsummary.css";

const columns = [
    { field: "site_name", headerName: "Site Name", width: 400 },
  { field: "site_label", headerName: "Site Label", width: 150 },
  { field: "station", headerName: "Station", width: 200 },
  { field: "parameter", headerName: "Parameters", width: 100 },
  { field: "unit", headerName: "Unit", width: 200 },
  { field: "normal_max", headerName: "Limit", width: 200 },
];

export default function Parameters() {
  const [siteData, setSiteData] = useState([]);

  useEffect(() => {
    const headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + "bdRqZw97UrvVWe1eeUgfebeGlaWzVF",
    };

    fetch("http://envicrafts.com:8080/parameters", {
      method: "GET",
      headers: headers,
    })
      .then((response) => response.json())
      .then((response) => setSiteData(response))
      .catch((error) => console.error(error));
  }, []);

  return (

    <div style={{backgroundColor : "rgba(65, 105, 225, 0.075)" , padding : "5rem 2rem 2rem 2rem" , height : "100%" , overflow : "hidden"}}>
      <h1>Parameters Summary</h1>
      <DataGrid
        rows={siteData}
        columns={columns}
        // pageSize={5}
        rowsPerPageOptions={[100]}
        // disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
        className="overallsummary__sitesdatatable"
        loading={!siteData.length}
        components={{
          Toolbar: GridToolbar,
        }}
      />
    </div>
  );
}
