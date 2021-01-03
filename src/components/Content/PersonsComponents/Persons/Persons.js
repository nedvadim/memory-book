import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import { Alert } from '@material-ui/lab';
import { IconButton } from "@material-ui/core";
import CircularProgress from '@material-ui/core/CircularProgress';
import AddIcon from '@material-ui/icons/Add';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router";
import {getAllPersonsList} from "../../../../store/actions";
import CustomTable from "../../../common/CustomTable/CustomTable";
const Persons = (props) => {
  const [personsHeaders] = useState(['Name', 'Surname', 'Age', 'HomeTown', 'View']);
  useEffect(() => {
    props.fetchPersons();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const pageContent = props.persons.length
    ?
    <CustomTable dataset={ props.persons } headers={ personsHeaders }> </CustomTable>
    : <Alert severity="warning" className="MainHeadersMB">You haven't any persons in your memory book yet</Alert>
    return (
        <>
          <h1 className="MainHeadersMB">Persons</h1>
          <Link to="/add-person">
            <IconButton color="primary" aria-label="Add person" component="span">
              <AddIcon />
            </IconButton>
          </Link>
            {props.personsLoading ? <CircularProgress /> : (pageContent)}
        </>
    )
};
const mapStateToProps = state => {
  return {
    persons: state.persons.persons,
    personsLoading: state.persons.personsLoading
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPersons: () => {dispatch(getAllPersonsList())}
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Persons));
