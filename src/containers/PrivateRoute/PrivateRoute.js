import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import {AuthContext} from "../../auth/Auth";
import app from "../../firebase/base";
const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
    console.log(app);
    const {currentUser} = useContext(AuthContext);
    return (
        <Route {...rest}
               render={routeProps =>
                   !!currentUser ? (<RouteComponent {...routeProps} />) : (<Redirect to={'/login'} />)
               }
        />
    )
};

export default PrivateRoute;
