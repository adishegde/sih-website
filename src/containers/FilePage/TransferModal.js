import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { transferFile } from "actions/files";
import { updateGroupList } from "actions/groups";
import { updateAllDepartments } from "actions/departments";
import TransferModalComponent from "components/FilePage/TransferModal";
import {
    getDepartmentList,
    getFileWithId,
    getGroupList,
    getCurrentUserId
} from "selectors/index";
import { getSections } from "selectors/groups";
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
        currentUser: getCurrentUserId(state),
        fileStatus: getFileStatus(getFileWithId(state, params.id)),
        fileOwner: getFileOwner(getFileWithId(state, params.id)),
        sections: getSections(getGroupList(state)),
        departments: getDepartmentList(state)
    };
}

function mapDispatchToProps(dispatch, { match: { params } }) {
    return {
        onTransfer: transferData => {
            const { department, section, nextNode } = transferData;
            dispatch(
                transferFile(params.id, {
                    deptId: department,
                    sectionId: section,
                    nextNode
                })
            );
        },
        onModalMount: () => {
            dispatch(updateGroupList());
            dispatch(updateAllDepartments());
        }
    };
}

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(TransferModal)
);
