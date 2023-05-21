import React from "react";
import {
    Alert,
    Box,
    Divider,
    IconButton,
    ListItem,
    ListItemIcon,
    ListItemText,
    Menu,
    MenuItem,
    Typography,
} from "@mui/material";
import ReplyIcon from "@mui/icons-material/Reply";
import sanitizeHtml from "sanitize-html";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EditIcon from "@mui/icons-material/Edit";
import "./Correction.css";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

export interface CorrectionInterface {
    username: string;
    correction_id?: string;
    perfect_id?: string;
    correction?: string | undefined;
    note?: string | undefined;
    pretty_html?: string | undefined;
    sentence_order: number;
    status: string;
    original_sentence?: string;
}

export interface CorrectionPropInterface {
    data: CorrectionInterface;
}

interface SanitizeProps {
    html: string;
    options?: sanitizeHtml.IOptions;
}

const defaultOptions: sanitizeHtml.IOptions = {
    allowedTags: ["span", "del", "ins"],
};

const sanitize = ({ html, options }: SanitizeProps) => ({
    __html: sanitizeHtml(html, { ...defaultOptions, ...options }),
});

const SanitizeHTML = ({ html, options }: SanitizeProps) => (
    <div dangerouslySetInnerHTML={sanitize({ html, options })} />
);

const Correction = ({ data }: CorrectionPropInterface) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const renderCorrection =
        data.status === "perfect" ? (
            <Typography color="success.main">
                <Box
                    component="span"
                    display="flex"
                    alignItems="center"
                    gap={1}
                >
                    <CheckIcon />
                    {data.original_sentence}
                </Box>
            </Typography>
        ) : (
            <ListItemText
                primary={
                    <Box
                        component="span"
                        display="flex"
                        alignItems="center"
                        gap={1}
                    >
                        <ClearIcon sx={{ color: "error.main" }} />
                        <SanitizeHTML
                            html={data?.pretty_html ? data.pretty_html : ""}
                        />
                    </Box>
                }
                secondary={
                    data.note ? (
                        <Alert
                            icon={<ErrorOutlineIcon />}
                            variant="outlined"
                            color="info"
                            sx={{ mt: 2 }}
                        >
                            {data.note}
                        </Alert>
                    ) : (
                        ""
                    )
                }
            />
        );

    const correctionId = data.correction_id
        ? data.correction_id
        : data.perfect_id;

    return (
        <>
            <ListItem
                key={correctionId}
                secondaryAction={
                    <>
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
                            <Divider />
                            <MenuItem onClick={handleClose}>
                                <ListItemIcon>
                                    <ReplyIcon />
                                </ListItemIcon>
                                <ListItemText>Reply</ListItemText>
                            </MenuItem>
                        </Menu>
                    </>
                }
                sx={{
                    paddingTop: "1rem",
                    paddingBottom: "1rem",
                }}
            >
                {renderCorrection}
            </ListItem>
            <Divider />
        </>
    );
};

export default Correction;
