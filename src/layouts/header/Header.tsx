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
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth.js";
import React, { useContext, useState, MouseEvent } from "react";

import SettingsIcon from "@mui/icons-material/Settings";
import Popover from "@mui/material/Popover";

import Switch from "@mui/material/Switch";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

import { ColorModeContext } from "../../theme.js";

interface Props {
    onNavOpen: () => void;
}

export default function Header({ onNavOpen }: Props) {
    const theme = useTheme();
    const colorMode = useContext(ColorModeContext);
    const isMediumScreen = useMediaQuery(theme.breakpoints.up("md"));
    const navigate = useNavigate();
    const { isAuthenticated, userInfoLoaded } = useAuth();

    const [rtl, setRTL] = useState(document.dir);

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
                        <span
                            style={{ cursor: "pointer" }}
                            onClick={() => navigate("/")}
                        >
                            {renderLogo}
                        </span>
                    </Box>
                    <LangSettingPopOver rtl={rtl}>
                        <FormGroup>
                            <FormControlLabel
                                control={
                                    <Switch
                                        size="medium"
                                        onClick={() => {
                                            if (document.dir) {
                                                setRTL("undefined");
                                                return (document.dir =
                                                    "undefined");
                                            }
                                            setRTL("rtl");
                                            return (document.dir = "rtl");
                                        }}
                                    />
                                }
                                label="RTL"
                                labelPlacement="start"
                                sx={{
                                    justifyContent: "space-between",
                                }}
                            />
                            <FormControlLabel
                                control={
                                    <Switch
                                        size="medium"
                                        onClick={colorMode.toggleColorMode}
                                    />
                                }
                                label="Dark Mode"
                                labelPlacement="start"
                                sx={{
                                    justifyContent: "space-between",
                                }}
                            />
                        </FormGroup>
                    </LangSettingPopOver>
                    {renderPopovers}
                </Toolbar>
            </AppBar>
        </>
    );
}

const LangSettingPopOver = ({
    children,
    rtl,
}: {
    children: React.ReactNode;
    rtl: string;
}) => {
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? "simple-popover" : undefined;
    return (
        <div>
            <IconButton color="inherit" onClick={handleClick}>
                <SettingsIcon />
            </IconButton>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                }}
                dir={rtl}
            >
                <Box
                    sx={{
                        padding: "1rem",
                    }}
                >
                    {children}
                </Box>
            </Popover>
        </div>
    );
};
