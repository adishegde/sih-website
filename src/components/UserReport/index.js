import React from "react";
import { Segment, Header } from "semantic-ui-react";
import FileTable from "./FileTable";
import Statistics from "./Statistics";

export default function UserReport({
    userName,
    totalFilesTransferred,
    totalFilesLost,
    totalFilesLegalHold,
    filesTransferred,
    filesLost,
    filesLegalHold
}) {
    let fileTables = null;
    if (
        (filesTransferred && filesTransferred.length) ||
        (filesLost && filesLost.length) ||
        (filesLegalHold && filesLegalHold.length)
    )
        fileTables = (
            <Segment>
                <FileTable
                    files={filesTransferred}
                    tableName="Files Transferred"
                />
                <FileTable
                    files={filesLegalHold}
                    tableName="Files Legally Held"
                />
                <FileTable files={filesLost} tableName="Files Lost" />
            </Segment>
        );

    return (
        <div className="userReport">
            <Segment basic align="middle">
                <Header as="h3">{`Report for ${userName}`}</Header>
            </Segment>
            <Segment align="middle">
                <Statistics
                    totalFilesLost={totalFilesLost}
                    totalFilesLegalHold={totalFilesLegalHold}
                    totalFilesTransferred={totalFilesTransferred}
                />
            </Segment>
            {fileTables}
        </div>
    );
}
