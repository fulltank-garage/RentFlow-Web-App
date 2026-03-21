"use client";

import * as React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { CARS, type Car } from "@/src/constants/cars";
import usePageReady from "@/src/hooks/usePageReady";
import {
  type Method,
  safeParseAddons,
  calcAddonsTotal,
  getCarSubTotal,
} from "@/src/utils/payment/payment.helpers";

export default function usePaymentPage() {
  const params = useSearchParams();
  const router = useRouter();
  const ready = usePageReady({ minDelay: 2000 });

  const bookingId = params.get("bookingId") || "BK-XXXX";
  const carId = params.get("carId") || "";
  const days = Number(params.get("days") || "0") || 0;

  const pickupDate = params.get("pickupDate") || "";
  const returnDate = params.get("returnDate") || "";
  const pickupPoint = params.get("pickupPoint") || "";
  const returnPoint = params.get("returnPoint") || "";
  const pickupTime = params.get("pickupTime") || "";
  const returnTime = params.get("returnTime") || "";
  const amount = Number(params.get("amount") || "0") || 0;

  const addonsRaw = params.get("addons");

  const addonKeys = React.useMemo(
    () => safeParseAddons(addonsRaw),
    [addonsRaw]
  );
  const addonsTotal = React.useMemo(
    () => calcAddonsTotal(addonKeys, days),
    [addonKeys, days]
  );

  const car: Car | undefined = React.useMemo(
    () => CARS.find((c) => c.id === carId),
    [carId]
  );

  const carSubTotal = React.useMemo(
    () => getCarSubTotal(car, days),
    [car, days]
  );

  const carNet = React.useMemo(
    () => Math.max(0, amount - addonsTotal),
    [amount, addonsTotal]
  );

  const carDiscount = React.useMemo(() => {
    if (!car || carSubTotal <= 0) return 0;
    return Math.max(0, carSubTotal - carNet);
  }, [car, carSubTotal, carNet]);

  const discountPct = React.useMemo(() => {
    if (carSubTotal <= 0) return 0;
    return Math.round((carDiscount / carSubTotal) * 100);
  }, [carSubTotal, carDiscount]);

  const [method, setMethod] = React.useState<Method>("promptpay");
  const [fullName, setFullName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [slipFile, setSlipFile] = React.useState<File | null>(null);
  const [done, setDone] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const needSlip = method === "transfer";

  const canPay =
    fullName.trim().length >= 2 &&
    email.trim().includes("@") &&
    phone.trim().length >= 9 &&
    (!needSlip || !!slipFile) &&
    !loading;

  const handleConfirm = React.useCallback(async () => {
    if (!canPay) return;

    setLoading(true);
    try {
      await new Promise((r) => setTimeout(r, 500));
      setDone(true);
      setTimeout(() => router.push("/my-bookings"), 800);
    } finally {
      setLoading(false);
    }
  }, [canPay, router]);

  const roundedFieldSX = React.useMemo(
    () => ({
      "& .MuiOutlinedInput-root": { borderRadius: "12px" },
    }),
    []
  );

  return {
    ready,
    bookingId,
    carId,
    days,
    pickupDate,
    returnDate,
    pickupPoint,
    returnPoint,
    pickupTime,
    returnTime,
    amount,
    addonKeys,
    addonsTotal,
    car,
    carSubTotal,
    carNet,
    carDiscount,
    discountPct,
    method,
    setMethod,
    fullName,
    setFullName,
    email,
    setEmail,
    phone,
    setPhone,
    slipFile,
    setSlipFile,
    done,
    loading,
    canPay,
    handleConfirm,
    roundedFieldSX,
  };
}
