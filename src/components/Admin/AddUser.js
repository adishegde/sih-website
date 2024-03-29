import React, { Component } from "react";
import { Form, Segment, Message } from "semantic-ui-react";

function validateEmail(email) {
    // Basic email validation
    return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email);
}

class AddUser extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            email: "",
            error: false,
            groups: [],
            password: ""
        };

        this.onInputChange = this.onInputChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    render() {
        let { name, email, password, groups, error } = this.state;
        let { groups: groupOptions, isCreating, isFetchingGroups } = this.props;

        groupOptions = groupOptions.map(group => ({
            key: group.id,
            text: group.name,
            value: group.id
        }));

        return (
            <Segment basic>
                <h1 align="center">Create User</h1>
                <Form error={error}>
                    <Form.Input
                        fluid
                        label="Name"
                        placeholder="Name"
                        onChange={this.onInputChange}
                        value={name}
                        name="name"
                    />
                    <Form.Input
                        fluid
                        label="Email Id"
                        placeholder="Email Id"
                        onChange={this.onInputChange}
                        value={email}
                        name="email"
                    />
                    <Form.Input
                        fluid
                        label="Password"
                        placeholder="Password"
                        onChange={this.onInputChange}
                        value={password}
                        type="password"
                        name="password"
                    />
                    <Form.Select
                        fluid
                        multiple
                        selection
                        search
                        scrolling
                        label="Sections"
                        placeholder="Sections"
                        options={groupOptions}
                        onChange={this.onInputChange}
                        value={groups}
                        name="groups"
                        loading={isFetchingGroups}
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
                    <Message error>
                        <Message.Header>Action Forbidden</Message.Header>
                        {"Please ensure that: "}
                        <Message.List
                            items={[
                                "Name is not empty",
                                "Password is longer than 8 characters",
                                "Email is a valid email"
                            ]}
                        />
                    </Message>
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
        const { name, email, groups, password } = this.state;

        if (name === "" || !validateEmail(email) || password.length < 8) {
            //error
            this.setState({
                error: true
            });
        } else {
            const { onCreateUser } = this.props;
            onCreateUser({
                name,
                email,
                groups,
                password
            });
        }
    }
}

export default AddUser;
