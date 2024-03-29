/* This file exports actions related to groups */

import * as userApi from "utils/api/users";
import * as groupApi from "utils/api/groups";
import { getCurrentUserId } from "selectors/index";

export const RECIEVE_CREATE_USER = "RECIEVE_CREATE_USER";
export const REQUEST_CREATE_USER = "REQUEST_CREATE_USER";
export const RECIEVE_ALL_USERS = "RECIEVE_ALL_USERS";
export const REQUEST_ALL_USERS = "REQUEST_ALL_USERS";
export const RECIEVE_USER_REPORT = "RECIEVE_USER_REPORT";
export const REQUEST_USER_REPORT = "REQUEST_USER_REPORT";
export const RECIEVE_USER = "RECIEVE_USER";
export const REQUEST_USER = "REQUEST_USER";
export const RECIEVE_AUTHORITY_OVER_GROUPS = "RECIEVE_AUTHORITY_OVER_GROUPS";
export const REQUEST_AUTHORITY_OVER_GROUPS = "REQUEST_AUTHORITY_OVER_GROUPS";
export const RECIEVE_CURRENT_USER = "RECIEVE_CURRENT_USER";
export const REQUEST_CURRENT_USER = "REQUEST_CURRENT_USER";

function recieveAllUsers(users) {
    return {
        type: RECIEVE_ALL_USERS,
        users
    };
}

function requestCurrentUserDetails() {
    return {
        type: REQUEST_CURRENT_USER
    };
}

function receiveCurrentUserDetails(user) {
    return {
        type: RECIEVE_CURRENT_USER,
        user
    };
}

function requestAllUsers() {
    return {
        type: REQUEST_ALL_USERS
    };
}

function requestCreateUser() {
    return {
        type: REQUEST_CREATE_USER
    };
}

function recieveCreateUser(user) {
    return {
        type: RECIEVE_CREATE_USER,
        user
    };
}

function requestUserReport(id) {
    return {
        type: REQUEST_USER_REPORT,
        id
    };
}

function recieveUserReport(id, report) {
    return {
        type: RECIEVE_USER_REPORT,
        report,
        id
    };
}

function requestUser(id) {
    return {
        type: REQUEST_USER,
        id
    };
}

function recieveUser(id, user) {
    return {
        type: RECIEVE_USER,
        id,
        user
    };
}

function requestAuthorityOverGroups(id) {
    return {
        type: REQUEST_AUTHORITY_OVER_GROUPS,
        id
    };
}

function recieveAuthorityOverGroups(id, groups) {
    return {
        type: RECIEVE_AUTHORITY_OVER_GROUPS,
        id,
        groups
    };
}

// Data should have name, email and password. It can also have groups and
// department
export function createUser(data, history) {
    return async dispatch => {
        dispatch(requestCreateUser());

        const { name, email, groups, department, password } = data;
        const createUserData = { name, email, password };

        try {
            const user = await userApi.createUser(createUserData);

            let addGroupRequests = [];

            if (groups)
                addGroupRequests = groups.map(groupId =>
                    userApi.addUsersToGroup([user.id], groupId)
                );

            if (department)
                addGroupRequests.push(
                    userApi.addUsersToGroup([user.id], department)
                );

            await Promise.all(addGroupRequests);

            dispatch(recieveCreateUser(user));
            history.push(`/admin/user/${user.id}`);
        } catch (error) {
            // ignore
        }
    };
}

export function updateUserList() {
    return dispatch => {
        dispatch(requestAllUsers());

        userApi
            .getAllUsers()
            .then(users => {
                dispatch(recieveAllUsers(users));
            })
            .catch(error => {
                // ignore error
            });
    };
}

export function updateUserReport(id) {
    return dispatch => {
        dispatch(requestUserReport(id));

        userApi
            .getUserReport(id)
            .then(report => {
                dispatch(recieveUserReport(id, report));
            })
            .catch(() => {
                // ignore errors
            });
    };
}

export function updateUser(id) {
    return dispatch => {
        dispatch(requestUser(id));

        userApi
            .getUser(id)
            .then(user => {
                dispatch(recieveUser(id, user));
            })
            .catch(() => {
                // ignore errors
            });
    };
}

export function updateAuthorityOverGroups(id) {
    return dispatch => {
        dispatch(requestAuthorityOverGroups(id));

        groupApi
            .getAuthorityOverGroups(id)
            .then(groups => {
                dispatch(recieveAuthorityOverGroups(id, groups));
            })
            .catch(() => {
                // ignore errors
            });
    };
}

export function updateAuthorityOverGroupsCurrentUser() {
    return (dispatch, getState) => {
        dispatch(updateAuthorityOverGroups(getCurrentUserId(getState())));
    };
}

export function updateCurrentUserDetails() {
    return (dispatch, getState) => {
        const currentUserId = getCurrentUserId(getState());
        dispatch(requestCurrentUserDetails());

        userApi
            .getUser(currentUserId)
            .then(user => {
                dispatch(receiveCurrentUserDetails(user));
            })
            .catch(() => {
                // ignore error
            });
    };
}
