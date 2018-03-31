import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import RecieveModal from "components/RecieveModal";
import { getFile } from "actions/files";

function mapDispatchToProps(dispatch, { match: { params } }) {
    return {
        onQRCodeScan: ({ qrcode, nextNode }) => {
            const id = atob(qrcode).slice(5);
            dispatch(getFile(id, nextNode));
        }
    };
}

export default withRouter(connect(null, mapDispatchToProps)(RecieveModal));
