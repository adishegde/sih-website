/* This file exports the UserMenu component after passing the appropriate */

import { connect } from "react-redux";
import UserMenu from "components/SideMenu/UserMenu";
import { signOut } from "actions/auth";

function mapDispatchToProps(dispatch) {
    return {
        onSignOut: () => {
            dispatch(signOut());
        }
    };
}

export default connect(null, mapDispatchToProps)(UserMenu);
