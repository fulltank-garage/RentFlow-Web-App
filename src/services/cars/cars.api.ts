import api from "@/src/lib/axios";
import type { Car } from "./cars.types";

export type SortKey = "price_asc" | "price_desc";

export type GetCarsParams = {
  q?: string;
  type?: string;
  location?: string;
  pickupDate?: string;
  returnDate?: string;
  sort?: SortKey;
};

export type GetCarsResponse = {
  items: Car[];
  total: number;
};

type CarsApiResponse = {
  items: Array<Partial<Car> & { id: string; name: string }>;
  total: number;
};

function normalizeCar(raw: Partial<Car> & { id: string; name: string }): Car {
  const imageUrl = raw.imageUrl || raw.image || "";

  return {
    id: raw.id,
    name: raw.name,
    brand: raw.brand || "",
    model: raw.model || "",
    year: raw.year || 0,
    type: (raw.type || "Sedan") as Car["type"],
    seats: raw.seats || 0,
    transmission: (raw.transmission || "Auto") as Car["transmission"],
    fuel: (raw.fuel || "Gasoline") as Car["fuel"],
    pricePerDay: raw.pricePerDay || 0,
    image: imageUrl || undefined,
    imageUrl,
    grade: raw.grade,
    images: raw.images || (imageUrl ? [imageUrl] : undefined),
    description: raw.description,
    locationId: raw.locationId,
    isAvailable: raw.isAvailable ?? true,
    createdAt: raw.createdAt || "",
    updatedAt: raw.updatedAt || "",
  };
}

export async function getCars(
  params?: GetCarsParams
): Promise<GetCarsResponse> {
  const res = await api.get<CarsApiResponse>("/cars", {
    params: {
      q: params?.q || undefined,
      type: params?.type && params.type !== "all" ? params.type : undefined,
      location: params?.location || undefined,
      pickupDate: params?.pickupDate || undefined,
      returnDate: params?.returnDate || undefined,
      sort: params?.sort || undefined,
    },
  });

  return {
    items: (res.data.items ?? []).map(normalizeCar),
    total: res.data.total ?? 0,
  };
}

export async function getCarById(carId: string): Promise<Car | null> {
  const { items } = await getCars();
  return items.find((car) => car.id === carId) ?? null;
}
