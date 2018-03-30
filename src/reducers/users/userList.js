/* This file exports the reducer that handles the state of list of users */

import {
    RECIEVE_ALL_USERS,
    RECIEVE_CREATE_USER,
    RECIEVE_USER
} from "actions/users";

import { RECIEVE_GROUP_MEMBERS } from "actions/groups";

export default function userListReducer(state = {}, action) {
    switch (action.type) {
        case RECIEVE_ALL_USERS:
            return action.users.reduce((acc, user) => {
                acc[user.id] = user;
                return acc;
            }, {});

        case RECIEVE_CREATE_USER:
            return { ...state, [action.user.id]: action.user };

        case RECIEVE_USER:
            return { ...state, [action.id]: action.user };

        case RECIEVE_GROUP_MEMBERS: {
            const toUpdate = action.users.reduce((acc, user) => {
                acc[user.id] = user;
                return acc;
            });

            return { ...state, ...toUpdate };
        }

        default:
            return state;
    }
}
