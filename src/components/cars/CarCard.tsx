"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import {
    Box,
    Card,
    CardContent,
    CardActions,
    Typography,
    Button,
} from "@mui/material";
import type { Car } from "@/src/services/cars/cars.types";
import { formatTHB } from "@/src/constants/money";
import { getRentFlowStorefrontHref } from "@/src/lib/tenant";

type Props = {
    car: Car;
    showShop?: boolean;
};

export default function CarCard({ car, showShop = false }: Props) {
    const tenantQuery = car.domainSlug
        ? `?tenant=${encodeURIComponent(car.domainSlug)}`
        : "";
    const carHref = `/cars/${encodeURIComponent(car.id)}${tenantQuery}`;
    const bookingHref = `/booking?carId=${encodeURIComponent(car.id)}${
        car.domainSlug ? `&tenant=${encodeURIComponent(car.domainSlug)}` : ""
    }`;
    const shopHref = car.domainSlug
        ? getRentFlowStorefrontHref(car.domainSlug)
        : "";

    return (
        <Card
            elevation={0}
            sx={{ boxShadow: "none" }}
            className="apple-card group"
        >
            <Box className="relative h-56 w-full overflow-hidden bg-[var(--rf-apple-surface-soft)]">
                <Image
                    src={car.image || "/RentFlow.png"}
                    alt={car.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
            </Box>

            <CardContent className="p-6">
                <Box className="flex items-start justify-between gap-3">
                    <Box className="min-w-0">
                        <Typography className="truncate text-xl font-bold tracking-[-0.03em] text-[var(--rf-apple-ink)]">
                            {car.name}
                        </Typography>
                        <Typography className="mt-1 text-sm text-[var(--rf-apple-muted)]">
                            {car.type} • {car.seats} ที่นั่ง • {car.transmission} • {car.fuel}
                        </Typography>
                    </Box>
                </Box>

                {showShop && car.shopName ? (
                    <Box
                        component={shopHref ? "a" : "span"}
                        href={shopHref || undefined}
                        className="mt-5 block rounded-[22px] bg-[var(--rf-apple-surface-soft)] p-4 text-[var(--rf-apple-muted)] no-underline transition hover:bg-white"
                    >
                        <Box className="flex items-end gap-2">
                            <Typography className="text-base font-black tracking-[-0.02em] text-[var(--rf-apple-muted)]">
                                ร้านให้เช่า
                            </Typography>
                            <Typography className="truncate text-2xl font-black tracking-[-0.04em] text-[var(--rf-apple-ink)]">
                                {car.shopName}
                            </Typography>
                        </Box>
                    </Box>
                ) : null}

                <Box className="mt-3 rounded-[22px] bg-[var(--rf-apple-surface-soft)] p-4">
                    <Box className="flex items-end gap-2">
                        <Typography className="text-sm text-[var(--rf-apple-muted)]">
                            ราคาเริ่มต้น
                        </Typography>

                        <Typography className="text-2xl font-extrabold tracking-[-0.04em] text-[var(--rf-apple-ink)]">
                            {formatTHB(car.pricePerDay)}
                        </Typography>

                        <Typography className="text-sm text-[var(--rf-apple-muted)]">/วัน</Typography>
                    </Box>
                </Box>
            </CardContent>

            <CardActions sx={{ p: "0px 16px 16px" }} className="gap-2">
                <Button
                    component={Link}
                    href={carHref}
                    variant="outlined"
                    fullWidth
                    className="rounded-full!"
                >
                    ดูรายละเอียด
                </Button>

                <Button
                    component={Link}
                    href={bookingHref}
                    variant="contained"
                    fullWidth
                    className="rounded-full! font-semibold!"
                >
                    จองเลย
                </Button>
            </CardActions>
        </Card>
    );
}
