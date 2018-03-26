/* This file exports the UserMenu component to be used as a submenu in the
 * SideMenu component. It requires the following props:
 *  - onSignOut: Function to be called when SignOut is clicked */

import React, { Component } from "react";
import { Menu, Icon, Confirm } from "semantic-ui-react";

export default class UserMenu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isConfirmOpen: false
        };

        this.closeConfirm = this.closeConfirm.bind(this);
        this.openConfirm = this.openConfirm.bind(this);
    }

    render() {
        const { isConfirmOpen } = this.state;
        const { onSignOut } = this.props;

        return (
            <Menu.Item>
                <Menu.Header>User</Menu.Header>
                <Menu.Menu>
                    <Menu.Item link onClick={this.openConfirm}>
                        <Icon name="sign out" />
                        Sign Out
                    </Menu.Item>
                    <Confirm
                        onConfirm={onSignOut}
                        open={isConfirmOpen}
                        onCancel={this.closeConfirm}
                        closeOnDimmerClick={true}
                    />
                </Menu.Menu>
            </Menu.Item>
        );
    }

    closeConfirm() {
        this.setState({
            isConfirmOpen: false
        });
    }

    openConfirm() {
        this.setState({
            isConfirmOpen: true
        });
    }
}
