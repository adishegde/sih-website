import React, { Component } from "react";
import {
    Modal,
    Menu,
    Header,
    Icon,
    Segment,
    Input,
    Button
} from "semantic-ui-react";
import QRCodeReader from "components/QRCodeReader";

export default class UpdateStatusModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isModalOpen: false,
            isInnerModalOpen: false,
            nextNode: "",
            qrcodeData: null
        };

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.closeInnerModal = this.closeInnerModal.bind(this);
        this.openInnerModal = this.openInnerModal.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onQRCodeScan = this.onQRCodeScan.bind(this);
    }

    render() {
        const { isModalOpen, nextNode, isInnerModalOpen } = this.state;

        return (
            <Menu.Item name="transfer" onClick={this.openModal}>
                <Icon name="edit" />
                Recieve File
                <Modal
                    open={isModalOpen}
                    closeIcon
                    onClose={this.closeModal}
                    closeOnDimmerClick={false}
                >
                    <Modal.Header>Receive File</Modal.Header>
                    <Modal.Content>
                        <Header as="h4">Scan QRCode</Header>
                        <Segment align="center">
                            <QRCodeReader onScan={this.onQRCodeScan} />
                        </Segment>
                        <Modal open={isInnerModalOpen}>
                            <Modal.Header>Receive File</Modal.Header>
                            <Modal.Content>
                                <Input
                                    value={nextNode}
                                    placeholder="Sending to"
                                    onChange={this.onInputChange}
                                />
                                <Button onClick={this.onSubmit} positive>
                                    Submit
                                </Button>
                            </Modal.Content>
                        </Modal>
                    </Modal.Content>
                </Modal>
            </Menu.Item>
        );
    }

    onInputChange(event, { name, value }) {
        this.setState({
            nextNode: value
        });
    }

    onQRCodeScan(data) {
        this.setState({
            qrcode: data
        });

        this.openInnerModal();
    }

    openModal() {
        this.setState({
            isModalOpen: true
        });
    }

    openInnerModal() {
        this.setState({
            isInnerModalOpen: true
        });
    }

    closeInnerModal() {
        this.setState({
            isInnerModalOpen: false
        });
    }

    closeModal() {
        this.setState({
            isModalOpen: false
        });
    }

    onSubmit() {
        const { onQRCodeScan: recieveData } = this.props;
        const { qrcode, nextNode } = this.state;

        this.closeInnerModal();
        this.closeModal();

        recieveData({ qrcode, nextNode });
    }
}
