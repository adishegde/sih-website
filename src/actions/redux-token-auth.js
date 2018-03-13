/* This file exports the action creators returned by the redux-token-auth
 * package. It also exports the helper function to verify credentials on app
 * start up. */

import { generateAuthActions } from "redux-token-auth";
import { AuthUrl } from "utils/resources";

const config = {
    authUrl: AuthUrl,
    userAttributes: {
        name: "name",
        id: "id",
        email: "email",
        nickname: "nickname",
        image: "image"
    },
    userRegistrationAttributes: {}
};

const {
    registerUser,
    signInUser,
    signOutUser,
    verifyCredentials
} = generateAuthActions(config);

export { registerUser, signInUser, signOutUser, verifyCredentials };
