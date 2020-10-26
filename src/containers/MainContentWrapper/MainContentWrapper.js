import React from 'react'
import { connect } from 'react-redux'
import { openMainDrawer, closeMainDrawer } from '../../store/actions/index'
import Header from "../../components/Header/Header";
import WelcomePage from "../../components/Content/WelcomePage/WelcomePage";
import Persons from "../../components/Content/Persons/Persons";
import Events from "../../components/Content/Events/Events";
import MainDrawer from "../../components/MainDrawer/MainDrawer";
import ContentSection from "../ContentSection/ContentSection";
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
                            <Route path="/" exact>
                                <WelcomePage />
                            </Route>
                            <Route path="/persons">
                                <Persons />
                            </Route>
                            <Route path="/events">
                                <Events />
                            </Route>
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