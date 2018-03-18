/* This file exports the reducer to handle updates related to new file creation
*/

import { RECIEVE_CREATE_FILE } from "actions/files";

export default function createFileReducer(state = null, action) {
    switch (action.type) {
        case RECIEVE_CREATE_FILE:
            return action.file.id;
        default:
            return state;
    }
}
