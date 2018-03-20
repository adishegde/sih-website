/* This file exports the component FileSearch after passing appropriate props*/

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import FileSearch from "components/FileSearch";
import { getFileList } from "selectors/index";
import { getFilesWithPriority, getFilesByName } from "selectors/files";
import querystring from "querystring";

function mapStateToProps(state, { history, location }) {
    // Get value from query string
    let { name, priority } = querystring.parse(location.search.substr(1));

    // Validate priority
    if (priority !== "low" && priority !== "high" && priority !== "medium")
        priority = "all";

    if (!name) name = "";

    let files = getFileList(state);
    // Get matches for search
    files = getFilesByName(getFilesWithPriority(files, priority), name);

    return {
        name,
        priority,
        files,
        onChange: (event, { value, name: property }) => {
            let newName = name;
            let newPriority = priority;

            switch (property) {
                case "name":
                    newName = value;
                    break;

                case "priority":
                    newPriority = value;
                    break;

                default:
                    break;
            }

            let search = { priority: newPriority };
            if (newName) search.name = newName;
            search = querystring.stringify(search);

            history.push({
                pathname: location.pathname,
                search
            });
        }
    };
}

export default withRouter(connect(mapStateToProps)(FileSearch));
