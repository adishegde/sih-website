import React from "react";
import { Route, Switch } from "react-router-dom";
import FilePage from "containers/FilePage/index";
import CreateFile from "containers/CreateFile";
import FileSearch from "containers/FileSearch";

export default function() {
    return (
        <div className="fileRouter">
            <Switch>
                <Route path="/file/create" component={CreateFile} />
                <Route path="/file/:id" component={FilePage} />
                <Route path="/file" exact component={FileSearch} />
            </Switch>
        </div>
    );
}
