import React from "react";
import { Message } from "semantic-ui-react";
import UserTable from "components/UserTable/index";

export default function GroupMembers({ users, onClickItem, groupName }) {
    if (!users || users.length === 0)
        return (
            <div className="groupMembers">
                <Message error size="small">
                    This group doesn't have any members
                </Message>
            </div>
        );

    return (
        <div className="groupMembers">
            <Message info size="small">
                This is the list of users in the group
            </Message>
            <UserTable
                users={users}
                tableName={`Members of ${groupName}`}
                onClickItem={onClickItem}
            />
        </div>
    );
}
