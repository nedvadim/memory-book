import './App.css';
import AppContent from "./containers/MainContentWrapper/MainContentWrapper";
import React from 'react'
import { AuthProvider } from './auth/Auth'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import PrivateRoute from "./containers/PrivateRoute/PrivateRoute";
import SignUp from "./components/AuthComponents/SignUpPage/SignUp";
import SignIn from "./components/AuthComponents/SignInPage/SignIn";
import Login from "./components/AuthComponents/LoginPage/Login";

function App() {
  return (
      <AuthProvider>
          <Router>
              <Switch>
                  <PrivateRoute path="/" exact component={AppContent} />
                  <Route path="/sign-up" exact component={SignUp}/>
                  <Route path="/sign-in" exact component={SignIn}/>
                  <Route path="/login" exact component={Login}/>
              </Switch>
          </Router>
      </AuthProvider>
  );
}

export default App;
