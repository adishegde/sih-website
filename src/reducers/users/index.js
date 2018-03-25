/* This file exports the root users reducer */

import { combineReducers } from "redux";
import loadingReducer from "./loading";
import userListReducer from "./userList";

export default combineReducers({
    loading: loadingReducer,
    list: userListReducer
});
