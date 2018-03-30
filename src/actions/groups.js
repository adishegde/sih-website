/* This file exports actions related to groups */

import * as groupApi from "utils/api/groups";
import * as userApi from "utils/api/users";

export const RECIEVE_ALL_GROUPS = "RECIEVE_ALL_GROUPS";
export const REQUEST_ALL_GROUPS = "REQUEST_ALL_GROUPS";
export const RECIEVE_CREATE_GROUP = "RECIEVE_CREATE_GROUP";
export const REQUEST_CREATE_GROUP = "REQUEST_CREATE_GROUP";
export const RECIEVE_GROUP_MEMBERS = "RECIEVE_GROUP_MEMBERS";
export const REQUEST_GROUP_MEMBERS = "REQUEST_GROUP_MEMBERS";

function recieveAllGroups(groups) {
    return {
        type: RECIEVE_ALL_GROUPS,
        groups
    };
}

function requestAllGroups() {
    return {
        type: REQUEST_ALL_GROUPS
    };
}

function recieveCreateGroup(group) {
    return {
        type: RECIEVE_CREATE_GROUP,
        group
    };
}

function requestCreateGroup() {
    return {
        type: REQUEST_CREATE_GROUP
    };
}

function requestGroupMembers(id) {
    return {
        type: REQUEST_GROUP_MEMBERS,
        id
    };
}

function recieveGroupMembers(id, users) {
    return {
        type: RECIEVE_GROUP_MEMBERS,
        id,
        users
    };
}

export function updateGroupList() {
    return dispatch => {
        dispatch(requestAllGroups());

        groupApi
            .getAllGroups()
            .then(groups => {
                dispatch(recieveAllGroups(groups));
            })
            .catch(error => {
                //ignore
            });
    };
}

export function createGroup(data, history) {
    return async dispatch => {
        dispatch(requestCreateGroup());
        const { name, users, authorityOver, isDepartment } = data;
        const createGroupData = { name, isDepartment };

        try {
            const group = await groupApi.createGroup(createGroupData);

            const requests = [];

            if (authorityOver.length !== 0) {
                requests.push(
                    groupApi.updateAuthority(authorityOver, group.id)
                );
            }

            if (users.length !== 0) {
                requests.push(userApi.addUsersToGroup(users, group.id));
            }

            await Promise.all(requests);

            dispatch(recieveCreateGroup(group));
            history.push(`/admin/group/${group.id}`);
        } catch (error) {
            // ignore
        }
    };
}

export function updateGroupMembers(id) {
    return dispatch => {
        dispatch(requestGroupMembers(id));

        userApi
            .getGroupMembers(id)
            .then(users => {
                dispatch(recieveGroupMembers(id, users));
            })
            .catch(() => {
                // ignore errors
            });
    };
}
