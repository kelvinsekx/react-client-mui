import BaseLayout from "./BaseLayout";
import { Container, Fab } from "@mui/material";
import { Outlet } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const LayoutWithContainer = () => {
    return (
        <BaseLayout>
            <Container sx={{ mt: 2 }}>
                <Outlet />
                <ScrollToTop>
                    <Fab size="small" aria-label="scroll back to top">
                        <KeyboardArrowUpIcon />
                    </Fab>
                </ScrollToTop>
            </Container>
        </BaseLayout>
    );
};

export default LayoutWithContainer;
