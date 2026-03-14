"use client";

import * as React from "react";
import Link from "next/link";
import { Box, Container, Typography, Button } from "@mui/material";
import {
  FAQ,
  type FAQCategory,
  type FAQItem,
} from "@/src/constants/faq";
import HelpChatbotCard from "@/src/components/help/HelpChatbotCard";
import HelpFiltersBar from "@/src/components/help/HelpFiltersBar";
import HelpFaqList from "@/src/components/help/HelpFaqList";
import HelpPageSkeleton from "@/src/components/help/HelpPageSkeleton";
import { normalize, scoreFAQ } from "@/src/components/help/HelpSearchUtils";

export default function HelpPage() {
  const [q, setQ] = React.useState("");
  const [category, setCategory] = React.useState<FAQCategory | "ทั้งหมด">(
    "ทั้งหมด"
  );
  const [botQ, setBotQ] = React.useState("");
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const countsByCategory = React.useMemo(() => {
    const map = new Map<string, number>();
    FAQ.forEach((x) => map.set(x.category, (map.get(x.category) ?? 0) + 1));
    return map;
  }, []);

  const filtered = React.useMemo(() => {
    const query = normalize(q);

    let items = FAQ.filter((x) =>
      category === "ทั้งหมด" ? true : x.category === category
    );

    if (!query) return items;

    const ranked = items
      .map((it) => ({ it, s: scoreFAQ(it, query) }))
      .filter((x) => x.s > 0.08)
      .sort((a, b) => b.s - a.s)
      .map((x) => x.it);

    if (!ranked.length) {
      return items.filter((x) => {
        const hay = normalize(
          [x.q, x.a, x.category, ...(x.tags ?? [])].join(" ")
        );
        return hay.includes(query);
      });
    }

    return ranked;
  }, [q, category]);

  const botSuggestions = React.useMemo(() => {
    const query = normalize(botQ);
    if (!query) return [];
    return FAQ.map((it) => ({ it, s: scoreFAQ(it, query) }))
      .sort((a, b) => b.s - a.s)
      .slice(0, 3);
  }, [botQ]);

  const handleSelectSuggestion = React.useCallback((item: FAQItem) => {
    setExpanded(item.id);
    setCategory("ทั้งหมด");
    setQ(item.q);

    setTimeout(() => {
      const el = document.getElementById(`faq-${item.id}`);
      el?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 50);
  }, []);

  const handleReset = React.useCallback(() => {
    setQ("");
    setCategory("ทั้งหมด");
    setExpanded(false);
  }, []);

  const [ready, setReady] = React.useState(false);

  React.useEffect(() => {
    const start = Date.now();

    const timer = setTimeout(() => {
      const elapsed = Date.now() - start;
      const delay = Math.max(2000 - elapsed, 0);

      setTimeout(() => {
        setReady(true);
      }, delay);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

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