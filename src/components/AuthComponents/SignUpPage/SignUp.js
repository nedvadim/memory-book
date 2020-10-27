import React, { useCallback } from 'react';
import { withRouter } from "react-router";
import { Link } from 'react-router-dom';
import app from "../../../firebase/base"
const SignUp = ({history}) => {
    const handleSignUp = useCallback(async event => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        try {
            await app.auth().createUserWithEmailAndPassword(email.value, password.value);
            history.push('/');
        } catch (e) {
            alert(e);
        }
    }, [history]);
    return (
        <>
            <h2>Sign up</h2>
            <form onSubmit={handleSignUp}>
                <input name='email' type="email" placeholder='email'/>
                <input name='password' type="password" placeholder='password'/>
                <button type='submit'>login</button>
            </form>
            <p>Already have an account?</p>
            <Link to="/login">
                <button>Log in</button>
            </Link>
        </>
    )
 };

export default withRouter(SignUp);
