import React from 'react'
import { connect } from 'react-redux'
import { openMainDrawer, closeMainDrawer } from '../../store/actions/index'
import Header from "../../components/Header/Header";
import WelcomePage from "../../components/Content/WelcomePage/WelcomePage";
import Persons from "../../components/Content/Persons/Persons";
import Events from "../../components/Content/Events/Events";
import MainDrawer from "../../components/MainDrawer/MainDrawer";
import ContentSection from "../ContentSection/ContentSection";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
// import { AuthProvider } from '../../auth/Auth'
import SignUp from "../../components/AuthComponents/SignUpPage/SignUp";
import SignIn from "../../components/AuthComponents/SignInPage/SignIn";
import Login from "../../components/AuthComponents/LoginPage/Login";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";


class MainContentWrapper extends React.Component {
    render () {
        return (
            <React.Fragment>
                    <Router>
                        <>
                            <Header onMenuOpen={this.props.onDrawerOpen} />
                            <MainDrawer
                                isOpen={this.props.isDrOpen}
                                onClose={this.props.onDrawerClose}/>
                        </>
                        <ContentSection>
                            <Switch>
                                <PrivateRoute path="/" exact component={WelcomePage} />
                                <Route path="/sign-up" exact component={SignUp}/>
                                <Route path="/sign-in" exact component={SignIn}/>
                                <Route path="/login" exact component={Login}/>
                                <PrivateRoute path="/persons" component={Persons} />
                                <PrivateRoute path="/events" component={Events} />
                            </Switch>
                        </ContentSection>
                    </Router>
            </React.Fragment>
        )
    }
};

const mapStateToProps = state => {
    return {
        isDrOpen: state.mainDrawer.isMainDrawerOpened
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onDrawerOpen: () => dispatch(openMainDrawer()),
        onDrawerClose: () => dispatch(closeMainDrawer())
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(MainContentWrapper);
