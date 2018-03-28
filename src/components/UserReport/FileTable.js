import React from "react";
import { Table } from "semantic-ui-react";

function FileItem({ name, id }) {
    return (
        <Table.Row>
            <Table.Cell>{id}</Table.Cell>
            <Table.Cell>{name}</Table.Cell>
        </Table.Row>
    );
}

export default function FileTable({ files, tableName }) {
    // Don't render table if file list is null
    if (!files || !files.length) return null;

    // Create rows of table using the file info passed as prop
    const fileItems = files.map(file => (
        <FileItem name={file[1]} id={file[0]} key={file[0]} />
    ));

    // Return the table component
    return (
        <Table singleLine>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell
                        textAlign="center"
                        colSpan="2"
                        style={{ fontSize: "16px" }}
                    >
                        {tableName}
                    </Table.HeaderCell>
                </Table.Row>
                <Table.Row>
                    <Table.HeaderCell>Id</Table.HeaderCell>
                    <Table.HeaderCell>Name</Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>{fileItems}</Table.Body>
        </Table>
    );
}
