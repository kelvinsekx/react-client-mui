import React from "react";

import { PostInterface } from "../../pages/PostPage.tsx";
import {
    Avatar,
    Button,
    Card,
    CardActions,
    CardHeader,
    Chip,
    Divider,
    IconButton,
    ListItemIcon,
    ListItemText,
    Menu,
    MenuItem,
    Stack,
    Tooltip,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import FlagIcon from "@mui/icons-material/Flag";
import LanguageIcon from "@mui/icons-material/Language";
import Article from "./Article.tsx";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

interface PostPreviewInterface {
    post: PostInterface;
}

const Post = ({ post }: PostPreviewInterface) => {
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
        <Card>
            <CardHeader
                avatar={
                    <Avatar aria-label={user.username}>
                        {user.username.slice(0, 1)}
                    </Avatar>
                }
                action={
                    <IconButton
                        aria-controls={open ? "menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                        aria-label="settings"
                        onClick={handleClick}
                    >
                        <MoreVertIcon />
                    </IconButton>
                }
                title={user.username}
                subheader={meta.created}
            />
            <Divider />
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    "aria-labelledby": "basic-button",
                }}
            >
                <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                        <EditIcon />
                    </ListItemIcon>
                    <ListItemText>Edit</ListItemText>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                        <DeleteIcon />
                    </ListItemIcon>
                    <ListItemText>Delete</ListItemText>
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                        <BookmarkBorderIcon />
                    </ListItemIcon>
                    <ListItemText>Save</ListItemText>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                        <FlagIcon />
                    </ListItemIcon>
                    <ListItemText>Report post</ListItemText>
                </MenuItem>
            </Menu>
            <Article
                title={content.title}
                text={content.text}
                nativeText={content.native_text}
            />
            <CardActions
                sx={{ display: "flex", justifyContent: "space-between" }}
            >
                <Stack direction="row" spacing={1}>
                    <Tooltip arrow title={post.language.en_name}>
                        <Chip
                            icon={<LanguageIcon />}
                            label={post.language.code}
                            size="small"
                            variant="outlined"
                        />
                    </Tooltip>
                    <Tooltip arrow title="Corrections">
                        <Chip
                            icon={<CheckCircleOutlineIcon />}
                            size="small"
                            label={total_correctors}
                            variant="outlined"
                        />
                    </Tooltip>
                </Stack>
                <Button
                    size="small"
                    variant="outlined"
                    startIcon={<CheckCircleOutlineIcon />}
                >
                    Correct
                </Button>
            </CardActions>
        </Card>
    );
};

export default Post;
