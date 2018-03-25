/* This file exports the AddGroup component after passing the groups,
 * users and onCreateGroup props */

import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import AddGroupComponent from "components/Admin/AddGroup";
import { updateGroupList, createGroup } from "actions/groups";
import { updateUserList } from "actions/users";
import {
    getGroupList,
    getUserList,
    isGroupLoading,
    isUserLoading
} from "selectors/index";

class AddGroup extends Component {
    componentDidMount() {
        const { fetchGroupList, fetchUserList } = this.props;

        // Fetch group list on mount to display in options
        fetchGroupList();
        fetchUserList();
    }

    render() {
        return <AddGroupComponent {...this.props} />;
    }
}

function mapStateToProps(state) {
    return {
        groups: getGroupList(state),
        users: getUserList(state),
        isFetchingGroups: isGroupLoading(state),
        isFetchingUsers: isUserLoading(state)
    };
}

function mapDispatchToProps(dispatch, { history }) {
    return {
        fetchGroupList: () => {
            dispatch(updateGroupList());
        },
        fetchUserList: () => {
            dispatch(updateUserList());
        },
        onCreateGroup: data => {
            dispatch(createGroup(data, history));
        }
    };
}

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(AddGroup)
);
