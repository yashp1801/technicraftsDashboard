import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import "../../Pages/OverallSummary/overallsummary.css";

const columns = [
  { field: "name", headerName: "Site Name", width: 730 },
  { field: "today_exceedance", headerName: "Today Exceedance", width: 200 },
  
];



export default function SiteDataGrid() {
  const [siteData, setSiteData] = useState([]);

  useEffect(() => {
    const headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + "bdRqZw97UrvVWe1eeUgfebeGlaWzVF",
    };

    fetch("http://envicrafts.com:8080/sites", {
      method: "GET",
      headers: headers,
    })
      .then((response) => response.json())
      .then((response) => setSiteData(response))
      .catch((error) => console.error(error));
  }, []);

  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={siteData}
        columns={columns}
        // pageSize={5}
        rowsPerPageOptions={[100]}
        // disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
        className="overallsummary__sitesdatatable"
        loading={!siteData.length}
      />
    </Box>
  );
}
