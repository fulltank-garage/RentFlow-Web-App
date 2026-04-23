"use client";

import * as React from "react";
import { Box, Typography } from "@mui/material";
import type { Car } from "@/src/services/cars/cars.types";
import CarCard from "./CarCard";

type Props = {
    cars: Car[];
    showShop?: boolean;
};

export default function CarGrid({ cars, showShop = false }: Props) {
    if (cars.length === 0) {
        return (
            <Box className="mt-8 rounded-[30px] border border-dashed border-black/10 bg-white p-12 text-center">
                <Typography className="text-base font-semibold text-[var(--rf-apple-ink)]">
                    ไม่พบรถที่ตรงกับเงื่อนไข
                </Typography>
                <Typography className="mt-1 text-sm text-[var(--rf-apple-muted)]">
                    ลองเปลี่ยนคำค้นหา หรือเลือกประเภทอื่น
                </Typography>
            </Box>
        );
    }

    return (
        <Box className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {cars.map((car) => (
                <CarCard key={car.id} car={car} showShop={showShop} />
            ))}
        </Box>
    );
}
