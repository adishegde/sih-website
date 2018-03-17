import React, { Component } from "react";
import { Form, Grid } from "semantic-ui-react";

class Properties extends Component {
    handlePropertyNameChange = idx => {
        const { onPropertyChange } = this.props;

        return (evt, { value }) => {
            onPropertyChange(idx, value);
        };
    };

    handleRemoveProperty = idx => {
        const { onPropertyDelete } = this.props;

        return () => {
            onPropertyDelete(idx);
        };
    };

    render() {
        const {
            properties,
            onPropertyAdd,
            onContinue,
            onCustomDataChange,
            customDataValue
        } = this.props;

        const inputList = properties.map((property, idx) => (
            <Form.Group key={idx}>
                <Form.Input
                    placeholder={`Property #${idx + 1} name`}
                    value={property}
                    onChange={this.handlePropertyNameChange(idx)}
                />
                <Form.Button
                    onClick={this.handleRemoveProperty(idx)}
                    negative
                    icon="remove"
                />
            </Form.Group>
        ));

        return (
            <div>
                <Form>
                    <h5>Properties</h5>
                    <Grid textAlign="center">
                        <Grid.Row>{inputList}</Grid.Row>
                        <Grid.Row>
                            <Form.Button
                                onClick={onPropertyAdd}
                                size="mini"
                                positive
                                icon="plus"
                                content="Add Property"
                                labelPosition="left"
                            />
                        </Grid.Row>
                    </Grid>
                    <Form.TextArea
                        autoHeight
                        placeholder="Other comments"
                        label="Comments"
                        value={customDataValue}
                        onChange={onCustomDataChange}
                    />
                    <div align="middle">
                        <Form.Button
                            icon="file"
                            content="Continue"
                            primary
                            labelPosition="left"
                            onClick={onContinue}
                        />
                    </div>
                </Form>
            </div>
        );
    }
}

export default Properties;
