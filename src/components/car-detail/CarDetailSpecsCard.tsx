"use client";

import * as React from "react";
import { Box, Typography } from "@mui/material";

type Props = {
  detail: {
    type: string;
    seats: number;
    transmission: string;
    fuel: string;
  };
};

function SpecRow({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <Box className="flex items-center justify-between">
      <Typography className="text-slate-600">{label}</Typography>
      <Typography className="font-semibold text-slate-900">{value}</Typography>
    </Box>
  );
}

export default function CarDetailSpecsCard({ detail }: Props) {
  return (
    <Box className="rounded-2xl border border-slate-200! bg-slate-50! p-4!">
      <Typography className="text-sm font-semibold text-slate-900">
        สรุปสเปค
      </Typography>

      <Box className="mt-3 grid gap-2 text-sm text-slate-700">
        <SpecRow label="ประเภท" value={detail.type} />
        <SpecRow label="ที่นั่ง" value={detail.seats} />
        <SpecRow label="เกียร์" value={detail.transmission} />
        <SpecRow label="เชื้อเพลิง" value={detail.fuel} />
      </Box>
    </Box>
  );
}
