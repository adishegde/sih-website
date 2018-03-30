import React from "react";
import { Route, Switch } from "react-router-dom";
import AddUser from "containers/Admin/AddUser";
import AddSection from "containers/Admin/AddSection";

export default function() {
    return (
        <div className="adminRouter">
            <Switch>
                <Route path="/admin/user/create" component={AddUser} />
                <Route path="/admin/group/create" component={AddSection} />
            </Switch>
        </div>
    );
}
