import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
const columns = [
  { field: "srno", headerName: "Sr.No", width: 90 },
  {
    field: "parameterName",
    headerName: "Parameter Name",
    width: 180,
    editable: true,
  },
  {
    field: "currentValue",
    headerName: "Current Value",
    width: 180,
    editable: true,
  },
  {
    field: "treshold",
    headerName: "Threshold",
    width: 180,
    editable: true,
  },
  {
    field: "avgValue",
    headerName: "Average Value",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 180,
  },
  {
    field: "minValue",
    headerName: "Min Value",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 180,
  },
  {
    field: "maxValue",
    headerName: "Max Value",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 180,
  },
];

const rows = [
  {
    id: 1,
    srno: 1,
    parameterName: "ETP_BOD",
    currentValue: 35,
    treshold: 100,
    avgValue: 19.68,
    minValue: 9.47,
    maxValue: 26.1,
  },
  {
    id: 2,
    srno: 2,
    parameterName: "ETP_COD",
    currentValue: 42,
    treshold: 200,
    avgValue: 119.02,
    minValue: 115.18,
    maxValue: 121.95,
  },
  {
    id: 3,
    srno: 3,
    parameterName: "ETP_TSS",
    currentValue: 45,
    treshold: 100,
    avgValue: 15.2,
    minValue: 42.07,
    maxValue: 79.42,
  },
  {
    id: 4,
    srno: 4,
    parameterName: "ETP_pH",
    currentValue: 16,
    treshold: 8.5,
    avgValue: 6.68,
    minValue: 7.68,
    maxValue: 7.03,
  },
];

export default function DataGridDemo() {
  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
        components={{
          Toolbar: GridToolbar,
        }}
      />
    </Box>
  );
}
