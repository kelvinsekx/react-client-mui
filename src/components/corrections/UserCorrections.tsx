import React from "react";
import {
    Avatar,
    Card,
    CardContent,
    CardHeader,
    Divider,
    IconButton,
    List,
    ListItemIcon,
    ListItemText,
    Menu,
    MenuItem,
    Stack,
    Typography,
} from "@mui/material";
import Correction, { CorrectionInterface } from "./Correction";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CorrectionComments from "./CorrectionComments";
import { CommentInterface } from "../comments/Comment";

interface UserCorrectionsInterface {
    username: string;
    corrections: CorrectionInterface[];
    comments: CommentInterface[];
}

const UserCorrections = ({
    username,
    corrections,
    comments,
}: UserCorrectionsInterface) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <Card>
                <CardHeader
                    avatar={<Avatar>{username.slice(0, 1)}</Avatar>}
                    title={username}
                />
                <Divider />
                <List disablePadding>
                    {corrections.map((correction) => (
                        <Correction
                            key={
                                correction.correction_id
                                    ? correction.correction_id
                                    : correction.perfect_id
                            }
                            data={correction}
                        />
                    ))}
                </List>
                {/* <Divider /> */}
                <CardContent>
                    <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <Typography fontWeight={700}>Feedback</Typography>
                        <IconButton
                            edge="end"
                            aria-label="options"
                            aria-controls={open ? "basic-menu" : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? "true" : undefined}
                            onClick={handleClick}
                        >
                            <MoreVertIcon />
                        </IconButton>
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
                        </Menu>
                    </Stack>
                    <Typography>
                        {/* TODO: Add proper feedback */}
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Suscipit atque at iste voluptatum iure impedit
                        doloribus, iusto ex hic consequuntur blanditiis
                        exercitationem facilis quam. Facilis odio assumenda ex
                        eum rerum?
                    </Typography>
                </CardContent>
                <CorrectionComments comments={comments} />
            </Card>
        </>
    );
};

export default UserCorrections;
