import { useNavigate, useParams } from "react-router-dom";
import LayersIcon from "@mui/icons-material/Layers";
import PersonIcon from "@mui/icons-material/Person";
import Post from "../components/posts/Post";
import { Button, ButtonGroup, Stack, Tooltip, Typography } from "@mui/material";
import UserCorrections, {
    IUserCorrections,
} from "../components/corrections/UserCorrections";
import { useQueries } from "@tanstack/react-query";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import axiosPublic from "../api/axios";

const PostDetailPage = () => {
    const { slug } = useParams();
    const navigate = useNavigate();

    const [postQuery, correctionsQuery] = useQueries({
        queries: [
            {
                queryKey: ["posts", slug],
                queryFn: () =>
                    axiosPublic
                        .get(`/journals/${slug}`)
                        .then((res) => res.data),
            },
            {
                queryKey: ["corrections", slug],
                queryFn: () =>
                    axiosPublic
                        .get(`/journals/${slug}/corrections`)
                        .then((res) => res.data),
            },
        ],
    });

    if (postQuery.isLoading) return <p>Loading...</p>;
    if (correctionsQuery.isLoading) return <p>Loading...</p>;

    const isCorrected = correctionsQuery.data?.length;

    return (
        <>
            <Button
                onClick={() => navigate(-1)}
                startIcon={<KeyboardBackspaceIcon />}
                sx={{ mb: 2 }}
            >
                Go back
            </Button>
            <Post post={postQuery.data} />

            {isCorrected > 0 ? (
                <>
                    <Stack
                        direction="row"
                        justifyContent="end"
                        alignItems="center"
                        gap={1}
                        my={3}
                    >
                        <Typography>Corrections</Typography>
                        <ButtonGroup variant="outlined">
                            <Tooltip title="Display corrections grouped by user">
                                <Button>
                                    <PersonIcon />
                                </Button>
                            </Tooltip>
                            <Tooltip title="Display corrections grouped by sentence">
                                <Button>
                                    <LayersIcon />
                                </Button>
                            </Tooltip>
                        </ButtonGroup>
                    </Stack>

                    <Stack gap={5}>
                        {correctionsQuery.data.map(
                            (correction: IUserCorrections) => (
                                <UserCorrections
                                    key={correction.username}
                                    username={correction.username}
                                    corrections={correction.corrections}
                                    comments={correction.comments}
                                    overall_feedback={
                                        correction?.overall_feedback
                                    }
                                />
                            ),
                        )}
                    </Stack>
                </>
            ) : (
                <Typography>Post has not been corrected yet.</Typography>
            )}
        </>
    );
};

export default PostDetailPage;
