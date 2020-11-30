import React from 'react'
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";
import { Link } from "react-router-dom";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
const CustomTable = (props) => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            { props.headers.map((h) => (<TableCell key={h}>{h}</TableCell>))}
          </TableRow>
        </TableHead>
        <TableBody>
          {props.dataset && props.dataset.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell>{row.surname}</TableCell>
              <TableCell>{row.age}</TableCell>
              <TableCell>{row.hometown}</TableCell>
              <TableCell>
                <Link to={'/person/' + row.uniqFirebaseKey}>
                  <ExitToAppIcon />
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
};

export default CustomTable;
