"use client";

import * as React from "react";
import Image from "next/image";
import { Box, Typography, TextField, MenuItem, Button } from "@mui/material";
import UploadFileRoundedIcon from "@mui/icons-material/UploadFileRounded";
import type { Method } from "@/src/utils/payment/payment.helpers";
import { formatTHB } from "@/src/constants/money";

type Props = {
  method: Method;
  setMethod: (value: Method) => void;
  amount: number;
  slipFile: File | null;
  setSlipFile: (file: File | null) => void;
  roundedFieldSX: object;
};

export default function PaymentMethodSection({
  method,
  setMethod,
  amount,
  slipFile,
  setSlipFile,
  roundedFieldSX,
}: Props) {
  return (
    <>
      <Typography className="text-sm font-semibold text-slate-900">
        วิธีชำระเงิน
      </Typography>

      <Box className="mt-4">
        <TextField
          select
          label="เลือกวิธี"
          value={method}
          onChange={(e) => setMethod(e.target.value as Method)}
          fullWidth
          sx={roundedFieldSX}
        >
          <MenuItem value="promptpay">PromptPay QR</MenuItem>
          <MenuItem value="card">บัตรเครดิต/เดบิต</MenuItem>
          <MenuItem value="transfer">โอนผ่านธนาคาร</MenuItem>
        </TextField>
      </Box>

      <Box className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-4">
        {method === "promptpay" ? (
          <Box className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <Box className="flex flex-col gap-1.5">
              <Typography className="text-sm font-semibold text-slate-900">
                สแกนเพื่อชำระเงิน
              </Typography>
              <Typography className="text-sm text-slate-600">
                จำนวนเงิน:{" "}
                <span className="font-semibold text-slate-900">
                  {formatTHB(amount)}
                </span>
              </Typography>
            </Box>

            <Box className="relative h-36 w-36 overflow-hidden rounded-xl border border-slate-200 bg-white">
              <Image
                src="/QR-CODE.jpg"
                alt="PromptPay QR"
                fill
                className="object-contain p-2"
              />
            </Box>
          </Box>
        ) : null}

        {method === "card" ? (
          <Box className="grid gap-4 sm:grid-cols-2">
            <TextField
              label="หมายเลขบัตร"
              placeholder="1234 5678 9012 3456"
              fullWidth
              sx={roundedFieldSX}
            />
            <TextField
              label="ชื่อบนบัตร"
              placeholder="NAME SURNAME"
              fullWidth
              sx={roundedFieldSX}
            />
            <TextField
              label="หมดอายุ (MM/YY)"
              placeholder="12/30"
              fullWidth
              sx={roundedFieldSX}
            />
            <TextField
              label="CVV"
              placeholder="123"
              fullWidth
              sx={roundedFieldSX}
            />
            <Typography className="text-xs text-slate-500 sm:col-span-2">
              * Production จริงควรใช้ Stripe/Omise และไม่เก็บข้อมูลบัตรเอง
            </Typography>
          </Box>
        ) : null}

        {method === "transfer" ? (
          <Box className="grid gap-4">
            <Box className="rounded-xl border border-slate-200 bg-white p-4">
              <Box className="flex flex-col gap-1.5">
                <Typography className="text-sm font-semibold text-slate-900">
                  โอนเข้าบัญชี
                </Typography>
                <Typography className="text-sm text-slate-600">
                  ธนาคาร: กสิกรไทย • เลขบัญชี: 123-4-56789-0 • ชื่อบัญชี:
                  RentFlow Co.,Ltd.
                </Typography>
                <Typography className="text-sm text-slate-600">
                  จำนวนเงิน:{" "}
                  <span className="font-semibold text-slate-900">
                    {formatTHB(amount)}
                  </span>
                </Typography>
              </Box>
            </Box>

            <Button
              component="label"
              variant="outlined"
              className="rounded-xl!"
              startIcon={<UploadFileRoundedIcon />}
            >
              {slipFile ? "เปลี่ยนไฟล์สลิป" : "แนบสลิปโอนเงิน"}
              <input
                type="file"
                hidden
                accept="image/*"
                onChange={(e) => setSlipFile(e.target.files?.[0] ?? null)}
              />
            </Button>

            {slipFile ? (
              <Typography className="text-xs text-slate-600">
                ไฟล์:{" "}
                <span className="font-semibold text-slate-900">
                  {slipFile.name}
                </span>
              </Typography>
            ) : (
              <Typography className="text-xs text-slate-500">
                * จำเป็นต้องแนบสลิปเพื่อยืนยัน
              </Typography>
            )}
          </Box>
        ) : null}
      </Box>
    </>
  );
}
