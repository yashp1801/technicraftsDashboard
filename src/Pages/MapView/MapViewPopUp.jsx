import * as React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import "./MapViewPopUp.css";
import { CgCloseO } from "react-icons/cg";
import { HiLocationMarker } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import SiteStatusDataTable from "../../Components/SiteStatusDataTable";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "firstName",
    headerName: "First name",
    width: 150,
    editable: true,
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 150,
    editable: true,
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

export default function MapViewPopUp(props) {
  const closePopup = () => {
    props.setIsOpen(false);
  };

  return (
    <div className="mapviewpopup">
      <AnimatePresence>
        <motion.div
          className="mapviewpopup__content__wrapper"
          initial={{ y: "-50%" }}
          animate={{ y: "0%" }}
          exit={{ y: "50%" }}
        >
          <button>
            {" "}
            <CgCloseO onClick={closePopup} className="mapviewpopup__closebtn" />
          </button>
          <div className="mapviewpopup__content__header">
            <div>
              <h1>BASF India PVT LTD </h1>

              <div className="mapviewpopup__content__header__location">
                <HiLocationMarker />
                <span>Navi Mumbai , Maharashtra</span>
              </div>
            </div>
            {/* <Link to="/user/sitestatusdata" style={{ color: "#141414" }}>
              View Details
            </Link> */}
          </div>
          <div className="mapviewpopup__data__wrapper">
            <SiteStatusDataTable />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
