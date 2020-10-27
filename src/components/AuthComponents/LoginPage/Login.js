import React, {useCallback} from 'react'
import app from "../../../firebase/base";
import {Link} from "react-router-dom";
 const Login = ({history}) => {
     const handleLogin = useCallback(async event => {
         event.preventDefault();
         const { email, password } = event.target.elements;
         console.log(email, password);
         try {
             await app.auth().signInWithEmailAndPassword(email.value, password.value);
             history.push('/');
         } catch (e) {
             alert(e);
         }
     }, [history]);

     return (
         <>
             <h2>Login</h2>
             <form onSubmit={handleLogin}>
                 <input name='email' type="email" placeholder='email'/>
                 <input name='password' type="password" placeholder='password'/>
                 <button type='submit'>login</button>
                 <p>Haven't an account yet?</p>
                 <Link to="/sign">
                     <p>Sign up</p>
                 </Link>
             </form>
         </>
     )
 };
 export default Login;
