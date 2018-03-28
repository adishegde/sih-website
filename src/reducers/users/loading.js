/* This file exports the reducer that handles the state of api requests related
 * users. i.e. if the requests are made but no response has been recieved then
 * true is returned else false */

import {
    RECIEVE_ALL_USERS,
    REQUEST_ALL_USERS,
    REQUEST_CREATE_USER,
    RECIEVE_CREATE_USER,
    REQUEST_USER_REPORT,
    RECIEVE_USER_REPORT,
    RECIEVE_USER,
    REQUEST_USER
} from "actions/users";

export default function loadingReducer(state = false, action) {
    switch (action.type) {
        case REQUEST_CREATE_USER:
        case REQUEST_ALL_USERS:
        case REQUEST_USER_REPORT:
        case REQUEST_USER:
            return true;

        case RECIEVE_CREATE_USER:
        case RECIEVE_ALL_USERS:
        case RECIEVE_USER_REPORT:
        case RECIEVE_USER:
            return false;

        default:
            return state;
    }
}
