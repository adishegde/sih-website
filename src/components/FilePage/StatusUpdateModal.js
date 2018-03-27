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

export default class UpdateStatusModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            status: "normal",
            isModalOpen: false
        };

        this.statusOptions = [
            { key: 1, text: "Normal", value: "normal" },
            { key: 2, text: "Lost", value: "lost" },
            { key: 3, text: "Legal Hold", value: "legalhold" }
        ];

        this.onSelectChange = this.onSelectChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    render() {
        const { status, isModalOpen } = this.state;

        return (
            <Menu.Item name="transfer" onClick={this.openModal}>
                <Icon name="edit" />
                Update Status
                <Modal
                    open={isModalOpen}
                    closeIcon
                    onClose={this.closeModal}
                    closeOnEscape={false}
                    closeOnDimmerClick={false}
                >
                    <Modal.Header>Update Status</Modal.Header>
                    <Modal.Content>
                        <Header as="h4">Select new status:</Header>
                        <Select
                            fluid
                            selection
                            search
                            scrolling
                            placeholder={"Select Status"}
                            value={status}
                            options={this.statusOptions}
                            onChange={this.onSelectChange}
                        />
                        <Segment align="middle" basic>
                            <Button
                                primary
                                onClick={this.onSubmit}
                                content="Confirm"
                            />
                        </Segment>
                    </Modal.Content>
                </Modal>
            </Menu.Item>
        );
    }

    onSelectChange(event, { value }) {
        this.setState({
            status: value
        });
    }

    onSubmit() {
        const { onUpdateStatus } = this.props;
        const { status } = this.state;

        this.closeModal();

        onUpdateStatus({ status });
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
