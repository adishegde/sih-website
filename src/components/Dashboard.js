import React from "react";
import { Link } from "react-router-dom";
import { Segment, Message } from "semantic-ui-react";
import FileTable from "components/FileTable/index";
import CurrentUserDetail from "containers/CurrentUserDetails";

export default function Dashboard({
    highPriority,
    lowPriority,
    mediumPriority
}) {
    return (
        <div align="middle">
            <CurrentUserDetail />
            <Segment>
                <FileTable tableName={"High Priority"} files={highPriority} />
                {!highPriority || !highPriority.length ? (
                    <Message
                        error
                        content="You don't have pending files in this category"
                    />
                ) : null}
                <Link to="/file?priority=high">View All</Link>
            </Segment>
            <Segment>
                <FileTable
                    tableName={"Medium Priority"}
                    files={mediumPriority}
                />
                {!mediumPriority || !mediumPriority.length ? (
                    <Message
                        error
                        content="You don't have pending files in this category"
                    />
                ) : null}
                <Link to="/file?priority=medium">View All</Link>
            </Segment>
            <Segment>
                <FileTable tableName={"Low Priority"} files={lowPriority} />
                {!lowPriority || !lowPriority.length ? (
                    <Message
                        error
                        content="You don't have pending files in this category"
                    />
                ) : null}
                <Link to="/file?priority=low">View All</Link>
            </Segment>
        </div>
    );
}
