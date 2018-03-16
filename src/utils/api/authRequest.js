/* This file exports an axios instance to make requests that require the access
 * token. The token is refreshed every request so this axios instance ensures
 * that it is rewritten into local storage */

import axios from "axios";
import { ApiServer } from "utils/resources";

// Create new axios instance to make requests that require authentication
// Using this instance ensures that the headers are updated after every call
const authAxios = axios.create({
    baseURL: ApiServer
});

// Send auth headers with every request
authAxios.interceptors.request.use(config => {
    config.headers = {
        ...config.headers,
        "access-token": localStorage.getItem("access-token"),
        client: localStorage.getItem("client"),
        uid: localStorage.getItem("uid"),
        expiry: localStorage.getItem("expiry"),
        "token-type": localStorage.getItem("token-type")
    };

    return config;
});

// Set auth headers with every response
authAxios.interceptors.response.use(response => {
    if (response.headers["access-token"]) {
        localStorage.setItem("access-token", response.headers["access-token"]);
        localStorage.setItem("client", response.headers["client"]);
        localStorage.setItem("uid", response.headers["uid"]);
    }
    return response;
});

export default authAxios;
