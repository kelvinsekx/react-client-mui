import { createContext, useEffect, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { axiosPrivate } from "../api/axios";
import jwtDecode from "jwt-decode";

export const ACCESS_TOKEN_STORAGE_ID = "LC-access";
export const REFRESH_TOKEN_STORAGE_ID = "LC-refresh";

const AuthContext = createContext({});

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

export const AuthProvider = ({ children }) => {
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
        setAccessToken(null);
        setRefreshToken(null);
        setCurrentUser({});
    };

    useEffect(() => {
        async function fetchUser() {
            if (accessToken) {
                const { username } = jwtDecode(accessToken);
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
