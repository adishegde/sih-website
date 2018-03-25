/* This file exports the reducer that handles the state of list of users */

import { RECIEVE_ALL_USERS, RECIEVE_CREATE_USER } from "actions/users";

export default function userListReducer(state = {}, action) {
    switch (action.type) {
        case RECIEVE_ALL_USERS:
            return action.users.reduce((acc, user) => {
                acc[user.id] = user;
                return acc;
            }, {});

        case RECIEVE_CREATE_USER:
            return { ...state, [action.user.id]: action.user };

        default:
            return state;
    }
}
