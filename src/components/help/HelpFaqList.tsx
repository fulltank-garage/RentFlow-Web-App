"use client";

import * as React from "react";
import {
    Box,
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Chip,
} from "@mui/material";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import type { FAQItem } from "@/src/constants/faq";
import { HighlightText } from "./HelpSearchUtils";

type Props = {
    items: FAQItem[];
    expanded: string | false;
    query: string;
    onExpandedChange: (value: string | false) => void;
};

export default function HelpFaqList({
    items,
    expanded,
    query,
    onExpandedChange,
}: Props) {
    return (
        <Box className="mt-6 space-y-4">
            {items.length === 0 ? (
                <Box className="rounded-2xl border border-slate-200 bg-slate-50 p-10 text-center">
                    <Typography className="text-sm font-semibold text-slate-900">
                        ไม่พบคำถามที่ตรงกับคำค้นหา
                    </Typography>
                    <Typography className="mt-1 text-sm text-slate-600">
                        ลองเปลี่ยนคำค้น หรือเปลี่ยนหมวดหมู่
                    </Typography>
                </Box>
            ) : (
                items.map((x) => (
                    <Accordion
                        id={`faq-${x.id}`}
                        key={x.id}
                        expanded={expanded === x.id}
                        onChange={(_, isExpanded) =>
                            onExpandedChange(isExpanded ? x.id : false)
                        }
                        elevation={0}
                        disableGutters
                        className="rounded-2xl! border border-slate-200! bg-white!"
                        sx={{ "&:before": { display: "none" } }}
                    >
                        <AccordionSummary expandIcon={<ExpandMoreRoundedIcon />}>
                            <Box className="flex flex-col gap-2">
                                <Box className="flex flex-wrap items-center gap-4">
                                    <Chip
                                        size="small"
                                        label={x.category}
                                        variant="outlined"
                                        className="border! border-slate-200! bg-slate-900/5! text-slate-700!"
                                    />
                                    <Typography className="text-sm font-semibold text-slate-900">
                                        <HighlightText text={x.q} query={query} />
                                    </Typography>
                                </Box>

                                {x.tags?.length ? (
                                    <Typography className="text-xs text-slate-500">
                                        แท็ก:{" "}
                                        <HighlightText text={x.tags.join(", ")} query={query} />
                                    </Typography>
                                ) : null}
                            </Box>
                        </AccordionSummary>

                        <AccordionDetails>
                            <Typography className="text-sm leading-relaxed text-slate-600">
                                <HighlightText text={x.a} query={query} />
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                ))
            )}
        </Box>
    );
}