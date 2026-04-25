"use client";

import * as React from "react";
import { useSearchParams } from "next/navigation";
import { useRentFlowRealtimeRefresh } from "@/src/hooks/realtime/useRentFlowRealtimeRefresh";
import { normCarId } from "@/src/utils/car-detail/carDetail.format";
import usePageReady from "@/src/hooks/usePageReady";
import { useRentFlowSiteMode } from "@/src/hooks/useRentFlowSiteMode";
import { getCarById } from "@/src/services/cars/cars.service";
import type { Car } from "@/src/services/cars/cars.types";

export default function useCarDetail(carId: string) {
  const ready = usePageReady();
  const searchParams = useSearchParams();
  const siteMode = useRentFlowSiteMode();
  const tenantSlug = searchParams.get("tenant") || undefined;

  const id = React.useMemo(() => normCarId(carId), [carId]);
  const [detail, setDetail] = React.useState<Car | null>(null);
  const [reloadTick, setReloadTick] = React.useState(0);

  const refreshFromRealtime = React.useCallback(
    (event: { entityId?: string; data?: Record<string, unknown> }) => {
      const eventCarId = String(event.data?.carId || event.entityId || "");
      if (!eventCarId || eventCarId === id) {
        setReloadTick((current) => current + 1);
      }
    },
    [id]
  );

  useRentFlowRealtimeRefresh({
    events: [
      "booking.created",
      "booking.updated",
      "booking.cancelled",
      "car.changed",
      "availability.changed",
      "tenant.updated",
    ],
    onRefresh: refreshFromRealtime,
    tenantSlug,
    marketplace: siteMode === "marketplace" && !tenantSlug,
  });

  React.useEffect(() => {
    let cancelled = false;

    async function loadCar() {
      if (!id) {
        setDetail(null);
        return;
      }

      try {
        const car = await getCarById(id, {
          marketplace: siteMode === "marketplace",
          tenantSlug,
        });
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
  }, [id, reloadTick, siteMode, tenantSlug]);

  return {
    ready,
    id,
    detail,
  };
}
