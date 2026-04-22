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
            width: { xs: "100%", sm: 420 },
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
      <Skeleton
        variant="rounded"
        animation="wave"
        sx={{
          width: 110,
          height: 32,
          borderRadius: "999px",
        }}
      />
      <Skeleton
        variant="rounded"
        animation="wave"
        sx={{
          width: 165,
          height: 32,
          borderRadius: "999px",
        }}
      />
      <Skeleton
        variant="rounded"
        animation="wave"
        sx={{
          width: 270,
          height: 32,
          borderRadius: "999px",
          maxWidth: "100%",
        }}
      />
    </Box>
  );
}

function InfoRowSkeleton() {
  return (
    <Box className="flex items-start gap-4">
      <Skeleton
        variant="rounded"
        animation="wave"
        sx={{
          width: 40,
          height: 40,
          borderRadius: "12px",
          flexShrink: 0,
          mt: "2px",
        }}
      />

      <Box className="flex flex-1 flex-col gap-1.5">
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
            maxWidth: "100%",
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
            maxWidth: "100%",
            height: 16,
            borderRadius: "8px",
            transform: "none",
          }}
        />
      </Box>
    </Box>
  );
}

function ContactInfoSkeleton() {
  return (
    <Box className="apple-card apple-card-no-hover p-5">
      <Box className="flex flex-col gap-1.5">
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
            maxWidth: "100%",
            height: 18,
            borderRadius: "8px",
            transform: "none",
          }}
        />
      </Box>

      <Box className="my-5 h-px bg-black/10" />

      <Box className="space-y-4">
        {Array.from({ length: 3 }).map((_, i) => (
          <InfoRowSkeleton key={i} />
        ))}
      </Box>

      <Box className="my-5 h-px bg-black/10" />

      <Box className="rounded-[22px] bg-[var(--rf-apple-surface-soft)] p-4">
        <Box className="flex flex-col gap-1.5">
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
    </Box>
  );
}

function FieldSkeleton({ height = 40 }: { height?: number }) {
  return (
    <Skeleton
      variant="rounded"
      animation="wave"
      sx={{
        width: "100%",
        height,
        borderRadius: "18px",
      }}
    />
  );
}

function ContactFormSkeleton() {
  return (
    <Box className="apple-card apple-card-no-hover p-5">
      <Box className="flex flex-col gap-1.5">
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
            maxWidth: "100%",
            height: 18,
            borderRadius: "8px",
            transform: "none",
          }}
        />
      </Box>

      <Box className="my-5 h-px bg-black/10" />

      <Box className="grid gap-4">
        <Box className="grid gap-4 sm:grid-cols-2">
          <FieldSkeleton />
          <FieldSkeleton />
        </Box>

        <Box className="grid gap-4 sm:grid-cols-2">
          <FieldSkeleton />
          <FieldSkeleton />
        </Box>

        <FieldSkeleton height={132} />

        <Skeleton
          variant="rounded"
          animation="wave"
          sx={{
            width: 110,
            height: 40,
            borderRadius: "999px",
          }}
        />
      </Box>
    </Box>
  );
}

export default function ContactPageSkeleton() {
  return (
    <Box className="apple-page">
      <Container maxWidth="lg" className="apple-section">
        <HeaderSkeleton />
        <ChipsSkeleton />

        <Box className="mt-8 grid gap-5 lg:grid-cols-12">
          <Box className="lg:col-span-5">
            <ContactInfoSkeleton />
          </Box>

          <Box className="lg:col-span-7">
            <ContactFormSkeleton />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
