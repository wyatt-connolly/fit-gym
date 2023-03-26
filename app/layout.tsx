import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";
import ScrollToTop from "./components/ScrollToTop";

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
