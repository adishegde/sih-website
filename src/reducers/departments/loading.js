import {
    RECIEVE_ALL_DEPARTMENTS,
    REQUEST_ALL_DEPARTMENTS
} from "actions/departments";

export default function loadingReducer(state = false, action) {
    switch (action.type) {
        case REQUEST_ALL_DEPARTMENTS:
            return true;

        case RECIEVE_ALL_DEPARTMENTS:
            return false;

        default:
            return state;
    }
}
