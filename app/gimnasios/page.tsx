import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import {
  GimnasiosHeroSection,
  GimnasiosContentSection,
  GimnasiosPlansSection,
  GimnasiosBookingSection,
} from "@/components/gimnasios";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sistema para Gimnasios",
  description: "Sistema completo para gestionar membresías, clases, instructores y pagos. Control total de tu centro fitness. App para socios, reservas y gestión de cuotas.",
  keywords: ["software gimnasios", "gestión de socios", "membresías gym", "clases fitness", "reservas gimnasio", "Argentina"],
  openGraph: {
    title: "Sistema para Gimnasios | Nobu",
    description: "Sistema completo para gestionar membresías, clases, instructores y pagos. Control total de tu centro fitness.",
    url: "https://nobu.com.ar/gimnasios",
  },
  alternates: {
    canonical: "https://nobu.com.ar/gimnasios",
  },
};

export default function GimnasiosPage() {
  return (
    <main className="relative z-10 min-h-screen bg-background">
      <Navbar />
      <GimnasiosHeroSection />
      <div className="h-1 bg-primary" />
      <GimnasiosContentSection />
      <div className="h-1 bg-primary" />
      <GimnasiosPlansSection />
      <div className="h-1 bg-primary" />
      <GimnasiosBookingSection />
      <div className="h-1 bg-primary" />
      <Footer />
    </main>
  );
}
