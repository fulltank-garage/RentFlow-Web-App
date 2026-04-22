"use client";

import * as React from "react";
import Link from "next/link";
import { Box, Container, Typography, Chip, Button } from "@mui/material";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import FeaturesPageSkeleton from "@/src/components/feature/FeaturesPageSkeleton";
import {
  HERO_BADGES,
  FEATURES,
  HOW_IT_WORKS,
  TRUST_POINTS,
} from "@/src/constants/features";
import usePageReady from "@/src/hooks/usePageReady";

export default function FeaturesPage() {
  const ready = usePageReady();

  if (!ready) {
    return <FeaturesPageSkeleton />;
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
            ทำไมต้อง RentFlow
          </Typography>
          <Typography className="apple-subtitle text-lg">
            แพลตฟอร์มเช่ารถที่เน้นความชัดเจน โปร่งใส และประสบการณ์ใช้งานที่ลื่นไหล
          </Typography>
        </Box>
      </Box>

      <Box className="mt-8 flex flex-wrap justify-center gap-2">
        {HERO_BADGES.map((b) => (
          <Chip
            key={b}
            icon={
              <CheckCircleRoundedIcon
                fontSize="small"
                className="text-emerald-500! ml-2!"
              />
            }
            label={b}
            className="apple-pill text-[var(--rf-apple-muted)]!"
            variant="outlined"
          />
        ))}
      </Box>

      <Box className="mt-8">
        <Box className="flex items-end justify-between gap-3">
          <Box>
            <Typography className="text-2xl font-black tracking-[-0.05em] text-[var(--rf-apple-ink)]">
              จุดเด่นของระบบ
            </Typography>
            <Typography className="mt-1 text-sm text-[var(--rf-apple-muted)]">
              ออกแบบให้ผู้ใช้เข้าใจง่าย เห็นข้อมูลสำคัญก่อนตัดสินใจ
            </Typography>
          </Box>
        </Box>

        <Box className="mt-4 grid gap-4 md:grid-cols-2">
          {FEATURES.map((f) => (
            <Box
              key={f.title}
              className="apple-card p-5"
            >
              <Box className="flex items-start gap-3">
                <Box className="mt-0.5 grid h-10 w-10 place-items-center rounded-full bg-[var(--rf-apple-surface-soft)] text-[var(--rf-apple-blue)]">
                  {f.icon}
                </Box>
                <Box className="min-w-0">
                  <Typography className="text-base font-bold text-[var(--rf-apple-ink)]">
                    {f.title}
                  </Typography>
                  <Typography className="mt-1 text-sm leading-relaxed text-[var(--rf-apple-muted)]">
                    {f.desc}
                  </Typography>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>

      <Box className="apple-card mt-10 p-5">
        <Typography className="text-2xl font-black tracking-[-0.05em] text-[var(--rf-apple-ink)]">
          ขั้นตอนการจอง
        </Typography>
        <Typography className="mt-1 text-sm text-[var(--rf-apple-muted)]">
          ตั้งแต่ค้นหารถจนถึงชำระเงิน — เราทำให้ทุกขั้นตอนชัดเจนและง่ายดาย
        </Typography>

        <Box className="mt-4 grid gap-4 md:grid-cols-2">
          {HOW_IT_WORKS.map((s) => (
            <Box
              key={s.step}
              className="rounded-[24px] bg-[var(--rf-apple-surface-soft)] p-4"
            >
              <Box className="flex items-start gap-3">
                <Box className="grid h-9 w-9 place-items-center rounded-full bg-[var(--rf-apple-ink)] text-white">
                  <Typography className="text-sm font-bold">{s.step}</Typography>
                </Box>
                <Box>
                  <Typography className="text-sm font-semibold text-[var(--rf-apple-ink)]">
                    {s.title}
                  </Typography>
                  <Typography className="mt-1 text-sm text-[var(--rf-apple-muted)]">
                    {s.desc}
                  </Typography>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>

      <Box className="mt-10">
        <Typography className="text-2xl font-black tracking-[-0.05em] text-[var(--rf-apple-ink)]">
          ความน่าเชื่อถือ & ความปลอดภัย
        </Typography>
        <Typography className="mt-1 text-sm text-[var(--rf-apple-muted)]">
          สิ่งที่ผู้ใช้มักอยากรู้ก่อนจอง — เราใส่ไว้ให้ครบ
        </Typography>

        <Box className="mt-4 grid gap-4 md:grid-cols-2">
          {TRUST_POINTS.map((t) => (
            <Box
              key={t.title}
              className="apple-card p-5"
            >
              <Typography className="text-base font-bold text-[var(--rf-apple-ink)]">
                {t.title}
              </Typography>
              <Typography className="mt-1 text-sm text-[var(--rf-apple-muted)]">
                {t.desc}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      <Box className="apple-card mt-10 p-5">
        <Typography className="text-base font-bold text-[var(--rf-apple-ink)]">
          พร้อมเริ่มจอง?
        </Typography>
        <Typography className="mt-1 text-sm text-[var(--rf-apple-muted)]">
          ไปที่หน้า “รถทั้งหมด” เพื่อเลือกคันที่ใช่ แล้วกด “จองเลย”
        </Typography>

        <Box className="mt-4 flex flex-wrap gap-2">
          <Button
            component={Link}
            href="/cars"
            variant="contained"
            className="rounded-full! font-semibold!"
          >
            เลือกรถตอนนี้
          </Button>
          <Button
            component={Link}
            href="/contact"
            variant="outlined"
            className="rounded-full!"
          >
            ติดต่อทีมงาน
          </Button>
        </Box>
      </Box>
    </Container>
    </Box>
  );
}
