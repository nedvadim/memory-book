import React from 'react'
import { connect } from 'react-redux'
import { Alert } from '@material-ui/lab'
import { IconButton } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import { addNewPerson, getPersons } from "../../../api";

const Persons = (props) => {
    const postPerson = () => {
        addNewPerson({name: 'jake', age: 33}).then(res => {
            console.log(res)
        }).catch((e) => {
            console.log(e);
        })
    };
  const getPersonsList = () => {
    // eslint-disable-next-line no-unused-vars
    getPersons().then(res => {
      console.log(res)
    }).catch((e) => {
      console.log(e);
    })
  };
    return (
        <>
            <h1 className="MainHeadersMB">Persons</h1>
            <Alert severity="warning" className="MainHeadersMB">You haven't any persons in your memory book yet</Alert>
            <IconButton color="primary" aria-label="Add person" component="span">
                <AddIcon onClick={getPersonsList} />
            </IconButton>
        </>
    )
};
const mapStateToProps = state => {
    return {
        userId: state.auth.userId,
        token: state.auth.token
    }
};
export default connect(mapStateToProps, null)(Persons);
