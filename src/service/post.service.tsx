import api from "./api";
import { PostFormValues } from "../components/posts/PostForm";

const getPostList = async () => {
    const resp = await api.get(`/journals`);
    return resp?.data?.results;
};

const getPost = async (slug: string) => {
    const resp = await api.get(`/journals/${slug}`);
    console.log("🚀 ~ file: post.service.tsx:15 ~ getPost ~ resp:", resp);
    return resp?.data;
};

const editPost = async (slug: string, data: PostFormValues) => {
    const resp = await api.patch(`/journals/${slug}`, data);
    console.log("🚀 ~ file: post.service.tsx:19 ~ editPost ~ resp:", resp);
    return resp;
};

const deletePost = async (slug: string) => {
    const resp = await api.delete(`/journals/${slug}`);
    console.log("🚀 ~ file: post.service.tsx:24 ~ deletePost ~ resp:", resp);
    return resp;
};

const PostService = {
    getPostList,
    getPost,
    editPost,
    deletePost
};

export default PostService;
