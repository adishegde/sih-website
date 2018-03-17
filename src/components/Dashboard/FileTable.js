/* This file exports the FileTable component to display a list of files that is
 * given as props.
 *  - files: List of files to be rendered. The file object should have the
 *      following keys:
 *          - id
 *          - createdAt
 *          - name
 *          - timeRecievedCurrentOwner */

import React from "react";
import { Table } from "semantic-ui-react";

export default function FileTable({ files, tableName }) {
    // Don't render table if file list is null
    if (!files) return null;

    // Create rows of table using the file info passed as prop
    const fileItems = files.map(file => (
        <Table.Row key={file.id}>
            <Table.Cell>{file.id}</Table.Cell>
            <Table.Cell>{new Date(file.createdAt).toDateString()}</Table.Cell>
            <Table.Cell>{file.name}</Table.Cell>
            <Table.Cell>
                {new Date(file.timeRecievedCurrentOwner).toDateString()}
            </Table.Cell>
        </Table.Row>
    ));

    // Return the table component
    return (
        <Table singleLine>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell
                        textAlign="center"
                        colSpan="4"
                        style={{ fontSize: "16px" }}
                    >
                        {tableName}
                    </Table.HeaderCell>
                </Table.Row>
                <Table.Row>
                    <Table.HeaderCell>Id</Table.HeaderCell>
                    <Table.HeaderCell>Created</Table.HeaderCell>
                    <Table.HeaderCell>Name</Table.HeaderCell>
                    <Table.HeaderCell>Recieved</Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>{fileItems}</Table.Body>
        </Table>
    );
}
