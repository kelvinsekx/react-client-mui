import { PostInterface } from "../../pages/PostPage.tsx";
import PostPreview from "./PostPreview.tsx";

interface PostListInterface {
    posts: PostInterface[];
}

/**
 * Renders the post list
 * 
 * Props:
 * - posts
 * 
 * {PostPage} -> PostList
 */

const PostList = ({ posts }: PostListInterface) => {
    return (
        <div>
            {posts.map(post => <PostPreview key={post.id} post={post} />)}
        </div>
    );
};

export default PostList;