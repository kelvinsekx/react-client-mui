import { Typography, Box, Grid, Container, Button } from '@mui/material';

const SectionOne = () => (
    <>
        <Box component="section" py={6}>
            <Grid container rowSpacing={{ xs: 5, md: 0 }} textAlign={{ xs: "center", md: "left" }} alignItems="center">
                <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
                    <Typography variant="h3" color="primary" sx={{ fontWeight: "bold", mb: 1 }}>
                        Write. Learn. Grow.
                    </Typography>
                    <Typography variant="h6" paragraph sx={{ mb: 2 }}>
                        Master grammar, spelling, and syntax in the language(s) you’re learning through direct feedback on your writing from fluent, native speakers.
                    </Typography>
                    <Button variant="contained" color="primary">
                        Start learning ➔
                    </Button>
                    <Button color="primary">
                        Browse as guest
                    </Button>
                </Grid>
                <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
                    <Box
                        component="img"
                        src="src/assets/index/image-index.svg"
                        alt="img-index"
                        sx={{ width: { xs: "80%", md: "100%" }, height: "auto" }}
                    />
                </Grid>
            </Grid>
        </Box >
    </>
)

const IndexPage = () => {
    return (
        <Container>
            <SectionOne />
        </Container >
    );
}

export default IndexPage;