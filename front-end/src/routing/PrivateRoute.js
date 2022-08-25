import React from "react";
import {connect} from "react-redux";
import {Route, Redirect} from "react-router-dom";

const PrivateRoute = ({
                          component: Component,
                          auth_reducers: {isAuthenticated, loading},
                          ...rest
                      }) => (
    <Route
        {...rest}
        render={props =>
            loading ? (
                <>Loading</>
            ) : isAuthenticated ? (
                <Component {...props} />
            ) : (
                <Redirect to="/login"/>
            )
        }
    />
);

const mapStateToProps = state => {
    return {
        auth_reducers: state.auth_reducers
    }
}

export default connect(mapStateToProps, null)(PrivateRoute);