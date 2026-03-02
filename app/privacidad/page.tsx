import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PoliticaPrivacidadSection } from "@/components/politica-privacidad";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad | Nobu",
  description:
    "Política de Privacidad de Nobu Fintech S.A.S. Conozca cómo tratamos sus datos personales conforme a la Ley 25.326.",
};

export default function PrivacidadPage() {
  return (
    <main className="relative z-10 min-h-screen bg-background">
      <Navbar />
      <PoliticaPrivacidadSection />
      <div className="h-1 bg-primary" />
      <Footer />
    </main>
  );
}
