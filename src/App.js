import './App.css';
import React from 'react'
import {
    Switch,
    withRouter,
    Route
} from "react-router-dom";
import { connect } from 'react-redux';
import PrivateRoute from "./containers/PrivateRoute/PrivateRoute";
import SignUp from "./components/AuthComponents/AuthPage/AuthPage";
import Login from "./components/AuthComponents/LoginPage/Login";
import {authCheckState} from "./store/actions";
import WelcomePage from "./components/Content/WelcomePage/WelcomePage";
import Persons from "./components/Content/PersonsComponents/Persons/Persons";
import Events from "./components/Content/Events/Events";
import ViewPerson from "./components/Content/PersonsComponents/ViewPerson/ViewPerson";
import AddPerson from "./components/Content/PersonsComponents/AddPerson/AddPerson";
import MainContentWrapper from "./containers/MainContentWrapper/MainContentWrapper";

class App extends React.Component {
    componentDidMount() {
        this.props.onSignInTry();
      console.log('in app');
    }

    render() {
        return (
                <Switch>
                    <Route path="/login" exact component={Login}/>
                    <Route path="/sign-up" exact component={SignUp}/>
                    <MainContentWrapper>
                          <PrivateRoute exact path="/" component={WelcomePage} />
                          <PrivateRoute path="/persons" component={Persons} />
                          <PrivateRoute path="/person/:id" component={ViewPerson} />
                          <PrivateRoute path="/events" component={Events} />
                          <PrivateRoute path="/add-person" component={AddPerson} />
                    </MainContentWrapper>
                </Switch>
        );
    }
}
const mapDispatchToProps = dispatch => {
  return {
    onSignInTry: () => dispatch( authCheckState() )
  }
};
export default withRouter(connect(null, mapDispatchToProps)(App));
