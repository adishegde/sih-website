import { RECIEVE_GROUP_MEMBERS } from "actions/groups";

export default function authorityReducer(state = {}, action) {
    switch (action.type) {
        case RECIEVE_GROUP_MEMBERS:
            return {
                ...state,
                [action.id]: action.users.map(user => user.id)
            };

        default:
            return state;
    }
}
