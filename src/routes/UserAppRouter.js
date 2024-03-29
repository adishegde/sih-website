/* This container ensures that the right page component is rendered
 * depending on the state of authentication by using the RequireSignIn
 * component. If signed in it renders the correct route */

import React from "react";
import { connect } from "react-redux";
import { isAuthenticating, isSignedIn } from "selectors/index";
import { Dimmer, Loader } from "semantic-ui-react";
import { Redirect, Route } from "react-router-dom";
import SideMenu from "components/SideMenu/index";
import FileRouter from "routes/FileRouter";
import UserDashboard from "containers/Dashboard";
import AdminRouter from "routes/AdminRouter";
import UserRouter from "routes/UserRouter";
import SectionRouter from "routes/SectionRouter";

function RouteIfSignedIn({ isAuthenticating, isSignedIn }) {
    if (isAuthenticating) {
        // Display loading bar if authenticating
        return (
            <Dimmer active>
                <Loader size="huge"> Configuring App. Please Wait. </Loader>
            </Dimmer>
        );
    } else if (isSignedIn) {
        // Render router if signed in
        return (
            <div style={{ height: "100%", width: "100%" }}>
                <SideMenu />
                <div
                    id="main"
                    style={{
                        marginLeft: "250px",
                        minWidth: "550px",
                        padding: "1em"
                    }}
                >
                    <Route path="/" exact component={UserDashboard} />
                    <Route path="/file" component={FileRouter} />
                    <Route path="/admin" component={AdminRouter} />
                    <Route path="/user" component={UserRouter} />
                    <Route path="/section" component={SectionRouter} />
                </div>
            </div>
        );
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
