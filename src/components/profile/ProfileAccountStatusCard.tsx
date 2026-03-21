"use client";

import * as React from "react";
import { Box, Divider, Typography } from "@mui/material";

export default function ProfileAccountStatusCard({
  emailVerified,
}: {
  emailVerified: boolean;
}) {
  return (
    <Box className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
      <Typography className="text-base font-bold text-slate-900">
        สถานะบัญชี
      </Typography>

      <Divider className="my-4! border-slate-200!" />

      <Box className="space-y-3">
        <Box className="flex items-center justify-between">
          <Typography className="text-sm text-slate-500">อีเมล</Typography>
          <Typography className="text-sm font-semibold text-emerald-600">
            {emailVerified ? "ยืนยันแล้ว" : "ยังไม่ยืนยัน"}
          </Typography>
        </Box>

        <Box className="flex items-center justify-between">
          <Typography className="text-sm text-slate-500">บัญชี</Typography>
          <Typography className="text-sm font-semibold text-slate-900">
            ใช้งานได้
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
