/* This file exports the modal which render the UI to transfer a file */

import React, { Component } from "react";
import {
    Modal,
    Menu,
    Icon,
    Button,
    Message,
    Select,
    Segment,
    Checkbox
} from "semantic-ui-react";

export default class TransferModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            transferByUser: true,
            toTransferUser: null,
            toTransferGroup: null,
            isModalOpen: false
        };

        this.toggleTransferMode = this.toggleTransferMode.bind(this);
        this.onSelectChange = this.onSelectChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    render() {
        const { users, departments, onModalMount } = this.props;
        const {
            transferByUser,
            toTransferGroup,
            toTransferUser,
            isModalOpen
        } = this.state;

        let options = transferByUser ? users : departments;
        options = options.map(opt => ({
            text: opt.name,
            value: opt.id,
            key: opt.id
        }));

        const transferLabel = transferByUser ? "User" : "Sections";
        const selectValue = transferByUser ? toTransferUser : toTransferGroup;

        return (
            <Menu.Item name="transfer" onClick={this.openModal}>
                <Icon name="exchange" />
                Transfer
                <Modal
                    open={isModalOpen}
                    closeIcon
                    onMount={onModalMount}
                    onClose={this.closeModal}
                    closeOnEscape={false}
                    closeOnDimmerClick={false}
                >
                    <Modal.Header>Transfer File</Modal.Header>
                    <Modal.Content>
                        <Message info size="small">
                            You can transfer file to a particular user or to the
                            to a section
                        </Message>
                        <Checkbox
                            toggle
                            onChange={this.toggleTransferMode}
                            label={`Transfer Through ${transferLabel}`}
                        />
                        <Segment basic padded>
                            <Select
                                fluid
                                selection
                                search
                                scrolling
                                label={`Select ${transferLabel}`}
                                placeholder={`Search ${transferLabel}`}
                                value={selectValue}
                                options={options}
                                onChange={this.onSelectChange}
                            />
                        </Segment>
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

    toggleTransferMode() {
        this.setState(({ transferByUser }) => ({
            transferByUser: !transferByUser
        }));
    }

    onSelectChange(event, { value }) {
        this.setState(oldstate => {
            if (oldstate.transferByUser)
                return {
                    toTransferUser: value
                };

            return {
                toTransferGroup: value
            };
        });
    }

    onSubmit() {
        const { transferByUser, toTransferUser, toTransferGroup } = this.state;
        const { onTransfer } = this.props;

        this.closeModal();

        if (transferByUser) {
            onTransfer({ user_id: toTransferUser });
        } else {
            onTransfer({ group_id: toTransferGroup });
        }
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
