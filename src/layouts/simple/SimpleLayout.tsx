import { useState } from 'react';
import { Outlet } from "react-router-dom";
import Header from "./header/Header.tsx";
import { Container } from "@mui/material";
import ScrollToTop from './ScrollToTop.tsx';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Navbar from './navbar/Navbar.tsx';
import Footer from '../../components/Footer.tsx';

function SimpleLayout() {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <>
            <Header onNavOpen={() => setOpen(true)}/>
            <Navbar isNavOpen={open} onNavClose={() => setOpen(false)}/>
            <Container>
                <Outlet/>
                <ScrollToTop>
                    <Fab size="small" aria-label="scroll back to top">
                        <KeyboardArrowUpIcon/>
                    </Fab>
                </ScrollToTop>
            </Container>
            <Footer />
        </>
    );
}

export default SimpleLayout;