"use client";

import { Box, Container, Skeleton } from "@mui/material";

function FieldSkeleton() {
  return (
    <Box className="rounded-2xl border border-slate-200 bg-white px-4 py-4">
      <Skeleton
        variant="text"
        width={72}
        height={14}
        sx={{
          transform: "none",
          borderRadius: "6px",
          mb: 1.5,
        }}
      />
      <Skeleton
        variant="text"
        width="78%"
        height={28}
        sx={{
          transform: "none",
          borderRadius: "8px",
        }}
      />
    </Box>
  );
}

function SectionSkeleton() {
  return (
    <Box className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
      <Box className="mb-4 flex items-center gap-2">
        <Skeleton
          variant="rounded"
          width={36}
          height={36}
          sx={{ borderRadius: "12px", flexShrink: 0 }}
        />
        <Skeleton
          variant="text"
          width={120}
          height={26}
          sx={{
            transform: "none",
            borderRadius: "8px",
          }}
        />
      </Box>

      <Box className="grid gap-3 sm:grid-cols-2">
        <FieldSkeleton />
        <FieldSkeleton />
        <FieldSkeleton />
        <FieldSkeleton />
      </Box>
    </Box>
  );
}

function ActionCardSkeleton() {
  return (
    <Box className="rounded-3xl border border-slate-200 bg-white p-5">
      <Skeleton
        variant="text"
        width={110}
        height={26}
        sx={{
          transform: "none",
          borderRadius: "8px",
        }}
      />

      <Box className="mt-4 grid gap-3">
        <Skeleton variant="rounded" height={46} sx={{ borderRadius: "14px" }} />
        <Skeleton variant="rounded" height={46} sx={{ borderRadius: "14px" }} />
      </Box>
    </Box>
  );
}

function AccountStatusCardSkeleton() {
  return (
    <Box className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
      <Skeleton
        variant="text"
        width={110}
        height={26}
        sx={{
          transform: "none",
          borderRadius: "8px",
        }}
      />

      <Box className="my-4 h-px bg-slate-200" />

      <Box className="space-y-3">
        <Box className="flex items-center justify-between gap-4">
          <Skeleton
            variant="text"
            width={44}
            height={22}
            sx={{ transform: "none", borderRadius: "6px" }}
          />
          <Skeleton
            variant="text"
            width={72}
            height={22}
            sx={{ transform: "none", borderRadius: "6px" }}
          />
        </Box>

        <Box className="flex items-center justify-between gap-4">
          <Skeleton
            variant="text"
            width={42}
            height={22}
            sx={{ transform: "none", borderRadius: "6px" }}
          />
          <Skeleton
            variant="text"
            width={64}
            height={22}
            sx={{ transform: "none", borderRadius: "6px" }}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default function ProfilePageSkeleton() {
  return (
    <Box className="min-h-screen">
      <Container maxWidth="lg" className="py-12">
        <Box className="overflow-hidden rounded-3xl border border-slate-200 bg-white">
          {/* Header */}
          <Box className="bg-linear-to-br from-slate-900 via-slate-800 to-slate-700 px-6 py-8 sm:px-8">
            <Box className="flex flex-col items-center gap-3 sm:flex-row sm:items-center">
              <Skeleton
                variant="circular"
                width={88}
                height={88}
                sx={{
                  flexShrink: 0,
                }}
              />

              <Box className="min-w-0 flex-1 text-center sm:text-left">
                <Skeleton
                  variant="text"
                  width={220}
                  height={42}
                  sx={{
                    transform: "none",
                    borderRadius: "10px",
                    mx: { xs: "auto", sm: 0 },
                  }}
                />

                <Box className="mt-3 flex flex-wrap items-center justify-center gap-2 sm:justify-start">
                  <Skeleton
                    variant="rounded"
                    width={92}
                    height={28}
                    sx={{ borderRadius: "999px" }}
                  />
                  <Skeleton
                    variant="rounded"
                    width={96}
                    height={28}
                    sx={{ borderRadius: "999px" }}
                  />
                </Box>
              </Box>
            </Box>
          </Box>

          {/* Content */}
          <Box className="p-5 sm:p-6">
            <Box className="grid gap-6 lg:grid-cols-12">
              <Box className="space-y-6 lg:col-span-8">
                <SectionSkeleton />
                <SectionSkeleton />
                <Box className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                  <Box className="mb-4 flex items-center gap-2">
                    <Skeleton
                      variant="rounded"
                      width={36}
                      height={36}
                      sx={{ borderRadius: "12px", flexShrink: 0 }}
                    />
                    <Skeleton
                      variant="text"
                      width={130}
                      height={26}
                      sx={{
                        transform: "none",
                        borderRadius: "8px",
                      }}
                    />
                  </Box>

                  <Box className="grid gap-3 sm:grid-cols-2">
                    <FieldSkeleton />
                    <FieldSkeleton />
                    <FieldSkeleton />
                  </Box>
                </Box>
              </Box>

              <Box className="space-y-6 lg:col-span-4">
                <ActionCardSkeleton />
                <AccountStatusCardSkeleton />
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
