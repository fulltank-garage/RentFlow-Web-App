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
          width: 180,
          height: 40,
          borderRadius: "8px",
          transform: "none",
        }}
      />
      <Skeleton
        variant="text"
        animation="wave"
        sx={{
          width: { xs: "100%", sm: 480 },
          maxWidth: "100%",
          height: 22,
          borderRadius: "8px",
          transform: "none",
        }}
      />
    </Box>
  );
}

function ChatbotSuggestionSkeleton() {
  return (
    <Box className="rounded-[18px] bg-white p-3">
      <Box className="flex flex-col gap-1.5">
        <Skeleton
          variant="text"
          animation="wave"
          sx={{
            width: "44%",
            height: 16,
            borderRadius: "8px",
            transform: "none",
          }}
        />
        <Skeleton
          variant="text"
          animation="wave"
          sx={{
            width: "88%",
            height: 22,
            borderRadius: "8px",
            transform: "none",
          }}
        />
      </Box>
    </Box>
  );
}

function ChatbotSkeleton() {
  return (
    <Box className="apple-card apple-card-no-hover mt-6 p-5">
      <Box className="flex items-start gap-3">
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

        <Box className="flex flex-1 flex-col gap-1.5">
          <Skeleton
            variant="text"
            animation="wave"
            sx={{
              width: 220,
              height: 22,
              borderRadius: "8px",
              transform: "none",
            }}
          />
          <Skeleton
            variant="text"
            animation="wave"
            sx={{
              width: { xs: "100%", sm: 300 },
              maxWidth: "100%",
              height: 18,
              borderRadius: "8px",
              transform: "none",
            }}
          />
        </Box>
      </Box>

      <Box className="mt-4 grid gap-4 md:grid-cols-[1fr_auto]">
        <Skeleton
          variant="rounded"
          animation="wave"
          sx={{
            height: 40,
            borderRadius: "18px",
          }}
        />
        <Skeleton
          variant="rounded"
          animation="wave"
          sx={{
            width: 88,
            height: 40,
            borderRadius: "12px",
          }}
        />
      </Box>

      <Box className="mt-4 flex flex-col gap-2">
        <Skeleton
          variant="text"
          animation="wave"
          sx={{
            width: 120,
            height: 18,
            borderRadius: "8px",
            transform: "none",
          }}
        />

        <Box className="mt-1 grid gap-2 md:grid-cols-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <ChatbotSuggestionSkeleton key={i} />
          ))}
        </Box>
      </Box>
    </Box>
  );
}

function FiltersSkeleton() {
  return (
    <Box className="apple-card apple-card-no-hover mt-6 p-5">
      <Box className="grid gap-4 md:grid-cols-[1fr_1fr_auto]">
        <Skeleton
          variant="rounded"
          animation="wave"
          sx={{
            height: 40,
            borderRadius: "18px",
          }}
        />
        <Skeleton
          variant="rounded"
          animation="wave"
          sx={{
            height: 40,
            borderRadius: "18px",
          }}
        />
        <Box className="flex items-end justify-end">
          <Skeleton
            variant="rounded"
            animation="wave"
            sx={{
              width: 96,
              height: 40,
              borderRadius: "999px",
            }}
          />
        </Box>
      </Box>

      <Box className="my-5 h-px bg-black/10" />

      <Box className="flex flex-wrap items-center gap-4">
        <Skeleton
          variant="rounded"
          animation="wave"
          sx={{
            width: 90,
            height: 28,
            borderRadius: "999px",
          }}
        />
        <Skeleton
          variant="text"
          animation="wave"
          sx={{
            width: { xs: "100%", sm: 300 },
            maxWidth: "100%",
            height: 18,
            borderRadius: "8px",
            transform: "none",
          }}
        />
      </Box>
    </Box>
  );
}

function FaqItemSkeleton() {
  return (
    <Box className="apple-card apple-card-no-hover p-4">
      <Box className="flex flex-col gap-2.5">
        <Box className="flex flex-wrap items-center gap-3">
          <Skeleton
            variant="rounded"
            animation="wave"
            sx={{
              width: 90,
              height: 24,
              borderRadius: "999px",
            }}
          />
          <Skeleton
            variant="text"
            animation="wave"
            sx={{
              width: { xs: "100%", sm: "56%" },
              height: 22,
              borderRadius: "8px",
              transform: "none",
            }}
          />
        </Box>

        <Skeleton
          variant="text"
          animation="wave"
          sx={{
            width: { xs: "72%", sm: "36%" },
            height: 18,
            borderRadius: "8px",
            transform: "none",
          }}
        />
      </Box>
    </Box>
  );
}

function FaqListSkeleton() {
  return (
    <Box className="mt-6 space-y-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <FaqItemSkeleton key={i} />
      ))}
    </Box>
  );
}

function CtaSkeleton() {
  return (
    <Box className="apple-card apple-card-no-hover mt-10 p-5">
      <Box className="flex flex-col gap-1.5">
        <Skeleton
          variant="text"
          animation="wave"
          sx={{
            width: 150,
            height: 22,
            borderRadius: "8px",
            transform: "none",
          }}
        />
        <Skeleton
          variant="text"
          animation="wave"
          sx={{
            width: { xs: "100%", sm: "70%" },
            maxWidth: "100%",
            height: 18,
            borderRadius: "8px",
            transform: "none",
          }}
        />
      </Box>

      <Skeleton
        variant="rounded"
        animation="wave"
        sx={{
          mt: 2,
          width: 110,
          height: 36,
          borderRadius: "999px",
        }}
      />
    </Box>
  );
}

export default function HelpPageSkeleton() {
  return (
    <Box className="apple-page">
      <Container maxWidth="lg" className="apple-section">
        <HeaderSkeleton />
        <ChatbotSkeleton />
        <FiltersSkeleton />
        <FaqListSkeleton />
        <CtaSkeleton />
      </Container>
    </Box>
  );
}
