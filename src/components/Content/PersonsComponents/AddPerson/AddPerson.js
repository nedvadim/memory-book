import React, { useState } from "react";
import {TextField, Button} from '@material-ui/core';
import classes from './AddPerson.module.css'
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import {postPerson} from "../../../../store/actions";
import { useHistory } from "react-router-dom";
const AddPerson = (props) => {
  const history = useHistory();
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
  const postPersonAndGoBack = async (person) => {
    try {
      await props.onPersonAdd(null);
      history.push("/persons");
    } catch (e) {
      console.error(e)
    }
  };
  return (
    <>
      <h2 className="MainHeadersMB">Add new person</h2>
      <form className={classes.FormWrapper}>
        <TextField className={classes.Input} name="name" label="Name" onChange={updateField}/>
        <TextField className={classes.Input} name="surname" label="Surname" onChange={updateField}/>
        <TextField className={classes.Input} name="age" label="Age" type="number" onChange={updateField}/>
        <TextField className={classes.Input} name="hometown" label="Hometown" onChange={updateField}/>
        <Button variant="contained" className={classes.Button} color="primary" onClick={() => {postPersonAndGoBack(personForm)}}>Save</Button>
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

