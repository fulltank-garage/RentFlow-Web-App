"use client";

import { Box, Container, Skeleton } from "@mui/material";

function HeaderSkeleton() {
  return (
    <Box className="flex flex-col gap-2">
      <Skeleton
        variant="text"
        animation="wave"
        sx={{
          width: 190,
          height: 38,
          borderRadius: "8px",
          transform: "none",
        }}
      />
      <Skeleton
        variant="text"
        animation="wave"
        sx={{
          width: { xs: "100%", sm: 320 },
          maxWidth: "100%",
          height: 20,
          borderRadius: "8px",
          transform: "none",
        }}
      />
    </Box>
  );
}

function TopCardSkeleton() {
  return (
    <Box className="apple-card apple-card-no-hover mt-6 p-5">
      <Box className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <Box className="flex-1 space-y-2">
          <Skeleton variant="text" animation="wave" sx={{ width: "56%", height: 20, borderRadius: "8px", transform: "none" }} />
          <Skeleton variant="rounded" animation="wave" sx={{ width: 110, height: 28, borderRadius: "999px" }} />
          <Box className="pt-1">
            <Skeleton variant="text" animation="wave" sx={{ width: "70%", height: 18, borderRadius: "8px", transform: "none" }} />
          </Box>
        </Box>

        <Box className="flex flex-wrap items-center gap-2">
          <Skeleton variant="rounded" animation="wave" sx={{ width: 92, height: 36, borderRadius: "999px" }} />
          <Skeleton variant="rounded" animation="wave" sx={{ width: 118, height: 36, borderRadius: "999px" }} />
          <Skeleton variant="rounded" animation="wave" sx={{ width: 124, height: 36, borderRadius: "999px" }} />
        </Box>
      </Box>
    </Box>
  );
}

function SectionCardSkeleton({ rows = 2 }: { rows?: number }) {
  return (
    <Box className="apple-card apple-card-no-hover p-5">
      <Skeleton variant="text" animation="wave" sx={{ width: 110, height: 20, borderRadius: "8px", transform: "none" }} />
      <Box className="my-4 h-px bg-black/10" />

      <Box className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {Array.from({ length: rows }).map((_, i) => (
          <Box key={i} className="flex flex-col gap-1.5">
            <Skeleton variant="text" animation="wave" sx={{ width: 80, height: 16, borderRadius: "8px", transform: "none" }} />
            <Skeleton variant="text" animation="wave" sx={{ width: "75%", height: 18, borderRadius: "8px", transform: "none" }} />
            <Skeleton variant="text" animation="wave" sx={{ width: "56%", height: 16, borderRadius: "8px", transform: "none" }} />
          </Box>
        ))}
      </Box>
    </Box>
  );
}

function TermsSkeleton() {
  return (
    <Box className="apple-card apple-card-no-hover p-5">
      <Skeleton variant="text" animation="wave" sx={{ width: 95, height: 20, borderRadius: "8px", transform: "none" }} />
      <Box className="my-4 h-px bg-black/10" />

      <Box className="space-y-2">
        <Skeleton variant="text" animation="wave" sx={{ width: "78%", height: 18, borderRadius: "8px", transform: "none" }} />
        <Skeleton variant="text" animation="wave" sx={{ width: "82%", height: 18, borderRadius: "8px", transform: "none" }} />
        <Skeleton variant="text" animation="wave" sx={{ width: "72%", height: 18, borderRadius: "8px", transform: "none" }} />
      </Box>
    </Box>
  );
}

function PriceCardSkeleton() {
  return (
    <Box className="apple-card apple-card-no-hover p-5">
      <Skeleton variant="text" animation="wave" sx={{ width: 80, height: 20, borderRadius: "8px", transform: "none" }} />
      <Box className="my-4 h-px bg-black/10" />

      <Box className="space-y-3">
        {Array.from({ length: 3 }).map((_, i) => (
          <Box key={i} className="flex items-center justify-between">
            <Skeleton variant="text" animation="wave" sx={{ width: 70, height: 18, borderRadius: "8px", transform: "none" }} />
            <Skeleton variant="text" animation="wave" sx={{ width: 80, height: 18, borderRadius: "8px", transform: "none" }} />
          </Box>
        ))}

        <Box className="my-3 h-px bg-black/10" />

        <Box className="flex items-center justify-between">
          <Skeleton variant="text" animation="wave" sx={{ width: 60, height: 18, borderRadius: "8px", transform: "none" }} />
          <Skeleton variant="text" animation="wave" sx={{ width: 100, height: 22, borderRadius: "8px", transform: "none" }} />
        </Box>
      </Box>

      <Box className="mt-4 rounded-[22px] bg-[var(--rf-apple-surface-soft)] p-4">
        <Skeleton variant="text" animation="wave" sx={{ width: "95%", height: 16, borderRadius: "8px", transform: "none" }} />
      </Box>

      <Skeleton variant="rounded" animation="wave" sx={{ mt: 2, width: "100%", height: 36, borderRadius: "999px" }} />
    </Box>
  );
}

function HelpCardSkeleton() {
  return (
    <Box className="apple-card apple-card-no-hover p-5">
      <Skeleton variant="text" animation="wave" sx={{ width: 85, height: 20, borderRadius: "8px", transform: "none" }} />
      <Box className="my-4 h-px bg-black/10" />
      <Box className="flex flex-col gap-1.5">
        <Skeleton variant="text" animation="wave" sx={{ width: "100%", height: 18, borderRadius: "8px", transform: "none" }} />
        <Skeleton variant="text" animation="wave" sx={{ width: "78%", height: 18, borderRadius: "8px", transform: "none" }} />
      </Box>
      <Skeleton variant="rounded" animation="wave" sx={{ mt: 3, width: "100%", height: 36, borderRadius: "999px" }} />
    </Box>
  );
}

export default function MyBookingDetailPageSkeleton() {
  return (
    <Box className="apple-page">
      <Container maxWidth="lg" className="apple-section">
        <HeaderSkeleton />
        <TopCardSkeleton />

        <Box className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
          <Box className="space-y-4 md:col-span-2">
            <SectionCardSkeleton rows={2} />
            <SectionCardSkeleton rows={3} />
            <TermsSkeleton />
          </Box>

          <Box className="space-y-4">
            <PriceCardSkeleton />
            <HelpCardSkeleton />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
