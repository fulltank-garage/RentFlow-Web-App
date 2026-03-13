import { Suspense } from "react";
import Login from "@/src/auth/Login";
import AuthCardSkeleton from "@/src/components/auth/AuthCardSkeleton";

export default function Page() {
  return (
    <Suspense fallback={<AuthCardSkeleton />}>
      <Login />
    </Suspense>
  );
}