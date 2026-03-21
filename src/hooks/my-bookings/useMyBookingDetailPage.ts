"use client";

import * as React from "react";
import { useParams, useRouter } from "next/navigation";
import usePageReady from "@/src/hooks/usePageReady";

export type BookingStatus = "pending" | "confirmed" | "cancelled";

export type Booking = {
  id: string;
  carName: string;
  pickupDate: string;
  returnDate: string;
  totalPrice: number;
  status: BookingStatus;
  pickupLocation?: string;
  returnLocation?: string;
  customerName?: string;
  phone?: string;
  notes?: string;
};

const SEED: Booking[] = [
  {
    id: "BK-1001",
    carName: "BMW 320d M Sport",
    pickupDate: "2026-03-01",
    returnDate: "2026-03-03",
    totalPrice: 1290 * 2,
    status: "confirmed",
    pickupLocation: "สนามบินสุวรรณภูมิ",
    returnLocation: "สนามบินสุวรรณภูมิ",
    customerName: "Pachara",
    phone: "09x-xxx-xxxx",
    notes: "รับรถช่วงเช้า",
  },
  {
    id: "BK-1002",
    carName: "BMW 330e M Sport",
    pickupDate: "2026-03-02",
    returnDate: "2026-03-04",
    totalPrice: 1490 * 2,
    status: "pending",
    pickupLocation: "เซ็นทรัลลาดพร้าว",
    returnLocation: "เซ็นทรัลลาดพร้าว",
    customerName: "Pachara",
    phone: "09x-xxx-xxxx",
  },
  {
    id: "BK-1003",
    carName: "BMW M3 CS",
    pickupDate: "2026-03-03",
    returnDate: "2026-03-05",
    totalPrice: 1990 * 2,
    status: "confirmed",
    pickupLocation: "สนามบินดอนเมือง",
    returnLocation: "สนามบินดอนเมือง",
    customerName: "Pachara",
    phone: "09x-xxx-xxxx",
  },
  {
    id: "BK-1004",
    carName: "BMW i5 eDrive40 M Sport",
    pickupDate: "2026-03-04",
    returnDate: "2026-03-06",
    totalPrice: 1590 * 2,
    status: "pending",
    pickupLocation: "เซ็นทรัลเวิลด์",
    returnLocation: "เซ็นทรัลเวิลด์",
    customerName: "Pachara",
    phone: "09x-xxx-xxxx",
  },
  {
    id: "BK-1005",
    carName: "BMW i5 M60 xDrive",
    pickupDate: "2026-03-05",
    returnDate: "2026-03-07",
    totalPrice: 1790 * 2,
    status: "confirmed",
    pickupLocation: "สนามบินสุวรรณภูมิ",
    returnLocation: "สนามบินสุวรรณภูมิ",
    customerName: "Pachara",
    phone: "09x-xxx-xxxx",
  },
  {
    id: "BK-1006",
    carName: "BMW i7 xDrive60 M Sport",
    pickupDate: "2026-03-06",
    returnDate: "2026-03-08",
    totalPrice: 1890 * 2,
    status: "pending",
    pickupLocation: "เซ็นทรัลลาดพร้าว",
    returnLocation: "เซ็นทรัลลาดพร้าว",
    customerName: "Pachara",
    phone: "09x-xxx-xxxx",
  },
];

export function priceBreakdown(total: number) {
  const base = Math.round(total * 0.85);
  const insurance = Math.max(0, Math.round(total * 0.1));
  const service = Math.max(0, total - base - insurance);
  return { base, insurance, service, total };
}

export default function useMyBookingDetailPage() {
  const router = useRouter();
  const params = useParams<{ id: string }>();
  const ready = usePageReady({ minDelay: 1000 });

  const id = typeof params?.id === "string" ? params.id : "";
  const [isCheckingAuth, setIsCheckingAuth] = React.useState(true);
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const [openCancel, setOpenCancel] = React.useState(false);
  const [local, setLocal] = React.useState<Booking | null>(null);

  React.useEffect(() => {
    const token =
      typeof window !== "undefined" ? localStorage.getItem("token") : null;

    if (!token) {
      router.replace(
        `/login?redirect=${encodeURIComponent(`/my-bookings/${id}`)}`
      );
      return;
    }

    setIsAuthenticated(true);
    setIsCheckingAuth(false);
  }, [id, router]);

  React.useEffect(() => {
    if (!id) return;
    const found = SEED.find((x) => x.id === id) ?? null;
    setLocal(found);
  }, [id]);

  const canCancel =
    local?.status === "pending" || local?.status === "confirmed";

  const pricing = React.useMemo(
    () => priceBreakdown(local?.totalPrice ?? 0),
    [local?.totalPrice]
  );

  const doCancelMock = React.useCallback(() => {
    setLocal((prev) => (prev ? { ...prev, status: "cancelled" } : prev));
    setOpenCancel(false);
  }, []);

  return {
    ready,
    isCheckingAuth,
    isAuthenticated,
    id,
    local,
    openCancel,
    setOpenCancel,
    canCancel,
    pricing,
    doCancelMock,
    router,
  };
}
