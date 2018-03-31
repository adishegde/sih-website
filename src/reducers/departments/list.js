import { RECIEVE_ALL_DEPARTMENTS } from "actions/departments";

export default function departmentListReducer(state = {}, action) {
    switch (action.type) {
        case RECIEVE_ALL_DEPARTMENTS:
            return action.departments.reduce((acc, dept) => {
                acc[dept.id] = dept;
                return acc;
            }, {});

        default:
            return state;
    }
}
