import { Suspense } from "react";
import { Box, Typography } from "@mui/material";
import { getClassBySlug } from "@/src/constants/classesCar";
import { CARS } from "@/src/constants/cars";
import ClassPage from "@/src/components/pages/ClassPage";
import ClassPageSkeleton from "@/src/components/classes/ClassPageSkeleton";

async function ClassPageContent({ slug }: { slug: string }) {
  const meta = getClassBySlug(slug);

  if (!meta) {
    return (
      <Box className="flex min-h-screen items-center justify-center bg-white text-slate-900">
        <Typography>ไม่พบคลาสนี้</Typography>
      </Box>
    );
  }

  const list = CARS.filter((c) => c.grade === meta.grade);

  return <ClassPage meta={meta} cars={list} />;
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <Suspense fallback={<ClassPageSkeleton />}>
      <ClassPageContent slug={slug} />
    </Suspense>
  );
}
