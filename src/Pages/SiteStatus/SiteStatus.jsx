import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";

// Site Status data navigation

export default function SimpleTable() {
  const navigate = useNavigate();
  const navigateToSiteStatusData = (id) => {
    navigate("/user/sitestatusdata", { state: { id: id } });
  };

  const columns = [
    { field: "id", headerName: "Id", width: 10 },
    {
      field: "action",
      headerName: "Action",
      width: 100,
      renderCell: (params) => (
        <button onClick={(e) => navigateToSiteStatusData(params.row.id)}>
          View Details
        </button>
      ),
    },
    { field: "siteName", headerName: "Site Name", width: 250 },
    { field: "address", headerName: "Address", width: 250 },
    {
      field: "connectedparameters",
      headerName: "Connected Parameters",
      width: 200,
    },
    { field: "industryType", headerName: "Industry Type", width: 150 },
    { field: "sitestatus", headerName: "Site Status", width: 100 },
    { field: "exceedance", headerName: "Exceedance", width: 150 },
  ];
  const rows = [
    {
      id: 1,
      siteName: "BASF India PVT LTD",
      address: "Turbhe , Navi Mumbai , Maharashtra",
      connectedparameters: "COD , BOD , TSS , ph , FLOW",
      industryType: "Checimal",
      sitestatus: "Active",
      exceedance: "No Exceedance",
    },
  ];

  return (
    <div className="sitestatus">
      <h1>User Site Status</h1>
      <div
        style={{ height: 200, width: "100%" }}
        className="sitestatus__tablewrapper"
      >
        <DataGrid rows={rows} columns={columns} pageSize={1}  />
      </div>
    </div>
  );
}
