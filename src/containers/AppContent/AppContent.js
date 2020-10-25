import React from 'react'
import { connect } from 'react-redux'
import { openMainDrawer, closeMainDrawer } from '../../store/actions/index'
import Header from "../../components/Header/Header";
import WelcomePage from "../../components/WelcomePage/WelcomePage";
import MainDrawer from "../../components/MainDrawer/MainDrawer";
class AppContent extends React.Component {
    render () {
        return (
            <React.Fragment>
                <Header onMenuOpen={this.props.onDrawerOpen} />
                <MainDrawer
                    isOpen={this.props.isDrOpen}
                    onClose={this.props.onDrawerClose}/>
                <WelcomePage />
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
export default connect(mapStateToProps, mapDispatchToProps)(AppContent);
