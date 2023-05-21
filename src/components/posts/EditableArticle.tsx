import Article from "./Article";
import { CardContent } from "@mui/material";
import PostCreateForm from "./PostForm";

const EditableArticle = ({ post, isEditing, onSubmit }) => {
    return (
        <>
            {isEditing ? (
                <CardContent>
                    <PostCreateForm post={post} onSubmit={onSubmit} />
                </CardContent>
            ) : (
                <Article
                    title={post.title}
                    text={post.text}
                    nativeText={post.native_text}
                />
            )}
        </>
    );
};

export default EditableArticle;
