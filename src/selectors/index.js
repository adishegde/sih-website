/* This file exports the selectors to be used in the app */

export function isAuthenticating(state) {
    return state.reduxTokenAuth.currentUser.isLoading;
}

export function isSignedIn(state) {
    return state.reduxTokenAuth.currentUser.isSignedIn;
}

export function getCurrentUserId(state) {
    return state.reduxTokenAuth.currentUser.attributes.id;
}

export function isUserSuperAdmin(state) {
    return true;
    return state.reduxTokenAuth.currentUser.attributes.role;
}

export function getErrorMessage(state) {
    return state.error;
}

export function getFileList(state) {
    return Object.values(state.files.list);
}

export function getCreatedFileId(state) {
    const { files } = state;
    if (files.loading) return null;

    return files.created;
}

export function getFileWithId(state, id) {
    return state.files.list[id];
}

// Returns true if a request related to file has been sent but response hasn't
// been recieved.
export function isFileLoading(state) {
    return state.files.loading;
}

export function getGroupList(state) {
    return Object.values(state.groups.list);
}

// Returns true if a request related to groups has been sent but
// response hasn't been recieved.
export function isGroupLoading(state) {
    return state.groups.loading;
}

// Returns true if a request related to users has been sent but
// response hasn't been recieved.
export function isUserLoading(state) {
    return state.users.loading;
}

export function getUserList(state) {
    return Object.values(state.users.list);
}

export function getFileHistory(state, id) {
    return state.files.history[id];
}

export function getReportOfUserWithId(state, id) {
    return state.users.report[id];
}

export function getUserWithId(state, id) {
    return state.users.list[id];
}

export function getAuthorityOverGroups(state, id) {
    return state.groups.authority[id];
}

export function getGroupWithIds(state, ids) {
    const { groups: { list } } = state;

    if (!ids) return [];
    return ids.map(id => list[id]);
}

export function getUserWithIds(state, ids) {
    const { users: { list } } = state;

    if (!ids) return [];
    return ids.map(id => list[id]);
}

export function getGroupMembers(state, id) {
    return state.groups.members[id];
}
