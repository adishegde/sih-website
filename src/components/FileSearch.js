/* This component provides the UI for searching among file list. It takes the
 * following props:
 *  - name: The string value used to match the names
 *  - priority: The priority value used to search
 *  - onChange: The function to be called when a search parameter changes
 *  - files: The list of files to display */

import React from "react";
import { Menu, Input, Select } from "semantic-ui-react";
import FileTable from "components/FileTable/index";

const options = [
    { key: 1, text: "all", value: "all" },
    { key: 2, text: "low", value: "low" },
    { key: 3, text: "medium", value: "medium" },
    { key: 4, text: "high", value: "high" }
];

export default function FileSearch({ name, priority, onChange, files }) {
    return (
        <div className="file-search-menu">
            <Menu>
                <Menu.Item>
                    <Input
                        icon="search"
                        name="name"
                        onChange={onChange}
                        value={name}
                        placeholder="Name of file"
                    />
                </Menu.Item>
                <Menu.Item>
                    <Select
                        value={priority}
                        onChange={onChange}
                        name="priority"
                        options={options}
                    />
                </Menu.Item>
            </Menu>
            <FileTable tableName={"Search Results"} files={files} />
        </div>
    );
}
