import { createTheme, useMediaQuery } from "@mui/material";
import { createContext, useMemo, useState } from "react";
import { themeSettings } from "./constants";

export const ColorModeContext = createContext({
    toggleColorMode: () => {
        /** */
    },
});

export const useColorMode = () => {
    const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
    const [mode, setMode] = useState<"light" | "dark">(
        prefersDarkMode ? "dark" : "light",
    );

    const colorMode = useMemo(
        () => ({
            toggleColorMode: () =>
                setMode((prev) => (prev === "light" ? "dark" : "light")),
        }),
        [],
    );

    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

    return [theme, colorMode] as const;
};
