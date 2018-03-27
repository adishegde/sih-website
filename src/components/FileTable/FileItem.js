import React from "react";
import { Table } from "semantic-ui-react";
import { statusToDisplay } from "utils/resources";

export default function FileTable({
    id,
    createdAt,
    name,
    status,
    updatedAt,
    priority,
    onClick
}) {
    return (
        <Table.Row
            negative={priority === "high"}
            warning={priority === "medium"}
            positive={priority === "low"}
            onClick={onClick}
        >
            <Table.Cell>{id}</Table.Cell>
            <Table.Cell>{name}</Table.Cell>
            <Table.Cell>{priority}</Table.Cell>
            <Table.Cell>{statusToDisplay(status)}</Table.Cell>
            <Table.Cell>{new Date(createdAt).toDateString()}</Table.Cell>
            <Table.Cell>{new Date(updatedAt).toDateString()}</Table.Cell>
        </Table.Row>
    );
}
