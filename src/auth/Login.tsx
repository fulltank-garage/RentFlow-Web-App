"use client";

import * as React from "react";
import Link from "next/link";
import AuthCard from "@/src/auth/AuthCard";

export default function LoginPage() {
  return (
    <AuthCard
      title="เข้าสู่ระบบ"
      subtitle="ดำเนินการต่อด้วยบัญชี Google ของคุณ"
      successMessage="เข้าสู่ระบบสำเร็จ กำลังพาไปหน้าหลัก..."
      authErrorMessage="เข้าสู่ระบบด้วย Google ไม่สำเร็จ"
      submitErrorMessage="เข้าสู่ระบบด้วย Google ไม่สำเร็จ"
      agreementText={
        <>
          การดำเนินการต่อถือว่าคุณยอมรับ{" "}
          <Link
            href="/terms"
            className="font-semibold text-slate-900 underline-offset-2 hover:underline"
          >
            เงื่อนไขการใช้งาน
          </Link>{" "}
          และ{" "}
          <Link
            href="/privacy"
            className="font-semibold text-slate-900 underline-offset-2 hover:underline"
          >
            นโยบายความเป็นส่วนตัว
          </Link>
        </>
      }
    />
  );
}