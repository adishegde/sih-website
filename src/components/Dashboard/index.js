import React from "react";
import { Link } from "react-router-dom";
import { Segment } from "semantic-ui-react";
import FileTable from "./FileTable";

export default function Dashboard({
    highPriority,
    lowPriority,
    mediumPriority
}) {
    return (
        <div align="middle">
            <Segment>
                <FileTable tableName={"High Priority"} files={highPriority} />
                <Link to="#">View All</Link>
            </Segment>
            <Segment>
                <FileTable
                    tableName={"Medium Priority"}
                    files={mediumPriority}
                />
                <Link to="#">View All</Link>
            </Segment>
            <Segment>
                <FileTable tableName={"Low Priority"} files={lowPriority} />
                <Link to="#">View All</Link>
            </Segment>
        </div>
    );
}
