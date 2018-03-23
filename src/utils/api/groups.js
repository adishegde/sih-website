// This is the instance of axios created for making requests that require
// authentication
import axios from "utils/api/authRequest";
import { transformResponseData } from "utils/api/transform";

// Only keys that are to be changed is mapped. Other keys will remain as is.
const groupMapping = {
    createdAt: "created_at",
    updatedAt: "updated_at"
};

const transformGroupResponse = transformResponseData(groupMapping);

// Request to get all files of a user
export function getAllGroups() {
    return axios.get("/groups").then(({ data }) => {
        return data.map(item => transformGroupResponse(item));
    });
}
