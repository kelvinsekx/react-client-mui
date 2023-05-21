import { axiosPrivate } from "../api/axios";
import PostCreateForm from "../components/posts/PostForm";
import { Box } from "@mui/material";

const CreatePostPage = () => {
    const handleSubmit = async (data) => {
        return await axiosPrivate.post("/journals/", data);
    };

    return (
        <Box>
            <PostCreateForm post={undefined} onSubmit={handleSubmit} />
        </Box>
    );
};

export default CreatePostPage;
