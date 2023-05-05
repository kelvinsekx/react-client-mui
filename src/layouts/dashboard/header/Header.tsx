import { AppBar, Box, IconButton, Stack, Toolbar, styled } from '@mui/material';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import NotificationsPopover from './NotificationsPopover';
import SettingsPopover from './SettingsPopover';

const NAV_WIDTH = 230;
const HEADER_HEIGHT = 60;

const StyledAppBar = styled(AppBar)(({ theme }) => ({
    boxShadow: "none",
    [theme.breakpoints.up("lg")]: {
        width: `calc(100% - ${NAV_WIDTH}px)`,
    }
}));

const StyledToolbar = styled(Toolbar)(() => ({
    minHeight: "60px",
    height: HEADER_HEIGHT,
    "&.MuiToolbar-root": {
        minHeight: `${HEADER_HEIGHT}px`,
    },
}));

export interface HeaderProps {
    onNavOpen: () => void;
}

/**
 * Renders the header
 *
 * Props:
 * - onNavOpen
 *
 * {DashboardLayout} -> Header
 */

const Header = ({ onNavOpen }: HeaderProps) => {
    return (
        <StyledAppBar>
            <StyledToolbar>

                <IconButton
                    onClick={onNavOpen}
                    sx={{
                        color: 'text.primary',
                        display: { lg: 'none' },
                    }}>
                    <MenuOpenIcon />
                </IconButton>

                {/* empty div to push header icons to the end */}
                <Box sx={{ flexGrow: 1 }} />

                <Stack direction="row" alignItems="center" spacing={1.5}>
                    <NotificationsPopover />
                    <SettingsPopover />
                </Stack>

            </StyledToolbar>
        </StyledAppBar>
    );
};

export default Header;