/* This file exports actions related to groups */

import * as groupApi from "utils/api/groups";
import * as userApi from "utils/api/users";
import { getCurrentUserId } from "selectors/index";

export const RECIEVE_ALL_GROUPS = "RECIEVE_ALL_GROUPS";
export const REQUEST_ALL_GROUPS = "REQUEST_ALL_GROUPS";
export const RECIEVE_CREATE_GROUP = "RECIEVE_CREATE_GROUP";
export const REQUEST_CREATE_GROUP = "REQUEST_CREATE_GROUP";
export const RECIEVE_GROUP_MEMBERS = "RECIEVE_GROUP_MEMBERS";
export const REQUEST_GROUP_MEMBERS = "REQUEST_GROUP_MEMBERS";
export const RECIEVE_CREATE_SECTION = "RECIEVE_CREATE_SECTION";
export const REQUEST_CREATE_SECTION = "REQUEST_CREATE_SECTION";
export const RECIEVE_CURRENT_USER_GROUPS = "RECIEVE_CURRENT_USER_GROUP";

function recieveAllGroups(groups) {
    return {
        type: RECIEVE_ALL_GROUPS,
        groups
    };
}

function recieveCurrentUserGroups(groups) {
    return {
        type: RECIEVE_CURRENT_USER_GROUPS,
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

function recieveCreateSection(section, sectionHead) {
    return {
        type: RECIEVE_CREATE_SECTION,
        section,
        sectionHead
    };
}

function requestCreateSection() {
    return {
        type: REQUEST_CREATE_SECTION
    };
}

export function updateGroupList() {
    return dispatch => {
        dispatch(requestAllGroups());

        return groupApi
            .getAllGroups()
            .then(groups => {
                dispatch(recieveAllGroups(groups));
                return groups;
            })
            .catch(error => {
                //ignore
            });
    };
}

export function createGroup(data) {
    return async dispatch => {
        dispatch(requestCreateGroup());
        const { name, users, authorityOver, isDepartment, dept_id } = data;
        const createGroupData = { name, isDepartment, dept_id };

        try {
            const group = await groupApi.createGroup(createGroupData);

            const requests = [];

            if (authorityOver && authorityOver.length !== 0) {
                requests.push(
                    groupApi.updateAuthority(authorityOver, group.id)
                );
            }

            if (users && users.length !== 0) {
                requests.push(userApi.addUsersToGroup(users, group.id));
            }

            await Promise.all(requests);

            dispatch(recieveCreateGroup(group));

            return group;
        } catch (error) {
            // ignore
            console.log(error);
        }
    };
}

export function updateGroupMembers(id) {
    return dispatch => {
        dispatch(requestGroupMembers(id));

        return userApi
            .getGroupMembers(id)
            .then(users => {
                dispatch(recieveGroupMembers(id, users));
                return users;
            })
            .catch(() => {
                // ignore errors
            });
    };
}

export function createSection(
    { users, name, department, sectionHeads },
    history
) {
    return async dispatch => {
        dispatch(requestCreateSection());

        try {
            const section = await dispatch(
                createGroup({
                    name,
                    users,
                    isDepartment: true,
                    dept_id: department
                })
            );
            const sectionHead = await dispatch(
                createGroup({
                    name: `${name} Head`,
                    users: sectionHeads,
                    authorityOver: [section.id],
                    isDepartment: false,
                    dept_id: department
                })
            );

            dispatch(recieveCreateSection(section, sectionHead));
            history.push(`/sections/${section.id}`);
        } catch (err) {
            // ignore errors
        }
    };
}

export function updateGroupsOfCurrentUser() {
    return (dispatch, getState) => {
        const userId = getCurrentUserId(getState());

        groupApi
            .getGroupsOfUser(userId)
            .then(groups => {
                dispatch(recieveCurrentUserGroups(groups));
            })
            .catch(() => {
                // ignore errors
            });
    };
}
