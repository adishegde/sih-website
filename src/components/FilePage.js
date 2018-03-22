import React from "react";
import { Button, Table, Segment, Container, Header } from "semantic-ui-react";
import { QRCode } from "react-qr-svg";

export default function FilePage({
    createdAt,
    currentOwnerId,
    id,
    name,
    priority,
    status,
    customData
}) {
    return (
        <Segment basic>
            <Segment basic align="middle">
                <Table compact>
                    <Table.Body>
                        <Table.Row>
                            <Table.Cell textAlign="center">
                                <Button
                                    color="blue"
                                    icon="exchange"
                                    content="Transfer"
                                    labelPosition="left"
                                    size="large"
                                />
                            </Table.Cell>
                            <Table.Cell textAlign="center">
                                <Button
                                    color="blue"
                                    icon="print"
                                    content="Print QR Code"
                                    labelPosition="left"
                                    size="large"
                                />
                            </Table.Cell>
                        </Table.Row>

                        <Table.Row>
                            <Table.Cell textAlign="center">
                                <Button
                                    color="blue"
                                    icon="edit"
                                    content="Update Status"
                                    labelPosition="left"
                                    size="large"
                                />
                            </Table.Cell>
                            <Table.Cell textAlign="center">
                                <Button
                                    color="blue"
                                    icon="history"
                                    content="View History"
                                    labelPosition="left"
                                    size="large"
                                />
                            </Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </Segment>
            <Segment>
                <Table>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell textAlign="center" colSpan="2">
                                {" "}
                                <Header as="h3">{"File Details"}</Header>{" "}
                            </Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        <Table.Row>
                            <Table.Cell textAlign="center">
                                {" "}
                                <b>{"File Name"}</b>{" "}
                            </Table.Cell>
                            <Table.Cell textAlign="center"> {name} </Table.Cell>
                        </Table.Row>

                        <Table.Row>
                            <Table.Cell textAlign="center">
                                {" "}
                                <b>{"File ID"}</b>{" "}
                            </Table.Cell>
                            <Table.Cell textAlign="center"> {id} </Table.Cell>
                        </Table.Row>

                        <Table.Row>
                            <Table.Cell textAlign="center">
                                {" "}
                                <b>{"Priority Level"}</b>{" "}
                            </Table.Cell>
                            <Table.Cell textAlign="center">
                                {" "}
                                {priority}{" "}
                            </Table.Cell>
                        </Table.Row>

                        <Table.Row>
                            <Table.Cell textAlign="center">
                                {" "}
                                <b>{"File Status"}</b>{" "}
                            </Table.Cell>
                            <Table.Cell textAlign="center">
                                {" "}
                                {status}{" "}
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell colSpan={2}>
                                <Container text>
                                    <h4>Comments</h4>
                                    <hr /> <p>{customData}</p>
                                </Container>
                            </Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </Segment>
            <Segment align="middle">
                <Container text>
                    <Header as="h3">QRCode</Header>
                    <p>
                        This QRCode is used to track the file and update it's
                        status. Print the QRCode and keep it with the file so
                        that it can be tracked.
                    </p>
                </Container>
                <Segment basic padded>
                    <QRCode
                        bgColor="#FFFFFF"
                        fgColor="#000000"
                        level="Q"
                        style={{ width: 256 }}
                        value={id.toString()}
                    />
                </Segment>
            </Segment>
            <Segment basic align="middle">
                <Button
                    negative
                    icon="close"
                    content="Close"
                    labelPosition="left"
                />
            </Segment>
        </Segment>
    );
}
