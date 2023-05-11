import { Typography, Box, Grid, Container, Button, Stack } from '@mui/material';

const SectionOne = () => (
    <>
        <Box component="section" py={6}>
            <Container>
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
            </Container>
        </Box >
    </>
)

const SectionTwo = () => (
    <>
        <Box component="section" py={6} bgcolor="primary.main" color="white">
            <Container>
                <Stack>
                    <Grid container justifyContent="center" sx={{ mb: 5 }}>
                        <Grid item xs={12} md={8} order={{ xs: 2, md: 1 }} sx={{ pr: 10 }}>
                            <Typography variant="h4" sx={{ fontWeight: "bold", mb: 1 }} >
                                Getting corrections on your writing is really easy
                            </Typography>
                            <Typography variant="h6" paragraph>
                                Once you're done writing in your studying language, we will automatically match it with native speakers.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={4} order={{ xs: 1, md: 2 }} textAlign="center">
                            <Box
                                component="img"
                                src="src/assets/index/illustration-1.webp"
                                alt="illustration-1"
                                sx={{ width: { xs: "50%", md: "80%" }, height: "auto" }}
                            />
                        </Grid>
                    </Grid>
                    <Grid container justifyContent="center">
                        <Grid item xs={12} md={4}>
                            <Typography variant="h4" sx={{ fontWeight: "bold", mb: 1 }} >
                                1 Register an account
                            </Typography>
                            <Typography variant="h6" paragraph>
                                We start with a short 3-step registration process to help us determine users you should be match with.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Typography variant="h4" sx={{ fontWeight: "bold", mb: 1 }} >
                                2 Write a journal entry
                            </Typography>
                            <Typography variant="h6" paragraph>
                                Browse a wide variety of writing prompts or simply create a journal from scratch.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Typography variant="h4" sx={{ fontWeight: "bold", mb: 1 }} >
                                3 Review corrections
                            </Typography>
                            <Typography variant="h6" paragraph>
                                Native speakers will correct your writing and provide constructive feedback.
                            </Typography>
                        </Grid>
                    </Grid>
                </Stack>
            </Container>
        </Box>
    </>
)

const IndexPage = () => {
    return (
        <Box>
            <SectionOne />
            <SectionTwo />
        </Box >
    );
}

export default IndexPage;