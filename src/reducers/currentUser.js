import { RECIEVE_CURRENT_USER } from "actions/users";
import { RECIEVE_CURRENT_USER_GROUPS } from "actions/groups";

export default function(state = {}, action) {
    switch (action.type) {
        case RECIEVE_CURRENT_USER:
            return { ...state, user: action.user };
        case RECIEVE_CURRENT_USER_GROUPS:
            return { ...state, groups: action.groups };
        default:
            return state;
    }
}
