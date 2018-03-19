/* This file exports the UserMenu component after passing the appropriate */

import { connect } from "react-redux";
import UserMenu from "components/SideMenu/UserMenu";
import { signOutUser } from "actions/redux-token-auth";

function mapDispatchToProps(dispatch) {
    return {
        onSignOut: () => {
            dispatch(signOutUser());
        }
    };
}

export default connect(null, mapDispatchToProps)(UserMenu);
