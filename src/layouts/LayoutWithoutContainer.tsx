import { Fab } from '@mui/material';
import { Outlet } from 'react-router-dom';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import BaseLayout from './BaseLayout';
import ScrollToTop from './ScrollToTop';


const LayoutWithoutContainer = () => {
    return (
        <BaseLayout>
            <Outlet />
            <ScrollToTop>
                <Fab size="small" aria-label="scroll back to top">
                    <KeyboardArrowUpIcon />
                </Fab>
            </ScrollToTop>
        </BaseLayout>
    );
};

export default LayoutWithoutContainer;
