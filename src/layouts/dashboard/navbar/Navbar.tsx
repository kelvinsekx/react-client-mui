import {
    Box,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText
} from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import useResponsive from '../../../hooks/useResponsive';
import LogoMarkWhite from "../../../assets/logos/logo-mark-white.svg"

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

const Navbar = ({ isNavOpen, onNavClose }:NavbarProps) => {
    const isLargeScreen = useResponsive("up", "lg");

    return (
        <Box component="nav">
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
                    sx={{height: "60px"}}
                >
                    <img src={LogoMarkWhite} alt="logo" height={40} width={40} />
                </Box>
                <List>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <InboxIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Home"/>
                        </ListItemButton>
                    </ListItem>
                </List>
            </Drawer>
        </Box>
    );
};

export default Navbar;