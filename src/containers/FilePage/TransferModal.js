import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { transferFile } from "actions/files";
import { updateUserList } from "actions/users";
import { updateGroupList } from "actions/groups";
import TransferModalComponent from "components/FilePage/TransferModal";
import { getUserList, getGroupList, isFileLoading } from "selectors/index";
import { getDepartments } from "selectors/groups";

class TransferModal extends Component {
    componentDidMount() {
        const { fetchAllGroups, fetchAllUsers } = this.props;

        fetchAllGroups();
        fetchAllUsers();
    }

    render() {
        return <TransferModalComponent {...this.props} />;
    }
}

function mapStateToProps(state) {
    return {
        users: getUserList(state),
        departments: getDepartments(getGroupList(state)),
        isTranfering: isFileLoading(state)
    };
}

function mapDispatchToProps(dispatch, { match: { params } }) {
    return {
        onTransfer: transferData => {
            dispatch(transferFile(params.id, transferData));
        },
        fetchAllGroups: () => {
            dispatch(updateGroupList());
        },
        fetchAllUsers: () => {
            dispatch(updateUserList());
        }
    };
}

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(TransferModal)
);
