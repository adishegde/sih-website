/* This file exports the function that returns the store after configuring it.
 * Configuring includes applying middlewares, loading previous state from file
 * etc,. */

import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import rootReducer from "reducers/index";

// Creates redux store
function configureStore() {
    // List of middlewares to be applied
    const middlewares = [thunkMiddleware];

    // If executed in development mode, add Logger middleware
    if (process.env.NODE_ENV === "development") {
        middlewares.push(createLogger());
    }

    // Initial state of store.
    const initialState = {
        // Required by redux-token-auth package
        auth: {
            currentUser: {
                isLoading: false,
                isSignedIn: false,
                attributes: {
                    id: null,
                    name: null
                }
            }
        }
    };

    // Return the store
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(...middlewares)
    );
}

export default configureStore;