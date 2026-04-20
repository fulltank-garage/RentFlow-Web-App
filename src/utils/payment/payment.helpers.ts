export type Method = "promptpay" | "card" | "transfer";

export type AddonKey = "carSeat" | "mountainDrive" | "returnOtherBranch";

export type Addon = {
  key: AddonKey;
  title: string;
  pricing: "perDay" | "perTrip";
  price: number;
};

export const ADDONS: Addon[] = [
  { key: "carSeat", title: "เพิ่มคาร์ซีท", pricing: "perDay", price: 150 },
  {
    key: "mountainDrive",
    title: "อนุญาตขับขึ้นเขา/ขึ้นดอย",
    pricing: "perTrip",
    price: 300,
  },
  {
    key: "returnOtherBranch",
    title: "คืนรถต่างสาขา",
    pricing: "perTrip",
    price: 500,
  },
];

export function safeParseAddons(raw: string | null): AddonKey[] {
  if (!raw) return [];

  try {
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];

    const allowed = new Set<AddonKey>([
      "carSeat",
      "mountainDrive",
      "returnOtherBranch",
    ]);

    return parsed.filter(
      (x) => typeof x === "string" && allowed.has(x as AddonKey)
    ) as AddonKey[];
  } catch {
    return [];
  }
}

export function calcAddonsTotal(keys: AddonKey[], days: number) {
  let total = 0;

  for (const key of keys) {
    const addon = ADDONS.find((x) => x.key === key);
    if (!addon) continue;

    total +=
      addon.pricing === "perDay"
        ? addon.price * Math.max(1, days)
        : addon.price;
  }

  return total;
}

export function getCarSubTotal(
  car: { pricePerDay: number } | undefined,
  days: number
) {
  if (!car || days <= 0) return 0;
  return car.pricePerDay * days;
}
