import React from "react";
import {Grid, TextField} from '@material-ui/core';
import classes from "../../../AuthComponents/AuthPage.module.css";
const AddPerson = (props) => {
  return (
    <>
      <h2>Add new person</h2>
      <TextField label="Name" />
    </>
  )
};
export default AddPerson
// <TextField
// label="Email"
// type="email"
// className={classes.AuthCardInput}
// value={email}
// onChange={handleEmailChange}/>

