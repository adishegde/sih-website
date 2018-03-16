/* This file exports the UserMenu component to be used as a submenu in the
 * SideMenu component. It requires the following props:
 *  - onSignOut: Function to be called when SignOut is clicked */

import React from "react";
import { Menu, Icon } from "semantic-ui-react";

export default function UserMenu({ onSignOut }) {
    return (
        <Menu.Item>
            <Menu.Header>User</Menu.Header>
            <Menu.Menu>
                <Menu.Item onClick={onSignOut} link>
                    <Icon name="sign out" />
                    Sign Out
                </Menu.Item>
            </Menu.Menu>
        </Menu.Item>
    );
}
