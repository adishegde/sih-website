import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getReportOfUserWithId, getUserWithId } from "selectors/index";
import { getUserName } from "selectors/users";
import { updateUserReport, updateUser } from "actions/users";
import UserReportComponent from "components/UserReport/index";

class UserReport extends Component {
    componentDidMount() {
        const { fetchUserReport, fetchUser } = this.props;

        fetchUserReport();
        fetchUser();
    }

    render() {
        return <UserReportComponent {...this.props} />;
    }
}

function mapStateToProps(state, { match: { params } }) {
    const report = getReportOfUserWithId(state, params.id);
    const user = getUserWithId(state, params.id);

    return {
        ...report,
        userName: getUserName(user)
    };
}

function mapDispatchToProps(dispatch, { match: { params } }) {
    return {
        fetchUserReport: () => {
            dispatch(updateUserReport(params.id));
        },
        fetchUser: () => {
            dispatch(updateUser(params.id));
        }
    };
}

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(UserReport)
);
