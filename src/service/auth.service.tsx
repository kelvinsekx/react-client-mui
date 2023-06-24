import api from "./api";

export interface IRegisterUser {
    username: string;
    password: string;
    password2: string;
    email: string;
    native_language: string;
    studying_language: string;
    studying_level: string;
    gender: string;
}

const login = async (username: string, password: string) => {
    const resp = await api.post(`/token/`, { username, password });
    console.log("🚀 ~ file: auth.service.tsx:7 ~ login ~ resp:", resp);
    return resp;
};

const register = async (data: IRegisterUser) => {
    const resp = await api.post(`users/~create`, data);
    console.log("🚀 ~ file: auth.service.tsx:13 ~ register ~ resp:", resp);
    return resp;
};

const AuthService = {
    login,
    register,
};

export default AuthService;
