import { Box, Toolbar } from '@mui/material';
import { useState } from 'react';
import Header from './header/Header';
import Navbar from './navbar/Navbar';
import { Outlet } from "react-router-dom";


/**
 * Renders the dashboard
 *
 * State:
 * - open
 *
 * {RoutesList} -> DashboardLayout
 */

const DashboardLayout = () => {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <Box display="flex" minHeight="100%" overflow="hidden">
            <Header onNavOpen={() => setOpen(true)} />
            <Navbar isNavOpen={open} onNavClose={() => setOpen(false)} />

            <Box component="main" sx={{ width: '100%', flexGrow: 1, p: { xs: 2, sm: 3 } }}>
                {/* hack for text not to be behind header */}
                <Toolbar />
                <Outlet />
            </Box>
        </Box>
    );
};
export default DashboardLayout;