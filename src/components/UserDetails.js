import React from "react";
import { Table, Segment } from "semantic-ui-react";

export default function UserDetails({ name, email, role }) {
    return (
        <Segment basic>
            <Table columns={2} color="blue" inverted>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell textAlign="center" colSpan="6">
                            User Detail
                        </Table.HeaderCell>
                    </Table.Row>
                    <Table.Row>
                        <Table.HeaderCell />
                        <Table.HeaderCell>Value</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    <Table.Row>
                        <Table.Cell>Name</Table.Cell>
                        <Table.Cell>{name}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Email</Table.Cell>
                        <Table.Cell>{email}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Admin</Table.Cell>
                        <Table.Cell>
                            {role === "superadmin" ? "Yes" : "No"}
                        </Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        </Segment>
    );
}
