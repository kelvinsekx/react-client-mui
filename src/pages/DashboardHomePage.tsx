import {
    Button,
    CardActions,
    Container,
    Divider,
    Grid,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography
} from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

/**
 * 
 * TODO:
 */

const DashboardHomePage = () => {
    return (
        <>
            <Container maxWidth="xl">
                <Typography variant="h4" sx={{ marginBottom: 3 }}>
                    Welcome back
                </Typography>

                <Grid container spacing={3} mb={5}>
                    <Grid item xs={12} sm={6} md={3}>
                        <Card>
                            <CardContent>
                                placeholder
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Card>
                            <CardContent>
                                placeholder
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Card>
                            <CardContent>
                                placeholder
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Card>
                            <CardContent>
                                placeholder
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>

                <Card sx={{ marginBottom: 5 }}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Recent posts from following
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            placeholder
                        </Typography>
                    </CardContent>

                    <List>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    123
                                </ListItemIcon>
                                <ListItemText primary="Inbox" />
                            </ListItemButton>
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    123
                                </ListItemIcon>
                                <ListItemText primary="Drafts" />
                            </ListItemButton>
                        </ListItem>
                    </List>

                    <CardActions>
                        <Button size="small">View more</Button>
                    </CardActions>
                </Card>

                <Card>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Recent posts from learners
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            placeholder
                        </Typography>
                    </CardContent>

                    <List>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    123
                                </ListItemIcon>
                                <ListItemText primary="Inbox" />
                            </ListItemButton>
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    123
                                </ListItemIcon>
                                <ListItemText primary="Drafts" />
                            </ListItemButton>
                        </ListItem>
                    </List>

                    <CardActions>
                        <Button size="small">View more</Button>
                    </CardActions>
                </Card>
            </Container>
        </>
    );
};

export default DashboardHomePage;