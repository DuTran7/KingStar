"use client";

import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import HomePage from "@/components/pages/HomePage/HomePage";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/bundle";
import { ThemeProvider } from "@mui/material";
export const themeMUI = responsiveFontSizes(
  createTheme({
    palette: {
      primary: {
        main: "#11163d", // main
      },
      secondary: {
        main: "#ddb654",
      },
      common: {
        white: "#FFFFFF",
        black: "#000000",
      },
      action: {
        hover: "linear-gradient(to Right, #D2FF7C, #c1b435)",
      },

      divider: "#292929",
    },
    // Config: TYPOGRAPHY
    typography: {
      fontFamily: "montserrat",
      h1: {
        fontFamily: "montserrat",
        fontWeight: 300,
        fontSize: "66px",
        lineHeight: 1,
        fontStyle: "normal",
      },
      h2: {
        fontFamily: "montserrat",
        fontStyle: "normal",
        fontWeight: 300,
        fontSize: "22px",
        lineHeight: 1.3,
      },
      h3: {
        fontFamily: "montserrat",
        fontWeight: 300,
        fontSize: "40px",
        lineHeight: 1.5,
        fontStyle: "normal",
      },
      h4: {
        fontFamily: "montserrat",
        fontWeight: 300,
        fontSize: "24px",
        lineHeight: 1,
        fontStyle: "normal",
      },
      h5: {
        fontWeight: 300,
        fontSize: "16px",
        lineHeight: 1.75,
      },
      h6: {
        fontWeight: 400,
        fontSize: "12px",
        lineHeight: 1.3,
      },
      caption: {
        fontFamily: "montserrat",
        fontWeight: 400,
        fontSize: "18px",
        lineHeight: 1.55,
      },
      body1: {
        fontFamily: "montserrat",
        fontSize: "14px",
        fontWeight: 400,
        lineHeight: 1.7,
        letterSpacing: "0.02em",
      },
      body2: {
        fontSize: "14px",
        fontWeight: 400,
        lineHeight: 1.42,
      },
      subtitle1: {
        fontFamily: "montserrat",
        fontSize: "8px",
        fontWeight: 300,
        lineHeight: 2,
        letterSpacing: "0.32em",
        textTransform: "uppercase",
      },
      subtitle2: {
        fontSize: "36px",
        fontWeight: 300,
        lineHeight: 1.33,
      },
    },

    components: {},
    transitions: {
      duration: {
        shortest: 180,
        shorter: 230,
        short: 280,
        standard: 330,
        complex: 395,
        enteringScreen: 255,
        // recommended when something is leaving screen
        leavingScreen: 225,
      },
    },
  })
);

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <ThemeProvider theme={themeMUI}>
      <HomePage />{" "}
    </ThemeProvider>
  );
}
