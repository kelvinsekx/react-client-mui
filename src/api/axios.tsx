import axios from "axios";

const { VITE_API_BASE_URL } = import.meta.env;

const axiosPublic = axios.create({
    baseURL: VITE_API_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

export default axiosPublic;

export const axiosPrivate = axios.create({
    baseURL: VITE_API_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});
