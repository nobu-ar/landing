import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import {
  FinancierasHeroSection,
  FinancierasContentSection,
  FinancierasPlansSection,
  FinancierasBookingSection,
} from "@/components/financieras";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Software para Financieras",
  description: "Gestión de préstamos, simuladores de créditos, inversiones, carteras y cobranzas con análisis de riesgo automatizado. Compliance y cumplimiento regulatorio.",
  keywords: ["software financieras", "gestión préstamos", "simulador créditos", "análisis riesgo", "cobranzas", "compliance"],
  openGraph: {
    title: "Software para Financieras | Nobu",
    description: "Gestión de préstamos, simuladores de créditos, inversiones y cobranzas con análisis de riesgo automatizado.",
    url: "https://nobu.com.ar/financieras",
  },
  alternates: {
    canonical: "https://nobu.com.ar/financieras",
  },
};

export default function FinancierasPage() {
  return (
    <main className="relative z-10 min-h-screen bg-background">
      <Navbar />
      <FinancierasHeroSection />
      <div className="h-1 bg-primary" />
      <FinancierasContentSection />
      <div className="h-1 bg-primary" />
      <FinancierasPlansSection />
      <div className="h-1 bg-primary" />
      <FinancierasBookingSection />
      <div className="h-1 bg-primary" />
      <Footer />
    </main>
  );
}
