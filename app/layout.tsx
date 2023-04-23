import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";
import ScrollToTop from "./components/ScrollToTop";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fit Gym",
  description: "A lifestyle gym",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <Navbar />
        {children}
        <ScrollToTop />
        <Footer />
      </body>
    </html>
  );
}
