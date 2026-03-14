"use client";

import * as React from "react";
import {
    Box,
    Card,
    CardContent,
    Typography,
    TextField,
    Button,
} from "@mui/material";
import SmartToyRoundedIcon from "@mui/icons-material/SmartToyRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import RestartAltRoundedIcon from "@mui/icons-material/RestartAltRounded";
import type { FAQItem } from "@/src/constants/faq";

type SuggestionItem = {
    it: FAQItem;
    s: number;
};

type Props = {
    botQ: string;
    onBotQChange: (value: string) => void;
    onClear: () => void;
    suggestions: SuggestionItem[];
    onSelectSuggestion: (item: FAQItem) => void;
};

export default function HelpChatbotCard({
    botQ,
    onBotQChange,
    onClear,
    suggestions,
    onSelectSuggestion,
}: Props) {
    return (
        <Box className="mt-6">
            <Card
                elevation={0}
                className="rounded-2xl! border border-slate-200 bg-white"
            >
                <CardContent className="p-4!">
                    <Box className="flex items-center gap-2">
                        <Box className="grid h-10 w-10 place-items-center rounded-xl! border border-slate-200 bg-slate-50">
                            <SmartToyRoundedIcon fontSize="small" />
                        </Box>
                        <Box>
                            <Typography className="text-sm font-semibold text-slate-900">
                                ถามบอท (แนะนำคำตอบอัตโนมัติ)
                            </Typography>
                            <Typography className="text-xs text-slate-500">
                                ลองพิมพ์: “คืนช้า”, “เติมน้ำมัน”, “สัตว์เลี้ยง”, “มัดจำ”,
                                “ยกเลิก”
                            </Typography>
                        </Box>
                    </Box>

                    <Box className="mt-4 grid gap-4 md:grid-cols-[1fr_auto]">
                        <TextField
                            value={botQ}
                            onChange={(e) => onBotQChange(e.target.value)}
                            placeholder="พิมพ์คำถามของคุณ…"
                            size="small"
                            fullWidth
                            InputProps={{
                                startAdornment: (
                                    <Box className="mr-2 text-slate-500">
                                        <SearchRoundedIcon fontSize="small" />
                                    </Box>
                                ),
                            }}
                            sx={{ "& .MuiOutlinedInput-root": { borderRadius: "10px" } }}
                        />

                        <Button
                            variant="outlined"
                            size="small"
                            className="rounded-xl! px-4!"
                            sx={{ textTransform: "none", minWidth: "auto" }}
                            onClick={onClear}
                            startIcon={<RestartAltRoundedIcon />}
                        >
                            ล้าง
                        </Button>
                    </Box>

                    {botQ.trim() ? (
                        <Box className="mt-4">
                            <Typography className="text-xs font-semibold text-slate-700">
                                คำตอบที่น่าจะใช่
                            </Typography>

                            <Box className="mt-2 grid gap-2 md:grid-cols-3">
                                {suggestions.map(({ it, s }) => (
                                    <Button
                                        key={it.id}
                                        variant="outlined"
                                        className="rounded-xl! justify-start text-left!"
                                        sx={{ textTransform: "none" }}
                                        onClick={() => onSelectSuggestion(it)}
                                    >
                                        <Box className="flex flex-col items-start gap-1">
                                            <Typography className="text-xs text-slate-500">
                                                {it.category} • {Math.round(s * 100)}%
                                            </Typography>
                                            <Typography className="text-sm font-semibold text-slate-900">
                                                {it.q}
                                            </Typography>
                                        </Box>
                                    </Button>
                                ))}
                            </Box>
                        </Box>
                    ) : null}
                </CardContent>
            </Card>
        </Box>
    );
}