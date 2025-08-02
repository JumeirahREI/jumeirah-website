import { Manrope } from "next/font/google";
import localFont from "next/font/local";

export const manropeFont = Manrope({
  variable: "--font-manrope",
});

export const qurovaDemoFont = localFont({
  src: [
    {
      path: "./QurovaDEMO-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./QurovaDEMO-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./QurovaDEMO-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./QurovaDEMO-SemiBold.otf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-qurova-demo",
});
