import React, { useState } from "react";

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
// import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
// import FlagIcon from "@mui/icons-material/Flag";
import LanguageIcon from "@mui/icons-material/Language";
import EditIcon from "@mui/icons-material/Edit";
// import DeleteIcon from "@mui/icons-material/Delete";
import EditableArticle from "./EditableArticle.tsx";
import { axiosPrivate } from "../../api/axios.tsx";
import useAuth from "../../hooks/useAuth.tsx";

interface PostPreviewInterface {
    post: PostInterface;
}

const Post = ({ post }: PostPreviewInterface) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [isEditing, setIsEditing] = useState(false);

    const { currentUser } = useAuth();

    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleEdit = () => {
        setIsEditing(true);
        handleClose();
    };

    const handleSubmit = async (data) => {
        const slug = `/journals/${post.meta.slug}`;
        const response = await axiosPrivate.patch(slug, data);
        setIsEditing(false);
        handleClose();
        return response;
    };

    const {
        user,
        meta,
        content,
        language,
        total_correctors,
        gender_of_narration,
        corrected_by,
    } = post;

    const serializedPost = {
        title: content.title,
        text: content.text,
        native_text: content?.native_text,
        language: language.code,
        gender_of_narration,
        permission: meta.permission,
    };

    const isCorrectedByUser = corrected_by?.includes(currentUser?.username);

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
                id="post-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    "aria-labelledby": "post-menu-button",
                }}
            >
                <MenuItem onClick={handleEdit} disabled={isEditing}>
                    <ListItemIcon>
                        <EditIcon />
                    </ListItemIcon>
                    <ListItemText>Edit</ListItemText>
                </MenuItem>
                {/* commented out until implemented */}
                {/* <MenuItem onClick={handleClose}>
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
                </MenuItem> */}
            </Menu>
            <EditableArticle
                post={serializedPost}
                isEditing={isEditing}
                onSubmit={handleSubmit}
            />

            {!isEditing && (
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
                        variant={isCorrectedByUser ? "contained" : "outlined"}
                        startIcon={<CheckCircleOutlineIcon />}
                    >
                        {isCorrectedByUser ? "Already corrected" : "Correct"}
                    </Button>
                </CardActions>
            )}
        </Card>
    );
};

export default Post;
