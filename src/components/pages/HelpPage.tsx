"use client";

import * as React from "react";
import Link from "next/link";
import { Box, Container, Typography, Button } from "@mui/material";
import HelpChatbotCard from "@/src/components/help/HelpChatbotCard";
import HelpFiltersBar from "@/src/components/help/HelpFiltersBar";
import HelpFaqList from "@/src/components/help/HelpFaqList";
import HelpPageSkeleton from "@/src/components/help/HelpPageSkeleton";
import useHelpPage from "@/src/hooks/help/useHelpPage";
import usePageReady from "@/src/hooks/usePageReady";

export default function HelpPage() {
  const ready = usePageReady({ minDelay: 2000 });

  const {
    q,
    setQ,
    category,
    setCategory,
    botQ,
    setBotQ,
    expanded,
    setExpanded,
    countsByCategory,
    filtered,
    botSuggestions,
    handleSelectSuggestion,
    handleReset,
  } = useHelpPage();

  if (!ready) {
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
            ช่วยเหลือ & FAQ
          </Typography>
          <Typography className="text-sm text-slate-600">
            รวมคำถามที่พบบ่อยเกี่ยวกับการเช่ารถ การจอง การรับ-คืนรถ
            และเงื่อนไขสำคัญ
          </Typography>
        </Box>
      </Box>

      <HelpChatbotCard
        botQ={botQ}
        onBotQChange={setBotQ}
        onClear={() => setBotQ("")}
        suggestions={botSuggestions}
        onSelectSuggestion={handleSelectSuggestion}
      />

      <HelpFiltersBar
        q={q}
        category={category}
        filteredCount={filtered.length}
        countsByCategory={countsByCategory}
        onQChange={setQ}
        onCategoryChange={setCategory}
        onReset={handleReset}
      />

      <HelpFaqList
        items={filtered}
        expanded={expanded}
        query={q}
        onExpandedChange={setExpanded}
      />

      <Box className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-4">
        <Typography className="text-sm font-semibold text-slate-900">
          ยังต้องการความช่วยเหลือ?
        </Typography>
        <Typography className="mt-1 text-sm text-slate-600">
          ไปที่หน้า “ติดต่อเรา” เพื่อส่งข้อความหาเรา พร้อมรายละเอียด
          (วันรับ-คืนรถ/รหัสการจองถ้ามี) เพื่อให้ช่วยได้เร็วขึ้น
        </Typography>

        <Box className="mt-4 flex flex-wrap gap-2">
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