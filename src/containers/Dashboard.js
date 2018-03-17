import React, { Component } from "react";
import DashboardComponent from "components/Dashboard/index";
import { connect } from "react-redux";
import { updateFileList } from "actions/files";
import { getFileList } from "selectors/index";

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
    return {
        files: getFileList(state)
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
