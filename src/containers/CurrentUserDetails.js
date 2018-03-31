import UserDetail from "components/UserDetails";
import { connect } from "react-redux";

function mapStateToProps(state) {
    let user = state.currentUser.user;
    if (!user) user = {};
    return {
        name: user.name,
        email: user.email,
        role: user.role
    };
}

export default connect(mapStateToProps)(UserDetail);
