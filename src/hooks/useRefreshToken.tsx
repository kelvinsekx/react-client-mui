import axios from "../api/axios";
import useAuth from "./useAuth";

const useRefreshToken = () => {
    const { setAccessToken, refreshToken } = useAuth();

    const payload = {
        refresh: refreshToken,
    };

    const refresh = async () => {
        const response = await axios.post("/token/refresh/", payload);
        const newAccessToken = response.data.access;
        setAccessToken(newAccessToken);
        return newAccessToken;
    };

    return refresh;
};

export default useRefreshToken;
