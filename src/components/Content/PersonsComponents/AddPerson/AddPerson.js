import React, { useState } from "react";
import {TextField, Button} from '@material-ui/core';
import classes from './AddPerson.module.css'
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import {postPerson} from "../../../../store/actions";
import { useHistory } from "react-router-dom";
import validTypes from "../../../../utils/validation/validationTypes";
import * as validation from  "../../../../utils/validation/validationUtility";
const AddPerson = (props) => {
  const history = useHistory();
  const [personForm, setState] = useState({
    name: '',
    surname: '',
    age: null,
    hometown: ''
  });
  const [validationData] = useState({
    name: [validTypes.NOT_EMPTY],
    surname: [validTypes.NOT_EMPTY]
  });
  const updateField = e => {
    setState({
      ...personForm,
      [e.target.name]: e.target.value
    });
  };
  const postPersonAndGoBack = async () => {
    // validate data
    validation.isValid(personForm, validationData);
    // try {
    //   await props.onPersonAdd(personForm);
    //   history.push("/persons");
    // } catch (e) {
    //   console.error(e)
    // }
  };
  return (
    <>
      <h2 className="MainHeadersMB">Add new person</h2>
      <form className={classes.FormWrapper}>
        <TextField className={classes.Input} name="name" label="Name" onChange={updateField}/>
        <TextField className={classes.Input} name="surname" label="Surname" onChange={updateField}/>
        <TextField className={classes.Input} name="age" label="Age" type="number" onChange={updateField}/>
        <TextField className={classes.Input} name="hometown" label="Hometown" onChange={updateField}/>
        <Button className="mt-1" variant="contained" color="primary" onClick={() => {postPersonAndGoBack(personForm)}}>Save</Button>
      </form>
    </>
  )
};

const mapDispatchToProps = dispatch => {
  return {
    onPersonAdd: (data) => {dispatch(postPerson(data))}
  }
};

export default withRouter(connect(null, mapDispatchToProps)(AddPerson))

