/* This component exports the login component. It uses the following props:
 *  - onSubmit: The function which is called when the login button is clicked.
 *  - isLoading: A boolean prop to indicate if the login button should be in
 *      loading state.
 *  - errMssg: If not a falsy value a error message is displayed whose message
 *      is the value of this prop.  */

import React, { Component } from "react";
import {
    Button,
    Form,
    Grid,
    Header,
    Icon,
    Segment,
    Message
} from "semantic-ui-react";

export default class Login extends Component {
    constructor(props) {
        super(props);

        // The react component is the single source of truth
        this.state = {
            email: "",
            password: ""
        };

        this.onInputChange = this.onInputChange.bind(this);
    }

    render() {
        let { email, password } = this.state;
        let { onSubmit, isLoading, errMssg } = this.props;

        let message = null;
        if (errMssg) {
            message = (
                <Message negative>
                    <Message.Header>{errMssg}</Message.Header>
                </Message>
            );
        }

        return (
            <div className="login-form">
                <style>{`
                body > div,
                body > div > div,
                body > div > div > div.login-form {
                    height: 100%;
                }
            `}</style>
                <Grid
                    textAlign="center"
                    style={{ height: "100%" }}
                    verticalAlign="middle"
                >
                    <Grid.Column style={{ maxWidth: 450 }}>
                        <Header as="h2" color="teal" textAlign="center">
                            {"Login"}
                        </Header>
                        <Form size="large" onChange={this.onInputChange}>
                            <Segment>
                                <Form.Input
                                    fluid
                                    icon="user"
                                    name="email"
                                    value={email}
                                    iconPosition="left"
                                    placeholder="Email Id"
                                />
                                <Form.Input
                                    fluid
                                    icon="lock"
                                    name="password"
                                    value={password}
                                    iconPosition="left"
                                    placeholder="Password"
                                    type="password"
                                />
                                <Button
                                    color="teal"
                                    fluid
                                    size="large"
                                    onClick={() =>
                                        onSubmit({ email, password })
                                    }
                                    loading={isLoading}
                                >
                                    <Icon name="sign in" />
                                    Login
                                </Button>
                            </Segment>
                        </Form>
                        {message}
                    </Grid.Column>
                </Grid>
            </div>
        );
    }

    // Update state on input change to make component state the single source
    // of truth
    onInputChange(event) {
        let value = event.target.value;
        let name = event.target.name;

        this.setState({
            [name]: value
        });
    }
}
