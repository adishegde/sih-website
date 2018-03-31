import React from "react";
import { Route, Switch } from "react-router-dom";
import AddUser from "containers/Admin/AddUser";
import AddSection from "containers/Admin/AddSection";
import AddDepartment from "containers/Admin/AddDepartment";

export default function() {
    return (
        <div className="adminRouter">
            <Switch>
                <Route path="/admin/user/create" component={AddUser} />
                <Route path="/admin/section/create" component={AddSection} />
                <Route
                    path="/admin/department/create"
                    component={AddDepartment}
                />
            </Switch>
        </div>
    );
}
