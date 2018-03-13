/* This file exports the root reducer which is used in the createStore call. */

import { combineReducers } from "redux";
import { reduxTokenAuthReducer } from "redux-token-auth";

// combineReducers returns root reducer
export default combineReducers({
    reduxTokenAuth: reduxTokenAuthReducer
});
