import type { AddonKey } from "@/src/constants/booking.addons";
import { ADDONS } from "@/src/constants/booking.addons";

export function calcAddonsTotal(
  selected: Record<AddonKey, boolean>,
  days: number
) {
  let total = 0;

  for (const addon of ADDONS) {
    if (!selected[addon.key]) continue;
    total += addon.pricing === "perDay" ? addon.price * Math.max(1, days) : addon.price;
  }

  return total;
}

export function getSelectedAddonTitles(selected: Record<AddonKey, boolean>) {
  return ADDONS.filter((addon) => selected[addon.key]).map((addon) => addon.title);
}
