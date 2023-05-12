import { useEffect, useState } from "react";
import LangCorrectAPI from "../api";
import PostList from "../components/posts/PostList.tsx";
import { Button, Container, Stack, Typography } from "@mui/material";
import PostListSkeleton from "../components/posts/PostListSkeleton.tsx";
import CreateIcon from '@mui/icons-material/Create';
import useAuthContext from "../hooks/useAuthContext.tsx";

export interface PostInterface {
    id: number;
    content: {
        title: string;
        text: string;
        native_text: string;
    },
    language: {
        code: string;
        en_name: string;
    },
    meta: {
        slug: string;
        tags: string[];
        permission: string;
        created: string;
        modified: string;
    },
    gender_of_narration: string;
    prompt: null | string;
    language_level: null | string;
    user: {
        username: string;
        id_premium: boolean;
    };
    total_correctors: number;
}

/**
 * Renders the Posts page.
 *
 * Props:
 * - posts
 * - isLoading
 *
 * {RoutesList} -> PostPage
 */

const PostPage = ({ title }: { title: string; }) => {
    const { accessToken } = useAuthContext();
    const [posts, setPosts] = useState<PostInterface[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const getPosts = async () => {
        try {
            if (accessToken) {
                LangCorrectAPI.token = accessToken;
            }
            const { results } = await LangCorrectAPI.getPosts();
            setPosts(results);
            setIsLoading(false);
        } catch (err) {
            console.log("🚀 ~ file: PostPage.tsx:44 ~ getPosts ~ err:", err);
        }
    };

    useEffect(() => {
        getPosts();
    }, []);

    const renderPosts = isLoading ? <PostListSkeleton/> : <PostList posts={posts}/>;

    return (
        <Container>
            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={3}>
                <Typography variant="h5">
                    {title}
                </Typography>
                <Button variant="contained" startIcon={<CreateIcon/>}>
                    New Post
                </Button>
            </Stack>

            {renderPosts}
        </Container>
    );
};

export default PostPage;