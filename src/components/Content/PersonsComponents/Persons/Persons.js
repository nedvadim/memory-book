import React from 'react'
import { Alert } from '@material-ui/lab'
import { IconButton } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import { Link } from 'react-router-dom';

const Persons = (props) => {
    return (
        <>
            <h1 className="MainHeadersMB">Persons</h1>
            <Alert severity="warning" className="MainHeadersMB">You haven't any persons in your memory book yet</Alert>
            <Link to="/add-person">
              <IconButton color="primary" aria-label="Add person" component="span">
                <AddIcon />
              </IconButton>
            </Link>
        </>
    )
};
export default Persons;
