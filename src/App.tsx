import { CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import RoutesList from "./RoutesList.tsx";
import {
    ColorModeContext,
    useColorMode,
    useRTL,
    RTLContext,
} from "./theme.tsx";
import { CacheProvider } from "@emotion/react";
import rtlPlugin from "stylis-plugin-rtl";

import createCache from "@emotion/cache";
import React, { useMemo } from "react";
//@ts-ignore
import { prefixer } from "stylis";

const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
});

function App() {
    let [theme, colorMode] = useColorMode();
    const [RTLTheme, RtlMode] = useRTL();

    const newTheme = {
        ...theme,
        ...RTLTheme,
    };

    // this is the most important part
    const Container = useMemo(() => {
        if (RTLTheme.direction === "rtl") {
            return ({ children }: { children: React.ReactNode }) => (
                <CacheProvider value={cacheRtl}>{children}</CacheProvider>
            );
        } else {
            return ({ children }: { children: React.ReactNode }) => (
                <>{children}</>
            );
        }
    }, [newTheme]);

    return (
        <ColorModeContext.Provider value={colorMode}>
            <RTLContext.Provider value={RtlMode}>
                <Container>
                    <ThemeProvider theme={newTheme}>
                        <CssBaseline />
                        <BrowserRouter>
                            <RoutesList />
                        </BrowserRouter>
                    </ThemeProvider>
                </Container>
            </RTLContext.Provider>
        </ColorModeContext.Provider>
    );
}

export default App;
