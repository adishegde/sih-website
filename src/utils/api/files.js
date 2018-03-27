/* This file exports the functions to make API requests. Currently the
 * following functions are exported: */

// This is the instance of axios created for making requests that require
// authentication
import axios from "utils/api/authRequest";
import { transformResponseData } from "utils/api/transform";

// Only keys that are to be changed is mapped. Other keys will remain as is.
const fileMapping = {
    createdAt: "created_at",
    updatedAt: "updated_at",
    createdById: "created_by_id",
    currentOwnerId: "currentOwner_id"
};

const historyMapping = {
    createdAt: "created_at",
    updatedAt: "updated_at",
    changedBy: "users",
    statusFrom: "status_from",
    statusTo: "status_to",
    changeTime: "change_time"
};

const transformFileResponse = transformResponseData(fileMapping);
const transformHistoryResponse = transformResponseData(historyMapping);

// Request to get all files of a user
export function getAllFiles() {
    return axios.get("/file").then(({ data }) => {
        return data.map(item => transformFileResponse(item));
    });
}

// Request to create a new file
export function createFile(data) {
    return axios
        .post("/file", data)
        .then(({ data }) => transformFileResponse(data));
}

// Get individual file
export function getFile(id) {
    return axios.get(`/file/${id}`).then(({ data }) => {
        return transformFileResponse(data);
    });
}

// Request transfer of file
export function transferFile(id, transferData) {
    return axios
        .patch(`/file/${id}`, {
            mode: "transfer",
            ...transferData
        })
        .then(({ data }) => transformFileResponse(data));
}

// Request file history
export function getFileHistory(id) {
    return axios
        .get(`/file/${id}/history`)
        .then(({ data }) =>
            data.map(history => transformHistoryResponse(history))
        );
}

export function updateFile(id, file) {
    return axios
        .patch(`/file/${id}`, {
            mode: "update",
            ...file
        })
        .then(({ data }) => transformFileResponse(data));
}
