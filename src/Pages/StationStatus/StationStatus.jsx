import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import "../../Pages/OverallSummary/overallsummary.css";

const columns = [
  { field: "monitoring_type", headerName: "Monitoring Type", width: 150 },
  { field: "site_name", headerName: "Site Name", width: 400 },
  { field: "make", headerName: "Made By", width: 200 },
  { field: "model", headerName: "Model", width: 100 },
  { field: "configured_date", headerName: "Configure Date", width: 200 },
  { field: "expiry_date", headerName: "Expiry Date", width: 200 },
];

export default function StationStatus() {
  const [siteData, setSiteData] = useState([]);

  useEffect(() => {
    const headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + "bdRqZw97UrvVWe1eeUgfebeGlaWzVF",
    };

    fetch("http://envicrafts.com:8080/stations", {
      method: "GET",
      headers: headers,
    })
      .then((response) => response.json())
      .then((response) => setSiteData(response))
      .catch((error) => console.error(error));
  }, []);

  return (

    <div style={{backgroundColor : "rgba(65, 105, 225, 0.075)" , padding : "5rem 2rem 2rem 2rem" , height : "100%" , overflow : "hidden"}}>
      <h1>Station Status</h1>
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
