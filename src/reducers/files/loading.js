/* This file exports the reducer that handles the state of api requests related
 * files. i.e. if the requests are made but no response has been recieved then
 * true is returned else false */

import {
    REQUEST_CREATE_FILE,
    RECIEVE_CREATE_FILE,
    RECIEVE_ALL_FILES,
    REQUEST_ALL_FILES
} from "actions/files";

export default function loadingReducer(state = false, action) {
    switch (action.type) {
        case REQUEST_CREATE_FILE:
        case REQUEST_ALL_FILES:
            return true;
        case RECIEVE_CREATE_FILE:
        case RECIEVE_ALL_FILES:
            return false;
        default:
            return state;
    }
}