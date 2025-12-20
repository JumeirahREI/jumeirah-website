import localFont from "next/font/local";

export const montserratArabicFont = localFont({
  src: [
    {
      path: "./Hacen Tunisia.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Hacen Tunisia.ttf",
      weight: "700",
      style: "bold",
    },
    {
      path: "./Hacen Tunisia.ttf",
      weight: "300",
      style: "light",
    },
  ],
  display: "swap",
  fallback: ["system-ui"],
});

export const aeonikFont = localFont({
  src: [
    {
      path: "./aeonik/AeonikTRIAL-Light.otf",
      weight: "300",
      style: "light",
    },
    {
      path: "./aeonik/AeonikTRIAL-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./aeonik/AeonikTRIAL-Bold.otf",
      weight: "700",
      style: "bold",
    },
  ],
  display: "swap",
  fallback: ["system-ui"],
});
