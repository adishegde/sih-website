import * as departmentApi from "utils/api/department";

export const RECIEVE_ALL_DEPARTMENTS = "RECIEVE_ALL_DEPARTMENTS";
export const REQUEST_ALL_DEPARTMENTS = "REQUEST_ALL_DEPARTMENTS";
export const RECIEVE_CREATE_DEPARTMENT = "RECIEVE_CREATE_DEPARTMENT";
export const REQUEST_CREATE_DEPARTMENT = "REQUEST_CREATE_DEPARTMENT";

function requestAllDepartments() {
    return {
        type: REQUEST_ALL_DEPARTMENTS
    };
}

function recieveAllDepartments(departments) {
    return {
        type: RECIEVE_ALL_DEPARTMENTS,
        departments
    };
}

function requestCreateDepartment() {
    return {
        type: REQUEST_CREATE_DEPARTMENT
    };
}

function recieveCreateDepartment(department) {
    return {
        type: RECIEVE_CREATE_DEPARTMENT,
        id: department.id,
        department
    };
}

export function updateAllDepartments() {
    return dispatch => {
        dispatch(requestAllDepartments());

        departmentApi
            .getAllDepartments()
            .then(departments => {
                dispatch(recieveAllDepartments(departments));
            })
            .catch(() => {
                // ignore error
            });
    };
}

export function createDepartment(data, history) {
    return dispatch => {
        dispatch(requestCreateDepartment());

        departmentApi
            .createDepartment(data)
            .then(department => {
                dispatch(recieveCreateDepartment(department));
                history.push(`/department/${department.id}`);
            })
            .catch(() => {
                // ignore errors
            });
    };
}
