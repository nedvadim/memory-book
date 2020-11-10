import React from 'react'
import { connect } from 'react-redux'
import { Alert } from '@material-ui/lab'
import { IconButton } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';

const Persons = (props) => {
    const postPerson = () => {

    };
    return (
        <>
            <h1 className="MainHeadersMB">Persons</h1>
            <Alert severity="warning" className="MainHeadersMB">You haven't any persons in your memory book yet</Alert>
            <IconButton color="primary" aria-label="Add person" component="span">
                <AddIcon onClick={postPerson} />
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
