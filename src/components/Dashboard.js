import React from "react";
import { Link } from "react-router-dom";
import { Segment } from "semantic-ui-react";
import FileTable from "components/FileTable/index";

export default function Dashboard({
    highPriority,
    lowPriority,
    mediumPriority
}) {
    return (
        <div align="middle">
            <Segment>
                <FileTable tableName={"High Priority"} files={highPriority} />
                <Link to="/file?priority=high">View All</Link>
            </Segment>
            <Segment>
                <FileTable
                    tableName={"Medium Priority"}
                    files={mediumPriority}
                />
                <Link to="/file?priority=medium">View All</Link>
            </Segment>
            <Segment>
                <FileTable tableName={"Low Priority"} files={lowPriority} />
                <Link to="/file?priority=low">View All</Link>
            </Segment>
        </div>
    );
}
