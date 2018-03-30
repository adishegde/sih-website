import React from "react";
import { Route, Switch } from "react-router-dom";
import AuthorityOverGroups from "containers/AuthorityOverGroups";

export default function() {
    return (
        <div className="groupRouter">
            <Switch>
                <Route
                    path="/group/authority"
                    component={AuthorityOverGroups}
                />
            </Switch>
        </div>
    );
}
