/* This file exports the root users reducer */

import { combineReducers } from "redux";
import loadingReducer from "./loading";
import userListReducer from "./userList";
import reportReducer from "./report";

export default combineReducers({
    loading: loadingReducer,
    list: userListReducer,
    report: reportReducer
});
