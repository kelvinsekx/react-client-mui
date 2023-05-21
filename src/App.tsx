import { CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import RoutesList from "./RoutesList.tsx";
import { ColorModeContext, useColorMode } from "./theme.tsx";

function App() {
    const [theme, colorMode] = useColorMode();

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <BrowserRouter>
                    <RoutesList />
                </BrowserRouter>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

export default App;
