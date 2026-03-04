import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import {
  ClubesHeroSection,
  ClubesContentSection,
  ClubesPlansSection,
  ClubesBookingSection,
} from "@/components/clubes";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gestión para Clubes",
  description: "Sistema integral para gestionar socios, cuotas, eventos y beneficios. Todo en un solo lugar con acceso digital, portal del socio y marketplace integrado.",
  keywords: ["software clubes", "gestión socios", "cuotas club", "eventos club", "portal socio", "marketplace club"],
  openGraph: {
    title: "Gestión para Clubes | Nobu",
    description: "Sistema integral para gestionar socios, cuotas, eventos y beneficios. Portal digital y acceso móvil.",
    url: "https://nobu.com.ar/clubes",
  },
  alternates: {
    canonical: "https://nobu.com.ar/clubes",
  },
};

export default function ClubesPage() {
  return (
    <main className="relative z-10 min-h-screen bg-background">
      <Navbar />
      <ClubesHeroSection />
      <div className="h-1 bg-primary" />
      <ClubesContentSection />
      <div className="h-1 bg-primary" />
      <ClubesPlansSection />
      <div className="h-1 bg-primary" />
      <ClubesBookingSection />
      <div className="h-1 bg-primary" />
      <Footer />
    </main>
  );
}
