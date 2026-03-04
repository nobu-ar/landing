import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import {
  AgenciasMarketingHeroSection,
  AgenciasMarketingContentSection,
  AgenciasMarketingPlansSection,
  AgenciasMarketingBookingSection,
} from "@/components/agencias-marketing";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agencias de Marketing",
  description: "Gestiona clientes, campañas, métricas y reportes. Workflow completo para agencias digitales. Dashboards, reportes white-label e integraciones.",
  keywords: ["agencia marketing", "gestión campañas", "marketing digital", "reportes clientes", "workflow agencias"],
  openGraph: {
    title: "Agencias de Marketing | Nobu",
    description: "Workflow completo para agencias digitales. Gestión de clientes, campañas, métricas y reportes.",
    url: "https://nobu.com.ar/agencias-marketing",
  },
  alternates: {
    canonical: "https://nobu.com.ar/agencias-marketing",
  },
};

export default function AgenciasMarketingPage() {
  return (
    <main className="relative z-10 min-h-screen bg-background">
      <Navbar />
      <AgenciasMarketingHeroSection />
      <div className="h-1 bg-primary" />
      <AgenciasMarketingContentSection />
      <div className="h-1 bg-primary" />
      <AgenciasMarketingPlansSection />
      <div className="h-1 bg-primary" />
      <AgenciasMarketingBookingSection />
      <div className="h-1 bg-primary" />
      <Footer />
    </main>
  );
}
