"use client";

import * as React from "react";
import { Box, TextField, Typography } from "@mui/material";

function FieldShell({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <Box className="rounded-2xl border border-slate-200 bg-white px-4 py-4">
      <Typography className="mb-1.5 text-[11px] font-medium uppercase tracking-[0.08em] text-slate-400">
        {label}
      </Typography>
      {children}
    </Box>
  );
}

export function InfoField({ label, value }: { label: string; value: string }) {
  return (
    <FieldShell label={label}>
      <Typography className="min-h-7.5 wrap-break-word text-base font-bold leading-7 text-slate-900">
        {value || "-"}
      </Typography>
    </FieldShell>
  );
}

export function EditField({
  label,
  value,
  onChange,
  type = "text",
  disabled = false,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: React.InputHTMLAttributes<unknown>["type"];
  disabled?: boolean;
  placeholder?: string;
}) {
  return (
    <FieldShell label={label}>
      <TextField
        fullWidth
        variant="standard"
        value={value}
        type={type}
        disabled={disabled}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        InputLabelProps={type === "date" ? { shrink: true } : undefined}
        InputProps={{
          disableUnderline: true,
        }}
        sx={{
          "& .MuiInputBase-root": {
            minHeight: "30px",
            alignItems: "center",
            fontSize: "1rem",
            fontWeight: 700,
            color: "rgb(15 23 42)",
            lineHeight: 1.75,
          },
          "& .MuiInputBase-input": {
            padding: 0,
          },
          "& .MuiInputBase-input::placeholder": {
            color: "rgb(148 163 184)",
            opacity: 1,
            fontWeight: 500,
          },
          "& .Mui-disabled": {
            WebkitTextFillColor: "rgb(15 23 42)",
            opacity: 1,
          },
        }}
      />
    </FieldShell>
  );
}
