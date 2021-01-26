import React, { useState } from "react";
import {TextField, Button} from '@material-ui/core';
import classes from './AddPerson.module.css'
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import { postPerson } from "../../../../store/actions";
import { useHistory } from "react-router-dom";
import { getValidationErrors } from "../../../../utils/validation/validationUtility";
import { capitalize } from "../../../../utils/helperFunctions";
import { NOT_NEGATIVE, NOT_EMPTY, EMAIL } from "../../../../utils/validation/validationTypes";
import CustomSnackbar from "../../../common/Snackbar/CustomSnackbar";
import firebase from "../../../../firebase/base"
const AddPerson = (props) => {
  const history = useHistory();
  const [personForm, setState] = useState({
    name: '',
    surname: '',
    age: '',
    hometown: ''
  });
  const [avatarURL, setAvatarURL] = useState(null);
  const [personFormErrors, setPersonFormErrors] = useState({
    name: '',
    surname: '',
    age: '',
    hometown: ''
  });
  const [isToastrOpen, setIsToastrOpen] = useState(false);
  const [toastrHideTime] = useState(1700);
  const [toastrColor, setToastrColor] = useState('success');
  const [toastrMessage, setToastrMessage] = useState('SUCCESS');
  const updateField = e => {
    setState({
      ...personForm,
      [e.target.name]: e.target.value
    });
  };
  const postPersonAndGoBack = async () => {
    try {
      await props.onPersonAdd(personForm);
      setToastrMessage('Person added!');
      setToastrColor('success');
      setIsToastrOpen(true);
      setTimeout(() => {
        history.push("/persons");
      }, toastrHideTime)
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
  const onFileChange = async (e) => {
    const file = e.target.files[0];
    console.log(file);
    const storageRef = firebase.storage().ref();
    console.log(storageRef);
    const fileRef = storageRef.child(file.name);
    try {
      await fileRef.put(file);
      setAvatarURL(await fileRef.getDownloadURL());
      console.log(avatarURL);
    } catch (e) {
      setToastrMessage('File upload error');
      setToastrColor('danger');
      setIsToastrOpen(true);
    };
  };
  const clearErrors = (fieldName) => {
    setPersonFormErrors({
      ...personFormErrors,
      [fieldName]: ''
    });
  };
  return (
    <>
      <h2 className="MainHeadersMB">Add new person</h2>
      <form className={classes.FormWrapper}>
        {
          Object.keys(personForm).map(fieldName => (
            <TextField
              className={classes.Input}
              name={fieldName}
              label={capitalize(fieldName)}
              error={!!personFormErrors[fieldName].length}
              helperText={personFormErrors[fieldName]}
              onChange={updateField}
              onFocus={() => { clearErrors(fieldName) }}/>
            )
          )
        }
        <input type="file" onChange={onFileChange}/>
        <Button className="mt-1" variant="contained" color="primary" onClick={() => {handleSubmit(personForm)}}>Save</Button>
        <CustomSnackbar
          isOpen={isToastrOpen}
          hideDuration={toastrHideTime}
          toastrColor={toastrColor}
          toastrMessage={toastrMessage}/>
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

