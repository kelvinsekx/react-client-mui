import { Typography, Box, Grid, Button, Stack } from '@mui/material';
import BootstrapContainer from "../components/BootstrapContainer"

const NotFoundPage = () => (
    <Box component="section" sx={{ height: "80vh" }}>
        <BootstrapContainer sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", textAlign: "center" }}>
            <Typography variant="h3">Uh Oh.</Typography>
            <Typography variant="body1" color="text.secondary">Sorry, this page isn't available. The link you followed may be broken, or the page may have been removed.</Typography>
            <Button variant="contained">Back to Journals</Button>
        </BootstrapContainer>
    </Box>
)

export default NotFoundPage