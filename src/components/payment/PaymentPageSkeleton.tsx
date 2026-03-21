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
          width: 120,
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

function SummaryCardSkeleton() {
  return (
    <Box className="order-2 rounded-2xl border border-slate-200 bg-white p-6 lg:order-1 lg:col-span-5">
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

      <Box className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-4">
        <Box className="flex items-center justify-between">
          <Skeleton
            variant="text"
            animation="wave"
            sx={{
              width: 70,
              height: 18,
              borderRadius: "8px",
              transform: "none",
            }}
          />
          <Skeleton
            variant="text"
            animation="wave"
            sx={{
              width: 85,
              height: 18,
              borderRadius: "8px",
              transform: "none",
            }}
          />
        </Box>

        <Box className="mt-3 rounded-xl border border-slate-200 bg-white p-3">
          <Box className="grid gap-3">
            <Box className="flex items-start justify-between gap-3">
              <Skeleton
                variant="text"
                animation="wave"
                sx={{
                  width: 55,
                  height: 18,
                  borderRadius: "8px",
                  transform: "none",
                }}
              />
              <Box className="flex flex-col items-end gap-1">
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
                <Skeleton
                  variant="text"
                  animation="wave"
                  sx={{
                    width: 95,
                    height: 16,
                    borderRadius: "8px",
                    transform: "none",
                  }}
                />
              </Box>
            </Box>

            <Box className="h-px bg-slate-200" />

            <Box className="flex items-start justify-between gap-3">
              <Skeleton
                variant="text"
                animation="wave"
                sx={{
                  width: 55,
                  height: 18,
                  borderRadius: "8px",
                  transform: "none",
                }}
              />
              <Box className="flex flex-col items-end gap-1">
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
                <Skeleton
                  variant="text"
                  animation="wave"
                  sx={{
                    width: 95,
                    height: 16,
                    borderRadius: "8px",
                    transform: "none",
                  }}
                />
              </Box>
            </Box>

            <Box className="flex items-center justify-between pt-1">
              <Skeleton
                variant="text"
                animation="wave"
                sx={{
                  width: 45,
                  height: 16,
                  borderRadius: "8px",
                  transform: "none",
                }}
              />
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
            </Box>
          </Box>
        </Box>

        <Box className="mt-3 flex items-center justify-between">
          <Skeleton
            variant="text"
            animation="wave"
            sx={{
              width: 95,
              height: 18,
              borderRadius: "8px",
              transform: "none",
            }}
          />
          <Skeleton
            variant="text"
            animation="wave"
            sx={{
              width: 85,
              height: 18,
              borderRadius: "8px",
              transform: "none",
            }}
          />
        </Box>

        <Box className="mt-2 flex items-center justify-between">
          <Skeleton
            variant="text"
            animation="wave"
            sx={{
              width: 80,
              height: 18,
              borderRadius: "8px",
              transform: "none",
            }}
          />
          <Skeleton
            variant="text"
            animation="wave"
            sx={{
              width: 95,
              height: 18,
              borderRadius: "8px",
              transform: "none",
            }}
          />
        </Box>

        <Box className="mt-3 rounded-xl border border-emerald-300 bg-emerald-50 px-4 py-3">
          <Box className="flex items-center justify-between">
            <Skeleton
              variant="text"
              animation="wave"
              sx={{
                width: 90,
                height: 18,
                borderRadius: "8px",
                transform: "none",
              }}
            />
            <Skeleton
              variant="text"
              animation="wave"
              sx={{
                width: 110,
                height: 24,
                borderRadius: "8px",
                transform: "none",
              }}
            />
          </Box>
        </Box>

        <Box className="mt-3 space-y-2">
          <Box className="h-px bg-slate-200" />
          <Box className="flex items-center justify-between">
            <Skeleton
              variant="text"
              animation="wave"
              sx={{
                width: 70,
                height: 18,
                borderRadius: "8px",
                transform: "none",
              }}
            />
            <Skeleton
              variant="text"
              animation="wave"
              sx={{
                width: 70,
                height: 18,
                borderRadius: "8px",
                transform: "none",
              }}
            />
          </Box>

          <Box className="space-y-1.5">
            {Array.from({ length: 2 }).map((_, i) => (
              <Box key={i} className="flex items-start justify-between gap-3">
                <Skeleton
                  variant="text"
                  animation="wave"
                  sx={{
                    width: 120,
                    height: 16,
                    borderRadius: "8px",
                    transform: "none",
                  }}
                />
                <Skeleton
                  variant="text"
                  animation="wave"
                  sx={{
                    width: 65,
                    height: 16,
                    borderRadius: "8px",
                    transform: "none",
                  }}
                />
              </Box>
            ))}
          </Box>
        </Box>

        <Box className="mt-3 flex items-center justify-between">
          <Skeleton
            variant="text"
            animation="wave"
            sx={{
              width: 60,
              height: 18,
              borderRadius: "8px",
              transform: "none",
            }}
          />
          <Skeleton
            variant="text"
            animation="wave"
            sx={{
              width: 95,
              height: 24,
              borderRadius: "8px",
              transform: "none",
            }}
          />
        </Box>
      </Box>

      <Box className="my-5 h-px bg-slate-200" />

      <Box className="rounded-xl border border-slate-200 bg-white p-4">
        <Skeleton
          variant="rectangular"
          animation="wave"
          sx={{
            width: "100%",
            height: 180,
            borderRadius: "12px",
          }}
        />

        <Box className="mt-3 flex flex-col gap-1.5">
          <Skeleton
            variant="text"
            animation="wave"
            sx={{
              width: "68%",
              height: 20,
              borderRadius: "8px",
              transform: "none",
            }}
          />
          <Skeleton
            variant="text"
            animation="wave"
            sx={{
              width: "90%",
              height: 16,
              borderRadius: "8px",
              transform: "none",
            }}
          />
        </Box>

        <Box className="my-4 h-px bg-slate-200" />

        <Box className="flex items-center justify-between">
          <Skeleton
            variant="text"
            animation="wave"
            sx={{
              width: 50,
              height: 18,
              borderRadius: "8px",
              transform: "none",
            }}
          />
          <Skeleton
            variant="text"
            animation="wave"
            sx={{
              width: 75,
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
            width: "100%",
            height: 40,
            borderRadius: "12px",
          }}
        />
      </Box>

      <Box className="my-5 h-px bg-slate-200" />

      <Skeleton
        variant="text"
        animation="wave"
        sx={{
          width: "75%",
          height: 16,
          borderRadius: "8px",
          transform: "none",
        }}
      />
    </Box>
  );
}

function PaymentFormSkeleton() {
  return (
    <Box className="order-1 rounded-2xl border border-slate-200 bg-white p-6 lg:order-2 lg:col-span-7">
      <Skeleton
        variant="rounded"
        animation="wave"
        sx={{
          width: "100%",
          height: 52,
          borderRadius: "12px",
        }}
      />

      <Box className="mt-4 flex flex-col gap-1.5">
        <Skeleton
          variant="text"
          animation="wave"
          sx={{
            width: 110,
            height: 20,
            borderRadius: "8px",
            transform: "none",
          }}
        />
      </Box>

      <Box className="mt-4 grid gap-4 sm:grid-cols-2">
        <Skeleton
          variant="rounded"
          animation="wave"
          sx={{ height: 56, borderRadius: "12px" }}
        />
        <Skeleton
          variant="rounded"
          animation="wave"
          sx={{ height: 56, borderRadius: "12px" }}
        />
      </Box>

      <Box className="mt-4">
        <Skeleton
          variant="rounded"
          animation="wave"
          sx={{ height: 56, borderRadius: "12px" }}
        />
      </Box>

      <Box className="my-6 h-px bg-slate-200" />

      <Skeleton
        variant="text"
        animation="wave"
        sx={{ width: 95, height: 20, borderRadius: "8px", transform: "none" }}
      />

      <Box className="mt-4">
        <Skeleton
          variant="rounded"
          animation="wave"
          sx={{ height: 56, borderRadius: "12px" }}
        />
      </Box>

      <Box className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-4">
        <Box className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Box className="flex flex-1 flex-col gap-1.5">
            <Skeleton
              variant="text"
              animation="wave"
              sx={{
                width: 110,
                height: 20,
                borderRadius: "8px",
                transform: "none",
              }}
            />
            <Skeleton
              variant="text"
              animation="wave"
              sx={{
                width: 150,
                height: 18,
                borderRadius: "8px",
                transform: "none",
              }}
            />
          </Box>

          <Skeleton
            variant="rectangular"
            animation="wave"
            sx={{
              width: 144,
              height: 144,
              borderRadius: "12px",
            }}
          />
        </Box>
      </Box>

      <Box className="mt-6">
        <Skeleton
          variant="rounded"
          animation="wave"
          sx={{
            width: 170,
            height: 42,
            borderRadius: "12px",
          }}
        />
      </Box>
    </Box>
  );
}

export default function PaymentPageSkeleton() {
  return (
    <Box className="bg-white">
      <Container maxWidth="lg" className="py-12">
        <HeaderSkeleton />

        <Box className="mt-6 grid gap-6 lg:grid-cols-12">
          <SummaryCardSkeleton />
          <PaymentFormSkeleton />
        </Box>
      </Container>
    </Box>
  );
}
