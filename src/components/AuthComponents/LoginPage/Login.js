import React, {useState} from 'react'
import { connect } from "react-redux";
import app from "../../../firebase/base";
import {Link, withRouter} from "react-router-dom";
import {Button, Card, CardActions, CardContent, Grid, TextField, Typography} from "@material-ui/core";
import classes from "../AuthPage.module.css";
import '../../../App.css'
// import mapDispatchToProps from "react-redux/lib/connect/mapDispatchToProps";
// import mapStateToProps from "react-redux/lib/connect/mapStateToProps";
import { userLoggingInSystem } from "../../../store/actions/currentUser";

const Login = ({history}) => {
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");

     const handleLogin = async () => {
         try {
             await app.auth().signInWithEmailAndPassword(email, password);
             const user = app.auth().currentUser;
             console.log(user);
             history.push('/');
         } catch (e) {
             alert(e);
         }
     };
     const handleEmailChange = (e) => {
         setEmail(e.target.value);
     };
     const handlePasswordChange = (e) => {
         setPassword(e.target.value);
     };
     return (
             <React.Fragment>
                 <div className={classes.wrapper}>
                     <Card className={classes.AuthCard}>
                         <CardContent>
                             <Typography variant="h3" align="center">Login</Typography>
                             <Grid container>
                                 <Grid item xs={12}>
                                     <TextField
                                         label="Email"
                                         type="email"
                                         className={classes.AuthCardInput}
                                         value={email}
                                         onChange={handleEmailChange}/>
                                 </Grid>
                                 <Grid item xs={12}>
                                     <TextField
                                         label="Password"
                                         type="password"
                                         className={classes.AuthCardInput}
                                         value={password}
                                         onChange={handlePasswordChange} />
                                 </Grid>
                             </Grid>
                         </CardContent>
                         <CardActions>
                             <Button variant="contained" color="primary" onClick={handleLogin}>Login</Button>
                             <Typography>
                                 Have not an account?</Typography>
                             <Link to="/sign-up">
                                 <Typography>Sign up</Typography>
                             </Link>
                         </CardActions>
                     </Card>
                 </div>
             </React.Fragment>
     )
 };
 const mapStateToProps = state => {
    return {
        currentUser: state.currUser.currentUser
    }
 };
 const mapDispatchToProps = dispatch => {
   return {
       onUserLogging:  (id) => {dispatch(userLoggingInSystem(id))}
   }
 };

 export default connect(mapStateToProps, mapDispatchToProps)(Login);
