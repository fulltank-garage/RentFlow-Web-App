"use client";

import * as React from "react";
import {
    Box,
    TextField,
    MenuItem,
    Button,
    Chip,
    Divider,
    Typography,
} from "@mui/material";
import RestartAltRoundedIcon from "@mui/icons-material/RestartAltRounded";
import { CATEGORIES, type FAQCategory } from "@/src/constants/faq";

type Props = {
    q: string;
    category: FAQCategory | "ทั้งหมด";
    filteredCount: number;
    countsByCategory: Map<string, number>;
    onQChange: (value: string) => void;
    onCategoryChange: (value: FAQCategory | "ทั้งหมด") => void;
    onReset: () => void;
};

export default function HelpFiltersBar({
    q,
    category,
    filteredCount,
    countsByCategory,
    onQChange,
    onCategoryChange,
    onReset,
}: Props) {
    return (
        <Box className="mt-6 rounded-2xl border border-slate-200 bg-white p-4">
            <Box className="grid gap-4 md:grid-cols-[1fr_1fr_auto]">
                <TextField
                    label="ค้นหาคำถาม (พิมพ์คำสำคัญ)"
                    value={q}
                    onChange={(e) => onQChange(e.target.value)}
                    size="small"
                    fullWidth
                    sx={{ "& .MuiOutlinedInput-root": { borderRadius: "10px" } }}
                />

                <TextField
                    select
                    label="หมวดหมู่"
                    value={category}
                    onChange={(e) =>
                        onCategoryChange(e.target.value as FAQCategory | "ทั้งหมด")
                    }
                    size="small"
                    fullWidth
                    sx={{ "& .MuiOutlinedInput-root": { borderRadius: "10px" } }}
                >
                    {CATEGORIES.map((c) => (
                        <MenuItem key={c} value={c}>
                            {c === "ทั้งหมด"
                                ? "ทั้งหมด"
                                : `${c} (${countsByCategory.get(c) ?? 0})`}
                        </MenuItem>
                    ))}
                </TextField>

                <Box className="flex items-end justify-end">
                    <Button
                        variant="outlined"
                        size="small"
                        className="rounded-xl! px-3! py-2!"
                        sx={{ textTransform: "none", minWidth: "auto" }}
                        startIcon={<RestartAltRoundedIcon />}
                        onClick={onReset}
                    >
                        รีเซ็ต
                    </Button>
                </Box>
            </Box>

            <Divider className="my-5! border-slate-200!" />

            <Box className="flex flex-wrap items-center gap-4">
                <Chip
                    size="small"
                    label={`พบ ${filteredCount} รายการ`}
                    variant="outlined"
                    className="border! border-slate-200! bg-slate-900/5! text-slate-700!"
                />
                <Typography className="text-xs text-slate-500">
                    ระบบค้นหาแบบ “ใกล้เคียงความหมาย” รองรับภาษาไทย
                    (พิมพ์คำใกล้เคียงก็หาเจอ)
                </Typography>
            </Box>
        </Box>
    );
}