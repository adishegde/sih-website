/* This file exports the reducer that handles the state of api requests related
 * files. i.e. if the requests are made but no response has been recieved then
 * true is returned else false */

import {
    REQUEST_CREATE_FILE,
    RECIEVE_CREATE_FILE,
    RECIEVE_ALL_FILES,
    REQUEST_ALL_FILES,
    REQUEST_FILE,
    RECIEVE_FILE,
    REQUEST_TRANSFER_FILE,
    RECIEVE_TRANSFER_FILE
} from "actions/files";

export default function loadingReducer(state = false, action) {
    switch (action.type) {
        case REQUEST_CREATE_FILE:
        case REQUEST_ALL_FILES:
        case REQUEST_FILE:
        case REQUEST_TRANSFER_FILE:
            return true;

        case RECIEVE_CREATE_FILE:
        case RECIEVE_ALL_FILES:
        case RECIEVE_FILE:
        case RECIEVE_TRANSFER_FILE:
            return false;

        default:
            return state;
    }
}
