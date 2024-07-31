import type { Metadata } from "next";
import "./globals.css"

import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import Scroller from '@/components/custom/Scroller'
import { Box } from "@mui/material";

export const metadata: Metadata = {
  title: "Palini NGO",
  description: "Palini Foundation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      <body>
        <Scroller />
        <Header />
          <Box sx={{ mt: 5 }}>
            {children}
          </Box>
        <Footer />
      </body>
    </html>
  );
}
