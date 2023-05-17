import LangCorrectAPI from "../api";
import PostList from "../components/posts/PostList.tsx";
import { Button, Container, Stack, Typography } from "@mui/material";
import PostListSkeleton from "../components/posts/PostListSkeleton.tsx";
import CreateIcon from '@mui/icons-material/Create';
import useAuthContext from "../hooks/useAuthContext.tsx";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

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
    const { isLoading, isError, data, error } = useQuery({
        queryKey: ["posts"],
        queryFn: fetchPosts
    });

    const context = useAuthContext();
    if (!context) return null;
    const { accessToken } = context;

    async function fetchPosts() {
        if (accessToken) LangCorrectAPI.token = accessToken;
        const { results } = await LangCorrectAPI.getPosts();
        return results ? results : [];
    }


    if (isLoading) return <PostListSkeleton />;
    if (isError) return <h1>Problems loading...</h1>;

    return (
        <Container>
            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={3}>
                <Typography variant="h5">
                    {title}
                </Typography>
                <Button variant="contained" startIcon={<CreateIcon />} component={Link} to="/feed/create">
                    New Post
                </Button>
            </Stack>

            <PostList posts={data} />
        </Container>
    );
};

export default PostPage;