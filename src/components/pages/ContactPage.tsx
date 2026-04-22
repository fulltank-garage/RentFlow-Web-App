"use client";

import {
  Alert,
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
import { useBranchDirectory } from "@/src/hooks/branches/useBranchDirectory";

export default function ContactPage() {
  const { branches, loading, error } = useBranchDirectory();
  const phoneReadyCount = branches.filter((branch) => branch.phone).length;

  if (loading) {
    return <ContactPageSkeleton />;
  }

  return (
    <Box className="apple-page">
    <Container maxWidth="lg" className="apple-section">
      <Box className="mx-auto max-w-3xl text-center">
        <Box className="flex flex-col gap-3">
          <Typography
            className="apple-heading"
            sx={{ fontSize: { xs: 42, md: 64 } }}
          >
            ติดต่อเรา
          </Typography>
          <Typography className="apple-subtitle text-lg">
            เลือกช่องทางที่สะดวกสำหรับติดต่อทีมงาน
          </Typography>
        </Box>
      </Box>

      <Box className="mt-8 flex flex-wrap justify-center gap-3">
        <Chip
          icon={
            <SupportAgentRoundedIcon
              fontSize="small"
              className="text-emerald-500! ml-2!"
            />
          }
          label={`${branches.length} สาขาในระบบ`}
          variant="outlined"
          className="apple-pill text-[var(--rf-apple-muted)]!"
        />
        <Chip
          icon={
            <AccessTimeRoundedIcon
              fontSize="small"
              className="text-emerald-500! ml-2!"
            />
          }
          label={`${phoneReadyCount} เบอร์โทรพร้อมติดต่อ`}
          variant="outlined"
          className="apple-pill text-[var(--rf-apple-muted)]!"
        />
        <Chip
          icon={
            <LocalOfferRoundedIcon
              fontSize="small"
              className="text-emerald-500! ml-2!"
            />
          }
          label="แนบรหัสการจองจะช่วยให้ตรวจสอบได้เร็วขึ้น"
          variant="outlined"
          className="apple-pill text-[var(--rf-apple-muted)]!"
        />
      </Box>

      {error ? (
        <Alert severity="warning" className="mt-6 rounded-2xl!">
          {error}
        </Alert>
      ) : null}

      <Box className="mt-10 grid gap-5 lg:grid-cols-12">
        <Box className="lg:col-span-5">
          <ContactInfoCard branches={branches} />
        </Box>

        <Box className="lg:col-span-7">
          <ContactFormCard />
        </Box>
      </Box>
    </Container>
    </Box>
  );
}
