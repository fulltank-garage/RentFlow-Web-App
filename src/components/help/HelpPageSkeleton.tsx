"use client";

import * as React from "react";
import { Box, Container, Skeleton } from "@mui/material";

function ChatbotSkeleton() {
    return (
        <Box className="mt-6 rounded-2xl border border-slate-200 bg-white p-4">
            <Box className="flex items-center gap-2">
                <Skeleton
                    variant="rounded"
                    animation="wave"
                    sx={{ width: 40, height: 40, borderRadius: "12px" }}
                />
                <Box className="flex-1">
                    <Skeleton
                        variant="text"
                        animation="wave"
                        sx={{ width: 220, height: 22, borderRadius: "8px", transform: "none" }}
                    />
                    <Skeleton
                        variant="text"
                        animation="wave"
                        sx={{ width: 300, maxWidth: "100%", height: 18, borderRadius: "8px", transform: "none" }}
                    />
                </Box>
            </Box>

            <Box className="mt-4 grid gap-4 md:grid-cols-[1fr_auto]">
                <Skeleton
                    variant="rounded"
                    animation="wave"
                    sx={{ height: 40, borderRadius: "10px" }}
                />
                <Skeleton
                    variant="rounded"
                    animation="wave"
                    sx={{ width: 88, height: 40, borderRadius: "12px" }}
                />
            </Box>

            <Box className="mt-4">
                <Skeleton
                    variant="text"
                    animation="wave"
                    sx={{ width: 120, height: 18, borderRadius: "8px", transform: "none" }}
                />
                <Box className="mt-2 grid gap-2 md:grid-cols-3">
                    {Array.from({ length: 3 }).map((_, i) => (
                        <Box
                            key={i}
                            className="rounded-xl border border-slate-200 bg-white p-3"
                        >
                            <Skeleton
                                variant="text"
                                animation="wave"
                                sx={{ width: "50%", height: 16, borderRadius: "8px", transform: "none" }}
                            />
                            <Skeleton
                                variant="text"
                                animation="wave"
                                sx={{ width: "86%", height: 22, borderRadius: "8px", transform: "none" }}
                            />
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    );
}

function FiltersSkeleton() {
    return (
        <Box className="mt-6 rounded-2xl border border-slate-200 bg-white p-4">
            <Box className="grid gap-4 md:grid-cols-[1fr_1fr_auto]">
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
                <Box className="flex items-end justify-end">
                    <Skeleton
                        variant="rounded"
                        animation="wave"
                        sx={{ width: 96, height: 40, borderRadius: "12px" }}
                    />
                </Box>
            </Box>

            <Box className="my-5 h-px bg-slate-200" />

            <Box className="flex flex-wrap items-center gap-4">
                <Skeleton
                    variant="rounded"
                    animation="wave"
                    sx={{ width: 90, height: 28, borderRadius: "999px" }}
                />
                <Skeleton
                    variant="text"
                    animation="wave"
                    sx={{ width: 300, maxWidth: "100%", height: 18, borderRadius: "8px", transform: "none" }}
                />
            </Box>
        </Box>
    );
}

function FaqItemSkeleton() {
    return (
        <Box className="rounded-2xl border border-slate-200 bg-white p-4">
            <Box className="flex flex-col gap-2">
                <Box className="flex flex-wrap items-center gap-4">
                    <Skeleton
                        variant="rounded"
                        animation="wave"
                        sx={{ width: 90, height: 24, borderRadius: "999px" }}
                    />
                    <Skeleton
                        variant="text"
                        animation="wave"
                        sx={{ width: "56%", height: 22, borderRadius: "8px", transform: "none" }}
                    />
                </Box>

                <Skeleton
                    variant="text"
                    animation="wave"
                    sx={{ width: "36%", height: 18, borderRadius: "8px", transform: "none" }}
                />
            </Box>
        </Box>
    );
}

function CtaSkeleton() {
    return (
        <Box className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <Skeleton
                variant="text"
                animation="wave"
                sx={{ width: 150, height: 22, borderRadius: "8px", transform: "none" }}
            />
            <Skeleton
                variant="text"
                animation="wave"
                sx={{ width: "70%", maxWidth: "100%", height: 18, borderRadius: "8px", transform: "none" }}
            />
            <Skeleton
                variant="rounded"
                animation="wave"
                sx={{ mt: 2, width: 110, height: 36, borderRadius: "12px" }}
            />
        </Box>
    );
}

export default function HelpPageSkeleton() {
    return (
        <Container maxWidth="lg" className="py-12">
            <Skeleton
                variant="text"
                animation="wave"
                sx={{ width: 180, height: 40, borderRadius: "8px", transform: "none" }}
            />
            <Skeleton
                variant="text"
                animation="wave"
                sx={{ width: 480, maxWidth: "100%", height: 22, borderRadius: "8px", transform: "none" }}
            />

            <ChatbotSkeleton />
            <FiltersSkeleton />

            <Box className="mt-6 space-y-4">
                {Array.from({ length: 5 }).map((_, i) => (
                    <FaqItemSkeleton key={i} />
                ))}
            </Box>

            <CtaSkeleton />
        </Container>
    );
}