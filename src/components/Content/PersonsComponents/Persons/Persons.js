import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Alert } from '@material-ui/lab';
import { IconButton } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router";
import {getAllPersonsList} from "../../../../store/actions";

const Persons = (props) => {
  useEffect(() => {
    console.log('effect');
    props.fetchPersons();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
const mapStateToProps = state => {
  return {
    persons: state.persons.persons
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPersons: () => {dispatch(getAllPersonsList())}
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Persons));
