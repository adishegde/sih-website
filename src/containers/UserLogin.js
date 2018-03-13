/* This file exports the UserLogin container by connecting the Login component
 * to the store. */

import { connect } from "react-redux";
import Login from "components/Login";
import { signInAndRedirect } from "actions/index";
import { isAuthenticating } from "selectors/index";

function mapStateToProps(state) {
    return {
        isLoading: isAuthenticating(state)
    };
}

function mapDispatchToProps(dispatch, { history }) {
    return {
        onSubmit: credentials => {
            dispatch(signInAndRedirect(credentials, history));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
