import React, { useState } from "react";
import {TextField, Button} from '@material-ui/core';
import classes from './AddPerson.module.css'
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import {postPerson} from "../../../../store/actions";
const AddPerson = (props) => {
  const [personForm, setState] = useState({
    name: '',
    surname: '',
    age: null,
    hometown: ''
  });
  const updateField = e => {
    setState({
      ...personForm,
      [e.target.name]: e.target.value
    });
  };
  return (
    <>
      <h2 className="MainHeadersMB">Add new person</h2>
      <form className={classes.FormWrapper}>
        <TextField className={classes.Input} name="name" label="Name" onChange={updateField}/>
        <TextField className={classes.Input} name="surname" label="Surname" onChange={updateField}/>
        <TextField className={classes.Input} name="age" label="Age" type="number" onChange={updateField}/>
        <TextField className={classes.Input} name="hometown" label="Hometown" onChange={updateField}/>
        <Button variant="contained" color="primary" onClick={() => {props.onPersonAdd(personForm)}}>Save</Button>
      </form>
    </>
  )
};

const mapStateToProps = () => {
  return {

  }
};

const mapDispatchToProps = dispatch => {
  return {
    onPersonAdd: (data) => {dispatch(postPerson(data))}
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddPerson))

