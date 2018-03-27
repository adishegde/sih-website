import React from "react";
import { Table } from "semantic-ui-react";
import { statusToDisplay } from "utils/resources";

export default function HistoryItem({
    id,
    changedBy,
    statusFrom,
    statusTo,
    changedOn
}) {
    return (
        <Table.Row>
            <Table.Cell>{id}</Table.Cell>
            <Table.Cell>{changedBy.name}</Table.Cell>
            <Table.Cell>{changedBy.id}</Table.Cell>
            <Table.Cell>{statusToDisplay(statusFrom)}</Table.Cell>
            <Table.Cell>{statusToDisplay(statusTo)}</Table.Cell>
            <Table.Cell>{new Date(changedOn).toDateString()}</Table.Cell>
        </Table.Row>
    );
}
