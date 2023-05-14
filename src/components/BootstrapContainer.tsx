import { styled } from '@mui/system';

const BootstrapContainer = styled('div')(({ theme }) =>
    theme.unstable_sx({
        margin: "auto",
        maxWidth: {
            xs: "100%",
            s: 540,
            md: 720,
            l: 960,
            xl: 1140
        }
    }),
);

export default BootstrapContainer