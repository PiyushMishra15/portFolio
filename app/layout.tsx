"use client"; // Mark this file as a client component

import { useEffect, useState } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [isMounted, setIsMounted] = useState(false); // Ensure we are in the client
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    setIsMounted(true); // Set mounted to true after component mounts
    // Check system theme preference on mount
    const darkModePreference = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setIsDarkMode(darkModePreference); // Update dark mode based on preference
  }, []);

  return (
    <html
      lang="en"
      className={`scroll-smooth ${isMounted ? (isDarkMode ? "dark" : "") : ""}`} // Add dark class after mounting
    >
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children} {/* Render children after mounting */}
        </ThemeProvider>
      </body>
    </html>
  );
}
