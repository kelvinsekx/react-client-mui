import { Typography, Box, Grid, Button, Stack } from '@mui/material';
import BootstrapContainer from '../components/BootstrapContainer';

const SectionOne = () => (
    <Box component="section" py={6}>
        <BootstrapContainer>
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
        </BootstrapContainer>
    </Box >
)

const SectionTwo = () => {
    const grids = [
        {
            id: 1,
            header: "1 Register an account",
            content: "We start with a short 3-step registration process to help us determine users you should be match with."
        },
        {
            id: 2,
            header: "2 Write a journal entry",
            content: "Browse a wide variety of writing prompts or simply create a journal from scratch."
        },
        {
            id: 3,
            header: "3 Review corrections",
            content: "Native speakers will correct your writing and provide constructive feedback."
        },
    ]

    return (
        <Box component="section" py={6} bgcolor="primary.main" color="white">
            <BootstrapContainer>
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
                        {grids.map(grid => (
                            <Grid key={grid.id} item xs={12} md={4}>
                                <Typography variant="h4" sx={{ fontWeight: "bold", mb: 1 }} >
                                    {grid.header}
                                </Typography>
                                <Typography variant="h6" paragraph>
                                    {grid.content}
                                </Typography>
                            </Grid>
                        ))}
                    </Grid>
                </Stack>
            </BootstrapContainer>
        </Box>
    )
}

const SectionThree = () => {
    const grids = [
        {
            id: 1,
            header: "Built for serious learners",
            content: "Ditch all the unnecessary distractions on other language-learning platforms and spend more time focusing on your new language(s)."
        },
        {
            id: 2,
            header: "Straight to the point",
            content: "Get corrections on your writing quickly – Simply write a journal in your target language, publish it, and let the LangCorrect community do their thing to provide corrections for you."
        },
        {
            id: 3,
            header: "Constantly improving",
            content: "The LangCorrect platform is getting better all the time. Consistent, direct feedback from our user base and frequent updates allow us to keep things fresh and interesting for our users."
        },
        {
            id: 4,
            header: "Learn with friends",
            content: "Invite your friends to join LangCorrect and challenge one another to see who can earn the highest Rankings and Streaks."
        },
        {
            id: 5,
            header: "Functionality with learning in mind",
            content: "From writing prompts to automatic, color-coded correction highlighting, learning to write in another language has never been this easy."
        },
        {
            id: 6,
            header: "Built-in messaging",
            content: "Take a break to relax and chat with other learners using the messaging feature. This is a great way to make new friends and meet people from around the globe."
        },
    ]

    return (
        <Box component="section" py={6} >
            <BootstrapContainer>
                <Stack>
                    <Grid container justifyContent="center">
                        {grids.map(grid => (
                            <Grid key={grid.id} item xs={12} md={4}>
                                <Typography variant="h4" sx={{ fontWeight: "bold", mb: 1 }} >
                                    {grid.header}
                                </Typography>
                                <Typography variant="h6" paragraph>
                                    {grid.content}
                                </Typography>
                            </Grid>
                        ))}
                    </Grid>
                </Stack>
            </BootstrapContainer>
        </Box>
    )
}

const SectionFour = () => (
    <Box component="section" py={6} bgcolor="primary.main" color="white">
        <BootstrapContainer>
            <Stack>
                <Grid container justifyContent="center" sx={{ mb: 5 }}>
                    <Grid item xs={12} md={8} sx={{ pr: 10 }}>
                        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 1 }} >
                            Join today and experience language-learning, redefined.
                        </Typography>
                        <Typography variant="h6" paragraph>
                            Whether you’re fluent or just starting out, we’d be thrilled to have you join the LangCorrect community. We’re all learners and we understand that innd confidence in a new language, it’s important to make mistakes. LangCorrect’s wonderful users are ready to help you, provide support, and answer your burning questions so that you can reach the level you want to be at in your new language.
                        </Typography>
                        <Button color="inherit" variant="outlined">Start learning</Button>
                    </Grid>
                    <Grid item xs={12} md={4} textAlign="center">
                        <Box
                            component="img"
                            src="src/assets/index/index-join.webp"
                            alt="illustration-1"
                            sx={{ width: { xs: "80%", md: "100%" }, height: "auto" }}
                        />
                    </Grid>
                </Grid>
            </Stack>
        </BootstrapContainer>
    </Box>
)

const IndexPage = () => {
    return (
        <Stack>
            <SectionOne />
            <SectionTwo />
            <SectionThree />
            <SectionFour />
        </Stack >
    );
}

export default IndexPage;