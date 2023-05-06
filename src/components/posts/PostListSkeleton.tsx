import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Skeleton from '@mui/material/Skeleton';

interface PostListSkeletonProps {
    amount?: number;
}

/**
 * Renders a skeleton list of posts
 *
 * Props:
 * - amount: number of skeleton cards to show; default = 10;
 *
 * {PostPage} -> {PostListSkeleton}
 */

const PostListSkeleton = (props: PostListSkeletonProps) => {
    const { amount = 10 } = props;

    const renderSkeletonList = Array.from({ length: amount }).map((_, idx) => (
        <Card key={idx} sx={{ marginBottom: 3 }}>
            <CardHeader
                avatar={<Skeleton animation="pulse" variant="circular" width={40} height={40} />}
                title={<Skeleton
                    animation="pulse"
                    height={15}
                    width="60%"
                    style={{ marginBottom: 6 }}
                />}
                subheader={<Skeleton animation="pulse" height={15} width="30%" />}
            />
            <CardContent>
                <Skeleton sx={{ height: 15, marginBottom: 2 }} width="80%" animation="pulse" variant="rectangular" />
                <Skeleton sx={{ height: 190 }} animation="pulse" variant="rectangular" />
            </CardContent>
        </Card>
    ));

    return (
        <div>
            {renderSkeletonList}
        </div>
    );
};

export default PostListSkeleton;