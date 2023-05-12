import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import useAuthContext from "../../../hooks/useAuthContext.js";
import { Stack, useMediaQuery, useTheme } from "@mui/material";
import NotificationsPopover from "./NotificationsPopover.js";
import AvatarPopover from "./AvatarPopover.js";
import LogoMarkWhite from "../../../assets/logos/logo-mark-white.svg";

interface Props {
    onNavOpen: () => void;
}

const Header = ({ onNavOpen }: Props) => {
    const theme = useTheme();
    const isMediumScreen = useMediaQuery(theme.breakpoints.up('md'));

    const { currentUser } = useAuthContext();

    return (
        <>
            <div id="back-to-top-anchor"></div>
            <Box sx={{ flexGrow: 1 }} mb={3}>
                <AppBar position="static" color="primary">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            onClick={onNavOpen}
                        >
                            <MenuIcon />
                        </IconButton>

                        <Box
                            display="flex"
                            flexGrow={1}
                            alignItems="center"
                            justifyContent={isMediumScreen ? 'center' : 'start'}
                        >
                            <img src={LogoMarkWhite} alt="logo" height={38} width={38} />
                        </Box>

                        {currentUser ? (
                            <Stack direction="row" alignItems="center" spacing={1.5}>
                                <NotificationsPopover />
                                <AvatarPopover />
                            </Stack>
                        ) : (
                            <>
                                <Button color="inherit">Login</Button>
                            </>
                        )}
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    );
};

export default Header;