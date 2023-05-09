import { Box, Collapse, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import useResponsive from '../../../hooks/useResponsive';
import LogoMarkWhite from "../../../assets/logos/logo-mark-white.svg";
import { ExpandLess, ExpandMore, Home } from "@mui/icons-material";
import { useState } from "react";
import ArticleIcon from '@mui/icons-material/Article';
import { Link } from "react-router-dom";

export interface NavbarProps {
    isNavOpen: boolean;
    onNavClose: () => void;
}

const NAV_WIDTH = 230;

/**
 * Renders the navbar component
 *
 * Props:
 * - isNavOpen
 * - onNavClose
 *
 * {DashboardLayout} -> Navbar
 */

const Navbar = ({ isNavOpen, onNavClose }: NavbarProps) => {
    const isLargeScreen = useResponsive("up", "lg");
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <Box
            component="nav"
            sx={{
                flexShrink: { lg: 0 },
                width: { lg: NAV_WIDTH },
            }}
        >
            <Drawer
                open={isNavOpen}
                onClose={onNavClose}
                variant={isLargeScreen ? "permanent" : "temporary"}
                PaperProps={{
                    sx: {
                        width: NAV_WIDTH,
                        border: "none"
                    },
                }}
            >
                <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    bgcolor="primary.main"
                    sx={{ height: "60px" }}
                >
                    <img src={LogoMarkWhite} alt="logo" height={40} width={40}/>
                </Box>
                <List>
                    <ListItem disablePadding>
                        <ListItemButton component={Link} to="/">
                            <ListItemIcon>
                                <Home/>
                            </ListItemIcon>
                            <ListItemText primary="Home"/>
                        </ListItemButton>
                    </ListItem>
                    <ListItemButton onClick={handleClick}>
                        <ListItemIcon>
                            <ArticleIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Posts"/>
                        {open ? <ExpandLess/> : <ExpandMore/>}
                    </ListItemButton>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 4 }} component={Link} to="/teach">
                                <ListItemText primary="Teach"/>
                            </ListItemButton>
                            <ListItemButton sx={{ pl: 4 }} component={Link} to="/learn">
                                <ListItemText primary="Learn"/>
                            </ListItemButton>
                        </List>
                    </Collapse>
                </List>
            </Drawer>
        </Box>
    );
};

export default Navbar;