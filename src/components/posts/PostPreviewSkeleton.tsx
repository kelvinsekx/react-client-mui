import { Card, CardContent, CardHeader, Skeleton } from "@mui/material";

const PostPreviewSkeleton = () => {
    return (
        <Card sx={{ marginBottom: 3 }}>
            <CardHeader
                avatar={
                    <Skeleton
                        animation="pulse"
                        variant="circular"
                        width={40}
                        height={40}
                    />
                }
                title={
                    <Skeleton
                        animation="pulse"
                        height={15}
                        width="60%"
                        style={{ marginBottom: 6 }}
                    />
                }
                subheader={
                    <Skeleton animation="pulse" height={15} width="30%" />
                }
            />
            <CardContent>
                <Skeleton
                    sx={{ height: 15, marginBottom: 2 }}
                    width="80%"
                    animation="pulse"
                    variant="rectangular"
                />
                <Skeleton
                    sx={{ height: 190 }}
                    animation="pulse"
                    variant="rectangular"
                />
            </CardContent>
        </Card>
    );
};

export default PostPreviewSkeleton;
