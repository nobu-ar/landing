import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { BarHeroSection, BarContentSection, BarPlansSection, BarBookingSection } from "@/components/bar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bar Management",
  description: "Sistema POS, control de inventario, comandas digitales, pagos y cobros integrados, análisis de ventas y app móvil para clientes. Optimizá tu bar o restaurante.",
  keywords: ["sistema bar", "POS restaurante", "comandas digitales", "control inventario", "gestión bar", "app restaurant"],
  openGraph: {
    title: "Bar Management | Nobu",
    description: "Sistema POS, control de inventario, comandas digitales y app móvil para optimizar tu bar o restaurante.",
    url: "https://nobu.com.ar/bar",
  },
  alternates: {
    canonical: "https://nobu.com.ar/bar",
  },
};

export default function BarPage() {
  return (
    <main className="relative z-10 min-h-screen bg-background">
      <Navbar />
      <BarHeroSection />
      <div className="h-1 bg-primary" />
      <BarContentSection />
      <div className="h-1 bg-primary" />
      <BarPlansSection />
      <div className="h-1 bg-primary" />
      <BarBookingSection />
      <div className="h-1 bg-primary" />
      <Footer />
    </main>
  );
}
