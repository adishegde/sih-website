import { RECIEVE_AUTHORITY_OVER_GROUPS } from "actions/users";

export default function authorityReducer(state = {}, action) {
    switch (action.type) {
        case RECIEVE_AUTHORITY_OVER_GROUPS:
            return {
                ...state,
                [action.id]: action.groups.map(group => group.id)
            };

        default:
            return state;
    }
}
