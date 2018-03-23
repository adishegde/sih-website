/* This file exports actions related to groups */

import * as groupApi from "utils/api/groups";

export const RECIEVE_ALL_GROUPS = "RECIEVE_ALL_GROUPS";
export const REQUEST_ALL_GROUPS = "REQUEST_ALL_GROUPS";

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
