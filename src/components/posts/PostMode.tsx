import React from 'react';
import { Button, Menu, MenuItem, Typography } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const MODE_OPTIONS = [
    { value: "teach", label: "Teach" },
    { value: "learn", label: "Leach" }
];

const PostMode = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const renderMenuItems = MODE_OPTIONS.map(option => (
        <MenuItem onClick={handleClose}>{option.label}</MenuItem>
    ));

    return (
        <>
            <Button
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                disableRipple
                endIcon={<KeyboardArrowDownIcon />}
            >
                <Typography component="span" variant="subtitle2" sx={{ color: 'text.secondary', fontWeight: 700 }}>
                    Post mode: &nbsp;
                </Typography>
                {" "} Teach
            </Button>
            <Menu
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
            >
                {renderMenuItems}
            </Menu>
        </>
    );
};

export default PostMode;