import React from "react";
import {
    Menu,
    Icon,
    Table,
    Segment,
    Container,
    Header
} from "semantic-ui-react";
import { QRCode } from "react-qr-svg";
import TransferModal from "containers/FilePage/TransferModal";
import FileDetail from "./FileDetail";

export default function FilePage({
    createdAt,
    createdBy,
    currentOwner,
    updatedAt,
    timeRecievedCurrentOwner,
    id,
    name,
    priority,
    status,
    customData
}) {
    // Guards when data is not present
    if (!currentOwner) currentOwner = {};
    if (!createdBy) createdBy = {};

    // Values for normal status
    let timeRecievedValue = new Date(timeRecievedCurrentOwner).toUTCString();
    let currentOwnerLabel = "Current Owner";
    let statusValue = "Normal";

    switch (status) {
        case "intransit":
            timeRecievedValue = null;
            statusValue = "In Transit";
            currentOwnerLabel = "Destination User";
            break;
        case "lost":
            timeRecievedCurrentOwner = null;
            statusValue = "Lost";
            currentOwnerLabel = "File lost by User with ";
            break;
        case "legalhold":
            timeRecievedCurrentOwner = null;
            statusValue = "Legal Hold";
            currentOwnerLabel = "Held by User with ";
            break;
        default:
            break;
    }

    return (
        <Segment basic>
            <Segment basic align="middle">
                <Menu compact inverted>
                    <TransferModal />
                    <Menu.Item name="printQRCode">
                        <Icon name="print" />
                        Print QR Code
                    </Menu.Item>
                    <Menu.Item name="updateStatus">
                        <Icon name="edit" />
                        Update Status
                    </Menu.Item>
                    <Menu.Item name="viewHistory">
                        <Icon name="history" />
                        View History
                    </Menu.Item>
                </Menu>
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
                        <FileDetail label="File Name" value={name} />
                        <FileDetail label="File ID" value={id} />
                        <FileDetail label="Priority Level" value={priority} />
                        <FileDetail label="Status" value={statusValue} />
                        <FileDetail
                            label={`${currentOwnerLabel} Name`}
                            value={currentOwner.name}
                        />
                        <FileDetail
                            label={`${currentOwnerLabel} ID`}
                            value={currentOwner.id}
                        />
                        <FileDetail
                            label="Time Recieved Current Owner"
                            value={timeRecievedValue}
                        />
                        <FileDetail
                            label="Created By Name"
                            value={createdBy.name}
                        />
                        <FileDetail
                            label="Created By ID"
                            value={createdBy.id}
                        />
                        <FileDetail
                            label="Created At"
                            value={
                                !createdAt
                                    ? null
                                    : new Date(createdAt).toUTCString()
                            }
                        />
                        <Table.Row>
                            <Table.Cell colSpan={2}>
                                <Container text>
                                    <h4>Comments</h4>
                                    <hr /> <p>{customData || "None"}</p>
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
        </Segment>
    );
}
