"use client";

import * as React from "react";
import Link from "next/link";
import { formatTHB } from "@/src/constants/money";
import {
  Box,
  Container,
  Typography,
  Divider,
  Button,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import StatusChip from "@/src/components/my-bookings/detail/StatusChip";
import StatusTimeline from "@/src/components/my-bookings/detail/StatusTimeline";
import MyBookingDetailPageSkeleton from "@/src/components/my-bookings/detail/MyBookingDetailPageSkeleton";
import useMyBookingDetailPage from "@/src/hooks/my-bookings/useMyBookingDetailPage";

export default function MyBookingDetailPage() {
  const booking = useMyBookingDetailPage();

  if (
    !booking.ready ||
    booking.isCheckingAuth ||
    !booking.isAuthenticated
  ) {
    return <MyBookingDetailPageSkeleton />;
  }

  if (!booking.id) return null;

  if (!booking.local) {
    return (
      <Box className="apple-page">
        <Container maxWidth="lg" className="apple-section">
        <Box className="apple-card apple-card-no-hover p-6">
          <Typography className="text-lg font-semibold text-slate-900">
            ไม่พบรายการจอง
          </Typography>
          <Typography className="mt-1 text-sm text-slate-600">
            ไม่พบรหัสการจอง{" "}
            <span className="font-medium text-slate-900">{booking.id}</span>
          </Typography>

          <Box className="mt-5">
            <Button
              component={Link}
              href="/my-bookings"
              variant="outlined"
              className="rounded-full!"
            >
              กลับไปหน้ารายการจอง
            </Button>
          </Box>
        </Box>
        </Container>
      </Box>
    );
  }

  const local = booking.local;
  const p = booking.pricing;

  return (
    <Box className="apple-page">
      <Container maxWidth="lg" className="apple-section">
      <Box className="flex flex-col gap-2">
        <Typography variant="h5" className="text-2xl font-bold text-slate-900">
          รายละเอียดการจอง
        </Typography>
        <Typography className="text-sm text-slate-600">
          ตรวจสอบข้อมูลการจอง สถานะ และสรุปราคา
        </Typography>
      </Box>

      <Box className="apple-card mt-6 p-5">
        <Box className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <Box className="space-y-1">
            <Typography className="text-sm font-semibold text-slate-900">
              {local.carName} <span className="text-slate-400">•</span>{" "}
              <span className="text-slate-600">{local.id}</span>
            </Typography>

            <Box className="mt-2 flex flex-wrap items-center gap-2">
              <StatusChip s={local.status} />
              <Typography className="text-xs text-slate-600">
                รับรถ: {local.pickupDate} • คืนรถ: {local.returnDate}
              </Typography>
            </Box>

            <Box className="mt-3">
              <StatusTimeline status={local.status} />
            </Box>
          </Box>

          <Box className="flex flex-wrap items-center gap-2">
            <Button
              variant="outlined"
              className="rounded-full!"
              onClick={() => booking.router.back()}
            >
              ย้อนกลับ
            </Button>

            <Button
              variant="outlined"
              className="rounded-full! border-rose-200! text-rose-700! hover:border-rose-300!"
              disabled={!booking.canCancel}
              onClick={() => booking.setOpenCancel(true)}
            >
              ยกเลิกการจอง
            </Button>

            <Button
              component={Link}
              href="/contact"
              variant="contained"
              className="rounded-full! bg-slate-900! hover:bg-slate-800!"
            >
              ติดต่อแอดมิน
            </Button>
          </Box>
        </Box>
      </Box>

      <Box className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
        <Box className="space-y-4 md:col-span-2">
          <Paper elevation={0} className="apple-card p-5">
            <Typography className="text-sm font-semibold text-slate-900">
              ข้อมูลรับ-คืนรถ
            </Typography>
            <Divider className="my-4! border-black/10!" />

            <Box className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Box>
                <Typography className="text-xs text-slate-500">
                  สถานที่รับรถ
                </Typography>
                <Typography className="mt-1 text-sm text-slate-900">
                  {local.pickupLocation ?? "-"}
                </Typography>
                <Typography className="mt-1 text-xs text-slate-600">
                  วันที่รับรถ: {local.pickupDate}
                </Typography>
              </Box>

              <Box>
                <Typography className="text-xs text-slate-500">
                  สถานที่คืนรถ
                </Typography>
                <Typography className="mt-1 text-sm text-slate-900">
                  {local.returnLocation ?? "-"}
                </Typography>
                <Typography className="mt-1 text-xs text-slate-600">
                  วันที่คืนรถ: {local.returnDate}
                </Typography>
              </Box>
            </Box>
          </Paper>

          <Paper elevation={0} className="apple-card p-5">
            <Typography className="text-sm font-semibold text-slate-900">
              ข้อมูลผู้จอง
            </Typography>
            <Divider className="my-4! border-black/10!" />

            <Box className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <Box>
                <Typography className="text-xs text-slate-500">ชื่อ</Typography>
                <Typography className="mt-1 text-sm text-slate-900">
                  {local.customerName ?? "-"}
                </Typography>
              </Box>

              <Box>
                <Typography className="text-xs text-slate-500">เบอร์โทร</Typography>
                <Typography className="mt-1 text-sm text-slate-900">
                  {local.phone ?? "-"}
                </Typography>
              </Box>

              <Box>
                <Typography className="text-xs text-slate-500">หมายเหตุ</Typography>
                <Typography className="mt-1 text-sm text-slate-900">
                  {local.notes ?? "-"}
                </Typography>
              </Box>
            </Box>
          </Paper>

          <Paper elevation={0} className="apple-card p-5">
            <Typography className="text-sm font-semibold text-slate-900">
              เงื่อนไขสำคัญ
            </Typography>
            <Divider className="my-4! border-black/10!" />

            <Box className="space-y-2">
              <Typography className="text-sm text-slate-600">
                • โปรดนำใบขับขี่และบัตรประชาชนมาแสดงตอนรับรถ
              </Typography>
              <Typography className="text-sm text-slate-600">
                • การยกเลิกอาจมีค่าธรรมเนียมตามเงื่อนไขบริษัท
              </Typography>
              <Typography className="text-sm text-slate-600">
                • หากต้องการเปลี่ยนวันรับ-คืนรถ ให้ติดต่อแอดมิน
              </Typography>
            </Box>
          </Paper>
        </Box>

        <Box className="space-y-4">
          <Paper elevation={0} className="apple-card p-5">
            <Typography className="text-sm font-semibold text-slate-900">
              สรุปราคา
            </Typography>
            <Divider className="my-4! border-black/10!" />

            <Box className="space-y-2">
              <Box className="flex items-center justify-between">
                <Typography className="text-sm text-slate-600">
                  ค่าเช่ารถ
                </Typography>
                <Typography className="text-sm text-slate-900">
                  {formatTHB(p.subtotal)}
                </Typography>
              </Box>

              {p.extraCharge > 0 ? (
                <Box className="flex items-center justify-between">
                  <Typography className="text-sm text-slate-600">
                    ค่าบริการเพิ่ม
                  </Typography>
                  <Typography className="text-sm text-slate-900">
                    {formatTHB(p.extraCharge)}
                  </Typography>
                </Box>
              ) : null}

              {p.discount > 0 ? (
                <Box className="flex items-center justify-between">
                  <Typography className="text-sm text-slate-600">
                    ส่วนลด
                  </Typography>
                  <Typography className="text-sm text-emerald-700">
                    -{formatTHB(p.discount)}
                  </Typography>
                </Box>
              ) : null}

              <Divider className="my-3! border-black/10!" />

              <Box className="flex items-center justify-between">
                <Typography className="text-sm font-semibold text-slate-900">
                  ยอดรวม
                </Typography>
                <Typography className="text-base font-bold text-slate-900">
                  {formatTHB(p.total)}
                </Typography>
              </Box>
            </Box>

            <Box className="mt-4 rounded-[22px]! bg-[var(--rf-apple-surface-soft)] p-4">
              <Typography className="text-xs text-slate-600">
                ใบเสร็จ/เอกสารยืนยันจะพร้อมหลังสถานะ “ยืนยันแล้ว”
              </Typography>
            </Box>

            <Box className="mt-4 flex gap-2">
              <Button
                fullWidth
                variant="outlined"
                className="rounded-full!"
                disabled={local.status === "pending" || local.status === "cancelled"}
              >
                ดาวน์โหลดใบยืนยัน
              </Button>
            </Box>
          </Paper>

          <Paper elevation={0} className="apple-card p-5">
            <Typography className="text-sm font-semibold text-slate-900">
              การช่วยเหลือ
            </Typography>
            <Divider className="my-4! border-black/10!" />
            <Typography className="text-sm text-slate-600">
              หากพบปัญหาเรื่องการรับรถ/คืนรถ หรืออยากเปลี่ยนข้อมูล
              กรุณาติดต่อแอดมิน
            </Typography>

            <Box className="mt-3">
              <Button
                component={Link}
                href="/contact"
                variant="contained"
                className="rounded-full! bg-slate-900! hover:bg-slate-800!"
                fullWidth
              >
                ไปที่ศูนย์ช่วยเหลือ
              </Button>
            </Box>
          </Paper>
        </Box>
      </Box>

      <Dialog
        open={booking.openCancel}
        onClose={() => booking.setOpenCancel(false)}
        maxWidth="xs"
        fullWidth
      >
        <DialogTitle className="text-base font-semibold">
          ยืนยันการยกเลิกการจอง
        </DialogTitle>

        <DialogContent>
          <Typography className="text-sm text-slate-600">
            ต้องการยกเลิกรายการ{" "}
            <span className="font-semibold text-slate-900">{local.id}</span>{" "}
            ใช่หรือไม่?
          </Typography>

          <Box className="mt-3 rounded-[18px] bg-rose-50 p-3">
            <Typography className="text-xs text-rose-700">
              เมื่อยกเลิกแล้ว จะไม่สามารถกู้คืนสถานะเดิมได้
            </Typography>
          </Box>
        </DialogContent>

        <DialogActions className="p-4">
          <Button
            variant="outlined"
            className="rounded-full!"
            onClick={() => booking.setOpenCancel(false)}
          >
            ย้อนกลับ
          </Button>
          <Button
            variant="contained"
            className="rounded-full! bg-rose-600! hover:bg-rose-700!"
            onClick={booking.doCancel}
          >
            ยกเลิกการจอง
          </Button>
        </DialogActions>
      </Dialog>
      </Container>
    </Box>
  );
}
