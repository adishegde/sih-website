import React, { Component } from "react";
import { Form, Message, Segment } from "semantic-ui-react";

class AddDepartment extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            error: false,
            code: "",
            head: null
        };

        this.onInputChange = this.onInputChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    render() {
        let { name, head, error, code } = this.state;

        let { users: userOptions, isCreating, isFetchingUsers } = this.props;

        userOptions = userOptions.map(user => ({
            key: user.id,
            text: user.name,
            value: user.id
        }));

        return (
            <Segment basic>
                <h1 align="center">Create Department</h1>
                <Form error={error}>
                    <Form.Input
                        fluid
                        label="Name of Department"
                        placeholder="Name of Department"
                        onChange={this.onInputChange}
                        value={name}
                        name="name"
                    />
                    <Form.Input
                        fluid
                        label="Department Id"
                        placeholder="Department Id"
                        onChange={this.onInputChange}
                        value={code}
                        name="code"
                    />
                    <Form.Select
                        fluid
                        selection
                        search
                        scrolling
                        label="Department Head"
                        placeholder="Select Department Head"
                        options={userOptions}
                        onChange={this.onInputChange}
                        value={head}
                        loading={isFetchingUsers}
                        name="head"
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
                        content="Please ensure that Name and Head is not empty."
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
        const { name, code, head } = this.state;

        if (name === "" || !head) {
            this.setState({
                error: true
            });
        } else {
            this.setState({
                error: false
            });

            const { onCreateDepartment } = this.props;
            onCreateDepartment({
                name,
                code,
                head
            });
        }
    }
}

export default AddDepartment;
