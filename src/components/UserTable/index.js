import React from "react";
import { Table } from "semantic-ui-react";
import UserItem from "components/UserTable/UserItem";

export default function UserTable({ users, tableName, onClickItem }) {
    if (!users) return null;
    const userItems = users.map(user => (
        <UserItem
            {...user}
            onClick={onClickItem.bind(null, user.id)}
            key={user.id}
        />
    ));

    return (
        <Table celled structured>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell
                        textAlign="center"
                        colSpan={3}
                        style={{ fontSize: "16px" }}
                    >
                        {tableName}
                    </Table.HeaderCell>
                </Table.Row>
                <Table.Row>
                    <Table.HeaderCell textAlign="center" rowSpan="2">
                        Id
                    </Table.HeaderCell>
                    <Table.HeaderCell textAlign="center" rowSpan="2">
                        Name
                    </Table.HeaderCell>
                    <Table.HeaderCell textAlign="center" rowSpan="2">
                        Email
                    </Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>{userItems}</Table.Body>
        </Table>
    );
}
