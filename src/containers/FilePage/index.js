/* This file exports the FilePage after passing the file details to it. It gets
 * the file from the URL */

import React, { Component } from "react";
import { Message } from "semantic-ui-react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getFileWithId, getCurrentUserId } from "selectors/index";
import FilePageComponent from "components/FilePage/index";
import { updateFile } from "actions/files";

class FilePage extends Component {
    componentDidMount() {
        const { fetchFile, id } = this.props;

        fetchFile(id);
    }

    render() {
        const { status, currentOwnerId, currentUser } = this.props;
        if (status === "intransit" || currentUser !== currentOwnerId)
            return (
                <Message
                    error
                    content="The QRCode should be scanned to view the details"
                />
            );
        return <FilePageComponent {...this.props} />;
    }
}

function mapStateToProps(state, { match: { params } }) {
    const file = getFileWithId(state, params.id);

    return {
        ...file,
        id: params.id,
        currentUser: getCurrentUserId(state)
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchFile: id => {
            dispatch(updateFile(id));
        }
    };
}

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(FilePage)
);
