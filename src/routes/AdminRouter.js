import React from "react";
import { Route, Switch } from "react-router-dom";
import AddUser from "containers/Admin/AddUser";
import AddGroup from "containers/Admin/AddGroup";

export default function() {
    return (
        <div className="adminRouter">
            <Switch>
                <Route path="/admin/user/create" component={AddUser} />
                <Route path="/admin/group/create" component={AddGroup} />
            </Switch>
        </div>
    );
}
