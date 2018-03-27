import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { transferFile } from "actions/files";
import { updateUserList } from "actions/users";
import { updateGroupList } from "actions/groups";
import TransferModalComponent from "components/FilePage/TransferModal";
import {
    getUserList,
    getFileWithId,
    getGroupList,
    getCurrentUserId
} from "selectors/index";
import { getDepartments } from "selectors/groups";
import { getFileOwner, getFileStatus } from "selectors/files";

function TransferModal(props) {
    const { currentUser, fileOwner, fileStatus } = props;

    // TransferModal should be displayed only if the user owns the file and
    // the file status is normal
    if (currentUser === fileOwner && fileStatus === "normal")
        return <TransferModalComponent {...props} />;
    return null;
}

function mapStateToProps(state, { match: { params } }) {
    return {
        users: getUserList(state),
        currentUser: getCurrentUserId(state),
        fileStatus: getFileStatus(getFileWithId(state, params.id)),
        fileOwner: getFileOwner(getFileWithId(state, params.id)),
        departments: getDepartments(getGroupList(state))
    };
}

function mapDispatchToProps(dispatch, { match: { params } }) {
    return {
        onTransfer: transferData => {
            dispatch(transferFile(params.id, transferData));
        },
        onModalMount: () => {
            dispatch(updateUserList());
            dispatch(updateGroupList());
        }
    };
}

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(TransferModal)
);
