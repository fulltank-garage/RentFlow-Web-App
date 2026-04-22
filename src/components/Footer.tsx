"use client";

import Link from "next/link";
import Image from "next/image";
import { Box, Container, Typography, Stack, Divider } from "@mui/material";
import FacebookRounded from "@mui/icons-material/FacebookRounded";
import EmailRounded from "@mui/icons-material/EmailRounded";
import PhoneRounded from "@mui/icons-material/PhoneRounded";

import { NAV } from "@/src/constants/navigation";

const BRAND = {
  name: "RentFlow",
  tagline:
    "ระบบเช่ารถออนไลน์ จองง่าย ราคารวมชัดเจน ไม่มีค่าใช้จ่ายแอบแฝง พร้อมบริการช่วยเหลือ 24/7",
};

const CONTACT = {
  email: "support@rentflow.com",
  phone: "099-999-9999",
};

const SOCIAL = {
  facebook: "https://facebook.com",
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <Box
      component="footer"
      className="border-t border-black/10 bg-[var(--rf-apple-surface-soft)]"
      aria-label="Site footer"
    >
      <Container maxWidth="lg" className="py-10">
        <Box className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <Stack direction="row" spacing={1} alignItems="center">
            <Box className="relative h-6 w-6 shrink-0">
              <Image
                src="/RentFlow.png"
                alt="RentFlow Logo"
                fill
                className="object-contain"
              />
            </Box>

            <Typography className="text-lg font-bold tracking-[-0.03em] text-[var(--rf-apple-ink)]">
              {BRAND.name}
            </Typography>
          </Stack>

          {/* Links */}
          <Box component="nav" aria-label="Footer navigation">
            <Typography className="font-semibold! text-[var(--rf-apple-ink)]">
              เมนู
            </Typography>

            <Stack spacing={1} className="mt-3">
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="w-fit text-sm text-[var(--rf-apple-muted)] outline-none transition hover:text-[var(--rf-apple-ink)] focus-visible:rounded focus-visible:ring-2 focus-visible:ring-black/20"
                >
                  {item.label}
                </Link>
              ))}
            </Stack>
          </Box>

          {/* Contact / Social */}
          <Box component="address" className="not-italic">
            <Typography className="font-semibold! text-[var(--rf-apple-ink)]">
              ติดต่อ
            </Typography>

            <Stack spacing={1.5} className="mt-3">
              {/* email */}
              <Stack direction="row" spacing={1} alignItems="center">
                <EmailRounded className="text-[var(--rf-apple-muted)]!" fontSize="small" />
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="text-sm text-[var(--rf-apple-muted)] hover:text-[var(--rf-apple-ink)] focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20"
                >
                  {CONTACT.email}
                </a>
              </Stack>

              {/* phone */}
              <Stack direction="row" spacing={1} alignItems="center">
                <PhoneRounded className="text-[var(--rf-apple-muted)]!" fontSize="small" />
                <a
                  href={`tel:${CONTACT.phone.replace(/-/g, "")}`}
                  className="text-sm text-[var(--rf-apple-muted)] hover:text-[var(--rf-apple-ink)] focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20"
                >
                  {CONTACT.phone}
                </a>
              </Stack>

              {/* socials */}
              <Stack direction="row" spacing={1} alignItems="center">
                <FacebookRounded fontSize="small" className="text-[var(--rf-apple-muted)]!" />
                <a
                  href={SOCIAL.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[var(--rf-apple-muted)] hover:text-[var(--rf-apple-ink)] focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20"
                >
                  Facebook
                </a>
              </Stack>
            </Stack>
          </Box>
        </Box>

        <Divider className="my-6! border-black/10!" />

        <Box className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <Typography className="text-xs text-[var(--rf-apple-muted)]">
            © {year} {BRAND.name} • แพลตฟอร์มให้บริการเช่ารถยนต์ออนไลน์
          </Typography>

          <Stack direction="row" spacing={2} className="text-sm">
            <Link
              href="/terms"
              className="text-[var(--rf-apple-muted)] hover:text-[var(--rf-apple-ink)]"
            >
              เงื่อนไขการใช้งาน
            </Link>
            <Link
              href="/privacy"
              className="text-[var(--rf-apple-muted)] hover:text-[var(--rf-apple-ink)]"
            >
              นโยบายความเป็นส่วนตัว
            </Link>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
