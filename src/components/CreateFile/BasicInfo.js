import React from "react";
import { Form, Message } from "semantic-ui-react";

const options = [
    { key: 1, text: "Low", value: "low" },
    { key: 2, text: "Medium", value: "medium" },
    { key: 3, text: "High", value: "high" }
];

export default function BasicInfo({
    onInputChange,
    nameValue,
    onContinue,
    priorityValue,
    error
}) {
    return (
        <Form error={error}>
            <Form.Input
                label="Name of the File"
                fluid
                placeholder={"File Name"}
                onChange={onInputChange}
                value={nameValue}
                name="name"
            />
            <Form.Select
                label="Priority"
                fluid
                options={options}
                onChange={onInputChange}
                name="priority"
                value={priorityValue}
            />
            <div align="middle">
                <Form.Button
                    icon="chevron circle right"
                    content="Continue"
                    primary
                    labelPosition="left"
                    onClick={onContinue}
                />
            </div>
            <Message
                error
                header="Action Forbidden"
                content="Name cannot be empty."
            />
        </Form>
    );
}
