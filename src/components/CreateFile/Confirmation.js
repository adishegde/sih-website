import React, { Component } from "react";
import { Button, Confirm, Table, Label } from "semantic-ui-react";

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
        const { fileData, isCreating } = this.props;

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
                    loading={isCreating}
                    labelPosition="left"
                    primary
                />
                <Confirm
                    open={this.state.open}
                    content="Are You sure?"
                    onCancel={this.handleCancel}
                    onConfirm={this.handleConfirm}
                    icon="checkmark"
                />
            </div>
        );
    }
}

export default Confirmation;
