import React, { useState } from "react";
import {TextField, Button} from '@material-ui/core';
import classes from './AddPerson.module.css'
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import {logout, postPerson} from "../../../../store/actions";
import { useHistory } from "react-router-dom";
import { getValidationErrors } from "../../../../utils/validation/validationUtility";
import { NOT_NEGATIVE, NOT_EMPTY, EMAIL } from "../../../../utils/validation/validationTypes";

const AddPerson = (props) => {
  const history = useHistory();
  const [personForm, setState] = useState({
    name: '',
    surname: '',
    age: '',
    hometown: ''
  });
  const [personFormErrors, setPersonFormErrors] = useState({
    name: '',
    surname: '',
    age: '',
    hometown: ''
  });
  const updateField = e => {
    setState({
      ...personForm,
      [e.target.name]: e.target.value
    });
  };
  const postPersonAndGoBack = async () => {
    try {
      await props.onPersonAdd(personForm);
      history.push("/persons");
    } catch (e) {
      console.error(e)
    }
  };
  const handleSubmit = (data) => {
    const validationErrors = getValidationErrors(data, {
      name: [NOT_EMPTY],
      surname: [NOT_EMPTY],
      age: [NOT_NEGATIVE, NOT_EMPTY],
      hometown: []
    });
    if (doesFormHasErrors(validationErrors)) {
      setPersonFormErrors({
        ...validationErrors
      });
    } else {
      postPersonAndGoBack();
    }
  };
  const doesFormHasErrors = (errors) => {
    for (const key in errors) {
      if (errors[key].length) {
        return true;
      }
    }
    return false;
  };
  return (
    <>
      <h2 className="MainHeadersMB">Add new person</h2>
      <form className={classes.FormWrapper}>
        <TextField
          className={classes.Input}
          name="name"
          label="Name"
          error={!!personFormErrors.name.length}
          helperText={personFormErrors.name}
          onChange={updateField}/>
        <TextField
          className={classes.Input}
          name="surname"
          label="Surname"
          error={!!personFormErrors.surname.length}
          helperText={personFormErrors.surname}
          onChange={updateField}/>
        <TextField
          className={classes.Input}
          name="age"
          label="Age"
          type="number"
          error={!!personFormErrors.age.length}
          helperText={personFormErrors.age}
          onChange={updateField}/>
        <TextField
          className={classes.Input}
          name="hometown"
          label="Hometown"
          error={!!personFormErrors.hometown.length}
          helperText={personFormErrors.hometown}
          onChange={updateField}/>
        <Button className="mt-1" variant="contained" color="primary" onClick={() => {handleSubmit(personForm)}}>Save</Button>
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

