/* This file exports the reducer to handle error state. It updates the error
 * message in the state depening on the action dispatched. This error messages
 * can be used accordingly depending on the context */

export default function errorReducer(state = "", action) {
    switch (action.type) {
        // This action is dispatched in case of invalid credentials for login
        case "redux-token-auth/SIGNIN_REQUEST_FAILED":
            return "Wrong Password. Recheck Email and Password.";

        default:
            return state;
    }
}
