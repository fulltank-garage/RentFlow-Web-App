export type TenantProfile = {
  id: string;
  shopName: string;
  domainSlug: string;
  publicDomain: string;
  logoUrl?: string;
  promoImageUrl?: string;
  promoImageUrls?: string[];
  status?: string;
  bookingMode?: "payment" | "chat" | string;
  chatThresholdTHB?: number;
  plan?: string;
  createdAt?: string;
  updatedAt?: string;
};
