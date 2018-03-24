/* This file exports the root reducer which is used in the createStore call. */

import { combineReducers } from "redux";
import errorReducer from "reducers/error";
import { reduxTokenAuthReducer } from "redux-token-auth";
import filesReducer from "reducers/files/index";
import groupsReducer from "reducers/groups/index";
import usersReducer from "reducers/users/index";

// combineReducers returns root reducer
export default combineReducers({
    reduxTokenAuth: reduxTokenAuthReducer,
    error: errorReducer,
    files: filesReducer,
    groups: groupsReducer,
    users: usersReducer
});
