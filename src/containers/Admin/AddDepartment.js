import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import AddDepartmentComponent from "components/Admin/AddDepartment";
import { createDepartment } from "actions/departments";
import { updateUserList } from "actions/users";
import { getUserList, isUserLoading } from "selectors/index";

class AddDepartment extends Component {
    componentDidMount() {
        const { fetchUserList } = this.props;

        fetchUserList();
    }

    render() {
        return <AddDepartmentComponent {...this.props} />;
    }
}

function mapStateToProps(state) {
    return {
        users: getUserList(state),
        isFetchingUsers: isUserLoading(state)
    };
}

function mapDispatchToProps(dispatch, { history }) {
    return {
        fetchUserList: () => {
            dispatch(updateUserList());
        },
        onCreateDepartment: data => {
            const { code, name, head } = data;
            dispatch(
                createDepartment({ head_id: head, name, depId: code }, history)
            );
        }
    };
}

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(AddDepartment)
);
