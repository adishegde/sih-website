import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { generateRequireSignInWrapper } from "redux-token-auth";
import UserLogin from "containers/UserLogin";
import UserAppRouter from "components/UserAppRouter";

// If not signed in and trying to access protected page then redirect to login
const requireSignIn = generateRequireSignInWrapper({
    redirectPathIfNotSignedIn: "/login"
});

export default function App() {
    return (
        <Router>
            <div id="app" style={{ height: "100%", width: "100%" }}>
                <Switch>
                    <Route path="/login" component={UserLogin} />
                    <Route path="/" component={requireSignIn(UserAppRouter)} />
                </Switch>
            </div>
        </Router>
    );
}
