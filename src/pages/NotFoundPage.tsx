import { Typography, Box, Button } from "@mui/material";
import BootstrapContainer from "../components/BootstrapContainer"
import { Link } from "react-router-dom";

const NotFoundPage = () => (
    <Box component="section">
        <BootstrapContainer sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "100vh", width: { xs: "100%", sm: "50%" }, textAlign: "center" }}>
            <Typography component="h1" variant="h2" fontWeight="light" color="primary.main" mb={1}>Uh Oh.</Typography>
            <Typography variant="body1" color="text.secondary" mb={6}>Sorry, this page isn't available. The link you followed may be broken, or the page may have been removed.</Typography>
            <Button component={Link} to="/journals" variant="contained">
                <Typography variant="body1" sx={{ textTransform: "none" }}>
                    Back to Journals
                </Typography>
            </Button>
        </BootstrapContainer>
    </Box>
)

export default NotFoundPage