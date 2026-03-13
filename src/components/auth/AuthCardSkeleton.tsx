"use client";

import * as React from "react";
import {
    Box,
    Container,
    Card,
    CardContent,
    Divider,
    Skeleton,
    Stack,
} from "@mui/material";

export default function AuthCardSkeleton() {
    return (
        <Box className="relative bg-white">
            <Box aria-hidden className="pointer-events-none fixed inset-0" />

            <Container maxWidth="sm" className="relative py-12">
                <Card
                    elevation={0}
                    className="w-full rounded-2xl! border border-slate-200 bg-white"
                    sx={{
                        boxShadow: "none",
                        backdropFilter: "blur(6px)",
                    }}
                >
                    <CardContent className="p-8!">
                        <Stack className="mb-6 items-center text-center">
                            <Box
                                className="mb-3 grid h-12 w-50 place-items-center rounded-2xl border border-slate-200 bg-white shadow-sm"
                                sx={{ boxShadow: "none" }}
                            >
                                <Skeleton
                                    variant="text"
                                    animation="wave"
                                    sx={{
                                        width: 90,
                                        height: 28,
                                        borderRadius: "8px",
                                        transform: "none",
                                    }}
                                />
                            </Box>
                        </Stack>

                        <Stack spacing={1} className="mb-4 items-center text-center">
                            <Skeleton
                                variant="text"
                                animation="wave"
                                sx={{
                                    width: 220,
                                    maxWidth: "100%",
                                    height: 34,
                                    borderRadius: "8px",
                                    transform: "none",
                                }}
                            />

                            <Skeleton
                                variant="text"
                                animation="wave"
                                sx={{
                                    width: 300,
                                    maxWidth: "100%",
                                    height: 22,
                                    borderRadius: "8px",
                                    transform: "none",
                                }}
                            />
                        </Stack>

                        <Divider className="my-5! border-slate-200!" />

                        <Stack spacing={2} className="items-center">
                            <Box
                                className="w-full rounded-xl border border-slate-200 bg-white"
                                sx={{
                                    minHeight: 54,
                                    borderRadius: "12px",
                                    px: 2.25,
                                    py: 1.5,
                                }}
                            >
                                <Box className="flex h-full items-center justify-center gap-3">
                                    <Skeleton
                                        variant="circular"
                                        animation="wave"
                                        sx={{
                                            width: 20,
                                            height: 20,
                                            flexShrink: 0,
                                        }}
                                    />

                                    <Skeleton
                                        variant="text"
                                        animation="wave"
                                        sx={{
                                            width: 180,
                                            height: 24,
                                            borderRadius: "8px",
                                            transform: "none",
                                        }}
                                    />
                                </Box>
                            </Box>

                            <Skeleton
                                variant="text"
                                animation="wave"
                                sx={{
                                    width: 170,
                                    height: 18,
                                    borderRadius: "6px",
                                    transform: "none",
                                }}
                            />
                        </Stack>

                        <Box className="p-4">
                            <Box className="flex flex-col items-center gap-1">
                                <Skeleton
                                    variant="text"
                                    animation="wave"
                                    sx={{
                                        width: "92%",
                                        maxWidth: 360,
                                        height: 18,
                                        borderRadius: "6px",
                                        transform: "none",
                                    }}
                                />
                                <Skeleton
                                    variant="text"
                                    animation="wave"
                                    sx={{
                                        width: "76%",
                                        maxWidth: 280,
                                        height: 18,
                                        borderRadius: "6px",
                                        transform: "none",
                                    }}
                                />
                            </Box>
                        </Box>
                    </CardContent>
                </Card>
            </Container>
        </Box>
    );
}