import Article from "./Article";
import { CardContent } from "@mui/material";
import PostCreateForm, { PostFormValues } from "./PostForm";
import { ISimplePost } from "./Post";
import { AxiosResponse } from "axios";

interface IProps {
    post: ISimplePost;
    isEditing: boolean;
    onSubmit: (data: PostFormValues) => Promise<AxiosResponse>;
    onDiscard: () => void;
}

const EditableArticle = ({ post, isEditing, onSubmit, onDiscard }: IProps) => {
    return (
        <>
            {isEditing ? (
                <CardContent>
                    <PostCreateForm
                        post={post}
                        onSubmit={onSubmit}
                        onDiscard={onDiscard}
                    />
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
