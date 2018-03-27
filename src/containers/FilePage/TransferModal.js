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
import { getFileOwner } from "selectors/files";

function TransferModal(props) {
    const { currentUser, fileOwner } = props;

    // If currentOwner is not file owner then he can't transfer file
    if (currentUser !== fileOwner) return null;
    return <TransferModalComponent {...props} />;
}

function mapStateToProps(state, { match: { params } }) {
    return {
        users: getUserList(state),
        currentUser: getCurrentUserId(state),
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
