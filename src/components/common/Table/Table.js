import React, {useEffect} from 'react'
import {Paper, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";

const Table = (props) => {
  useEffect(() => {
    console.log(props.dataset);
  }, []);
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Surname</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Hometown</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.dataset.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell>{row.surname}</TableCell>
              <TableCell>{row.age}</TableCell>
              <TableCell>{row.hometown}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
};

export default Table;
