import { Box, Typography } from "@mui/material";
import { getClassBySlug } from "@/src/constants/classesCar";
import { CARS } from "@/src/constants/cars";
import ClassClient from "../ClassClient";

export default async function ClassPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const meta = getClassBySlug(slug);

  if (!meta) {
    return (
      <Box className="min-h-screen bg-white text-slate-900 flex items-center justify-center">
        <Typography>ไม่พบคลาสนี้</Typography>
      </Box>
    );
  }

  const list = CARS.filter((c) => c.grade === meta.grade);

  return <ClassClient meta={meta} cars={list} />;
}
