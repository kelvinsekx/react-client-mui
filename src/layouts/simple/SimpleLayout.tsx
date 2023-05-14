import { Stack } from '@mui/material';
import { Outlet } from "react-router-dom";

const SimpleLayout = () => (
    <Stack>
        <Outlet />
    </Stack>
);
export default SimpleLayout;