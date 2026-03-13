import { Suspense } from "react";
import Register from "@/src/auth/Register";
import AuthCardSkeleton from "@/src/components/auth/AuthCardSkeleton";

export default function Page() {
  return (
    <Suspense fallback={<AuthCardSkeleton />}>
      <Register />
    </Suspense>
  );
}