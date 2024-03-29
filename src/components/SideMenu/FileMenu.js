/* This file exports the FileMenu component to be used with the SideMenu
 * component. It contains options related to files. */

import React from "react";
import { Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import RecieveModal from "containers/FilePage/RecieveModal";

export default function FileMenu() {
    return (
        <Menu.Item>
            <Menu.Header>File</Menu.Header>
            <Menu.Menu>
                <Menu.Item name="createFile" as={NavLink} to="/file/create">
                    <Icon name="add circle" />
                    Create File
                </Menu.Item>
                <Menu.Item name="allFiles" as={NavLink} to="/file" exact>
                    <Icon name="file text" />
                    All Files
                </Menu.Item>
                <RecieveModal />
            </Menu.Menu>
        </Menu.Item>
    );
}
