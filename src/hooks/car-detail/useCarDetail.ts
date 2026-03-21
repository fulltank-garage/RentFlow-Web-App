"use client";

import * as React from "react";
import { getCarDetail } from "@/src/constants/carDetails";
import { normCarId } from "@/src/utils/car-detail/carDetail.format";
import usePageReady from "@/src/hooks/usePageReady";

export default function useCarDetail(carId: string) {
  const ready = usePageReady({ minDelay: 2000 });

  const id = React.useMemo(() => normCarId(carId), [carId]);
  const detail = React.useMemo(() => getCarDetail(id), [id]);

  return {
    ready,
    id,
    detail,
  };
}
