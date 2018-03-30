import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
    getCurrentUserId,
    getAuthorityOverGroups,
    getGroupWithIds
} from "selectors/index";
import { updateAuthorityOverGroupsCurrentUser } from "actions/users";
import AuthorityOverGroupsComponent from "components/AuthorityOverGroups";

class AuthorityOverGroups extends Component {
    componentDidMount() {
        const { fetchAuthorityOverGroups } = this.props;

        fetchAuthorityOverGroups();
    }

    render() {
        return <AuthorityOverGroupsComponent {...this.props} />;
    }
}

function mapStateToProps(state) {
    return {
        groups: getGroupWithIds(
            state,
            getAuthorityOverGroups(state, getCurrentUserId(state))
        )
    };
}

function mapDispatchToProps(dispatch, { history }) {
    return {
        onClickItem: id => {
            history.push(`/group/${id}`);
        },
        fetchAuthorityOverGroups: () => {
            dispatch(updateAuthorityOverGroupsCurrentUser());
        }
    };
}

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(AuthorityOverGroups)
);
