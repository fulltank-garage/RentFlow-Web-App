"use client";

import * as React from "react";
import { Box, Container, Skeleton } from "@mui/material";

function HeaderSkeleton() {
  return (
    <Box className="flex flex-col gap-2">
      <Skeleton
        variant="text"
        animation="wave"
        sx={{
          width: 170,
          height: 38,
          borderRadius: "8px",
          transform: "none",
        }}
      />
      <Skeleton
        variant="text"
        animation="wave"
        sx={{
          width: { xs: "100%", sm: 360 },
          maxWidth: "100%",
          height: 20,
          borderRadius: "8px",
          transform: "none",
        }}
      />
    </Box>
  );
}

function FiltersSkeleton() {
  return (
    <Box className="mt-6 rounded-2xl border border-slate-200 bg-white p-4">
      <Box className="grid gap-4 md:grid-cols-12 md:items-center">
        <Box className="md:col-span-8">
          <Skeleton
            variant="rounded"
            animation="wave"
            sx={{ width: "100%", height: 40, borderRadius: "10px" }}
          />
        </Box>

        <Box className="md:col-span-4">
          <Skeleton
            variant="rounded"
            animation="wave"
            sx={{ width: "100%", height: 40, borderRadius: "10px" }}
          />
        </Box>
      </Box>

      <Box className="my-5 h-px bg-slate-200" />
    </Box>
  );
}

function BookingItemSkeleton() {
  return (
    <Box className="rounded-xl border border-slate-200 bg-white p-4">
      <Box className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <Box className="min-w-0 flex-1">
          <Box className="flex flex-col gap-1.5">
            <Skeleton
              variant="text"
              animation="wave"
              sx={{
                width: "62%",
                height: 20,
                borderRadius: "8px",
                transform: "none",
              }}
            />
            <Skeleton
              variant="text"
              animation="wave"
              sx={{
                width: "48%",
                height: 16,
                borderRadius: "8px",
                transform: "none",
              }}
            />
          </Box>
        </Box>

        <Box className="flex flex-wrap items-center gap-3">
          <Skeleton
            variant="rounded"
            animation="wave"
            sx={{
              width: 92,
              height: 28,
              borderRadius: "999px",
            }}
          />
          <Skeleton
            variant="rounded"
            animation="wave"
            sx={{
              width: 110,
              height: 38,
              borderRadius: "12px",
            }}
          />
          <Skeleton
            variant="rounded"
            animation="wave"
            sx={{
              width: 110,
              height: 36,
              borderRadius: "12px",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default function MyBookingsPageSkeleton() {
  return (
    <Box className="bg-white">
      <Container maxWidth="lg" className="py-12">
        <HeaderSkeleton />
        <FiltersSkeleton />

        <Box className="-mt-5 space-y-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <BookingItemSkeleton key={i} />
          ))}
        </Box>
      </Container>
    </Box>
  );
}
