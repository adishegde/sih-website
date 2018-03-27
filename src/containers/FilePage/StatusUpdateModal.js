import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import StatusUpdateModal from "components/FilePage/StatusUpdateModal";
import { updateFileStatus } from "actions/files";

function mapDispatchToProps(dispatch, { match: { params } }) {
    return {
        onUpdateStatus: ({ status }) => {
            dispatch(updateFileStatus(params.id, status));
        }
    };
}

export default withRouter(connect(null, mapDispatchToProps)(StatusUpdateModal));
