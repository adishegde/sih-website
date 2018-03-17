/* This file exports the selectors to be used in the app */

export function isAuthenticating(state) {
    return state.reduxTokenAuth.currentUser.isLoading;
}

export function isSignedIn(state) {
    return state.reduxTokenAuth.currentUser.isSignedIn;
}

export function getErrorMessage(state) {
    return state.error;
}

export function getFileList(state) {
    return state.files;
}
