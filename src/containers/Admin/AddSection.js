/* This file exports the AddGroup component after passing the groups,
 * users and onCreateGroup props */

import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import AddSectionComponent from "components/Admin/AddSection";
import { createSection } from "actions/groups";
import { updateUserList } from "actions/users";
import { updateAllDepartments } from "actions/departments";
import { getUserList, isUserLoading, getDepartmentList } from "selectors/index";

class AddSection extends Component {
    componentDidMount() {
        const { fetchUserList, fetchDepartmentList } = this.props;

        fetchUserList();
        fetchDepartmentList();
    }

    render() {
        return <AddSectionComponent {...this.props} />;
    }
}

function mapStateToProps(state) {
    return {
        users: getUserList(state),
        isFetchingUsers: isUserLoading(state),
        departments: getDepartmentList(state)
    };
}

function mapDispatchToProps(dispatch, { history }) {
    return {
        fetchUserList: () => {
            dispatch(updateUserList());
        },
        onCreateGroup: data => {
            dispatch(createSection(data, history));
        },
        fetchDepartmentList: data => {
            dispatch(updateAllDepartments());
        }
    };
}

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(AddSection)
);
