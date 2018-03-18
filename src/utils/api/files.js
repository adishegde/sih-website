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

const transformFileResponse = transformResponseData(fileMapping);

// Request to get all files of a user
export function getAllFiles() {
    return axios.get("/file").then(({ data }) => {
        return data.map(item => transformFileResponse(item));
    });
}

export function createFile(data) {
    return axios
        .post("/file", data)
        .then(({ data }) => transformFileResponse(data));
}
