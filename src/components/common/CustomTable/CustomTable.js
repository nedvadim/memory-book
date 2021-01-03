import React, {useEffect, useState} from 'react'
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";
import TablePagination from '@material-ui/core/TablePagination';
import { Link } from "react-router-dom";
import classes from './CustomTable.module.css';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
const CustomTable = (props) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [currentDataset, setCurrentDataset] = useState([
    ...props.dataset
  ]);

  useEffect(() => {
    createNewCurrentDataset();
  },[page, rowsPerPage]);

  const createNewCurrentDataset = () => {
    const startIndex = rowsPerPage * page;
    const sliceQuantity = props.dataset.length < (startIndex + rowsPerPage) ? null : rowsPerPage;
    const sliceArgs = [startIndex, sliceQuantity].filter((el) => el !== null);
    setCurrentDataset([
      ...props.dataset.slice( ...sliceArgs )
    ])
  };
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  return (
    <>
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            { props.headers.map((h) => (<TableCell className={classes.HeaderColumn} key={h}>{h}</TableCell>))}
          </TableRow>
        </TableHead>
        <TableBody>
          {currentDataset && currentDataset.map((row) => (
            <TableRow key={row.name}>
              <TableCell>
                {row.name}
              </TableCell>
              <TableCell>{row.surname}</TableCell>
              <TableCell>{row.age}</TableCell>
              <TableCell>{row.hometown}</TableCell>
              <TableCell>
                <Link to={'/person/' + row.uniqFirebaseKey}>
                  <ExitToAppIcon className={classes.ViewIcon} />
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <TablePagination
      component="div"
      count={props.dataset.length}
      page={page}
      onChangePage={handleChangePage}
      rowsPerPage={rowsPerPage}
      onChangeRowsPerPage={handleChangeRowsPerPage}
    />
  </>
  )
};

export default CustomTable;
