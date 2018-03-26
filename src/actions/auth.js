/* This file exports the action creators to be used everywhere else. */

import { signInUser, signOutUser } from "actions/redux-token-auth";

// This function is used to signIn and redirect to dashboard if successful
export function signInAndRedirect(credentials, history) {
    return dispatch => {
        dispatch(signInUser(credentials))
            .then(() => {
                // If successful redirect to dashboard
                history.push("/");
            })
            .catch(err => {
                // The error reducer for auth will handle errors
            });
    };
}

// This signs out user and also clears localStorage
export function signOut() {
    return dispatch => {
        dispatch(signOutUser());
        localStorage.clear();
    };
}
