import React, { Component } from "react";
import DashboardComponent from "components/Dashboard";
import { connect } from "react-redux";
import { updateFileList } from "actions/files";
import { getFileList, getCurrentUserId } from "selectors/index";
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

    let highPriority = getFilesSortedByTimeRecieved(
        getFilesWithPriority(files, "high")
    ).slice(0, NUM_ITEMS);
    let mediumPriority = getFilesSortedByTimeRecieved(
        getFilesWithPriority(files, "medium")
    ).slice(0, NUM_ITEMS);
    let lowPriority = getFilesSortedByTimeRecieved(
        getFilesWithPriority(files, "low")
    ).slice(0, NUM_ITEMS);

    const userId = getCurrentUserId(state);

    highPriority = highPriority.filter(file => file.currentOwnerId === userId);
    mediumPriority = mediumPriority.filter(
        file => file.currentOwnerId === userId
    );
    lowPriority = lowPriority.filter(file => file.currentOwnerId === userId);

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
