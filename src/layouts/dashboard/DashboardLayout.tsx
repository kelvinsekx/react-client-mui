import { Box } from '@mui/material';
import { useState } from 'react';
import Header from './header/Header';
import Navbar from './navbar/Navbar';


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
        </Box>
    );
};

export default DashboardLayout;