import React from "react";
import { Table } from "semantic-ui-react";

export default function GroupDetail({
    name: usrName,
    id: usrId,
    isSuperAdmin,
    email,
    onClick
}) {
    return (
        <Table.Row onClick={onClick}>
            <Table.Cell textAlign="center">{usrId}</Table.Cell>
            <Table.Cell textAlign="center">{usrName}</Table.Cell>
            <Table.Cell textAlign="center">{email}</Table.Cell>
        </Table.Row>
    );
}
