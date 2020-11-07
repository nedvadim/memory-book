import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
// import {AuthContext} from "../../auth/Auth";
const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
    // const {currentUser} = useContext(AuthContext);
    console.log(rest.isAuthenticated);
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
