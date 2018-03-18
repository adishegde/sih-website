import React from "react";
import { Table } from "semantic-ui-react";

export default function FileTable({
    id,
    createdAt,
    name,
    timeRecievedCurrentOwner,
    priority
}) {
    return (
        <Table.Row
            negative={priority === "high"}
            warning={priority === "medium"}
            positive={priority === "low"}
        >
            <Table.Cell>{id}</Table.Cell>
            <Table.Cell>{new Date(createdAt).toDateString()}</Table.Cell>
            <Table.Cell>{name}</Table.Cell>
            <Table.Cell>{priority}</Table.Cell>
            <Table.Cell>
                {new Date(timeRecievedCurrentOwner).toDateString()}
            </Table.Cell>
        </Table.Row>
    );
}
