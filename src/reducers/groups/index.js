/* This file exports the root groups reducer */

import { combineReducers } from "redux";
import loadingReducer from "./loading";
import groupListReducer from "./groupList";

export default combineReducers({
    loading: loadingReducer,
    list: groupListReducer
});
