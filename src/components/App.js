import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserLogin from "containers/UserLogin";
import UserAppRouter from "routes/UserAppRouter";

export default function App() {
    return (
        <Router>
            <div id="app" style={{ height: "100%", width: "100%" }}>
                <Switch>
                    <Route path="/login" component={UserLogin} />
                    <Route path="/" component={UserAppRouter} />
                </Switch>
            </div>
        </Router>
    );
}
