import axios from "utils/api/authRequest";
import { transformResponseData } from "utils/api/transform";

// Only keys that are to be changed is mapped. Other keys will remain as is.
const departmentMapping = {
    createdAt: "created_at",
    updatedAt: "updated_at",
    headId: "head_id"
};

const transformDepartmentResponse = transformResponseData(departmentMapping);

export function getAllDepartments() {
    return axios.get("/departments").then(({ data }) => {
        return data.map(item => transformDepartmentResponse(item));
    });
}

export function createDepartment(data) {
    return axios
        .post("/departments", data)
        .then(({ data }) => transformDepartmentResponse(data));
}
