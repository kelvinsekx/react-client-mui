import { Typography, Box, Grid, Button, Stack } from '@mui/material';
import BootstrapContainer from "../components/BootstrapContainer"

const NotFoundPage = () => (
    <BootstrapContainer>
        <Typography>Uh Oh.</Typography>
        <Typography>Sorry, this page isn't available. The link you followed may be broken, or the page may have been removed.</Typography>
        <Button>Back to Journals</Button>
    </BootstrapContainer>
)

export default NotFoundPage