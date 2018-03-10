import React from "react";
import ReactDOM from "react-dom";
import App from "components/App";
import { Provider } from "react-redux";
import configureStore from "configureStore";
import registerServiceWorker from "registerServiceWorker";
import { verifyCredentials } from "actions/redux-token-auth";

import "styles/index.css";
import "semantic-ui-css/semantic.min.css";

const store = configureStore();

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
