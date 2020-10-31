import React, {useCallback, useState} from 'react';
import { withRouter } from "react-router";
import { Link } from 'react-router-dom';
import app from "../../../firebase/base"
import classes from "./SignUp.module.css"
import { TextField, Card, CardContent, Typography, CardActions, Button, Grid } from '@material-ui/core'

const SignUp = ({history}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSignUp = async () => {
        console.log(email, password);
        try {
            await app.auth().createUserWithEmailAndPassword(email, password);
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
        <>
            <Card className={classes.SignUpCard}>
                <CardContent>
                    <Typography variant="h3" align="center" pb="15rem"> Sign up</Typography>
                    <Grid container>
                        <Grid item xs={12}>
                            <TextField
                                label="Email"
                                type="email"
                                className={classes.SignUpCardInput}
                                value={email}
                                onChange={handleEmailChange}/>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Password"
                                type="password"
                                className={classes.SignUpCardInput}
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
            {/*<h2>Sign up</h2>*/}
            {/*<form onSubmit={handleSignUp}>*/}
            {/*    <input name='email' type="email" placeholder='email'/>*/}
            {/*    <input name='password' type="password" placeholder='password'/>*/}
            {/*    <button type='submit'>Sign Up</button>*/}
            {/*</form>*/}
            {/*<p>Already have an account?</p>*/}
            {/*<Link to="/login">*/}
            {/*    <p>Log in</p>*/}
            {/*</Link>*/}
        </>
    )
 };

export default withRouter(SignUp);
