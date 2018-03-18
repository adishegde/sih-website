import React, { Component } from "react";
import { Container, Button, Confirm, Table, Label } from "semantic-ui-react";
import { QRCode } from "react-qr-svg";

class Confirmation extends Component {
    constructor(props) {
        super(props);

        this.state = { open: false };
    }

    show = () => this.setState({ open: true });

    handleCancel = () => this.setState({ open: false });

    handleConfirm = () => {
        this.setState({ open: false });

        const { onCreateFile } = this.props;
        onCreateFile();
    };

    render() {
        const { fileId, fileData } = this.props;

        if (!fileId) {
            const properties = fileData.properties.map((item, idx) => (
                <Label tag key={idx}>
                    {item}
                </Label>
            ));

            return (
                <div align="middle">
                    <Table definition>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell />
                                <Table.HeaderCell>Value</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            <Table.Row>
                                <Table.Cell>File Name</Table.Cell>
                                <Table.Cell>{fileData.name}</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>Priority</Table.Cell>
                                <Table.Cell>{fileData.priority}</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>Properties/Tags</Table.Cell>
                                <Table.Cell>{properties}</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>Comments</Table.Cell>
                                <Table.Cell>
                                    {fileData.customData || "None"}
                                </Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>
                    <Button
                        onClick={this.show}
                        icon="send"
                        content="Create File"
                        labelPosition="left"
                        primary
                    />
                    <Confirm
                        style={{ marginLeft: "60vh", marginTop: "35vh" }}
                        open={this.state.open}
                        content="Are You sure?"
                        onCancel={this.handleCancel}
                        onConfirm={this.handleConfirm}
                        icon="checkmark"
                    />
                </div>
            );
        }

        return (
            <div>
                <div align="middle">
                    <QRCode
                        bgColor="#FFFFFF"
                        fgColor="#000000"
                        level="Q"
                        style={{ width: 256 }}
                        value={fileId.toString()}
                    />
                </div>
                <Container text>
                    <br />
                    <p>
                        This is the QRCode generated for your file. Attach the
                        QR code to your file so that its position can be tracked
                        and updated. You can view the QRCode again in the
                        details of the file just created.
                    </p>
                    <br />
                </Container>
                <div align="middle">
                    <Button
                        type="button"
                        icon="print"
                        content="Print QRCode"
                        labelPosition="left"
                        primary
                        onClick={event => {
                            event.preventDefault();
                            window.print();
                            return false;
                        }}
                    />
                </div>
            </div>
        );
    }
}

export default Confirmation;
