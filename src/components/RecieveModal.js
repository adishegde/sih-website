import React, { Component } from "react";
import {
    Modal,
    Menu,
    Header,
    Icon,
    Button,
    Select,
    Segment
} from "semantic-ui-react";
import QRCodeReader from "components/QRCodeReader";

export default class UpdateStatusModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isModalOpen: false
        };

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.onQRCodeScan = this.onQRCodeScan.bind(this);
    }

    render() {
        const { isModalOpen } = this.state;

        return (
            <Menu.Item name="transfer" onClick={this.openModal}>
                <Icon name="edit" />
                Recieve File
                <Modal
                    open={isModalOpen}
                    closeIcon
                    onClose={this.closeModal}
                    closeOnEscape={false}
                    closeOnDimmerClick={false}
                >
                    <Modal.Header>Recieve File</Modal.Header>
                    <Modal.Content>
                        <Header as="h4">Scan QRCode</Header>
                        <Segment align="center">
                            <QRCodeReader onScan={this.onQRCodeScan} />
                        </Segment>
                    </Modal.Content>
                </Modal>
            </Menu.Item>
        );
    }

    onQRCodeScan(data) {
        const { onQRCodeScan: recieveData } = this.props;

        this.closeModal();
        recieveData(data);
    }

    openModal() {
        this.setState({
            isModalOpen: true
        });
    }

    closeModal() {
        this.setState({
            isModalOpen: false
        });
    }
}
