/* This file exports the FilePage after passing the file details to it. It gets
 * the file from the URL */

import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getFileWithId } from "selectors/index";
import FilePageComponent from "components/FilePage";
import { updateFile } from "actions/files";

class FilePage extends Component {
    componentDidMount() {
        const { fetchFile, id } = this.props;

        fetchFile(id);
    }

    render() {
        return <FilePageComponent {...this.props} />;
    }
}

function mapStateToProps(state, { match: { params } }) {
    const file = getFileWithId(state, params.id);

    return {
        ...file,
        id: params.id
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
