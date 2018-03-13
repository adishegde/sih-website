/* This file exports the selectors to be used in the app */

export function isAuthenticating(state) {
    return state.reduxTokenAuth.currentUser.isLoading;
}
