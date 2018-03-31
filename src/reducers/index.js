/* This file exports the root reducer which is used in the createStore call. */

import { combineReducers } from "redux";
import errorReducer from "reducers/error";
import { reduxTokenAuthReducer } from "redux-token-auth";
import filesReducer from "reducers/files/index";
import groupsReducer from "reducers/groups/index";
import usersReducer from "reducers/users/index";
import departmentReducer from "reducers/departments/index";
import currentUserReducer from "reducers/currentUser";
import { initialState } from "configureStore";

// combineReducers returns root reducer
// but it can't clear state on sign out
const appReducer = combineReducers({
    reduxTokenAuth: reduxTokenAuthReducer,
    error: errorReducer,
    files: filesReducer,
    groups: groupsReducer,
    users: usersReducer,
    departments: departmentReducer,
    currentUser: currentUserReducer
});

// Clears state on sign out else delegates to appReducer
export default function rootReducer(state, action) {
    if (action.type === "redux-token-auth/SIGNOUT_REQUEST_SENT")
        return initialState;
    return appReducer(state, action);
}
