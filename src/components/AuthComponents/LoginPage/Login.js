import React, {useState} from 'react'
import { connect } from "react-redux";
import {Link, Redirect, withRouter} from "react-router-dom";
import {Button, Card, CardActions, CardContent, Grid, TextField, Typography} from "@material-ui/core";
import classes from "../AuthPage.module.css";
import '../../../App.css'
import { userLoggingInSystem } from "../../../store/actions/currentUser";
import {auth} from "../../../store/actions";

const Login = (props) => {
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");
     const handleLogin = () => {
         props.onSignUp(email, password, false);
     };
     const handleEmailChange = (e) => {
         setEmail(e.target.value);
     };
     const handlePasswordChange = (e) => {
         setPassword(e.target.value);
     };
    let authRedirect = null;
    if (props.isValidUser) {
        authRedirect = <Redirect to="/" />
    }
     return (
             <React.Fragment>
                 {authRedirect}
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
         isValidUser: !!state.auth.token
     }
 };
 const mapDispatchToProps = dispatch => {
     return {
         onSignUp: ( email, password, isSignup ) => dispatch( auth( email, password, isSignup ) )
     }
 };

 export default connect(mapStateToProps, mapDispatchToProps)(Login);
