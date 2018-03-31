import React from "react";
import { Route, Switch } from "react-router-dom";
import AuthorityOverGroups from "containers/AuthorityOverGroups";
import GroupMembers from "containers/GroupMembers";
import Sessions from "containers/Sections";

export default function() {
    return (
        <div className="groupRouter">
            <Switch>
                <Route path="/section" exact component={Sessions} />
                <Route path="/section/head" component={AuthorityOverGroups} />
                <Route path="/section/:id" component={GroupMembers} />
            </Switch>
        </div>
    );
}
