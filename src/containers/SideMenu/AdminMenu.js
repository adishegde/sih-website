/* This file exports the AdminMenu file after connecting it to the store. */

import { connect } from "react-redux";
import AdminMenu from "components/SideMenu/AdminMenu";
import { isUserSuperAdmin } from "selectors/index";

function mapStateToProps(state) {
    return {
        isAdmin: isUserSuperAdmin(state)
    };
}

export default connect(mapStateToProps)(AdminMenu);
