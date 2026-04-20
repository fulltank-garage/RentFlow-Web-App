"use client";

import Link from "next/link";
import {
  Alert,
  Box,
  Container,
  Typography,
  Button,
  Chip,
} from "@mui/material";
import ContactInfoCard from "@/src/components/contact/ContactInfoCard";
import HelpPageSkeleton from "@/src/components/help/HelpPageSkeleton";
import { useBranchDirectory } from "@/src/hooks/branches/useBranchDirectory";

export default function HelpPage() {
  const { branches, loading, error } = useBranchDirectory();
  const activeBranches = branches.filter((branch) => branch.isActive).length;
  const phoneReadyCount = branches.filter((branch) => branch.phone).length;

  if (loading) {
    return <HelpPageSkeleton />;
  }

  return (
    <Container maxWidth="lg" className="py-12">
      <Box className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Box className="flex flex-col gap-2">
          <Typography
            variant="h5"
            className="text-2xl font-bold text-slate-900"
          >
            ศูนย์ช่วยเหลือ
          </Typography>
          <Typography className="text-sm text-slate-600">
            ตรวจสอบสถานะการจอง ติดต่อสาขา หรือส่งรายละเอียดให้ทีมงานช่วยดูแล
          </Typography>
        </Box>
      </Box>

      <Box className="mt-4 flex flex-wrap gap-3">
        <Chip
          label={`${activeBranches} สาขาพร้อมให้บริการ`}
          variant="outlined"
          className="bg-slate-900/5! text-slate-700!"
        />
        <Chip
          label={`${phoneReadyCount} เบอร์โทรสำหรับติดต่อ`}
          variant="outlined"
          className="bg-slate-900/5! text-slate-700!"
        />
      </Box>

      {error ? (
        <Alert severity="warning" className="mt-6 rounded-2xl!">
          {error}
        </Alert>
      ) : null}

      <Box className="mt-6 grid gap-4 md:grid-cols-3">
        <Box className="rounded-2xl border border-slate-200 bg-white p-4">
          <Typography className="text-sm font-semibold text-slate-900">
            1. ตรวจสอบสถานะการจอง
          </Typography>
          <Typography className="mt-2 text-sm text-slate-600">
            เริ่มจากหน้ารายการจองเพื่อดูสถานะล่าสุดและรหัสการจองของคุณ
          </Typography>
        </Box>

        <Box className="rounded-2xl border border-slate-200 bg-white p-4">
          <Typography className="text-sm font-semibold text-slate-900">
            2. ติดต่อสาขาที่เกี่ยวข้อง
          </Typography>
          <Typography className="mt-2 text-sm text-slate-600">
            เลือกสาขาที่รับหรือคืนรถ เพื่อให้ทีมงานช่วยเหลือได้ตรงจุด
          </Typography>
        </Box>

        <Box className="rounded-2xl border border-slate-200 bg-white p-4">
          <Typography className="text-sm font-semibold text-slate-900">
            3. เตรียมรายละเอียดให้พร้อม
          </Typography>
          <Typography className="mt-2 text-sm text-slate-600">
            แจ้งรหัสการจอง วันรับ-คืนรถ และรายละเอียดปัญหาที่พบ
          </Typography>
        </Box>
      </Box>

      <Box className="mt-6">
        <ContactInfoCard
          branches={branches}
          title="สาขาและช่องทางช่วยเหลือ"
          description="เลือกช่องทางที่สะดวกสำหรับติดต่อทีมงาน"
        />
      </Box>

      <Box className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-4">
        <Typography className="text-sm font-semibold text-slate-900">
          ต้องการความช่วยเหลือเพิ่มเติม?
        </Typography>
        <Typography className="mt-1 text-sm text-slate-600">
          ไปที่หน้าติดต่อเราเพื่อดูช่องทางการติดต่อและข้อมูลสาขา
        </Typography>

        <Box className="mt-4 flex flex-wrap gap-2">
          <Button
            component={Link}
            href="/my-bookings"
            variant="outlined"
            className="rounded-xl!"
            sx={{ textTransform: "none" }}
          >
            ดูรายการจอง
          </Button>
          <Button
            component={Link}
            href="/contact"
            variant="contained"
            className="rounded-xl! font-semibold!"
            sx={{ textTransform: "none", backgroundColor: "rgb(15 23 42)" }}
          >
            ติดต่อเรา
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
