import api from "./api";
import TokenService from "./token.service";

const login = async (username: string, password: string) => {
    const resp = await api.post(`/token/`, { username, password });
    console.log("🚀 ~ file: auth.service.tsx:7 ~ login ~ resp:", resp);
    return resp;
};

const AuthService = {
    login,
};

export default AuthService;
