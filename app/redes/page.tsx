import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import {
  RedesHeroSection,
  RedesContentSection,
  RedesPlansSection,
  RedesBookingSection,
} from "@/components/redes";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Análisis de Redes Sociales",
  description: "Plataforma de análisis de datos de redes sociales. Carga perfiles de Twitter e Instagram y obtén reportes con métricas detalladas. Ideal para políticos y empresas.",
  keywords: ["análisis redes sociales", "big data", "métricas Instagram", "Twitter analytics", "reportes sociales", "engagement"],
  openGraph: {
    title: "Análisis de Redes Sociales | Nobu",
    description: "Plataforma de análisis de datos de redes sociales. Reportes con métricas detalladas para Instagram, Twitter, Facebook y YouTube.",
    url: "https://nobu.com.ar/redes",
  },
  alternates: {
    canonical: "https://nobu.com.ar/redes",
  },
};

export default function RedesPage() {
  return (
    <main className="relative z-10 min-h-screen bg-background">
      <Navbar />
      <RedesHeroSection />
      <div className="h-1 bg-primary" />
      <RedesContentSection />
      <div className="h-1 bg-primary" />
      <RedesPlansSection />
      <div className="h-1 bg-primary" />
      <RedesBookingSection />
      <div className="h-1 bg-primary" />
      <Footer />
    </main>
  );
}
