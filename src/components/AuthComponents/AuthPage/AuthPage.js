import React, {useState} from 'react';
import { connect } from 'react-redux'
import { withRouter } from "react-router";
import { Link, Redirect } from 'react-router-dom';
import classes from "../AuthPage.module.css"
import { TextField, Card, CardContent, Typography, CardActions, Button, Grid } from '@material-ui/core'
import {auth} from "../../../store/actions";
const AuthPage = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSignUp = () => {
        props.onSignUp(email, password, true);
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
        isValidUser: !!state.auth.token
    }
};
const mapDispatchToProps = dispatch => {
    return {
        //onUserSignUp: (data = {}) => dispatch(userSignedUpInSystem(data)),
        onSignUp: ( email, password, isSignup ) => dispatch( auth( email, password, isSignup ) )
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AuthPage));
