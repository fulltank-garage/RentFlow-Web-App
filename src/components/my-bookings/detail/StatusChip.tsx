"use client";

import { Chip } from "@mui/material";
import type { BookingStatus } from "@/src/hooks/my-bookings/useMyBookingDetailPage";

export default function StatusChip({ s }: { s: BookingStatus }) {
  const map: Record<BookingStatus, { label: string; className: string }> = {
    pending: {
      label: "รอดำเนินการ",
      className: "!bg-amber-50 !text-amber-700 !border-amber-200",
    },
    confirmed: {
      label: "ยืนยันแล้ว",
      className: "!bg-emerald-50 !text-emerald-700 !border-emerald-200",
    },
    paid: {
      label: "ชำระแล้ว",
      className: "!bg-sky-50 !text-sky-700 !border-sky-200",
    },
    completed: {
      label: "เสร็จสิ้น",
      className: "!bg-slate-100 !text-slate-700 !border-slate-200",
    },
    cancelled: {
      label: "ยกเลิก",
      className: "!bg-rose-50 !text-rose-700 !border-rose-200",
    },
  };

  const v = map[s];

  return (
    <Chip
      size="small"
      label={v.label}
      variant="outlined"
      className={v.className}
    />
  );
}
