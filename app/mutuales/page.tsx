import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import {
  MutualesHeroSection,
  MutualesContentSection,
  MutualesPlansSection,
  MutualesBookingSection,
} from "@/components/mutuales";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plataforma para Mutuales",
  description: "Plataforma completa para administrar afiliados, servicios de salud, subsidios y trámites con total transparencia. Portal digital para afiliados.",
  keywords: ["software mutuales", "gestión afiliados", "subsidios", "portal mutual", "servicios salud", "Argentina"],
  openGraph: {
    title: "Plataforma para Mutuales | Nobu",
    description: "Plataforma completa para administrar afiliados, servicios de salud, subsidios y trámites con total transparencia.",
    url: "https://nobu.com.ar/mutuales",
  },
  alternates: {
    canonical: "https://nobu.com.ar/mutuales",
  },
};

export default function MutualesPage() {
  return (
    <main className="relative z-10 min-h-screen bg-background">
      <Navbar />
      <MutualesHeroSection />
      <div className="h-1 bg-primary" />
      <MutualesContentSection />
      <div className="h-1 bg-primary" />
      <MutualesPlansSection />
      <div className="h-1 bg-primary" />
      <MutualesBookingSection />
      <div className="h-1 bg-primary" />
      <Footer />
    </main>
  );
}
