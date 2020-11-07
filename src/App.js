import './App.css';
import AppContent from "./containers/MainContentWrapper/MainContentWrapper";
import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { connect } from 'react-redux';
import PrivateRoute from "./containers/PrivateRoute/PrivateRoute";
import SignUp from "./components/AuthComponents/AuthPage/AuthPage";
import Login from "./components/AuthComponents/LoginPage/Login";
import { authCheckState } from "./store/actions";

class App extends React.Component {
    componentDidMount() {
        this.props.onSignInTry();
    }

    render() {
        return (
            <Router>
                <Switch>
                    <PrivateRoute path="/" exact component={AppContent} />
                    <Route path="/login" exact component={Login}/>
                    <Route path="/sign-up" exact component={SignUp}/>
                </Switch>
            </Router>
        );
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onSignInTry: () => dispatch( authCheckState() )
    };
};
export default connect(null, mapDispatchToProps)(App);
