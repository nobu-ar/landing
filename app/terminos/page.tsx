import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { TerminosCondicionesSection } from "@/components/terminos-condiciones";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Términos y Condiciones",
  description:
    "Términos y Condiciones de uso de la plataforma Nobu. Conozca los derechos y obligaciones al utilizar nuestros servicios de software empresarial.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Términos y Condiciones | Nobu",
    description: "Términos y Condiciones de uso de la plataforma Nobu. Derechos y obligaciones al utilizar nuestros servicios.",
    url: "https://nobu.com.ar/terminos",
  },
  alternates: {
    canonical: "https://nobu.com.ar/terminos",
  },
};

export default function TerminosPage() {
  return (
    <main className="relative z-10 min-h-screen bg-background">
      <Navbar />
      <TerminosCondicionesSection />
      <div className="h-1 bg-primary" />
      <Footer />
    </main>
  );
}
