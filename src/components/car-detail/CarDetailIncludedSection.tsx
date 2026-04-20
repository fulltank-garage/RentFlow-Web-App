"use client";

import * as React from "react";
import { Box, Typography } from "@mui/material";
import TaskAltRoundedIcon from "@mui/icons-material/TaskAltRounded";
import DoNotDisturbAltRoundedIcon from "@mui/icons-material/DoNotDisturbAltRounded";

function IncludedCard({
  positive,
  title,
  desc,
}: {
  positive: boolean;
  title: string;
  desc: string;
}) {
  const Icon = positive ? TaskAltRoundedIcon : DoNotDisturbAltRoundedIcon;
  const iconClass = positive ? "text-emerald-600" : "text-rose-600";
  const bgClass = positive ? "bg-slate-50" : "bg-white";

  return (
    <Box className={`rounded-2xl border border-slate-200 p-4 ${bgClass}`}>
      <Box className="flex items-start gap-2">
        <Icon fontSize="small" className={`mt-0.5 ${iconClass}`} />
        <Box>
          <Typography
            className="text-sm font-semibold text-slate-900"
            component="div"
          >
            {title}
          </Typography>
          <Typography className="mt-1 text-xs text-slate-600" component="div">
            {desc}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default function CarDetailIncludedSection() {
  return (
    <Box className="rounded-2xl border border-slate-200 bg-white p-4!">
      <Typography className="text-sm font-semibold text-slate-900">
        สิ่งที่รวมในราคา
      </Typography>

      <Box className="mt-3 grid gap-3 sm:grid-cols-2">
        <IncludedCard
          positive
          title="ตรวจเช็คสภาพรถก่อนส่งมอบ"
          desc="เช็คระบบพื้นฐานและทำความสะอาดก่อนรับรถ"
        />
        <IncludedCard
          positive
          title="บริการช่วยเหลือเบื้องต้น"
          desc="ติดต่อทีมงานได้ในเวลาทำการ"
        />
        <IncludedCard
          positive={false}
          title="ค่าน้ำมัน"
          desc="ปกติคิดตามนโยบาย (รับเท่าไรคืนเท่านั้น)"
        />
        <IncludedCard
          positive={false}
          title="ค่าปรับคืนรถเกินเวลา"
          desc="ขึ้นกับเงื่อนไขจริงของผู้ให้บริการ"
        />
      </Box>
    </Box>
  );
}
