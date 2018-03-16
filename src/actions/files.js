/* This file exports actions related to file list */

import { getAllFiles } from "utils/api/files";

export const RECIEVE_ALL_FILES = "RECIEVE_ALL_FILES";
export const REQUEST_ALL_FILES = "REQUEST_ALL_FILES";

function recieveAllFiles(files) {
    return {
        type: RECIEVE_ALL_FILES,
        files
    };
}

function requestAllFiles() {
    return {
        type: REQUEST_ALL_FILES
    };
}

export function updateFileList() {
    return dispatch => {
        dispatch(requestAllFiles());

        getAllFiles()
            .then(files => {
                dispatch(recieveAllFiles(files));
            })
            .catch(error => {
                // ignore error
            });
    };
}
