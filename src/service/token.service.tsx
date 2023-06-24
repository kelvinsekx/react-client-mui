import {
    ACCESS_TOKEN_STORAGE_ID,
    REFRESH_TOKEN_STORAGE_ID,
} from "../constants";

const getLocalAccessToken = () => {
    const token = localStorage.getItem(ACCESS_TOKEN_STORAGE_ID);
    console.log(
        "🚀 ~ file: token.service.tsx:9 ~ TokenService ~ getLocalAccessToken ~ token:",
        token,
    );
    return localStorage.getItem(ACCESS_TOKEN_STORAGE_ID);
};

const getLocalRefreshToken = () => {
    return localStorage.getItem(REFRESH_TOKEN_STORAGE_ID);
};

const updateLocalAccessToken = (token: string) => {
    return localStorage.setItem(ACCESS_TOKEN_STORAGE_ID, token);
};

const updateLocalRefreshToken = (token: string) => {
    return localStorage.setItem(REFRESH_TOKEN_STORAGE_ID, token);
};

const removeLocalTokens = () => {
    localStorage.removeItem(ACCESS_TOKEN_STORAGE_ID);
    localStorage.removeItem(REFRESH_TOKEN_STORAGE_ID);
};

const TokenService = {
    getLocalAccessToken,
    getLocalRefreshToken,
    updateLocalAccessToken,
    updateLocalRefreshToken,
    removeLocalTokens,
};

export default TokenService;
