"use client";

import Link from "next/link";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Divider,
} from "@mui/material";

export default function ContactFormCard() {
  return (
    <Card
      elevation={0}
      sx={{ boxShadow: "none" }}
      className="rounded-2xl! border border-slate-200 bg-white"
    >
      <CardContent className="p-4!">
        <Typography className="text-sm font-semibold text-slate-900">
          เตรียมข้อมูลก่อนติดต่อ
        </Typography>
        <Typography className="mt-1 text-sm text-slate-600">
          เพื่อให้ทีมงานช่วยตรวจสอบได้เร็วขึ้น กรุณาเตรียมรายละเอียดต่อไปนี้
        </Typography>

        <Divider className="my-5! border-slate-200!" />

        <Box className="space-y-4">
          <Box className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <Typography className="text-sm font-semibold text-slate-900">
              ข้อมูลที่ควรแจ้ง
            </Typography>
            <Box className="mt-3 space-y-2 text-sm text-slate-600">
              <Typography>1. รหัสการจองหรือชื่อผู้จอง</Typography>
              <Typography>2. วันรับรถ วันคืนรถ และสาขาที่เกี่ยวข้อง</Typography>
              <Typography>3. รายละเอียดปัญหาหรือคำขอที่ต้องการให้ช่วย</Typography>
              <Typography>4. เบอร์โทรที่สะดวกให้ทีมงานติดต่อกลับ</Typography>
            </Box>
          </Box>

          <Box className="rounded-xl border border-slate-200 bg-white p-4">
            <Typography className="text-sm font-semibold text-slate-900">
              จัดการรายการจอง
            </Typography>
            <Typography className="mt-2 text-sm text-slate-600">
              หากต้องการตรวจสอบสถานะหรือรายละเอียดการจอง สามารถเปิดหน้ารายการจองของคุณได้ทันที
            </Typography>

            <Box className="mt-4 flex flex-wrap gap-2">
              <Button
                component={Link}
                href="/my-bookings"
                variant="contained"
                className="rounded-xl! font-semibold!"
                sx={{ textTransform: "none", backgroundColor: "rgb(15 23 42)" }}
              >
                ดูรายการจองของฉัน
              </Button>
            </Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
