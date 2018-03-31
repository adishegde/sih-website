import React, { Component } from "react";
import { connect } from "react-redux";
import { updateGroupsOfCurrentUser } from "actions/groups";
import { Message } from "semantic-ui-react";
import GroupsTable from "components/GroupTable";

class Sessions extends Component {
    componentDidMount() {
        const { fetchGroupsOfCurrentUser } = this.props;

        fetchGroupsOfCurrentUser();
    }

    render() {
        return (
            <div>
                <Message info content="You belong to the following sections" />
                <GroupsTable {...this.props} tableName="Your Sessions" />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        groups: state.currentUser.groups
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchGroupsOfCurrentUser: () => {
            dispatch(updateGroupsOfCurrentUser());
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Sessions);
