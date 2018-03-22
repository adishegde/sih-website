import React from "react";
import { Route, Switch } from "react-router-dom";
import FilePage from "containers/FilePage";
import CreateFile from "containers/CreateFile";

export default function() {
    return (
        <div className="fileRouter">
            <Switch>
                <Route path="/file/create" component={CreateFile} />
                <Route path="/file/:id" component={FilePage} />
            </Switch>
        </div>
    );
}
