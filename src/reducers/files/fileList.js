/* This file exports the reducer that handles the state of list of files */

import {
    RECIEVE_ALL_FILES,
    RECIEVE_CREATE_FILE,
    RECIEVE_FILE,
    RECIEVE_TRANSFER_FILE,
    RECIEVE_UPDATE_FILE_STATUS,
    RECIEVE_RECIEVE_FILE
} from "actions/files";

export default function fileListReducer(state = {}, action) {
    switch (action.type) {
        case RECIEVE_ALL_FILES:
            return action.files.reduce((acc, file) => {
                acc[file.id] = file;
                return acc;
            }, {});

        case RECIEVE_CREATE_FILE:
        case RECIEVE_TRANSFER_FILE:
        case RECIEVE_UPDATE_FILE_STATUS:
        case RECIEVE_RECIEVE_FILE:
        case RECIEVE_FILE:
            return { ...state, [action.file.id]: action.file };

        default:
            return state;
    }
}
