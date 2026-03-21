"use client";

import * as React from "react";
import { Box, TextField, Typography } from "@mui/material";

type Props = {
  fullName: string;
  setFullName: (value: string) => void;
  email: string;
  setEmail: (value: string) => void;
  phone: string;
  setPhone: (value: string) => void;
  roundedFieldSX: object;
};

export default function PaymentCustomerForm({
  fullName,
  setFullName,
  email,
  setEmail,
  phone,
  setPhone,
  roundedFieldSX,
}: Props) {
  return (
    <>
      <Typography className="text-sm font-semibold text-slate-900">
        ข้อมูลผู้ชำระเงิน
      </Typography>

      <Box className="mt-4 grid gap-4 sm:grid-cols-2">
        <TextField
          label="ชื่อ-นามสกุล"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          fullWidth
          sx={roundedFieldSX}
        />
        <TextField
          label="เบอร์โทร"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          fullWidth
          sx={roundedFieldSX}
        />
      </Box>

      <Box className="mt-4">
        <TextField
          label="อีเมล"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          sx={roundedFieldSX}
        />
      </Box>
    </>
  );
}
