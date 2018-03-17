import React from "react";
import FileTable from "./FileTable";

export default function Dashboard({ files }) {
    return <FileTable tableName={"All Files"} files={files} />;
}
