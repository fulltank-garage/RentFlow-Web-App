"use client";

import * as React from "react";
import { Box, Container, Skeleton, Typography } from "@mui/material";

export default function ProfilePageSkeleton() {
  return (
    <Box className="apple-page py-8 md:py-12">
      <Container maxWidth="lg">
        <Box className="mx-auto mb-8 max-w-3xl text-center">
          <Typography className="apple-heading">
            <Skeleton
              variant="text"
              animation="wave"
              sx={{
                mx: "auto",
                width: { xs: 190, md: 280 },
                height: { xs: 54, md: 72 },
                borderRadius: "16px",
                transform: "none",
              }}
            />
          </Typography>
          <Skeleton
            variant="text"
            animation="wave"
            sx={{
              mx: "auto",
              mt: 1.5,
              width: { xs: 300, sm: 520 },
              maxWidth: "100%",
              height: 26,
              borderRadius: "12px",
              transform: "none",
            }}
          />
        </Box>

        <Box className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_320px]">
          <Box className="grid gap-5">
            {[1, 2, 3].map((section) => (
              <Box
                key={section}
                className="apple-card apple-card-no-hover p-5"
              >
                <Box className="mb-4 flex items-center gap-3">
                  <Skeleton
                    variant="rounded"
                    animation="wave"
                    width={38}
                    height={38}
                    sx={{ borderRadius: "999px" }}
                  />
                  <Skeleton
                    variant="text"
                    animation="wave"
                    width={180}
                    height={28}
                    sx={{ borderRadius: "10px", transform: "none" }}
                  />
                </Box>

                <Box className="grid gap-3 md:grid-cols-2">
                  {[1, 2, 3, 4].map((field) => (
                    <Box
                      key={field}
                      className="rounded-[22px] bg-[var(--rf-apple-surface-soft)] px-4 py-4"
                    >
                      <Skeleton
                        variant="text"
                        animation="wave"
                        width={90}
                        height={18}
                        sx={{ borderRadius: "8px", transform: "none" }}
                      />
                      <Skeleton
                        variant="text"
                        animation="wave"
                        width="70%"
                        height={28}
                        sx={{ borderRadius: "10px", transform: "none" }}
                      />
                    </Box>
                  ))}
                </Box>
              </Box>
            ))}
          </Box>

          <Box>
            <Box className="apple-card apple-card-no-hover p-5">
              <Skeleton
                variant="text"
                animation="wave"
                width={140}
                height={28}
                sx={{ borderRadius: "10px", transform: "none" }}
              />
              <Box className="mt-4 grid gap-3">
                <Skeleton
                  variant="rounded"
                  animation="wave"
                  height={44}
                  sx={{ borderRadius: "999px" }}
                />
                <Skeleton
                  variant="rounded"
                  animation="wave"
                  height={44}
                  sx={{ borderRadius: "999px" }}
                />
              </Box>
              <Skeleton
                variant="text"
                animation="wave"
                width="100%"
                height={24}
                className="mt-4!"
                sx={{ borderRadius: "8px", transform: "none" }}
              />
              <Skeleton
                variant="text"
                animation="wave"
                width="100%"
                height={24}
                sx={{ borderRadius: "8px", transform: "none" }}
              />
              <Skeleton
                variant="text"
                animation="wave"
                width="100%"
                height={24}
                sx={{ borderRadius: "8px", transform: "none" }}
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
