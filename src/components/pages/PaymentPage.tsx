"use client";

import * as React from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Divider,
  Stack,
  Button,
  Alert,
} from "@mui/material";
import VerifiedRoundedIcon from "@mui/icons-material/VerifiedRounded";
import PaymentPageSkeleton from "@/src/components/payment/PaymentPageSkeleton";
import PaymentBookingSummaryCard from "@/src/components/payment/PaymentBookingSummaryCard";
import PaymentCustomerForm from "@/src/components/payment/PaymentCustomerForm";
import PaymentMethodSection from "@/src/components/payment/PaymentMethodSection";
import usePaymentPage from "@/src/hooks/payment/usePaymentPage";

export default function PaymentPage() {
  const payment = usePaymentPage();

  if (!payment.ready) {
    return <PaymentPageSkeleton />;
  }

  return (
    <Box className="apple-page">
      <Container maxWidth="lg" className="apple-section">
        <Box className="flex flex-col gap-2">
          <Typography variant="h5" className="text-2xl font-bold text-slate-900">
            ชำระเงิน
          </Typography>
          <Typography className="text-sm text-slate-600">
            ยืนยันการชำระเงินสำหรับการจอง{" "}
            <span className="font-semibold text-slate-900">
              {payment.bookingId}
            </span>
          </Typography>
        </Box>

        <Box className="mt-6 grid gap-6 lg:grid-cols-12">
          <PaymentBookingSummaryCard
            bookingId={payment.bookingId}
            carId={payment.carId}
            car={payment.car}
            days={payment.days}
            pickupDate={payment.pickupDate}
            returnDate={payment.returnDate}
            pickupPoint={payment.pickupPoint}
            returnPoint={payment.returnPoint}
            pickupTime={payment.pickupTime}
            returnTime={payment.returnTime}
            amount={payment.amount}
            addonKeys={payment.addonKeys}
            addonsTotal={payment.addonsTotal}
            carSubTotal={payment.carSubTotal}
            carNet={payment.carNet}
            carDiscount={payment.carDiscount}
            discountPct={payment.discountPct}
            extraCharge={payment.extraCharge}
          />

        <Card
          elevation={0}
          className="apple-card order-1 lg:order-2 lg:col-span-7"
        >
          <CardContent className="p-6">
            {payment.done ? (
              <Alert
                icon={<VerifiedRoundedIcon />}
                severity="success"
                className="mb-4"
              >
                ยืนยันการชำระเงินสำเร็จ กำลังพาไปหน้า “การจองของฉัน”
              </Alert>
            ) : null}

            {payment.error ? (
              <Alert severity="error" className="mb-4">
                {payment.error}
              </Alert>
            ) : null}

            <PaymentCustomerForm
              fullName={payment.fullName}
              setFullName={payment.setFullName}
              email={payment.email}
              setEmail={payment.setEmail}
              phone={payment.phone}
              setPhone={payment.setPhone}
              roundedFieldSX={payment.roundedFieldSX}
            />

            <Divider className="my-6! border-black/10!" />

            <PaymentMethodSection
              method={payment.method}
              setMethod={payment.setMethod}
              amount={payment.amount}
              slipFile={payment.slipFile}
              setSlipFile={payment.setSlipFile}
              roundedFieldSX={payment.roundedFieldSX}
            />

            <Stack
              direction="row"
              spacing={1.5}
              className="mt-6 flex-wrap items-center"
            >
              <Button
                variant="contained"
                disabled={!payment.canPay}
                onClick={payment.handleConfirm}
                className="rounded-full! px-5! py-2.5! font-semibold!"
                sx={{
                  textTransform: "none",
                  backgroundColor: "rgb(15 23 42)",
                }}
              >
                {payment.loading ? "กำลังยืนยัน..." : "ยืนยันการชำระเงิน"}
              </Button>
            </Stack>
          </CardContent>
        </Card>
        </Box>
      </Container>
    </Box>
  );
}
