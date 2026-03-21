"use client";

import * as React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import SaveRoundedIcon from "@mui/icons-material/SaveRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

export default function ProfileActionCard({
  isEditing,
  onStartEdit,
  onSave,
  onCancel,
}: {
  isEditing: boolean;
  onStartEdit: () => void;
  onSave: () => void;
  onCancel: () => void;
}) {
  const router = useRouter();

  return (
    <Box className="rounded-3xl border border-slate-200 bg-white p-5">
      <Typography className="text-base font-bold text-slate-900">
        การดำเนินการ
      </Typography>

      <Box className="mt-4 grid gap-3">
        {!isEditing ? (
          <Button
            fullWidth
            variant="contained"
            startIcon={<EditRoundedIcon />}
            className="rounded-xl! py-2.5! font-semibold!"
            sx={{
              textTransform: "none",
              backgroundColor: "rgb(15 23 42)",
            }}
            onClick={onStartEdit}
          >
            แก้ไขข้อมูล
          </Button>
        ) : (
          <>
            <Button
              fullWidth
              variant="contained"
              startIcon={<SaveRoundedIcon />}
              className="rounded-xl! py-2.5! font-semibold!"
              sx={{
                textTransform: "none",
                backgroundColor: "rgb(15 23 42)",
              }}
              onClick={onSave}
            >
              บันทึกข้อมูล
            </Button>

            <Button
              fullWidth
              variant="outlined"
              startIcon={<CloseRoundedIcon />}
              className="rounded-xl! py-2.5!"
              sx={{ textTransform: "none" }}
              onClick={onCancel}
            >
              ยกเลิก
            </Button>
          </>
        )}

        <Button
          fullWidth
          variant="outlined"
          startIcon={<HomeRoundedIcon />}
          className="rounded-xl! py-2.5!"
          sx={{ textTransform: "none" }}
          onClick={() => router.push("/")}
        >
          กลับหน้าหลัก
        </Button>
      </Box>
    </Box>
  );
}
