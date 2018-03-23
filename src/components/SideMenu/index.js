/* This component exports the side menu for the app. The menu provides options
 * for accessing the features provided by the app. */

import React from "react";
import { Menu, Icon } from "semantic-ui-react";
import { WebsiteName } from "utils/resources";
import { Link } from "react-router-dom";
import FileMenu from "./FileMenu";
import UserMenu from "containers/SideMenu/UserMenu";
import AdminMenu from "containers/SideMenu/AdminMenu";

export default function SideMenu({ isAdmin }) {
    return (
        <Menu fixed="left" style={{ width: "250px" }} inverted vertical>
            <Menu.Item header style={{ fontSize: "18px" }}>
                {WebsiteName}
            </Menu.Item>
            <UserMenu />
            <Menu.Item>
                <Icon name="dashboard" />
                <Link to="/">Dashboard</Link>
            </Menu.Item>
            <FileMenu />
            <AdminMenu />
        </Menu>
    );
}
