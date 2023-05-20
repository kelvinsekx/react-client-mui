import {
    Box,
    Button,
    Card,
    CardContent,
    Container,
    Stack,
    Typography,
} from "@mui/material";
import LoginForm from "../components/auth/LoginForm";
import { Link } from "react-router-dom";

const LoginPage = () => {
    return (
        <Box
            minHeight={"100vh"}
            sx={{
                background:
                    "linear-gradient(157deg, rgba(2,0,36,1) 0%, rgba(97,116,208,1) 78%, rgba(0,212,255,1) 98%)",
            }}
        >
            <Container>
                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    minHeight={"100vh"}
                >
                    <Card sx={{ width: 550, marginTop: 3, p: 2 }}>
                        <CardContent>
                            <Stack
                                direction="row"
                                justifyContent="space-between"
                                py={2}
                            >
                                <Typography variant="h5" gutterBottom>
                                    Login
                                </Typography>
                                <Button component={Link} to="/register">
                                    Don't have an account?
                                </Button>
                            </Stack>
                            <LoginForm />
                        </CardContent>
                    </Card>
                </Box>
            </Container>
        </Box>
    );
};

export default LoginPage;
