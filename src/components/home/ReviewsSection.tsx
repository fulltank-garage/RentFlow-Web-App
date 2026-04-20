"use client";

import Link from "next/link";
import { Box, Button, Container, Divider, Typography } from "@mui/material";
import RateReviewRoundedIcon from "@mui/icons-material/RateReviewRounded";

export default function ReviewsSection() {
  return (
    <Container maxWidth="lg" className="py-4">
      <Box className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <Box>
          <Typography
            variant="h4"
            className="text-base font-semibold text-slate-900"
          >
            รีวิวจากผู้ใช้งาน
          </Typography>
          <Typography className="mt-1 text-sm text-slate-600">
            ความเห็นจากลูกค้าที่เคยใช้บริการ
          </Typography>
        </Box>
      </Box>

      <Box className="mt-4 rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-8 text-center">
        <Box className="mx-auto grid h-12 w-12 place-items-center rounded-2xl border border-slate-200 bg-white text-slate-700">
          <RateReviewRoundedIcon />
        </Box>
        <Typography className="mt-4 text-sm font-semibold text-slate-900">
          ยังไม่มีรีวิว
        </Typography>
        <Typography className="mx-auto mt-1 max-w-md text-sm text-slate-600">
          เมื่อมีรีวิวจากผู้ใช้งาน รายการจะแสดงในส่วนนี้
        </Typography>
        <Button
          component={Link}
          href="/cars"
          variant="contained"
          className="mt-5 rounded-xl! font-semibold!"
          sx={{ textTransform: "none", backgroundColor: "rgb(15 23 42)" }}
        >
          เลือกรถเพื่อเริ่มจอง
        </Button>
      </Box>

      <Divider className="my-6! border-slate-200!" />
    </Container>
  );
}
