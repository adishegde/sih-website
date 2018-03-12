import React from "react";
import { Route } from "react-router-dom";
import UserDashboard from "components/Dashboard";

export default function UserAppRouter() {
    return (
        <div style={{ height: "100%", width: "100%" }}>
            <Route path="/" exact component={UserDashboard} />
        </div>
    );
}
