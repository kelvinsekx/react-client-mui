import React from 'react';

import { PostInterface } from "../../pages/PostPage.tsx";
import {
    Avatar, Button,
    Card,
    CardActionArea, CardActions,
    CardContent,
    CardHeader,
    IconButton,
    Menu,
    MenuItem,
    Typography
} from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

interface PostPreviewInterface {
    post: PostInterface;
}

// TODO: commented out until I figure out a proper way to go about this....
// Fast refresh only works when a file only export components. 
// Use a new file to share constant or functions between 
// components.eslint(react-refresh/only-export-components)
// export const POST_PREVIEW_WIDTH = 800;

const POST_PREVIEW_WIDTH = 800;

const PostPreview = ({ post }: PostPreviewInterface) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const { user, meta, content, total_correctors } = post;

    return (
        <Card sx={{ marginBottom: 3, width: { lg: POST_PREVIEW_WIDTH } }} >
            <CardHeader
                avatar={
                    <Avatar aria-label={user.username}>
                        {user.username.slice(0, 1)}
                    </Avatar>
                }
                action={
                    <IconButton
                        aria-controls={open ? 'menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        aria-label="settings"
                        onClick={handleClick}
                    >
                        <MoreVertIcon />
                    </IconButton>
                }
                title={user.username}
                subheader={meta.created}
            />
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleClose}>Save</MenuItem>
                <MenuItem onClick={handleClose}>Visit profile</MenuItem>
                <MenuItem onClick={handleClose}>Report post</MenuItem>
            </Menu>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {content.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" style={{ display: "inline-block", whiteSpace: "pre-line" }} >
                        {content.text}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions sx={{ display: "flex", justifyContent: "end" }}>
                <Button variant="outlined" startIcon={<CheckCircleOutlineIcon />}>
                    {total_correctors}
                </Button>
            </CardActions>
        </Card>
    );
};

export default PostPreview;