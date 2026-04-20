import api from "@/src/lib/axios";
import type { ApiResponse } from "../types/types";
import type {
  Car,
  CarImageUploadItem,
  CarImagesUploadResponse,
} from "./cars.types";

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

type RawCarImageUploadItem = Omit<CarImageUploadItem, "imageUrl"> & {
  imageUrl?: string;
};

function resolveApiAssetUrl(value?: string) {
  const rawValue = value?.trim() || "";
  if (!rawValue || rawValue.startsWith("data:") || rawValue.startsWith("blob:")) {
    return rawValue;
  }

  if (/^https?:\/\//i.test(rawValue)) {
    return rawValue;
  }

  const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL;
  if (apiBaseUrl && rawValue.startsWith("/")) {
    return new URL(rawValue, apiBaseUrl).toString();
  }

  return rawValue;
}

function normalizeCar(raw: Partial<Car> & { id: string; name: string }): Car {
  const imageUrl = resolveApiAssetUrl(raw.imageUrl || raw.image || "");
  const images = raw.images?.map(resolveApiAssetUrl).filter(Boolean);

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
    images: images?.length ? images : imageUrl ? [imageUrl] : undefined,
    description: raw.description,
    locationId: raw.locationId,
    isAvailable: raw.isAvailable ?? true,
    createdAt: raw.createdAt || "",
    updatedAt: raw.updatedAt || "",
  };
}

function normalizeUploadedCarImage(
  raw: RawCarImageUploadItem
): CarImageUploadItem {
  return {
    ...raw,
    imageUrl: resolveApiAssetUrl(raw.imageUrl),
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

export async function uploadCarImages(
  carId: string,
  files: File[],
  options?: { replace?: boolean }
): Promise<ApiResponse<CarImagesUploadResponse>> {
  const formData = new FormData();
  files.forEach((file) => formData.append("images", file));

  const res = await api.post<ApiResponse<CarImagesUploadResponse>>(
    `/cars/${encodeURIComponent(carId)}/images`,
    formData,
    {
      params: {
        replace: options?.replace ? "true" : undefined,
      },
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return {
    ...res.data,
    data: {
      items: (res.data.data?.items ?? []).map(normalizeUploadedCarImage),
      total: res.data.data?.total ?? 0,
    },
  };
}
