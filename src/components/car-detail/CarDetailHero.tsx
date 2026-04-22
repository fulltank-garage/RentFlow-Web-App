"use client";

import * as React from "react";
import Image from "next/image";
import { Box } from "@mui/material";

type Props = {
  image?: string;
  name: string;
};

export default function CarDetailHero({ image, name }: Props) {
  return (
    <Box className="lg:col-span-7">
      <Box className="apple-card relative overflow-hidden">
        <Box className="relative aspect-16/10">
          <Image
            src={image || "/RentFlow.png"}
            alt={name}
            fill
            className="object-cover"
            priority
          />
        </Box>

        <Box className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/10 to-transparent" />
      </Box>
    </Box>
  );
}
