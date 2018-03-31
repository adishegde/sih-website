import React, { Component } from "react";
import DashboardComponent from "components/Dashboard";
import { connect } from "react-redux";
import { updateFileList } from "actions/files";
import { getFileList } from "selectors/index";
import { updateCurrentUserDetails } from "actions/users";
import {
    getFilesWithPriority,
    getFilesSortedByTimeRecieved
} from "selectors/files";

// Number of files to display of each type
const NUM_ITEMS = 5;

class Dashboard extends Component {
    componentDidMount() {
        const { fetchFileList, fetchUserDetail } = this.props;

        // Fetch files from server
        fetchFileList();
        fetchUserDetail();
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
        },
        fetchUserDetail: () => {
            dispatch(updateCurrentUserDetails());
        }
    };
}

Dashboard = connect(mapStateToProps, mapDispatchToProps)(Dashboard);

export default Dashboard;
