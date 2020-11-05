import React, {useState} from 'react';
import { connect } from 'react-redux'
import { withRouter } from "react-router";
import { Link, Redirect } from 'react-router-dom';
import app from "../../../firebase/base"
import classes from "../AuthPage.module.css"
import { TextField, Card, CardContent, Typography, CardActions, Button, Grid } from '@material-ui/core'
import { postUserToDataBase } from "../../../api";
import { v4 as uuidv4 } from 'uuid'
import {auth, userSignedUpInSystem} from "../../../store/actions";
const SignUp = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSignUp = () => {
        console.log('start sign up');
        props.onSignUp(email, password, true);

            // app.auth().createUserWithEmailAndPassword(email, password)
            //     .then(res => {
            //         const userData = {id: uuidv4(), email};
            //         postUserToDataBase({...userData})
            //             .then(res => {
            //                 console.log(res);
            //                 userData.firebaseId = res.data.name;
            //                 props.onUserSignUp(userData);
            //                 props.history.push('/');
            //             }).catch(e => {
            //                 alert(e);
            //                 console.error(e)
            //             });
            // })
            //     .catch(e => {
            //         alert(e);
            //     console.error(e)
            // });
    };
    const handleID = () => {
        console.log(uuidv4());
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
        <>
            <div className={classes.wrapper}>
                {authRedirect}
                <Card className={classes.AuthCard}>
                    <CardContent>
                        <Typography variant="h3" align="center"> Sign up</Typography>
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
                        <Button variant="contained" color="primary" onClick={handleSignUp}>Sign up</Button>
                        <Button variant="contained" color="default" onClick={handleID}>ID</Button>
                        <Typography>
                            Already has an account?</Typography>
                            <Link to="/login">
                                <Typography>Log in</Typography>
                            </Link>
                    </CardActions>
                </Card>
            </div>
        </>
    )
 };

const mapStateToProps = state => {
    return {
        currentUser: state.currUser.currentUser,
        isValidUser: !!state.auth.token
    }
};

const mapDispatchToProps = dispatch => {
    return {
        //onUserSignUp: (data = {}) => dispatch(userSignedUpInSystem(data)),
        onSignUp: ( email, password, isSignup ) => dispatch( auth( email, password, isSignup ) )
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SignUp));
