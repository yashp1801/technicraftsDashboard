import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import "./CameraStatus.css";

const columns = [
  { field: "id", headerName: "Sr.No", width: 10 },
  { field: "action", headerName: "Action", width: 70 },
  {
    field: "industryName",
    headerName: "Industry Name",
    // Class Name for Header
    width: 300,
  },
  {
    field: "city",
    headerName: "City",
    width: 110,
    editable: true,
  },
  {
    field: "district",
    headerName: "District",
    width: 110,
  },
  {
    field: "industryCategory",
    headerName: "Industry Category",
    sortable: false,
    width: 160,
  },
  {
    field: "monitoringCategory",
    headerName: "Monitory Category",
    sortable: false,
    width: 160,
  },
  {
    field: "parameter",
    headerName: "Parameter",
    sortable: false,
    width: 160,
  },
  {
    field: "camerastatus",
    headerName: "Camera Status",
    sortable: true,
    width: 160,
  },
];

const rows = [
  {
    id: 1,
    city: "City",
    industryName: "name 1",
    district: "district",
    industryCategory: "Industry Category",
    monitoringCategory: "Monitory Category",
    parameter: "Parameter",
    camerastatus: "Camera Status",
  },
  {
    id: 2,
    city: "City",
    industryName: "name 1",
    district: "district",
    industryCategory: "Industry Category",
    monitoringCategory: "Monitory Category",
    parameter: "Parameter",
    camerastatus: "Camera Status",
  },
  {
    id: 3,
    city: "City",
    industryName: "name 1",
    district: "district",
    industryCategory: "Industry Category",
    monitoringCategory: "Monitory Category",
    parameter: "Parameter",
    camerastatus: "Camera Status",
  },
  {
    id: 4,
    city: "City",
    industryName: "name 1",
    district: "district",
    industryCategory: "Industry Category",
    monitoringCategory: "Monitory Category",
    parameter: "Parameter",
    camerastatus: "Camera Status",
  },
  {
    id: 5,
    city: "City",
    industryName: "name 1",
    district: "district",
    industryCategory: "Industry Category",
    monitoringCategory: "Monitory Category",
    parameter: "Parameter",
    camerastatus: "Camera Status",
  },
  {
    id: 6,
    city: "City",
    industryName: "name 1",
    district: "district",
    industryCategory: "Industry Category",
    monitoringCategory: "Monitory Category",
    parameter: "Parameter",
    camerastatus: "Camera Status",
  },
  {
    id: 7,
    city: "City",
    industryName: "name 1",
    district: "district",
    industryCategory: "Industry Category",
    monitoringCategory: "Monitory Category",
    parameter: "Parameter",
    camerastatus: "Camera Status",
  },
  {
    id: 8,
    city: "City",
    industryName: "name 1",
    district: "district",
    industryCategory: "Industry Category",
    monitoringCategory: "Monitory Category",
    parameter: "Parameter",
    camerastatus: "Camera Status",
  },
  {
    id: 9,
    city: "City",
    industryName: "name 1",
    district: "district",
    industryCategory: "Industry Category",
    monitoringCategory: "Monitory Category",
    parameter: "Parameter",
    camerastatus: "Camera Status",
  },
  {
    id: 10,
    city: "City",
    industryName: "name 1",
    district: "district",
    industryCategory: "Industry Category",
    monitoringCategory: "Monitory Category",
    parameter: "Parameter",
    camerastatus: "active",
  },
];

export default function CameraStatus() {
  return (
    <div className="camerastatus__wrapper">
      <h1>Camera Status :</h1>
      <Box className="camerastatus">
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          experimentalFeatures={{ newEditingApi: true }}
          components={{
            Toolbar: GridToolbar,
          }}
        />
      </Box>
    </div>
  );
}
