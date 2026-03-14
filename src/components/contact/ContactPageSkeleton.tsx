"use client";

import * as React from "react";
import { Box, Container, Skeleton } from "@mui/material";

function HeaderSkeleton() {
    return (
        <Box className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <Box className="flex flex-col gap-2">
                <Skeleton
                    variant="text"
                    animation="wave"
                    sx={{
                        width: 150,
                        height: 40,
                        borderRadius: "8px",
                        transform: "none",
                    }}
                />
                <Skeleton
                    variant="text"
                    animation="wave"
                    sx={{
                        width: 420,
                        maxWidth: "100%",
                        height: 22,
                        borderRadius: "8px",
                        transform: "none",
                    }}
                />
            </Box>
        </Box>
    );
}

function ChipsSkeleton() {
    return (
        <Box className="mt-2 flex flex-wrap gap-4">
            {Array.from({ length: 3 }).map((_, i) => (
                <Skeleton
                    key={i}
                    variant="rounded"
                    animation="wave"
                    sx={{
                        width: i === 2 ? 230 : 120,
                        height: 32,
                        borderRadius: "999px",
                    }}
                />
            ))}
        </Box>
    );
}

function ContactInfoSkeleton() {
    return (
        <Box className="rounded-2xl border border-slate-200 bg-white p-4">
            <Skeleton
                variant="text"
                animation="wave"
                sx={{
                    width: 120,
                    height: 22,
                    borderRadius: "8px",
                    transform: "none",
                }}
            />
            <Skeleton
                variant="text"
                animation="wave"
                sx={{
                    width: 220,
                    height: 18,
                    borderRadius: "8px",
                    transform: "none",
                }}
            />

            <Box className="my-5 h-px bg-slate-200" />

            {Array.from({ length: 3 }).map((_, i) => (
                <Box key={i} className="mb-4 flex items-start gap-4 last:mb-0">
                    <Skeleton
                        variant="rounded"
                        animation="wave"
                        sx={{
                            width: 40,
                            height: 40,
                            borderRadius: "12px",
                            flexShrink: 0,
                        }}
                    />
                    <Box className="flex-1">
                        <Skeleton
                            variant="text"
                            animation="wave"
                            sx={{
                                width: 90,
                                height: 20,
                                borderRadius: "8px",
                                transform: "none",
                            }}
                        />
                        <Skeleton
                            variant="text"
                            animation="wave"
                            sx={{
                                width: 180,
                                height: 18,
                                borderRadius: "8px",
                                transform: "none",
                            }}
                        />
                        <Skeleton
                            variant="text"
                            animation="wave"
                            sx={{
                                width: 150,
                                height: 16,
                                borderRadius: "8px",
                                transform: "none",
                            }}
                        />
                    </Box>
                </Box>
            ))}

            <Box className="my-5 h-px bg-slate-200" />

            <Box className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <Skeleton
                    variant="text"
                    animation="wave"
                    sx={{
                        width: 40,
                        height: 16,
                        borderRadius: "8px",
                        transform: "none",
                    }}
                />
                <Skeleton
                    variant="text"
                    animation="wave"
                    sx={{
                        width: "100%",
                        height: 18,
                        borderRadius: "8px",
                        transform: "none",
                    }}
                />
                <Skeleton
                    variant="text"
                    animation="wave"
                    sx={{
                        width: "82%",
                        height: 18,
                        borderRadius: "8px",
                        transform: "none",
                    }}
                />
            </Box>
        </Box>
    );
}

function ContactFormSkeleton() {
    return (
        <Box className="rounded-2xl border border-slate-200 bg-white p-4">
            <Skeleton
                variant="text"
                animation="wave"
                sx={{
                    width: 110,
                    height: 22,
                    borderRadius: "8px",
                    transform: "none",
                }}
            />
            <Skeleton
                variant="text"
                animation="wave"
                sx={{
                    width: 250,
                    height: 18,
                    borderRadius: "8px",
                    transform: "none",
                }}
            />

            <Box className="my-5 h-px bg-slate-200" />

            <Box className="grid gap-4">
                <Box className="grid gap-4 sm:grid-cols-2">
                    <Skeleton
                        variant="rounded"
                        animation="wave"
                        sx={{ height: 40, borderRadius: "10px" }}
                    />
                    <Skeleton
                        variant="rounded"
                        animation="wave"
                        sx={{ height: 40, borderRadius: "10px" }}
                    />
                </Box>

                <Box className="grid gap-4 sm:grid-cols-2">
                    <Skeleton
                        variant="rounded"
                        animation="wave"
                        sx={{ height: 40, borderRadius: "10px" }}
                    />
                    <Skeleton
                        variant="rounded"
                        animation="wave"
                        sx={{ height: 40, borderRadius: "10px" }}
                    />
                </Box>

                <Skeleton
                    variant="rounded"
                    animation="wave"
                    sx={{ height: 132, borderRadius: "10px" }}
                />

                <Skeleton
                    variant="rounded"
                    animation="wave"
                    sx={{ width: 110, height: 40, borderRadius: "12px" }}
                />
            </Box>
        </Box>
    );
}

export default function ContactPageSkeleton() {
    return (
        <Container maxWidth="lg" className="py-12">
            <HeaderSkeleton />
            <ChipsSkeleton />

            <Box className="mt-6 grid gap-4 lg:grid-cols-12">
                <Box className="lg:col-span-5">
                    <ContactInfoSkeleton />
                </Box>

                <Box className="lg:col-span-7">
                    <ContactFormSkeleton />
                </Box>
            </Box>
        </Container>
    );
}