/* This container ensures that the right page component is rendered
 * depending on the state of authentication by using the RequireSignIn
 * component. If signed in it renders the UserAppRouter component */

import { connect } from "react-redux";
import { isAuthenticating, isSignedIn } from "selectors/index";
import UserAppRouter from "components/UserAppRouter/index";

function mapStateToProps(state) {
    return {
        isAuthenticating: isAuthenticating(state),
        isSignedIn: isSignedIn(state)
    };
}

export default connect(mapStateToProps)(UserAppRouter);
