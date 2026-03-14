"use client";

import * as React from "react";
import {
    Box,
    Card,
    CardContent,
    Typography,
    TextField,
    Button,
    Stack,
    Alert,
    Divider,
    MenuItem,
} from "@mui/material";
import { TOPICS, type Topic } from "@/src/components/contact/contactTypes";
import {
    isEmailLike,
    isBookingIdLike,
    contactFieldSX,
} from "@/src/components/contact/contactUtils";

export default function ContactFormCard() {
    const [topic, setTopic] = React.useState<Topic>("สอบถามการจอง");
    const [bookingId, setBookingId] = React.useState("");

    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [message, setMessage] = React.useState("");

    const [ok, setOk] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    const canSubmit =
        name.trim().length >= 2 &&
        isEmailLike(email) &&
        message.trim().length >= 10 &&
        isBookingIdLike(bookingId);

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!canSubmit) return;

        setLoading(true);

        await new Promise((r) => setTimeout(r, 700));

        setLoading(false);
        setOk(true);

        setTopic("สอบถามการจอง");
        setBookingId("");
        setName("");
        setEmail("");
        setMessage("");
    };

    return (
        <Card
            elevation={0}
            sx={{ boxShadow: "none" }}
            className="rounded-2xl! border border-slate-200 bg-white"
        >
            <CardContent className="p-4!">
                {ok ? (
                    <Alert
                        className="mb-4"
                        severity="success"
                        onClose={() => setOk(false)}
                    >
                        ส่งข้อความเรียบร้อย (mock) — ทีมงานจะตอบกลับในเวลาทำการ
                    </Alert>
                ) : null}

                <Typography className="text-sm font-semibold text-slate-900">
                    ส่งข้อความหาเรา
                </Typography>
                <Typography className="mt-1 text-sm text-slate-600">
                    กรุณากรอกข้อมูลให้ครบ เพื่อให้ช่วยได้เร็วขึ้น
                </Typography>

                <Divider className="my-5! border-slate-200!" />

                <Box component="form" onSubmit={onSubmit} className="grid gap-4">
                    <Box className="grid gap-4 sm:grid-cols-2">
                        <TextField
                            select
                            label="หัวข้อ"
                            value={topic}
                            onChange={(e) => setTopic(e.target.value as Topic)}
                            fullWidth
                            size="small"
                            sx={contactFieldSX}
                        >
                            {TOPICS.map((t) => (
                                <MenuItem key={t} value={t}>
                                    {t}
                                </MenuItem>
                            ))}
                        </TextField>

                        <TextField
                            label="รหัสการจอง (ถ้ามี)"
                            value={bookingId}
                            onChange={(e) => setBookingId(e.target.value)}
                            fullWidth
                            size="small"
                            sx={contactFieldSX}
                            helperText={
                                bookingId.trim() && bookingId.trim().length < 4
                                    ? "รหัสการจองสั้นเกินไป"
                                    : "เว้นว่างได้"
                            }
                            error={!!bookingId.trim() && bookingId.trim().length < 4}
                        />
                    </Box>

                    <Box className="grid gap-4 sm:grid-cols-2">
                        <TextField
                            label="ชื่อ"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            fullWidth
                            size="small"
                            sx={contactFieldSX}
                        />
                        <TextField
                            label="อีเมล"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            fullWidth
                            size="small"
                            sx={contactFieldSX}
                            error={!!email.trim() && !isEmailLike(email)}
                            helperText={
                                email.trim() && !isEmailLike(email)
                                    ? "รูปแบบอีเมลไม่ถูกต้อง"
                                    : " "
                            }
                        />
                    </Box>

                    <TextField
                        label="ข้อความ"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        fullWidth
                        multiline
                        minRows={5}
                        sx={contactFieldSX}
                        placeholder="เช่น ต้องการเปลี่ยนวันรับรถ / คืนรถช้า / ชำระเงินแล้วสถานะไม่ขึ้น ฯลฯ"
                        helperText={
                            message.trim().length > 0 && message.trim().length < 10
                                ? "อย่างน้อย 10 ตัวอักษร"
                                : " "
                        }
                        error={message.trim().length > 0 && message.trim().length < 10}
                    />

                    <Stack
                        direction="row"
                        spacing={1.5}
                        className="flex-wrap items-center"
                    >
                        <Button
                            type="submit"
                            variant="contained"
                            disabled={!canSubmit || loading}
                            className="rounded-xl! px-5! py-2.5! font-semibold!"
                            sx={{
                                textTransform: "none",
                                backgroundColor: "rgb(15 23 42)",
                            }}
                        >
                            {loading ? "กำลังส่ง..." : "ส่งข้อความ"}
                        </Button>
                    </Stack>
                </Box>
            </CardContent>
        </Card>
    );
}