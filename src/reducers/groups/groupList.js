/* This file exports the reducer that handles the state of list of
 * groups */

import { RECIEVE_ALL_GROUPS } from "actions/groups";

export default function groupListReducer(state = {}, action) {
    switch (action.type) {
        case RECIEVE_ALL_GROUPS:
            return action.groups.reduce((acc, group) => {
                acc[group.id] = group;
                return acc;
            }, {});

        default:
            return state;
    }
}
