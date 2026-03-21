"use client";

import * as React from "react";
import {
  Box,
  Container,
  Typography,
  Chip,
} from "@mui/material";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import SupportAgentRoundedIcon from "@mui/icons-material/SupportAgentRounded";
import LocalOfferRoundedIcon from "@mui/icons-material/LocalOfferRounded";
import ContactInfoCard from "@/src/components/contact/ContactInfoCard";
import ContactFormCard from "@/src/components/contact/ContactFormCard";
import ContactPageSkeleton from "@/src/components/contact/ContactPageSkeleton";
import usePageReady from "@/src/hooks/usePageReady";

export default function ContactPage() {
  const ready = usePageReady({ minDelay: 2000 });

  if (!ready) {
    return <ContactPageSkeleton />;
  }

  return (
    <Container maxWidth="lg" className="py-12">
      <Box className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Box className="flex flex-col gap-2">
          <Typography
            variant="h5"
            className="text-2xl font-bold text-slate-900"
          >
            ติดต่อเรา
          </Typography>
          <Typography className="text-sm text-slate-600">
            ส่งข้อความถึงทีมงานเพื่อขอความช่วยเหลือ เราจะตอบกลับในเวลาทำการ
          </Typography>
        </Box>
      </Box>

      <Box className="mt-2 flex flex-wrap gap-4">
        <Chip
          icon={
            <SupportAgentRoundedIcon
              fontSize="small"
              className="text-emerald-500! ml-2!"
            />
          }
          label="ซัพพอร์ต"
          variant="outlined"
          className="bg-slate-900/5! text-slate-700!"
        />
        <Chip
          icon={
            <AccessTimeRoundedIcon
              fontSize="small"
              className="text-emerald-500! ml-2!"
            />
          }
          label="ตอบกลับในเวลาทำการ"
          variant="outlined"
          className="bg-slate-900/5! text-slate-700!"
        />
        <Chip
          icon={
            <LocalOfferRoundedIcon
              fontSize="small"
              className="text-emerald-500! ml-2!"
            />
          }
          label="แนบรหัสการจอง (ถ้ามี) จะช่วยได้เร็วขึ้น"
          variant="outlined"
          className="bg-slate-900/5! text-slate-700!"
        />
      </Box>

      <Box className="mt-6 grid gap-4 lg:grid-cols-12">
        <Box className="lg:col-span-5">
          <ContactInfoCard />
        </Box>

        <Box className="lg:col-span-7">
          <ContactFormCard />
        </Box>
      </Box>
    </Container>
  );
}