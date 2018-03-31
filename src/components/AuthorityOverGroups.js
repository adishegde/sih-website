import React from "react";
import { Message } from "semantic-ui-react";
import GroupTable from "components/GroupTable";

export default function AuthorityOverGroups({ groups, onClickItem }) {
    if (!groups || groups.length === 0)
        return (
            <div className="AuthorityOverGroups">
                <Message error size="small">
                    You are currently not head of any section
                </Message>
            </div>
        );

    return (
        <div className="AuthorityOverGroups">
            <Message info size="small">
                You are head of following sections
            </Message>
            <GroupTable
                groups={groups}
                tableName={"Groups"}
                onClickItem={onClickItem}
            />
        </div>
    );
}
