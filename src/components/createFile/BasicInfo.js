import React from "react";
import { Form } from "semantic-ui-react";

const options = [
    { key: 1, text: "Low", value: 1 },
    { key: 2, text: "Medium", value: 2 },
    { key: 3, text: "High", value: 3 }
];

export default function BasicInfo({
    onInputChange,
    nameValue,
    onContinue,
    priorityValue
}) {
    return (
        <Form>
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
        </Form>
    );
}
