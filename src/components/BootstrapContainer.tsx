import { styled } from '@mui/system';

const BootstrapContainer = styled("div")({
    margin: "auto",
    '@media (min-width: 0px)': {
        maxWidth: "100%"
    },
    '@media (min-width: 576px)': {
        maxWidth: 540
    },
    '@media (min-width: 768px)': {
        maxWidth: 720
    },
    '@media (min-width: 992px)': {
        maxWidth: 960
    },
    '@media (min-width: 1200px)': {
        maxWidth: 1140
    },
    '@media (min-width: 1400px)': {
        maxWidth: 1320
    },
});

export default BootstrapContainer