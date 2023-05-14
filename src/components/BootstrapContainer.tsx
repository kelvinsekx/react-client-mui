import { styled } from '@mui/system';

const BootstrapContainer = styled('div')(({ theme }) =>
    theme.unstable_sx({
        margin: "auto",
        maxWidth: {
            xs: "100%",
            s: 720,
            md: 960,
            l: 1140,
            xl: 1320,
        }
    }),
);

export default BootstrapContainer