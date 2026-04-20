export type CarType = "Economy" | "Sedan" | "SUV" | "Van";
export type Transmission = "Auto" | "Manual";
export type Fuel = "Gasoline" | "Hybrid" | "EV";
export type Grade = 1 | 2 | 3 | 4;

export type Car = {
  id: string;
  name: string;
  brand: string;
  model: string;
  year: number;
  type: CarType;
  seats: number;
  transmission: Transmission;
  fuel: Fuel;
  pricePerDay: number;
  image?: string;
  imageUrl: string;
  grade?: Grade;
  images?: string[];
  description?: string;
  locationId?: string;
  isAvailable: boolean;
  createdAt: string;
  updatedAt: string;
};

export type CarsQuery = {
  page?: number;
  limit?: number;
  search?: string;
  type?: CarType | "All";
  transmission?: Transmission;
  fuel?: Fuel;
  minPrice?: number;
  maxPrice?: number;
  seats?: number;
  locationId?: string;
  startDate?: string;
  endDate?: string;
};
