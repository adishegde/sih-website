/* This file exports the root groups reducer */

import { combineReducers } from "redux";
import loadingReducer from "./loading";
import groupListReducer from "./groupList";
import authorityReducer from "./authority";

export default combineReducers({
    loading: loadingReducer,
    list: groupListReducer,
    authority: authorityReducer
});
