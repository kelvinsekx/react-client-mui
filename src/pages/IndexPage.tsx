import { Typography, Box, Grid, Container } from '@mui/material';

const IndexPage = () => {
    return (
        <Box
            component="section"
            sx={{ mt: 5, mb: 5 }}
        >
            <Container sx={{ display: 'flex' }}>
                <Grid container spacing={5}>
                    <Grid item xs={12} md={6}>
                        <Box
                            component="img"
                            src="src/assets/index/image-index.svg"
                            alt="img-index"
                            sx={{ height: 250 }}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h5">
                            Master grammar, spelling, and syntax in the language(s) you’re learning through direct feedback on your writing from fluent, native speakers.
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default IndexPage;