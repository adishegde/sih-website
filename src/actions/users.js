/* This file exports actions related to groups */

import * as userApi from "utils/api/users";

export const RECIEVE_CREATE_USER = "RECIEVE_CREATE_USER";
export const REQUEST_CREATE_USER = "REQUEST_CREATE_USER";
export const RECIEVE_ALL_USERS = "RECIEVE_ALL_USERS";
export const REQUEST_ALL_USERS = "REQUEST_ALL_USERS";

function recieveAllUsers(users) {
    return {
        type: RECIEVE_ALL_USERS,
        users
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
