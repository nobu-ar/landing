import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import {
  MarketHeroSection,
  MarketContentSection,
  MarketPlansSection,
  MarketBookingSection,
} from "@/components/market";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "E-commerce / Market",
  description: "Tienda online completa con catálogo, carrito, pagos integrados y panel de administración profesional. App móvil para clientes incluida.",
  keywords: ["e-commerce", "tienda online", "marketplace", "ventas online", "pagos integrados", "app tienda"],
  openGraph: {
    title: "E-commerce / Market | Nobu",
    description: "Tienda online completa con catálogo, carrito, pagos integrados y panel de administración profesional.",
    url: "https://nobu.com.ar/market",
  },
  alternates: {
    canonical: "https://nobu.com.ar/market",
  },
};

export default function MarketPage() {
  return (
    <main className="relative z-10 min-h-screen bg-background">
      <Navbar />
      <MarketHeroSection />
      <div className="h-1 bg-primary" />
      <MarketContentSection />
      <div className="h-1 bg-primary" />
      <MarketPlansSection />
      <div className="h-1 bg-primary" />
      <MarketBookingSection />
      <div className="h-1 bg-primary" />
      <Footer />
    </main>
  );
}
