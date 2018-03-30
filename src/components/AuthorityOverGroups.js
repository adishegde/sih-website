import React from "react";
import { Message } from "semantic-ui-react";
import GroupTable from "components/GroupTable";

export default function AuthorityOverGroups({ groups, onClickItem }) {
    if (!groups || groups.length === 0)
        return (
            <div className="AuthorityOverGroups">
                <Message error size="small">
                    You don't have authority over any group currently
                </Message>
            </div>
        );

    return (
        <div className="AuthorityOverGroups">
            <Message info size="small">
                This is the list of groups over which you have authority
            </Message>
            <GroupTable
                groups={groups}
                tableName={"Groups"}
                onClickItem={onClickItem}
            />
        </div>
    );
}
