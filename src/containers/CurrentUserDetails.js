import UserDetail from "components/UserDetails";
import { connect } from "react-redux";

function mapStateToProps(state) {
    return {
        name: state.currentUser.name,
        email: state.currentUser.email,
        role: state.currentUser.role
    };
}

export default connect(mapStateToProps)(UserDetail);
