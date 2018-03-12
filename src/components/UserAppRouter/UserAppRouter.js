/* This file exports the UserAppRouter component. It consists of the main
 * routes for the App. */

import React from "react";
import { Route } from "react-router-dom";
import UserDashboard from "components/Dashboard";
import SideMenu from "components/SideMenu";

export default function UserAppRouter() {
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
            </div>
        </div>
    );
}
