/* This file exports the reducer that handles the state of list of files */

import { RECIEVE_ALL_FILES } from "actions/files";

export default function filesReducer(state = [], action) {
    switch (action.type) {
        case RECIEVE_ALL_FILES:
            return [...action.files];
        default:
            return state;
    }
}
