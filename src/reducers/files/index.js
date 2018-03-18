/* This file exports the root files reducer */

import { combineReducers } from "redux";
import loadingReducer from "./loading";
import fileListReducer from "./fileList";
import createFileReducer from "./createFile";

export default combineReducers({
    loading: loadingReducer,
    list: fileListReducer,
    created: createFileReducer
});
