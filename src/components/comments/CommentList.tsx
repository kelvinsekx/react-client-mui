import { List } from "@mui/material";
import Comment, { CommentInterface } from "./Comment";

interface CommentListProps {
    comments: CommentInterface[];
}

const CommentList = ({ comments }: CommentListProps) => {
    return (
        <List disablePadding>
            {comments.map((comment) => (
                <Comment
                    key={comment.id}
                    id={comment.id}
                    username={comment.username}
                    text={comment.text}
                />
            ))}
        </List>
    );
};

export default CommentList;
