/* This file exports the admin menu. It should be visible only to
 * superadmin (as defined on backend) */

import React from "react";
import { Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

export default function AdminMenu({ isAdmin }) {
    // If not admin, do not render AdminMenu
    if (!isAdmin) return null;

    return (
        <Menu.Item>
            <Menu.Header>Admin</Menu.Header>
            <Menu.Menu>
                <Menu.Item
                    name="createUser"
                    as={NavLink}
                    to="/admin/user/create"
                >
                    <Icon name="add user" />
                    Create Dispatch User
                </Menu.Item>
                <Menu.Item
                    name="createSection"
                    as={NavLink}
                    to="/admin/section/create"
                >
                    <Icon name="add square" />
                    Create Section
                </Menu.Item>
                <Menu.Item
                    name="createDepartment"
                    as={NavLink}
                    to="/admin/department/create"
                >
                    <Icon name="add square" />
                    Create Department
                </Menu.Item>
            </Menu.Menu>
        </Menu.Item>
    );
}
