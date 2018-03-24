import React from "react";
import { Route, Switch } from "react-router-dom";
import AddUser from "containers/Admin/AddUser";

export default function() {
    return (
        <div className="adminRouter">
            <Switch>
                <Route path="/admin/user/create" component={AddUser} />
            </Switch>
        </div>
    );
}
