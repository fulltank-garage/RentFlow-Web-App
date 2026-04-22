"use client";

import * as React from "react";
import { Box, Container, Skeleton } from "@mui/material";

function SectionHeadingSkeleton({
  titleWidth,
  descWidth,
}: {
  titleWidth: number | string;
  descWidth: number | string;
}) {
  return (
    <Box className="flex flex-col gap-1.5">
      <Skeleton
        variant="text"
        animation="wave"
        sx={{
          width: titleWidth,
          height: 28,
          borderRadius: "8px",
          transform: "none",
        }}
      />
      <Skeleton
        variant="text"
        animation="wave"
        sx={{
          width: descWidth,
          maxWidth: "100%",
          height: 20,
          borderRadius: "8px",
          transform: "none",
        }}
      />
    </Box>
  );
}

function HeaderSkeleton() {
  return (
    <Box className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <Box className="flex flex-col gap-2">
        <Skeleton
          variant="text"
          animation="wave"
          sx={{
            width: 220,
            height: 40,
            borderRadius: "8px",
            transform: "none",
          }}
        />
        <Skeleton
          variant="text"
          animation="wave"
          sx={{
            width: { xs: "100%", sm: 520 },
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

function HeroBadgesSkeleton() {
  return (
    <Box className="mt-3 flex flex-wrap gap-2">
      {Array.from({ length: 4 }).map((_, index) => (
        <Skeleton
          key={index}
          variant="rounded"
          animation="wave"
          sx={{
            width: [140, 165, 150, 155][index] ?? 150,
            height: 32,
            borderRadius: "999px",
          }}
        />
      ))}
    </Box>
  );
}

function FeatureCardSkeleton() {
  return (
    <Box className="apple-card apple-card-no-hover p-5">
      <Box className="flex items-start gap-3">
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

        <Box className="min-w-0 flex flex-1 flex-col gap-1.5">
          <Skeleton
            variant="text"
            animation="wave"
            sx={{
              width: "52%",
              height: 24,
              borderRadius: "8px",
              transform: "none",
            }}
          />
          <Skeleton
            variant="text"
            animation="wave"
            sx={{
              width: "96%",
              height: 20,
              borderRadius: "8px",
              transform: "none",
            }}
          />
          <Skeleton
            variant="text"
            animation="wave"
            sx={{
              width: "78%",
              height: 20,
              borderRadius: "8px",
              transform: "none",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}

function StepCardSkeleton() {
  return (
    <Box className="rounded-[22px] bg-[var(--rf-apple-surface-soft)] p-4">
      <Box className="flex items-start gap-3">
        <Skeleton
          variant="rounded"
          animation="wave"
          sx={{
            width: 36,
            height: 36,
            borderRadius: "12px",
            flexShrink: 0,
          }}
        />

        <Box className="flex flex-1 flex-col gap-1.5">
          <Skeleton
            variant="text"
            animation="wave"
            sx={{
              width: "44%",
              height: 22,
              borderRadius: "8px",
              transform: "none",
            }}
          />
          <Skeleton
            variant="text"
            animation="wave"
            sx={{
              width: "94%",
              height: 20,
              borderRadius: "8px",
              transform: "none",
            }}
          />
          <Skeleton
            variant="text"
            animation="wave"
            sx={{
              width: "70%",
              height: 20,
              borderRadius: "8px",
              transform: "none",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}

function TrustCardSkeleton() {
  return (
    <Box className="apple-card apple-card-no-hover p-5">
      <Box className="flex flex-col gap-1.5">
        <Skeleton
          variant="text"
          animation="wave"
          sx={{
            width: "58%",
            height: 24,
            borderRadius: "8px",
            transform: "none",
          }}
        />
        <Skeleton
          variant="text"
          animation="wave"
          sx={{
            width: "95%",
            height: 20,
            borderRadius: "8px",
            transform: "none",
          }}
        />
        <Skeleton
          variant="text"
          animation="wave"
          sx={{
            width: "76%",
            height: 20,
            borderRadius: "8px",
            transform: "none",
          }}
        />
      </Box>
    </Box>
  );
}

function CTASectionSkeleton() {
  return (
    <Box className="apple-card apple-card-no-hover mt-10 p-5">
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
            width: 360,
            maxWidth: "100%",
            height: 20,
            borderRadius: "8px",
            transform: "none",
          }}
        />
      </Box>

      <Box className="mt-4 flex flex-wrap gap-2">
        <Skeleton
          variant="rounded"
          animation="wave"
          sx={{
            width: 126,
            height: 36.5,
            borderRadius: "999px",
          }}
        />
        <Skeleton
          variant="rounded"
          animation="wave"
          sx={{
            width: 118,
            height: 36.5,
            borderRadius: "999px",
          }}
        />
      </Box>
    </Box>
  );
}

function FeaturesGridSkeleton() {
  return (
    <Box className="mt-8">
      <Box className="flex items-end justify-between gap-3">
        <SectionHeadingSkeleton titleWidth={160} descWidth={360} />
      </Box>

      <Box className="mt-4 grid gap-4 md:grid-cols-2">
        {Array.from({ length: 4 }).map((_, index) => (
          <FeatureCardSkeleton key={index} />
        ))}
      </Box>
    </Box>
  );
}

function StepsSectionSkeleton() {
  return (
    <Box className="apple-card apple-card-no-hover mt-10 p-5">
      <SectionHeadingSkeleton titleWidth={130} descWidth={420} />

      <Box className="mt-4 grid gap-4 md:grid-cols-2">
        {Array.from({ length: 4 }).map((_, index) => (
          <StepCardSkeleton key={index} />
        ))}
      </Box>
    </Box>
  );
}

function TrustSectionSkeleton() {
  return (
    <Box className="mt-10">
      <SectionHeadingSkeleton titleWidth={230} descWidth={340} />

      <Box className="mt-4 grid gap-4 md:grid-cols-2">
        {Array.from({ length: 4 }).map((_, index) => (
          <TrustCardSkeleton key={index} />
        ))}
      </Box>
    </Box>
  );
}

export default function FeaturesPageSkeleton() {
  return (
    <Box className="apple-page">
      <Container maxWidth="lg" className="apple-section">
        <HeaderSkeleton />
        <HeroBadgesSkeleton />
        <FeaturesGridSkeleton />
        <StepsSectionSkeleton />
        <TrustSectionSkeleton />
        <CTASectionSkeleton />
      </Container>
    </Box>
  );
}
