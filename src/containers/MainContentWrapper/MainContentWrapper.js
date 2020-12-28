import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from "react-router";
import { openMainDrawer, closeMainDrawer } from '../../store/actions/index'
import Header from "../../components/Header/Header";
import MainDrawer from "../../components/MainDrawer/MainDrawer";
import ContentSection from "../ContentSection/ContentSection";

class MainContentWrapper extends React.Component {
    render () {
        return (
            <React.Fragment>
                <Header onMenuOpen={this.props.onDrawerOpen} />
                <MainDrawer
                  isOpen={this.props.isDrOpen}
                  onClose={this.props.onDrawerClose}/>
                <ContentSection>
                  {this.props.children}
                </ContentSection>
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
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainContentWrapper));
