import { Typography, Box, Grid, Container, Button, Stack, List, ListItem, ListItemText, Select, MenuItem } from '@mui/material';

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
                </Container>
            </Box>
        </>
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
        <>
            <Box component="section" py={6} >
                <Container>
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
                </Container>
            </Box>
        </>
    )
}

const SectionFour = () => (
    <>
        <Box component="section" py={6} bgcolor="primary.main" color="white">
            <Container>
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
            </Container>
        </Box>
    </>
)

const UrlTextList = ({ items }) => (
    <List>
        {items.map(item => (
            <ListItem key={item.id} disableGutters component="a" href={item.url} sx={{
                textDecoration: "none", color: "text.primary"
            }}>
                <ListItemText primary={item.text} />
            </ListItem>
        ))}
    </List >
)

const Footer = () => {
    const aboutItems = [
        {
            id: 1,
            text: "Changelog",
            url: "https://community.langcorrect.com/t/langcorrect-web/654"
        },
        {
            id: 2,
            text: "Credits",
            url: "https://community.langcorrect.com/t/langcorrect-web/654"
        },
        {
            id: 3,
            text: "Logo Breakdown",
            url: "https://community.langcorrect.com/t/langcorrect-web/654"
        }
    ]

    const legalItems = [
        {
            id: 1,
            text: "Privacy Policy",
            url: "https://community.langcorrect.com/t/langcorrect-web/654"
        },
        {
            id: 2,
            text: "Community Guidelines",
            url: "https://community.langcorrect.com/t/langcorrect-web/654"
        },
        {
            id: 3,
            text: "Terms of Service",
            url: "https://community.langcorrect.com/t/langcorrect-web/654"
        }
    ]


    return (
        <>
            <Box component="footer" py={6} >
                <Container>
                    <Stack>
                        <Grid container justifyContent="center">
                            <Grid item xs={6} md={4} sx={{ mb: 2 }}>
                                <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }} >
                                    About
                                </Typography>
                                <UrlTextList items={aboutItems} />
                            </Grid>
                            <Grid item xs={6} md={4} sx={{ mb: 2 }} >
                                <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }} >
                                    Legal
                                </Typography>
                                <UrlTextList items={legalItems} />
                            </Grid>
                            <Grid item xs={12} md={4} sx={{ mb: 2 }} >
                                <form>
                                    <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }} >
                                        Site Languages
                                    </Typography>
                                    <Typography variant="subtitle1" sx={{ mb: 2 }}>
                                        Don't see your language here? Help us translate the site!
                                    </Typography>
                                    <Stack direction="row">
                                        <Select
                                            value=""
                                            color='primary'
                                            sx={{ width: "80%", label: "null" }}
                                        >
                                        </Select>
                                        <Button disableElevation>Go</Button>
                                    </Stack>
                                </form>
                            </Grid>
                        </Grid>
                        <Grid container justifyContent="space-between" sx={{ borderTop: 1, my: 3, py: 3 }}>
                            <Typography>© 2023 LangCorrect - All rights reserved.</Typography>
                            <List component={Stack} direction="row" sx={{ py: 0 }}>
                                <ListItem component="a" href="https://twitter.com/langcorrect" sx={{ py: 0, alignSelf: "start" }}>
                                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                                    </svg>
                                </ListItem>
                                <ListItem component="a" href="https://www.instagram.com/langcorrect/" sx={{ py: 0, alignSelf: "start" }}>
                                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                                    </svg>
                                </ListItem>
                                <ListItem component="a" href="https://discord.gg/xCnfHm9" sx={{ py: 0, alignSelf: "start" }}>
                                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                                        <path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"></path>
                                    </svg>
                                </ListItem>
                            </List>
                        </Grid>
                    </Stack>
                </Container >
            </Box >
        </>
    )
}

const IndexPage = () => {
    return (
        <Box>
            <SectionOne />
            <SectionTwo />
            <SectionThree />
            <SectionFour />
            <Footer />
        </Box >
    );
}

export default IndexPage;