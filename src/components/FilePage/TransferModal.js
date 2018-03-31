/* This file exports the modal which render the UI to transfer a file */

import React, { Component } from "react";
import {
    Modal,
    Menu,
    Icon,
    Input,
    Button,
    Message,
    Select,
    Segment
} from "semantic-ui-react";

export default class TransferModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            department: null,
            section: null,
            nextNode: "",
            isModalOpen: false
        };

        this.onSelectChange = this.onSelectChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    render() {
        const { sections, departments, onModalMount } = this.props;
        const { section, department, nextNode, isModalOpen } = this.state;

        let departmentOptions = departments.map(dept => ({
            text: dept.name,
            value: dept.id,
            key: dept.id
        }));

        let sectionOptions = [];
        if (department)
            sectionOptions = sections.filter(
                section => section.deptId === department
            );

        sectionOptions = sectionOptions.map(section => ({
            text: section.name,
            value: section.id,
            key: section.id
        }));

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
                            The file can be transferred to a section in a
                            department.
                        </Message>
                        <Segment basic padded>
                            <Select
                                fluid
                                selection
                                search
                                scrolling
                                label="Select Department"
                                placeholder="Select Department"
                                value={department}
                                options={departmentOptions}
                                onChange={this.onSelectChange}
                                name="department"
                            />
                            <Select
                                fluid
                                selection
                                search
                                scrolling
                                label="Select Section"
                                placeholder="Select Section"
                                value={section}
                                options={sectionOptions}
                                onChange={this.onSelectChange}
                                name="section"
                            />
                            <Input
                                label="Next Node Details"
                                fluid
                                placeholder={"Next Node"}
                                onChange={this.onSelectChange}
                                value={nextNode}
                                name="nextNode"
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

    onSelectChange(event, { name, value }) {
        this.setState({
            [name]: value
        });
    }

    onSubmit() {
        const { department, section, nextNode } = this.state;
        const { onTransfer } = this.props;

        this.closeModal();

        onTransfer({ department, section, nextNode });
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
