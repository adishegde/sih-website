// This is the instance of axios created for making requests that require
// authentication
import axios from "utils/api/authRequest";
import { transformResponseData } from "utils/api/transform";

// Only keys that are to be changed is mapped. Other keys will remain as is.
const userMapping = {
    createdAt: "created_at",
    updatedAt: "updated_at"
};

const reportMapping = {
    totalFilesTransferred: "TotalFilesTransferred",
    filesTransferred: "FilesTransferred",
    totalFilesLost: "TotalFilesLost",
    filesLost: "FilesLost",
    totalFilesLegalHold: "TotalFilesLegalHold",
    filesLegalHold: "FilesLegalHold"
};

const transformUserResponse = transformResponseData(userMapping);
const transformReportResponse = transformResponseData(reportMapping);

// Request to create a new user
// data should have name, email and password
export function createUser(userData) {
    return axios
        .post("/users/create", userData)
        .then(({ data }) => transformUserResponse(data));
}

export function addUsersToGroup(users, groupId) {
    return axios.post("/groupuser", { users: users, groupId });
}

export function getAllUsers() {
    return axios
        .get("/users")
        .then(({ data }) => data.map(user => transformUserResponse(user)));
}

export function getUserReport(id) {
    return axios
        .get(`/users/${id}/report`)
        .then(({ data }) => transformReportResponse(data));
}

export function getUser(id) {
    return axios
        .get(`/users/${id}`)
        .then(({ data }) => transformUserResponse(data));
}

export function getGroupMembers(id) {
    return axios
        .get(`/groups/${id}/users`)
        .then(({ data }) => data.map(user => transformUserResponse(user)));
}
