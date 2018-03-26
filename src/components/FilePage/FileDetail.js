import React from "react";
import { Table } from "semantic-ui-react";

export default function({ label, value }) {
    if (!value) return null;
    return (
        <Table.Row>
            <Table.Cell textAlign="center">
                {" "}
                <b>{label}</b>{" "}
            </Table.Cell>
            <Table.Cell textAlign="center"> {value} </Table.Cell>
        </Table.Row>
    );
}
