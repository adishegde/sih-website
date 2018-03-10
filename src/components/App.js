import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import UserLogin from "containers/UserLogin";

export default function App() {
    return (
        <Router>
            <div id="app">
                <Route path="/login" component={UserLogin} />
            </div>
        </Router>
    );
}
