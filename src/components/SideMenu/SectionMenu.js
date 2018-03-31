import React from "react";
import { Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

export default function AdminMenu({ isAdmin }) {
    return (
        <Menu.Item>
            <Menu.Header>Section</Menu.Header>
            <Menu.Menu>
                <Menu.Item name="mySections" as={NavLink} to="/section">
                    <Icon name="" />
                    Sections
                </Menu.Item>
                <Menu.Item name="sectionHead" as={NavLink} to="/section/head">
                    <Icon name="add square" />
                    Section Head
                </Menu.Item>
            </Menu.Menu>
        </Menu.Item>
    );
}
