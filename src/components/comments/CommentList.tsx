import { List } from '@mui/material';
import Comment, { CommentInterface } from './Comment';

interface CommentListProps {
    comments: CommentInterface[];
}

/**
 * Renders the comment list
 * Props:
 * - comments
 *
 * {CorrectionComments} -> CommentList
 */
const CommentList = ({ comments }: CommentListProps) => {
    return (
        <List disablePadding>
            {comments.map(comment => (
                <Comment key={comment.id} id={comment.id} username={comment.username} text={comment.text}/>
            ))}
        </List>
    );
};

export default CommentList;