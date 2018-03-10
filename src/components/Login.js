import React, { Component } from "react";
import AppBar from "material-ui/AppBar";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: ""
        };
    }

    render() {
        let { username, password } = this.state;

        let { onSubmit } = this.props;

        return (
            <div>
                <AppBar title="Login" />
                <div>
                    <p>Login as:</p>
                </div>
                <div>
                    <TextField
                        hintText="Enter your email id"
                        floatingLabelText="Email id"
                        value={username}
                        onChange={(event, newValue) =>
                            this.setState({ username: newValue })
                        }
                    />
                    <br />
                    <TextField
                        type="password"
                        value={password}
                        hintText="Enter your Password"
                        floatingLabelText="Password"
                        onChange={(event, newValue) =>
                            this.setState({ password: newValue })
                        }
                    />
                    <br />
                    <RaisedButton
                        label="Login"
                        primary={true}
                        style={{
                            margin: 15
                        }}
                        onClick={onSubmit}
                    />
                </div>
            </div>
        );
    }
}
