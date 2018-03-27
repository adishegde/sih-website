import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { updateFileHistory } from "actions/files";
import HistoryModal from "components/FilePage/HistoryModal/index";
import { getFileHistory } from "selectors/index";

function mapStateToProps(state, { match: { params } }) {
    return {
        historyList: getFileHistory(state, params.id)
    };
}

function mapDispatchToProps(dispatch, { match: { params } }) {
    return {
        onModalMount: () => {
            dispatch(updateFileHistory(params.id));
        }
    };
}

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(HistoryModal)
);
