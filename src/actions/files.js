/* This file exports actions related to file list */

import * as fileApi from "utils/api/files";

export const RECIEVE_ALL_FILES = "RECIEVE_ALL_FILES";
export const REQUEST_ALL_FILES = "REQUEST_ALL_FILES";
export const REQUEST_CREATE_FILE = "REQUEST_CREATE_FILE";
export const RECIEVE_CREATE_FILE = "RECIEVE_CREATE_FILE";

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

function requestCreateFile() {
    return {
        type: REQUEST_CREATE_FILE
    };
}

function recieveCreateFile(file) {
    return {
        type: RECIEVE_CREATE_FILE,
        file
    };
}

export function updateFileList() {
    return dispatch => {
        dispatch(requestAllFiles());

        fileApi
            .getAllFiles()
            .then(files => {
                dispatch(recieveAllFiles(files));
            })
            .catch(error => {
                // ignore error
            });
    };
}

export function createFile(data) {
    return dispatch => {
        dispatch(requestCreateFile());

        fileApi
            .createFile(data)
            .then(file => {
                dispatch(recieveCreateFile(file));
            })
            .catch(error => {
                // ignore error
            });
    };
}
