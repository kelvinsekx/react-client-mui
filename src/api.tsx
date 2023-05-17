import axios from "axios";
import { ICreatePostData } from "./components/posts/PostCreateForm.tsx";

const { VITE_API_BASE_URL } = import.meta.env;

export interface RegisterUser {
    username: string;
    password: string;
    password2: string;
    email: string;
    native_language: string;
    studying_language: string;
    studying_level: string;
    gender: string;
}

class LangCorrectAPI {
    static token: string;

    static async request(endpoint: string, data = {}, method = "get") {
        console.debug("API Call:", endpoint, data, method);
        const url = `${VITE_API_BASE_URL}/${endpoint}`;

        let headers;

        if (LangCorrectAPI.token) {
            headers = { Authorization: `Bearer ${LangCorrectAPI.token}` };
        }

        const params = (method === "get") ? data : {};

        try {
            return (await axios({ url, method, data, params, headers })).data;
        } catch (err) {
            if (axios.isAxiosError(err)) {
                console.error("API Error:", err.response);
                const message = err.response?.data;
                throw Array.isArray(message) ? message : [message];
            } else {
                throw new Error("An error occurred other than axios");
            }
        }
    }

    // AUTH

    static async login(data: { username: string; password: string; }) {
        return await this.request("token/", data, "post");
    }

    static async register(data: RegisterUser) {
        return await this.request("users/~create", data, "post");
    }

    // USER

    static async getUser(username: string) {
        return await this.request(`users/${username}`);
    }


    // POSTS

    static async getPosts() {
        return await this.request("journals");
    }

    static async getPost(slug: string | undefined) {
        return await this.request(`journals/${slug}`);
    }

    static async createPost(data: ICreatePostData) {
        return await this.request("journals/", data, "post");
    }
}

export default LangCorrectAPI;

