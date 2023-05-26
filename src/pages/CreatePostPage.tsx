import { useNavigate } from "react-router-dom";
import PostCreateForm, { PostFormValues } from "../components/posts/PostForm";
import { Box } from "@mui/material";
import useAxiosPrivate from "../hooks/useAxiosPrivate";

const CreatePostPage = () => {
    const navigate = useNavigate();
    const axiosPrivate = useAxiosPrivate();

    const handleSubmit = async (data: PostFormValues) => {
        return await axiosPrivate.post("/journals/", data);
    };

    const handleDiscard = () => {
        navigate("/journals");
    };

    return (
        <Box>
            <PostCreateForm
                post={undefined}
                onSubmit={handleSubmit}
                onDiscard={handleDiscard}
            />
        </Box>
    );
};

export default CreatePostPage;
