"use client";

import * as React from "react";
import { CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import RouteLoadingOverlay from "@/src/components/common/RouteLoadingOverlay";

const theme = createTheme({
    palette: {
        mode: "light",
        background: {
            default: "#ffffff",
            paper: "#ffffff",
        },
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    backgroundColor: "#ffffff",
                },
            },
        },
    },
    typography: {
        fontFamily: "var(--font-thai), var(--font-latin), system-ui, sans-serif",
    },
});

export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <AppRouterCacheProvider options={{ key: "mui" }}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <RouteLoadingOverlay />
                {children}
            </ThemeProvider>
        </AppRouterCacheProvider>
    );
}
