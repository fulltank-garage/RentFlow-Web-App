"use client";

import Link from "next/link";
import { Box, Button, Typography } from "@mui/material";

import type {
  StorefrontBlock,
  StorefrontTheme,
} from "@/src/services/storefront/storefront.types";

type Props = {
  blocks?: StorefrontBlock[];
  theme?: StorefrontTheme;
};

function getBlockToneStyle(
  tone: StorefrontBlock["tone"],
  theme?: StorefrontTheme
) {
  const primaryColor = theme?.primaryColor || "#2563eb";
  const accentColor = theme?.accentColor || "#0f172a";
  const surfaceColor = theme?.surfaceColor || "#f8fafc";

  if (tone === "highlight") {
    return {
      backgroundColor: surfaceColor,
      color: accentColor,
      border: `1px solid ${primaryColor}1f`,
    };
  }

  if (tone === "dark") {
    return {
      backgroundColor: accentColor,
      color: "#ffffff",
      border: "1px solid transparent",
    };
  }

  if (tone === "success") {
    return {
      backgroundColor: "#ecfdf5",
      color: "#065f46",
      border: "1px solid rgba(16, 185, 129, 0.18)",
    };
  }

  return {
    backgroundColor: "#ffffff",
    color: "var(--rf-apple-ink)",
    border: "1px solid rgba(15, 23, 42, 0.06)",
  };
}

export default function StorefrontBlocksSection({ blocks = [], theme }: Props) {
  const visibleBlocks = blocks.filter((block) => block.title || block.description);
  if (visibleBlocks.length === 0) return null;

  return (
    <Box className="mx-auto grid w-full max-w-[1320px] gap-5 px-6 pb-10 md:grid-cols-2 xl:grid-cols-3">
      {visibleBlocks.map((block, index) => {
        const isCta = block.type === "cta" || block.buttonLabel;
        const toneStyle = getBlockToneStyle(block.tone, theme);
        const isCentered = block.align === "center";
        const mutedColor = toneStyle.color === "#ffffff" ? "rgba(255,255,255,0.72)" : "var(--rf-apple-muted)";
        return (
          <Box
            key={block.id || `${block.type || "block"}-${index}`}
            className="rf-card apple-hover flex min-h-[220px] flex-col justify-between rounded-[34px] p-8 shadow-[var(--rf-apple-shadow)]"
            sx={{
              ...toneStyle,
              textAlign: isCentered ? "center" : "left",
              alignItems: isCentered ? "center" : "stretch",
            }}
          >
            <Box>
              {block.subtitle ? (
                <Typography
                  className="mb-3 text-sm font-semibold"
                  sx={{ color: mutedColor }}
                >
                  {block.subtitle}
                </Typography>
              ) : null}
              <Typography
                className="text-3xl font-black tracking-[-0.04em] md:text-4xl"
                sx={{ color: toneStyle.color }}
              >
                {block.title}
              </Typography>
              {block.description ? (
                <Typography
                  className="mt-4 text-base leading-7 md:text-lg"
                  sx={{ color: mutedColor }}
                >
                  {block.description}
                </Typography>
              ) : null}
            </Box>
            {isCta && block.href ? (
              <Button
                component={Link}
                href={block.href}
                className="mt-8 h-12 rounded-full! px-7! text-base! font-bold! text-white!"
                sx={{
                  alignSelf: isCentered ? "center" : "flex-start",
                  backgroundColor: theme?.primaryColor || "var(--rf-apple-blue)",
                  "&:hover": {
                    backgroundColor: theme?.primaryColor || "var(--rf-apple-blue)",
                    opacity: 0.92,
                  },
                }}
              >
                {block.buttonLabel || "ดูเพิ่มเติม"}
              </Button>
            ) : null}
          </Box>
        );
      })}
    </Box>
  );
}
