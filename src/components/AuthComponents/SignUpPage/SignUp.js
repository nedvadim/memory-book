import React, {useState} from 'react';
import { withRouter } from "react-router";
import { Link } from 'react-router-dom';
import app from "../../../firebase/base"
import classes from "../AuthPage.module.css"
import { TextField, Card, CardContent, Typography, CardActions, Button, Grid } from '@material-ui/core'

const SignUp = ({history}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSignUp = async () => {
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
            <div className={classes.wrapper}>
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

export default withRouter(SignUp);
