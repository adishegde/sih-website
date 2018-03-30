import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getGroupMembers, getUserWithIds } from "selectors/index";
import { updateGroupMembers } from "actions/groups";
import GroupMembersComponent from "components/GroupMembers";

class GroupMembers extends Component {
    componentDidMount() {
        const { fetchGroupMembers } = this.props;

        fetchGroupMembers();
    }

    render() {
        return <GroupMembersComponent {...this.props} />;
    }
}

function mapStateToProps(state, { match: { params } }) {
    return {
        users: getUserWithIds(state, getGroupMembers(state, params.id))
    };
}

function mapDispatchToProps(dispatch, { history, match: { params } }) {
    return {
        onClickItem: id => {
            history.push(`/user/${id}/report`);
        },
        fetchGroupMembers: () => {
            dispatch(updateGroupMembers(params.id));
        }
    };
}

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(GroupMembers)
);
