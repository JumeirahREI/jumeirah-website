import localFont from "next/font/local";

export const montserratArabicFont = localFont({
  src: [
    {
      path: "./montserrat_arabic/Montserrat-Arabic Regular 400.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./montserrat_arabic/Montserrat-Arabic Bold 700.otf",
      weight: "700",
      style: "bold",
    },
    {
      path: "./montserrat_arabic/Montserrat-Arabic Light 300.otf",
      weight: "300",
      style: "light",
    },
  ],
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
});
