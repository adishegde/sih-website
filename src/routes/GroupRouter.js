import React from "react";
import { Route, Switch } from "react-router-dom";
import AuthorityOverGroups from "containers/AuthorityOverGroups";
import GroupMembers from "containers/GroupMembers";

export default function() {
    return (
        <div className="groupRouter">
            <Switch>
                <Route
                    path="/group/authority"
                    component={AuthorityOverGroups}
                />
                <Route path="/group/:id" component={GroupMembers} />
            </Switch>
        </div>
    );
}
