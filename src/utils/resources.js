/* This file exports constants and resource values to be used everywhere else
 * in the app. This ensures that this file is the single source of truth for
 * constant values */

// The website name is exported through the .env file
export const WebsiteName = process.env.REACT_APP_WEBSITE_NAME;

// In development mode, the webpack server proxies the API server
export const ApiServer = "/api";

export const AuthUrl = `${ApiServer}/auth`;

export function statusToDisplay(status) {
    switch (status) {
        case "normal":
            return "Normal";
        case "intransit":
            return "In Transit";
        case "legalhold":
            return "legalhold";
        case "lost":
            return "Lost";
        default:
            return "Unknown";
    }
}

export function qrcodeString(fileId) {
    return btoa(`FITS:${fileId}`);
}
