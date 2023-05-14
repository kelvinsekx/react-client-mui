import React from 'react';
import { Divider, IconButton, ListItem, ListItemIcon, ListItemText, Menu, MenuItem } from '@mui/material';
import ReplyIcon from '@mui/icons-material/Reply';
import sanitizeHtml from 'sanitize-html';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EditIcon from '@mui/icons-material/Edit';
import "./Correction.css";
import DeleteIcon from '@mui/icons-material/Delete';

export interface CorrectionInterface {
    username: string;
    correction_id?: string;
    perfect_id?: string;
    correction?: string | undefined;
    note?: string | undefined;
    pretty_html?: string | undefined;
    sentence_order: number;
    status: string;
}

export interface CorrectionPropInterface {
    data: CorrectionInterface;
}

interface SanitizeProps {
    html: string;
    options?: sanitizeHtml.IOptions;
}

const defaultOptions: sanitizeHtml.IOptions = {
    allowedTags: ["span", "del", "ins"]
};

const sanitize = ({ html, options }: SanitizeProps) => ({
    __html: sanitizeHtml(
        html,
        { ...defaultOptions, ...options }
    )
});

const SanitizeHTML = ({ html, options }: SanitizeProps) => (
    <div dangerouslySetInnerHTML={sanitize({ html, options })}/>
);

/**
 * Renders an individual correction
 *
 * Props:
 * - data
 *
 * {UserCorrections} -> Correction
 */

const Correction = ({ data }: CorrectionPropInterface) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    const renderCorrection = data.status === "perfect" ? "this sentence is marked as perfect " : <ListItemText
        primary={<SanitizeHTML html={data?.pretty_html ? data.pretty_html : ""}/>}
        secondary={data.note}/>;

    const correctionId = data.correction_id ? data.correction_id : data.perfect_id;

    return (
        <>
            <ListItem
                key={correctionId}
                secondaryAction={
                    <>
                        <IconButton
                            edge="end"
                            aria-label="options"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                        >
                            <MoreVertIcon/>
                        </IconButton>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            <MenuItem onClick={handleClose}>
                                <ListItemIcon>
                                    <EditIcon/>
                                </ListItemIcon>
                                <ListItemText>
                                    Edit
                                </ListItemText>
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                                <ListItemIcon>
                                    <DeleteIcon/>
                                </ListItemIcon>
                                <ListItemText>
                                    Delete
                                </ListItemText>
                            </MenuItem>
                            <Divider/>
                            <MenuItem onClick={handleClose}>
                                <ListItemIcon>
                                    <ReplyIcon/>
                                </ListItemIcon>
                                <ListItemText>
                                    Reply
                                </ListItemText>
                            </MenuItem>
                        </Menu>
                    </>

                }
                sx={{
                    paddingTop: "1rem",
                    paddingBottom: "1rem"
                }}
            >
                {renderCorrection}
            </ListItem>
            <Divider/>
        </>
    );
};

export default Correction;