"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import usePageReady from "@/src/hooks/usePageReady";

export type BookingStatus = "pending" | "confirmed" | "cancelled";

export type Booking = {
  id: string;
  carName: string;
  pickupDate: string;
  returnDate: string;
  totalPrice: number;
  status: BookingStatus;
};

const SEED: Booking[] = [
  {
    id: "BK-1001",
    carName: "BMW 320d M Sport",
    pickupDate: "2026-03-01",
    returnDate: "2026-03-03",
    totalPrice: 1290 * 2,
    status: "confirmed",
  },
  {
    id: "BK-1002",
    carName: "BMW 330e M Sport",
    pickupDate: "2026-03-02",
    returnDate: "2026-03-04",
    totalPrice: 1490 * 2,
    status: "pending",
  },
  {
    id: "BK-1003",
    carName: "BMW M3 CS",
    pickupDate: "2026-03-03",
    returnDate: "2026-03-05",
    totalPrice: 1990 * 2,
    status: "confirmed",
  },
  {
    id: "BK-1004",
    carName: "BMW i5 eDrive40 M Sport",
    pickupDate: "2026-03-04",
    returnDate: "2026-03-06",
    totalPrice: 1590 * 2,
    status: "pending",
  },
  {
    id: "BK-1005",
    carName: "BMW i5 M60 xDrive",
    pickupDate: "2026-03-05",
    returnDate: "2026-03-07",
    totalPrice: 1790 * 2,
    status: "confirmed",
  },
  {
    id: "BK-1006",
    carName: "BMW i7 xDrive60 M Sport",
    pickupDate: "2026-03-06",
    returnDate: "2026-03-08",
    totalPrice: 1890 * 2,
    status: "pending",
  },
];

export default function useMyBookingsPage() {
  const router = useRouter();
  const ready = usePageReady({ minDelay: 1200 });

  const [isCheckingAuth, setIsCheckingAuth] = React.useState(true);
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  const [q, setQ] = React.useState("");
  const [status, setStatus] = React.useState<BookingStatus | "all">("all");

  React.useEffect(() => {
    const token =
      typeof window !== "undefined" ? localStorage.getItem("token") : null;

    if (!token) {
      router.replace("/login?redirect=/my-bookings");
      return;
    }

    setIsAuthenticated(true);
    setIsCheckingAuth(false);
  }, [router]);

  const data = React.useMemo(() => {
    return SEED.filter((b) => {
      const s = q.trim().toLowerCase();

      const matchQ =
        !s ||
        b.id.toLowerCase().includes(s) ||
        b.carName.toLowerCase().includes(s);

      const matchS = status === "all" ? true : b.status === status;

      return matchQ && matchS;
    });
  }, [q, status]);

  const handleReset = React.useCallback(() => {
    setQ("");
    setStatus("all");
  }, []);

  return {
    ready,
    isCheckingAuth,
    isAuthenticated,
    q,
    setQ,
    status,
    setStatus,
    data,
    handleReset,
  };
}
