/* This file exports the CreateFile component after it has passed the props */

import { connect } from "react-redux";
import CreateFile from "components/CreateFile/index";
import { createFile } from "actions/files";
import { getCreatedFileId } from "selectors/index";

function mapStateToProps(state) {
    return {
        fileId: getCreatedFileId(state)
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onCreateFile: data => {
            // Extract required data from argument
            const { name, priority, customData } = data;

            dispatch(createFile({ name, priority, customData }));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateFile);
