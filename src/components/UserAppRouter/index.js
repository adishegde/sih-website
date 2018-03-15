/* This component enusres that the UserAppRouter component cannot be rendered
 * until the user is signed in. If authenticating it displays a loading page */

import React from "react";
import { Dimmer, Loader } from "semantic-ui-react";
import { Redirect } from "react-router";
import UserAppRouter from "./UserAppRouter";

export default function RequireSignIn({ isAuthenticating, isSignedIn }) {
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
