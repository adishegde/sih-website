import { combineReducers } from "redux";
import loadingReducer from "./loading";
import listReducer from "./list";

export default combineReducers({
    loading: loadingReducer,
    list: listReducer
});
