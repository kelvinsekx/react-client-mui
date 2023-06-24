import api from "./api";

const getUser = async (username: string) => {
    const resp = await api.get(`/users/${username}`);
    console.log("🚀 ~ file: user.service.tsx:7 ~ getUser ~ resp:", resp?.data);
    return resp?.data;
};

const UserService = {
    getUser,
};

export default UserService;
