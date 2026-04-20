"use client";

import * as React from "react";
import { normCarId } from "@/src/utils/car-detail/carDetail.format";
import usePageReady from "@/src/hooks/usePageReady";
import { getCarById } from "@/src/services/cars/cars.api";
import type { Car } from "@/src/services/cars/cars.types";

export default function useCarDetail(carId: string) {
  const ready = usePageReady();

  const id = React.useMemo(() => normCarId(carId), [carId]);
  const [detail, setDetail] = React.useState<Car | null>(null);

  React.useEffect(() => {
    let cancelled = false;

    async function loadCar() {
      if (!id) {
        setDetail(null);
        return;
      }

      try {
        const car = await getCarById(id);
        if (!cancelled) {
          setDetail(car);
        }
      } catch {
        if (!cancelled) {
          setDetail(null);
        }
      }
    }

    loadCar();

    return () => {
      cancelled = true;
    };
  }, [id]);

  return {
    ready,
    id,
    detail,
  };
}
