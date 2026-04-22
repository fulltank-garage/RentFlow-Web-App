"use client";

import Link from "next/link";
import {
  Box,
  Container,
  Card,
  CardContent,
  Typography,
  Divider,
  Stack,
  Chip,
  Button,
} from "@mui/material";
import PrivacyTableOfContents from "@/src/components/privacy/PrivacyTableOfContents";
import PrivacyContent from "@/src/components/privacy/PrivacyContent";
import PrivacyPageSkeleton from "@/src/components/privacy/PrivacyPageSkeleton";
import usePageReady from "@/src/hooks/usePageReady";

const sections = [
  { id: "overview", title: "1) ภาพรวม" },
  { id: "collect", title: "2) ข้อมูลที่เราเก็บ" },
  { id: "use", title: "3) วัตถุประสงค์การใช้ข้อมูล" },
  { id: "share", title: "4) การเปิดเผยข้อมูล" },
  { id: "cookies", title: "5) คุกกี้และการติดตาม" },
  { id: "security", title: "6) ความปลอดภัย" },
  { id: "rights", title: "7) สิทธิของเจ้าของข้อมูล" },
  { id: "retain", title: "8) ระยะเวลาการเก็บรักษา" },
  { id: "contact", title: "9) ติดต่อเรา" },
];

export default function PrivacyPage() {
  const ready = usePageReady();
  const updatedAt = "22 กุมภาพันธ์ 2569";

  if (!ready) {
    return <PrivacyPageSkeleton />;
  }

  return (
    <Box className="apple-page">
      <Box aria-hidden className="pointer-events-none fixed inset-0" />

      <Container maxWidth="md" className="relative py-10">
        <Stack spacing={1} className="mb-6">
          <Stack direction="row" className="items-center justify-between gap-3">
            <Stack>
              <Typography
                className="apple-heading"
                sx={{ fontSize: { xs: 34, md: 48 } }}
              >
                นโยบายความเป็นส่วนตัว (Privacy Policy)
              </Typography>

              <Stack direction="row" className="items-center gap-2">
                <Chip size="small" label={`อัปเดตล่าสุด: ${updatedAt}`} />
                <Typography className="text-xs text-[var(--rf-apple-muted)]">
                  รายละเอียดการดูแลข้อมูลส่วนบุคคลของผู้ใช้งาน
                </Typography>
              </Stack>
            </Stack>

            <Link href="/" style={{ textDecoration: "none" }}>
              <Button
                variant="outlined"
                className="rounded-full!"
              >
                กลับหน้าแรก
              </Button>
            </Link>
          </Stack>
        </Stack>

        <Card
          elevation={0}
          className="apple-card"
        >
          <CardContent className="p-7">
            <PrivacyTableOfContents sections={sections} />

            <Divider className="my-6! border-black/10!" />

            <PrivacyContent />
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}
