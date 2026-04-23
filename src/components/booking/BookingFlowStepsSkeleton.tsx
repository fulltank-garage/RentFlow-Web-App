"use client";

import { Box, Skeleton } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function BookingFlowStepsSkeleton({
  className = "",
}: {
  className?: string;
}) {
  const isMobile = useMediaQuery("(max-width: 767px)");
  const CIRCLE_SIZE = isMobile ? 42 : 50;
  const CONNECTOR_WIDTH = isMobile ? 44 : 92;
  const TRACK_COLUMNS = Array.from({ length: 4 }, (_, index) =>
    index === 3 ? `${CIRCLE_SIZE}px` : `${CIRCLE_SIZE}px ${CONNECTOR_WIDTH}px`
  ).join(" ");

  return (
    <Box
      className={`relative left-1/2 w-screen -translate-x-1/2 ${className}`.trim()}
    >
      <Box className="overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <Box className="mx-auto w-fit px-4">
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: TRACK_COLUMNS,
              gridTemplateRows: `${CIRCLE_SIZE}px auto`,
              alignItems: "center",
              justifyItems: "center",
              justifyContent: "center",
              rowGap: isMobile ? "10px" : "12px",
            }}
          >
          {Array.from({ length: 4 }).map((_, index) => (
            <Box
              key={`booking-flow-step-skeleton-${index}`}
              sx={{ display: "contents" }}
            >
              <Skeleton
                variant="circular"
                animation="wave"
                sx={{
                  width: CIRCLE_SIZE,
                  height: CIRCLE_SIZE,
                  gridColumn: index * 2 + 1,
                  gridRow: 1,
                }}
              />
              {index !== 3 ? (
                <Skeleton
                  variant="rectangular"
                  animation="wave"
                  sx={{
                    gridColumn: index * 2 + 2,
                    gridRow: 1,
                    justifySelf: "stretch",
                    width: "calc(100% + 8px)",
                    ml: "-4px",
                    height: isMobile ? 8 : 10,
                    borderRadius: 0,
                  }}
                />
              ) : null}
              <Skeleton
                variant="text"
                animation="wave"
                sx={{
                  width: isMobile ? CIRCLE_SIZE + 32 : 120,
                  height: isMobile ? 18 : 20,
                  borderRadius: "8px",
                  transform: "none",
                  gridColumn: index * 2 + 1,
                  gridRow: 2,
                  justifySelf: "center",
                }}
              />
            </Box>
          ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
