import React from "react";
import ReactDOM from "react-dom";
import "styles/index.css";
import App from "components/App";
import { Provider } from "react-redux";
import store from "configureStore";
import registerServiceWorker from "registerServiceWorker";
import { verifyCredentials } from "actions/redux-token-auth.js";

// Used to verify user from login details of previous session and also update
// redux store
verifyCredentials(store);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
registerServiceWorker();
