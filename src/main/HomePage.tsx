"use client";

import * as React from "react";
import { Alert, Box } from "@mui/material";

import HeroSection from "@/src/components/home/HeroSection";
import CarsSection from "@/src/components/home/CarsSection";
import CarClassSection from "@/src/components/home/CarClassSection";
import BenefitsCTASection from "@/src/components/home/BenefitsCTASection";
import ReviewsSection from "@/src/components/home/ReviewsSection";
import { formatTHB } from "@/src/constants/money";
import { useCatalogDirectory } from "@/src/hooks/catalog/useCatalogDirectory";
import type { CarType } from "@/src/services/cars/cars.types";

export default function HomePage() {
  const [location, setLocation] = React.useState("");
  const [type, setType] = React.useState<CarType | "All">("All");
  const [pickupDate, setPickupDate] = React.useState("");
  const [returnDate, setReturnDate] = React.useState("");
  const [q, setQ] = React.useState("");
  const { cars, carTypes, locations, classes, loading, error } =
    useCatalogDirectory();

  const recommendedCars = React.useMemo(() => {
    return cars.slice(0, 6);
  }, [cars]);
  const heroImages = React.useMemo(() => {
    return cars
      .flatMap((car) => car.images?.length ? car.images : car.image ? [car.image] : [])
      .slice(0, 6);
  }, [cars]);

  return (
    <Box className="min-h-screen bg-white text-slate-900">
      <HeroSection
        heroImages={heroImages}
        location={location}
        setLocation={setLocation}
        type={type}
        setType={setType}
        pickupDate={pickupDate}
        setPickupDate={setPickupDate}
        returnDate={returnDate}
        setReturnDate={setReturnDate}
        q={q}
        setQ={setQ}
        carTypes={carTypes}
        locations={locations}
      />

      {error ? (
        <Box className="mx-auto w-full max-w-6xl px-6">
          <Alert severity="warning" className="rounded-2xl!">
            {error}
          </Alert>
        </Box>
      ) : null}

      <CarsSection cars={recommendedCars} formatTHB={formatTHB} />

      <CarClassSection classes={classes} loading={loading} />

      <ReviewsSection />

      <BenefitsCTASection />
    </Box>
  );
}
