import React from "react";
import { Route, Switch } from "react-router-dom";
import UserReport from "containers/UserReport";

export default function() {
    return (
        <div className="userRouter">
            <Switch>
                <Route path="/user/:id/report" component={UserReport} />
            </Switch>
        </div>
    );
}
