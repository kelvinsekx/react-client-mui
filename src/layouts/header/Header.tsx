import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Skeleton, Stack, useMediaQuery, useTheme } from "@mui/material";
import NotificationsPopover from "./NotificationsPopover.js";
import AvatarPopover from "./AvatarPopover.js";
import LogoMarkWhite from "../../assets/logos/logo-mark-white.svg";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth.js";

interface Props {
    onNavOpen: () => void;
}

const Header = ({ onNavOpen }: Props) => {
    const theme = useTheme();
    const isMediumScreen = useMediaQuery(theme.breakpoints.up("md"));
    const { isAuthenticated, userInfoLoaded } = useAuth();

    if (!userInfoLoaded) return;

    const renderMenuIcon = userInfoLoaded ? (
        isAuthenticated && (
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
        )
    ) : (
        <Skeleton variant="circular" width={42} height={42} />
    );

    const renderLogo = userInfoLoaded ? (
        <img src={LogoMarkWhite} alt="logo" height={38} width={38} />
    ) : (
        <Skeleton variant="circular" width={42} height={42} />
    );

    const renderPopovers = userInfoLoaded ? (
        isAuthenticated ? (
            <Stack direction="row" alignItems="center" spacing={1.5}>
                <NotificationsPopover />
                <AvatarPopover />
            </Stack>
        ) : (
            <Button component={Link} to="/login" color="inherit">
                Login
            </Button>
        )
    ) : (
        <Skeleton variant="rectangular" width={64} height={38} />
    );

    return (
        <>
            <div id="back-to-top-anchor"></div>
            <AppBar position="static" color="primary" sx={{ mb: 3 }}>
                <Toolbar>
                    {renderMenuIcon}
                    <Box
                        display="flex"
                        flexGrow={1}
                        alignItems="center"
                        justifyContent={isMediumScreen ? "center" : "start"}
                    >
                        {renderLogo}
                    </Box>
                    {renderPopovers}
                </Toolbar>
            </AppBar>
        </>
    );
};

export default Header;
