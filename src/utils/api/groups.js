// This is the instance of axios created for making requests that require
// authentication
import axios from "utils/api/authRequest";
import { transformResponseData } from "utils/api/transform";

// Only keys that are to be changed is mapped. Other keys will remain as is.
const groupMapping = {
    createdAt: "created_at",
    updatedAt: "updated_at",
    deptId: "dept_id"
};

const transformGroupResponse = transformResponseData(groupMapping);

// Request to get all groups
export function getAllGroups() {
    return axios
        .get("/groups")
        .then(({ data }) => data.map(item => transformGroupResponse(item)));
}

// Request to create a new group
// data should have name and isDepartment
export function createGroup(groupData) {
    return axios
        .post("/groups", groupData)
        .then(({ data }) => transformGroupResponse(data));
}

export function updateAuthority(groups, group_id) {
    return axios.post("/groupgroup", {
        authorityOver: groups,
        group_id
    });
}

export function getAuthorityOverGroups(id) {
    return axios
        .get(`/users/${id}/authorityover`)
        .then(({ data }) => data.map(group => transformGroupResponse(group)));
}

export function getGroupsOfUser(id) {
    return axios
        .get(`/users/${id}/groups`)
        .then(({ data }) => data.map(group => transformGroupResponse(group)));
}
