import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const FilteredCustomReport = ({ averageReport }) => {
  const classes = useStyles();
  const hasBODData = averageReport.hasOwnProperty("BOD");
  const hasCODData = averageReport.hasOwnProperty("COD");
  const hasTSSData = averageReport.hasOwnProperty("TSS");
  const hasPhData = averageReport.hasOwnProperty("pH");
  const hasFlowData = averageReport.hasOwnProperty("flow");

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <TableCell>Date/Time</TableCell>
            {hasCODData && <TableCell>COD Value</TableCell>}
            {hasBODData && <TableCell>BOD Value</TableCell>}
            {hasTSSData && <TableCell>TSS Value</TableCell>}
            {hasPhData && <TableCell>Ph Value</TableCell>}
            {hasFlowData && <TableCell>Flow Value</TableCell>}
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.entries(averageReport.COD).map(([datetime, codValue]) => (
            <TableRow key={datetime}>
              <TableCell component="th" scope="row">
                {datetime}
              </TableCell>
              {hasBODData && (
                <TableCell>{averageReport.BOD[datetime] || "-"}</TableCell>
              )}
              {hasCODData && (
                <TableCell>{averageReport.COD[datetime]}</TableCell>
              )}
              {hasTSSData && (
                <TableCell>{averageReport.TSS[datetime]}</TableCell>
              )}
              {hasPhData && <TableCell>{averageReport.pH[datetime]}</TableCell>}
              {hasFlowData && (
                <TableCell>{averageReport.flow[datetime]}</TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default FilteredCustomReport;
