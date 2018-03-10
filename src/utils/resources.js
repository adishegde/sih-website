/* This file exports constants and resource values to be used everywhere else
 * in the app. This ensures that this file is the single source of truth for
 * constant values */

// The website name is exported through the .env file
export const WebsiteName = process.env.REACT_APP_WEBSITE_NAME;

// The URL of the api server is exported through the .env files depending on
// environment
export const ApiServer = process.env.REACT_APP_API_SERVER;

export const AuthUrl = ApiServer + "/auth";
