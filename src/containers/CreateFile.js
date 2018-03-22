/* This file exports the CreateFile component after it has passed the props */

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import CreateFile from "components/CreateFile/index";
import { createFile } from "actions/files";
import { isFileLoading } from "selectors/index";

function mapStateToProps(state) {
    return {
        isCreating: isFileLoading(state)
    };
}

function mapDispatchToProps(dispatch, { history }) {
    return {
        onCreateFile: data => {
            // Extract required data from argument
            const { name, priority, customData } = data;

            dispatch(createFile({ name, priority, customData }, history));
        }
    };
}

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(CreateFile)
);
