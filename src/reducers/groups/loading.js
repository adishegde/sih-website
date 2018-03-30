/* This file exports the reducer that handles the state of api requests related
 * to groups. i.e. if the requests are made but no response has been recieved
 * then true is returned else false */

import {
    RECIEVE_ALL_GROUPS,
    REQUEST_ALL_GROUPS,
    REQUEST_GROUP_MEMBERS,
    RECIEVE_GROUP_MEMBERS
} from "actions/groups";

export default function loadingReducer(state = false, action) {
    switch (action.type) {
        case REQUEST_ALL_GROUPS:
        case REQUEST_GROUP_MEMBERS:
            return true;

        case RECIEVE_ALL_GROUPS:
        case RECIEVE_GROUP_MEMBERS:
            return false;

        default:
            return state;
    }
}
