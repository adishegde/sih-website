import React, { Component } from "react";
import { Form, Message, Segment } from "semantic-ui-react";

class AddSection extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            error: false,
            sectionHeads: [],
            department: null,
            users: []
        };

        this.onInputChange = this.onInputChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    render() {
        let { name, sectionHeads, users, error, department } = this.state;

        let {
            users: userOptions,
            departments: departmentOptions,
            isCreating,
            isFetchingUsers
        } = this.props;

        userOptions = userOptions.map(user => ({
            key: user.id,
            text: user.name,
            value: user.id
        }));

        departmentOptions = departmentOptions.map(user => ({
            key: user.id,
            text: user.name,
            value: user.id
        }));

        return (
            <Segment basic>
                <h1 align="center">Create Section</h1>
                <Form error={error}>
                    <Form.Input
                        fluid
                        label="Name of Section"
                        placeholder="Name of Section"
                        onChange={this.onInputChange}
                        value={name}
                        name="name"
                    />
                    <Form.Select
                        fluid
                        multiple
                        selection
                        search
                        scrolling
                        label="Users"
                        placeholder="Add Users"
                        options={userOptions}
                        onChange={this.onInputChange}
                        value={users}
                        loading={isFetchingUsers}
                        name="users"
                    />
                    <Form.Select
                        fluid
                        multiple
                        selection
                        search
                        scrolling
                        label="Section Heads"
                        placeholder="Section Heads"
                        options={userOptions}
                        onChange={this.onInputChange}
                        value={sectionHeads}
                        loading={isFetchingUsers}
                        name="sectionHeads"
                    />
                    <Form.Select
                        fluid
                        selection
                        search
                        scrolling
                        label="Department"
                        placeholder="Select Department"
                        options={departmentOptions}
                        onChange={this.onInputChange}
                        value={department}
                        name="department"
                    />
                    <div align="middle">
                        <Form.Button
                            icon="checkmark"
                            content="Submit"
                            labelPosition="left"
                            primary
                            loading={isCreating}
                            onClick={this.onSubmit}
                        />
                    </div>
                    <Message
                        error
                        header="Action Forbidden"
                        content="Please ensure that Name is not empty."
                    />
                </Form>
            </Segment>
        );
    }

    onInputChange(event, { name, value }) {
        this.setState({
            [name]: value
        });
    }

    onSubmit() {
        const { name, department, users, sectionHeads } = this.state;

        if (name === "") {
            this.setState({
                error: true
            });
        } else {
            this.setState({
                error: false
            });

            const { onCreateGroup } = this.props;
            onCreateGroup({
                name,
                users,
                department,
                sectionHeads
            });
        }
    }
}

export default AddSection;
