/* This file exports the FileItem component after passing the correct onClick
 * function to it */

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import FileItem from "components/FileTable/FileItem";

function mapDispatchToProps(dispatch, props) {
    const { history, id } = props;

    return {
        onClick: () => {
            history.push(`/file/${id}`);
        },
        ...props
    };
}

export default withRouter(connect(null, mapDispatchToProps)(FileItem));
