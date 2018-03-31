import { RECIEVE_CURRENT_USER } from "actions/users";

export default function(state = {}, action) {
    switch (action.type) {
        case RECIEVE_CURRENT_USER:
            return action.user;
        default:
            return state;
    }
}
