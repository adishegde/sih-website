import React, { Component } from "react";
import DashboardComponent from "components/Dashboard/index";
import { connect } from "react-redux";
import { updateFileList } from "actions/files";
import { getFileList } from "selectors/index";
import {
    getFilesWithPriority,
    getFilesSortedByTimeRecieved
} from "selectors/files";

// Number of files to display of each type
const NUM_ITEMS = 5;

class Dashboard extends Component {
    componentDidMount() {
        const { fetchFileList } = this.props;

        // Fetch files from server
        fetchFileList();
    }

    render() {
        // Render DashboardComponent with same props
        return <DashboardComponent {...this.props} />;
    }
}

function mapStateToProps(state) {
    const files = getFileList(state);

    const highPriority = getFilesSortedByTimeRecieved(
        getFilesWithPriority(files, "high")
    ).slice(0, NUM_ITEMS);
    const mediumPriority = getFilesSortedByTimeRecieved(
        getFilesWithPriority(files, "medium")
    ).slice(0, NUM_ITEMS);
    const lowPriority = getFilesSortedByTimeRecieved(
        getFilesWithPriority(files, "low")
    ).slice(0, NUM_ITEMS);

    return {
        highPriority,
        lowPriority,
        mediumPriority
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchFileList: () => {
            dispatch(updateFileList());
        }
    };
}

Dashboard = connect(mapStateToProps, mapDispatchToProps)(Dashboard);

export default Dashboard;