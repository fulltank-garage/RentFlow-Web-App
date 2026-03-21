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
      <Box className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
        <Box className="relative aspect-16/10">
          <Image
            src={image || "/cars/placeholder.jpg"}
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
