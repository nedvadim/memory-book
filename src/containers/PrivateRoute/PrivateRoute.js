import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
    return (
        <Route {...rest}
               render={routeProps =>
                   rest.isAuthenticated ? (<RouteComponent {...routeProps} />) : (<Redirect to={'/sign-up'} />)
               }
        />
    )
};
const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    };
};
export default connect(mapStateToProps, null)(PrivateRoute);
