import React, { Component } from "react";
import { Form, Message, Segment, Checkbox } from "semantic-ui-react";

class GroupAdd extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            error: false,
            authorityGroups: [],
            users: [],
            isDeptValue: false
        };

        this.onInputChange = this.onInputChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    render() {
        let { name, authorityGroups, users, isDeptValue, error } = this.state;

        let {
            groups,
            users: userOptions,
            isCreating,
            isFetchingGroups,
            isFetchingUsers
        } = this.props;

        groups = groups.map(group => ({
            key: group.id,
            text: group.name,
            value: group.id
        }));

        userOptions = userOptions.map(user => ({
            key: user.id,
            text: user.name,
            value: user.id
        }));

        return (
            <Segment basic>
                <h1 align="center">Create Group</h1>
                <Form error={error}>
                    <Form.Input
                        fluid
                        label="Name"
                        placeholder="Name"
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
                        label="Authority over"
                        options={groups}
                        onChange={this.onInputChange}
                        value={authorityGroups}
                        loading={isFetchingGroups}
                        name="authorityGroups"
                    />
                    <Form.Field>
                        <Checkbox
                            toggle
                            checked={isDeptValue}
                            label="Department"
                            onChange={this.onInputChange}
                            name="isDeptValue"
                        />
                    </Form.Field>
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
                        content="Name cannot be empty"
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
        const { name, users, authorityGroups, isDeptValue } = this.state;

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
                authorityOver: authorityGroups,
                isDepartment: isDeptValue
            });
        }
    }
}
export default GroupAdd;
