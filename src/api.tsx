// @ts-nocheck
// TODO: Add proper checks when using the real backend API instead of JSON server

import axios from "axios";

const { VITE_API_BASE_URL } = import.meta.env;

class LangCorrectAPI {
    static token;

    static async request(endpoint, data = {}, method = "get") {
        console.debug("API Call:", endpoint, data, method);
        const url = `${VITE_API_BASE_URL}/${endpoint}`;
        const headers = { Authorization: `Bearer ${LangCorrectAPI.token}` };
        const params = (method === "get") ? data : {};

        try {
            return (await axios({ url, method, data, params, headers })).data;
        } catch (err) {
            console.error("API Error:", err.response);
            const message = err.response.data.error.message;
            throw Array.isArray(message) ? message : [message];
        }
    }

    static async getPosts(term = null) {
        const posts = await this.request("journals", { searchTerm: term });
        console.log("🚀 ~ file: api.tsx:29 ~ LangCorrectAPI ~ getPosts ~ posts:", posts);
        return posts;
    }

    static async getPost(slug) {
        console.log("🚀 ~ file: api.tsx:33 ~ LangCorrectAPI ~ getPost ~ slug:", slug);
        const post = await this.request(`journals?meta.slug=${slug}`);
        return post;
    }
}

export default LangCorrectAPI;

