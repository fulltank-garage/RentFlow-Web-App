"use client";

import * as React from "react";
import { subscribeRentFlowRealtime } from "@/src/services/realtime/realtime.service";
import type {
  RentFlowRealtimeEvent,
  RentFlowRealtimeEventType,
} from "@/src/services/realtime/realtime.types";

type Options = {
  events: RentFlowRealtimeEventType[];
  onRefresh: (event: RentFlowRealtimeEvent) => void;
  tenantSlug?: string;
  marketplace?: boolean;
  enabled?: boolean;
};

export function useRentFlowRealtimeRefresh({
  events,
  onRefresh,
  tenantSlug,
  marketplace,
  enabled = true,
}: Options) {
  const eventKey = events.join("|");

  React.useEffect(() => {
    if (!enabled) return;

    const allowedEvents = new Set(eventKey.split("|").filter(Boolean));
    return subscribeRentFlowRealtime({
      app: "storefront",
      tenantSlug,
      marketplace,
      onEvent(event) {
        if (allowedEvents.has(event.type as RentFlowRealtimeEventType)) {
          onRefresh(event);
        }
      },
    });
  }, [enabled, eventKey, marketplace, onRefresh, tenantSlug]);
}

