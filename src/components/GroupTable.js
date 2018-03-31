import React from "react";
import { Table } from "semantic-ui-react";

function GroupItem({ name, id, isDepartment, onClick }) {
    return (
        <Table.Row onClick={onClick}>
            <Table.Cell>{id}</Table.Cell>
            <Table.Cell>{name}</Table.Cell>
        </Table.Row>
    );
}

export default function GroupTable({ groups, tableName, onClickItem }) {
    if (!groups) return null;
    const groupItems = groups.map(group => (
        <GroupItem
            {...group}
            key={group.id}
            onClick={onClickItem.bind(null, group.id)}
        />
    ));

    return (
        <Table singleLine columns={2} textAlign="center">
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
                    <Table.HeaderCell>ID</Table.HeaderCell>
                    <Table.HeaderCell>Name</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>{groupItems}</Table.Body>
        </Table>
    );
}
