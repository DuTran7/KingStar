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
import { themeMUI } from "@/theme";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <ThemeProvider theme={themeMUI}>
      <HomePage />
    </ThemeProvider>
  );
}
