/* This file exports the UserAppRouter component. It consists of the main
 * routes for the App. */

import React from "react";
import { Route } from "react-router-dom";
import UserDashboard from "containers/Dashboard";
import SideMenu from "components/SideMenu/index";
import CreateFile from "components/CreateFile/index";

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
                <Route path="/file/create" component={CreateFile} />
            </div>
        </div>
    );
}
