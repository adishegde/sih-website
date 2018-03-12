/* This component exports the side menu for the app. The menu provides options
 * for accessing the features provided by the app. */

import React from "react";
import { Menu } from "semantic-ui-react";
import { WebsiteName } from "utils/resources";

export default function SideMenu() {
    return (
        <Menu fixed="left" style={{ width: "250px" }} inverted vertical>
            <Menu.Item header style={{ fontSize: "18px" }}>
                {WebsiteName}
            </Menu.Item>
        </Menu>
    );
}
