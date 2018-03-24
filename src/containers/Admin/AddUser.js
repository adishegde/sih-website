/* This file exports the AddUser component after passing the groups,
 * departments and createUser props */

import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import AddUserComponent from "components/Admin/AddUser";
import { updateGroupList } from "actions/groups";
import { createUser } from "actions/users";
import { getGroupList, isGroupLoading, isUserLoading } from "selectors/index";
import { getNonDepartments, getDepartments } from "selectors/groups";

class AddUser extends Component {
    componentDidMount() {
        const { fetchGroupList } = this.props;

        // Fetch group list on mount to display in options
        fetchGroupList();
    }

    render() {
        return <AddUserComponent {...this.props} />;
    }
}

function mapStateToProps(state) {
    const groupList = getGroupList(state);

    return {
        groups: getNonDepartments(groupList),
        departments: getDepartments(groupList),
        isFetchingGroups: isGroupLoading(state),
        isCreating: isUserLoading(state)
    };
}

function mapDispatchToProps(dispatch, { history }) {
    return {
        fetchGroupList: () => {
            dispatch(updateGroupList());
        },
        onCreateUser: data => {
            dispatch(createUser(data, history));
        }
    };
}

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(AddUser)
);
