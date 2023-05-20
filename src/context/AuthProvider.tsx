import { ReactNode, createContext, useEffect, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { axiosPrivate } from "../api/axios";
import jwtDecode from "jwt-decode";
import {
    ACCESS_TOKEN_STORAGE_ID,
    REFRESH_TOKEN_STORAGE_ID,
} from "../constants";

interface IAuthContext {
    currentUser: object;
}

interface IDecodeToken {
    token_type: string;
    exp: number;
    iat: number;
    jti: string;
    user_id: number;
    username: string;
}

const AuthContext = createContext<IAuthContext | object>({});

/**
 * DEV NOTE:
 * - As the React client is not being served by the server directly, it caused some problems in
 *  passing user information form the server to the client.
 * - In order to ensure that the layouts and views are rendered correctly, it's crucial to have
 *  the user information fully loaded.
 * - To address this, I have introduced a state variable called `userInfoLoaded` to track the
 *  complete loading of user information.
 * - Additionally, I have implemented some specific logic in the routes that executes only when
 *  `userInfoLoaded` evaluates to true.
 * - This solution feels a bit janky....
 */

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [accessToken, setAccessToken] = useLocalStorage(
        ACCESS_TOKEN_STORAGE_ID,
    );
    const [refreshToken, setRefreshToken] = useLocalStorage(
        REFRESH_TOKEN_STORAGE_ID,
    );
    const [currentUser, setCurrentUser] = useState({});

    const [userInfoLoaded, setUserInfoLoaded] = useState(false);

    const isAuthenticated = Object.keys(currentUser).length > 0;

    const logout = () => {
        if (
            typeof setAccessToken === "function" &&
            typeof setRefreshToken === "function"
        ) {
            setAccessToken(null);
            setRefreshToken(null);
        }
        setCurrentUser({});
    };

    useEffect(() => {
        async function fetchUser() {
            if (accessToken) {
                // I disabled this line b/c I don't see how it can be null b/c of my conditional check
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                const decodedToken = jwtDecode<IDecodeToken>(accessToken);
                const { username } = decodedToken;
                const response = await axiosPrivate.get(`/users/${username}`);
                setCurrentUser(response.data);
                setUserInfoLoaded(true);
            } else {
                setCurrentUser({});
                setUserInfoLoaded(true);
            }
        }
        fetchUser();
    }, [accessToken]);

    return (
        <AuthContext.Provider
            value={{
                accessToken,
                setAccessToken,
                refreshToken,
                setRefreshToken,
                currentUser,
                setCurrentUser,
                isAuthenticated,
                userInfoLoaded,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
