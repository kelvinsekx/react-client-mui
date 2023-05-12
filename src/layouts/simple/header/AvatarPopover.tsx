import React, { useState } from 'react';
import { Avatar, Divider, IconButton, Popover } from '@mui/material';
import useAuthContext from '../../../hooks/useAuthContext';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Logout } from '@mui/icons-material';
import EditIcon from '@mui/icons-material/Edit';

const AvatarPopover = () => {
    const { currentUser, logout } = useAuthContext();


    const [open, setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

    const handleOpen = (evt: React.MouseEvent<HTMLButtonElement>) => {
        setOpen(true);
        setAnchorEl(evt.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
        setOpen(false);
    };

    return (
        <>
            <IconButton color={open ? "primary" : "default"} onClick={handleOpen}>
                <Avatar sx={{ width: 36, height: 36 }} alt={currentUser?.username} src="/"/>
            </IconButton>

            <Popover
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
                <List
                    sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                    disablePadding
                    // subheader={
                    //     <ListSubheader sx={{ p: 3}} component="div" id="nested-list-subheader">
                    //         <Typography fontWeight={700}>
                    //             {currentUser?.username}
                    //         </Typography>
                    //         <Typography fontWeight={700}>
                    //             {currentUser?.email}
                    //         </Typography>
                    //     </ListSubheader>
                    // }
                >
                    <ListItemButton>
                        <ListItemIcon>
                            <AccountCircleIcon/>
                        </ListItemIcon>
                        <ListItemText primary="View Profile"/>
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemIcon>
                            <EditIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Edit Profile"/>
                    </ListItemButton>
                    <Divider/>
                    <ListItemButton onClick={() => logout()}>
                        <ListItemIcon>
                            <Logout/>
                        </ListItemIcon>
                        <ListItemText primary="Logout"/>
                    </ListItemButton>
                </List>
            </Popover>
        </>
    );
};

export default AvatarPopover;