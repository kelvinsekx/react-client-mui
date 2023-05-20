import AuthContext from "./context/AuthProvider";

// TODO: populate demo user

const demoUser = {
    username: "testuser",
};

const TestAuthProvider = ({
    children,
    accessToken = "123",
    refreshToken = "123",
    setAccessToken = () => {
        /** */
    },
    setRefreshToken = () => {
        /** */
    },
    currentUser = demoUser,
    setCurrentUser = () => {
        /** */
    },
    isAuthenticated = true,
    userInfoLoaded = true,
    logout = () => {
        /** */
    },
}) => (
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

export { TestAuthProvider };
