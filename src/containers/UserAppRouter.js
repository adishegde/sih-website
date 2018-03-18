/* This container ensures that the right page component is rendered
 * depending on the state of authentication by using the RequireSignIn
 * component. If signed in it renders the UserAppRouter component */

import React from "react";
import { connect } from "react-redux";
import { isAuthenticating, isSignedIn } from "selectors/index";
import { Dimmer, Loader } from "semantic-ui-react";
import { Redirect } from "react-router-dom";
import UserAppRouter from "components/UserAppRouter";

function RouteIfSignedIn({ isAuthenticating, isSignedIn }) {
    if (isAuthenticating) {
        // Display loading bar if authenticating
        return (
            <Dimmer active>
                <Loader size="huge"> Configuring App. Please Wait. </Loader>
            </Dimmer>
        );
    } else if (isSignedIn) {
        return <UserAppRouter />;
    } else {
        // Redirect to login page if not signed in
        return <Redirect to="/login" />;
    }
}

function mapStateToProps(state) {
    return {
        isAuthenticating: isAuthenticating(state),
        isSignedIn: isSignedIn(state)
    };
}

export default connect(mapStateToProps)(RouteIfSignedIn);
