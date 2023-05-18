import { createContext, useEffect, useState } from "react";
import LangCorrectAPI from "../api";
import decode from "jwt-decode";

interface ILanguage {
    code: string;
    en_name: string;
}

export interface UserData {
    id: number;
    username: string;
    nick_name: string | null;
    gender: string;
    bio: string;
    is_premium: string;
    user_role: string;
    date_joined: string;
    email: string;
    first_name: string;
    last_name: string;
    get_studying_languages: ILanguage[];
    get_native_languages: ILanguage[];
}


interface AuthContextInterface {
    currentUser: null | UserData;
    userInfoLoaded: boolean;
    saveTokens: (tokens: { access: string; refresh: string; }) => void;
    logout: () => void;
    accessToken: string | null;
}

const AuthContext = createContext<AuthContextInterface | undefined>(undefined);

export const AuthContextProvider = ({ children }: { children: React.ReactNode; }) => {
    const [accessToken, setAccessToken] = useState<string | null>(getAccessTokenFromLocalStorage());
    const [refreshToken, setRefreshToken] = useState<string | null>(getRefreshTokenFromLocalStorage());

    const [userInfoLoaded, setUserInfoLoaded] = useState(false);
    const [currentUser, setCurrentUser] = useState<UserData | null>(null);

    function saveTokens(tokens: { access: string; refresh: string; }) {
        const { access, refresh } = tokens;
        localStorage.setItem("LC_ACCESS_TOKEN", access);
        localStorage.setItem("LC_REFRESH_TOKEN", refresh);
        setAccessToken(access);
        setRefreshToken(refresh);
    }

    function clearTokens() {
        localStorage.removeItem("LC_ACCESS_TOKEN");
        localStorage.removeItem("LC_REFRESH_TOKEN");
    }

    function logout() {
        clearTokens();
        setCurrentUser(null);
        setUserInfoLoaded(false);
    }

    function getAccessTokenFromLocalStorage() {
        return localStorage.getItem("LC_ACCESS_TOKEN");
    }

    function getRefreshTokenFromLocalStorage() {
        return localStorage.getItem("LC_REFRESH_TOKEN");
    }

    useEffect(function loadUserInfo() {
        async function getCurrentUser() {
            if (accessToken) {
                try {
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    const { username } = decode(accessToken);
                    LangCorrectAPI.token = accessToken;
                    const fetchedUser = await LangCorrectAPI.getUser(username);

                    setCurrentUser(fetchedUser);
                    setUserInfoLoaded(true);
                } catch (err) {
                    console.error("🚀 ~ file: AuthContext.tsx:84 ~ getCurrentUser ~ err:", err);
                    setCurrentUser(null);
                    setUserInfoLoaded(true);
                }
            } else {
                setCurrentUser(null);
                setUserInfoLoaded(true);
            }
        }

        getCurrentUser();
    }, [accessToken, refreshToken]);


    return (
        <AuthContext.Provider value={{
            currentUser,
            saveTokens,
            logout,
            accessToken,
            userInfoLoaded
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;