"use client";

import * as React from "react";
import {
  Box,
  Container,
  Typography,
  Avatar,
  Chip,
  Card,
  CardContent,
  Stack,
} from "@mui/material";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import DriveEtaRoundedIcon from "@mui/icons-material/DriveEtaRounded";
import GoogleIcon from "@mui/icons-material/Google";
import VerifiedRoundedIcon from "@mui/icons-material/VerifiedRounded";

import { useProfilePage } from "@/src/hooks/profile/useProfilePage";
import ProfileSectionCard from "@/src/components/profile/ProfileSectionCard";
import { InfoField, EditField } from "@/src/components/profile/ProfileField";
import ProfileActionCard from "@/src/components/profile/ProfileActionCard";
import ProfileAccountStatusCard from "@/src/components/profile/ProfileAccountStatusCard";

export default function ProfilePage() {
  const {
    profile,
    draft,
    isEditing,
    startEdit,
    cancelEdit,
    saveEdit,
    updateDraft,
  } = useProfilePage();

  return (
    <Box className="min-h-screen">
      <Container maxWidth="lg" className="py-12">
        <Card
          elevation={0}
          className="overflow-hidden rounded-3xl! border border-slate-200 bg-white"
          sx={{ boxShadow: "none" }}
        >
          <Box className="bg-linear-to-br from-slate-900 via-slate-800 to-slate-700 px-6 py-8 text-white sm:px-8">
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={3}
              alignItems={{ xs: "center", sm: "center" }}
            >
              <Avatar
                src={profile.avatarUrl || undefined}
                sx={{ width: 88, height: 88 }}
                className="border-4 border-white/20 bg-white! text-3xl! font-bold! text-slate-900!"
              >
                {profile.displayName?.[0]?.toUpperCase() || "P"}
              </Avatar>

              <Box className="min-w-0 flex-1 text-center sm:text-left">
                <Typography className="text-2xl font-bold text-white sm:text-3xl">
                  {profile.displayName}
                </Typography>

                <Box className="mt-3 flex flex-wrap items-center justify-center gap-2 sm:justify-start">
                  <Chip
                    size="small"
                    icon={<GoogleIcon fontSize="small" />}
                    label={profile.provider}
                    className="bg-white/12! text-white!"
                    sx={{
                      "& .MuiChip-icon": { color: "white" },
                      borderRadius: "999px",
                    }}
                  />

                  {profile.emailVerified ? (
                    <Chip
                      size="small"
                      icon={<VerifiedRoundedIcon fontSize="small" />}
                      label="ยืนยันแล้ว"
                      className="bg-emerald-500/18! text-white!"
                      sx={{
                        "& .MuiChip-icon": { color: "white" },
                        borderRadius: "999px",
                      }}
                    />
                  ) : null}
                </Box>
              </Box>
            </Stack>
          </Box>

          <CardContent className="p-5! sm:p-6!">
            <Box className="grid gap-6 lg:grid-cols-12">
              <Box className="space-y-6 lg:col-span-8">
                <ProfileSectionCard
                  title="ข้อมูลบัญชี"
                  icon={<EmailRoundedIcon fontSize="small" />}
                >
                  {isEditing ? (
                    <Box className="grid gap-3 sm:grid-cols-2">
                      <EditField
                        label="ชื่อที่แสดง"
                        value={draft.displayName}
                        onChange={updateDraft("displayName")}
                      />
                      <EditField
                        label="อีเมล"
                        value={draft.email}
                        disabled
                        onChange={() => {}}
                      />
                      <EditField
                        label="ผู้ให้บริการ"
                        value={draft.provider}
                        disabled
                        onChange={() => {}}
                      />
                      <EditField
                        label="สถานะอีเมล"
                        value={
                          draft.emailVerified ? "ยืนยันแล้ว" : "ยังไม่ยืนยัน"
                        }
                        disabled
                        onChange={() => {}}
                      />
                    </Box>
                  ) : (
                    <Box className="grid gap-3 sm:grid-cols-2">
                      <InfoField
                        label="ชื่อที่แสดง"
                        value={profile.displayName}
                      />
                      <InfoField label="อีเมล" value={profile.email} />
                      <InfoField
                        label="ผู้ให้บริการ"
                        value={profile.provider}
                      />
                      <InfoField
                        label="สถานะอีเมล"
                        value={
                          profile.emailVerified ? "ยืนยันแล้ว" : "ยังไม่ยืนยัน"
                        }
                      />
                    </Box>
                  )}
                </ProfileSectionCard>

                <ProfileSectionCard
                  title="ข้อมูลส่วนตัว"
                  icon={<PersonRoundedIcon fontSize="small" />}
                >
                  {isEditing ? (
                    <Box className="grid gap-3 sm:grid-cols-2">
                      <EditField
                        label="ชื่อจริง"
                        value={draft.firstName}
                        onChange={updateDraft("firstName")}
                      />
                      <EditField
                        label="นามสกุล"
                        value={draft.lastName}
                        onChange={updateDraft("lastName")}
                      />
                      <EditField
                        label="เบอร์โทร"
                        value={draft.phone}
                        placeholder="08x-xxx-xxxx"
                        onChange={updateDraft("phone")}
                      />
                      <EditField
                        label="วันเกิด"
                        type="date"
                        value={draft.birthDate}
                        onChange={updateDraft("birthDate")}
                      />
                    </Box>
                  ) : (
                    <Box className="grid gap-3 sm:grid-cols-2">
                      <InfoField label="ชื่อจริง" value={profile.firstName} />
                      <InfoField label="นามสกุล" value={profile.lastName} />
                      <InfoField label="เบอร์โทร" value={profile.phone} />
                      <InfoField label="วันเกิด" value={profile.birthDate} />
                    </Box>
                  )}
                </ProfileSectionCard>

                <ProfileSectionCard
                  title="ข้อมูลการเช่ารถ"
                  icon={<DriveEtaRoundedIcon fontSize="small" />}
                >
                  {isEditing ? (
                    <Box className="grid gap-3 sm:grid-cols-2">
                      <EditField
                        label="เลขบัตรประชาชน"
                        value={draft.nationalId}
                        onChange={updateDraft("nationalId")}
                      />
                      <EditField
                        label="เลขใบขับขี่"
                        value={draft.licenseNo}
                        onChange={updateDraft("licenseNo")}
                      />
                      <EditField
                        label="วันหมดอายุใบขับขี่"
                        type="date"
                        value={draft.licenseExpiry}
                        onChange={updateDraft("licenseExpiry")}
                      />
                    </Box>
                  ) : (
                    <Box className="grid gap-3 sm:grid-cols-2">
                      <InfoField
                        label="เลขบัตรประชาชน"
                        value={profile.nationalId}
                      />
                      <InfoField
                        label="เลขใบขับขี่"
                        value={profile.licenseNo}
                      />
                      <InfoField
                        label="วันหมดอายุใบขับขี่"
                        value={profile.licenseExpiry}
                      />
                    </Box>
                  )}
                </ProfileSectionCard>
              </Box>

              <Box className="space-y-6 lg:col-span-4">
                <ProfileActionCard
                  isEditing={isEditing}
                  onStartEdit={startEdit}
                  onSave={saveEdit}
                  onCancel={cancelEdit}
                />

                <ProfileAccountStatusCard
                  emailVerified={profile.emailVerified}
                />
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}
