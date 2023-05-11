import { Typography, Box, Grid, Container, Button, Stack } from '@mui/material';

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

const SectionTwo = () => (
    <>
        <Box component="section" py={6}>
            <Stack>
                <Grid container alignItems="center" justifyContent="center">
                    <Grid item xs={12} md={8}>Getting corrections on your writing is really easy</Grid>
                    <Grid item xs={12} md={4}>I'm an image</Grid>
                </Grid>
                <Grid container alignItems="center" justifyContent="center">
                    <Grid item xs={12} md={4}>Register an account</Grid>
                    <Grid item xs={12} md={4}>Write a journal entry</Grid>
                    <Grid item xs={12} md={4}>Review corrections</Grid>
                </Grid>
            </Stack>
        </Box>
    </>
)

const IndexPage = () => {
    return (
        <Container>
            <SectionOne />
            <SectionTwo />
        </Container >
    );
}

export default IndexPage;