import { RECIEVE_USER_REPORT } from "actions/users";

export default function reportReducer(state = {}, action) {
    switch (action.type) {
        case RECIEVE_USER_REPORT:
            return { ...state, [action.id]: action.report };

        default:
            return state;
    }
}
