/* This file exports actions related to file list */

import * as fileApi from "utils/api/files";

export const RECIEVE_ALL_FILES = "RECIEVE_ALL_FILES";
export const REQUEST_ALL_FILES = "REQUEST_ALL_FILES";
export const REQUEST_CREATE_FILE = "REQUEST_CREATE_FILE";
export const RECIEVE_CREATE_FILE = "RECIEVE_CREATE_FILE";
export const REQUEST_FILE = "REQUEST_FILE";
export const RECIEVE_FILE = "RECIEVE_FILE";
export const REQUEST_TRANSFER_FILE = "REQUEST_TRANSFER_FILE";
export const RECIEVE_TRANSFER_FILE = "RECIEVE_TRANSFER_FILE";

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

function requestFile(id) {
    return {
        type: REQUEST_FILE,
        id
    };
}

function recieveFile(file) {
    return {
        type: RECIEVE_FILE,
        file
    };
}

function requestTransferFile(id) {
    return {
        type: REQUEST_TRANSFER_FILE,
        id
    };
}

function recieveTransferFile(file) {
    return {
        type: RECIEVE_TRANSFER_FILE,
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

export function createFile(data, history) {
    return dispatch => {
        dispatch(requestCreateFile());

        fileApi
            .createFile(data)
            .then(file => {
                dispatch(recieveCreateFile(file));
                history.push(`/file/${file.id}`);
            })
            .catch(error => {
                // ignore error
            });
    };
}

export function updateFile(id) {
    return dispatch => {
        dispatch(requestFile(id));

        fileApi
            .getFile(id)
            .then(file => {
                dispatch(recieveFile(file));
            })
            .catch(() => {
                // ignore errors
            });
    };
}

export function transferFile(id, transferData) {
    return dispatch => {
        dispatch(requestTransferFile(id));

        fileApi
            .transferFile(id, transferData)
            .then(file => {
                dispatch(recieveTransferFile(file));
            })
            .catch(() => {
                // ignore errors
            });
    };
}
