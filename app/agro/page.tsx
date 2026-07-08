import type { Metadata } from "next"
import { AgroNavbar, AgroHeroSection, AgroContentSections, AgroAboutSection, AgroBookingSection, agroTheme } from "@/components/agro"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Nobu Agro | Soluciones Digitales para el Campo",
  description:
    "Tecnología inteligente para el agro: predicción, monitoreo, automatización y gestión de cultivos con datos precisos y sostenibles.",
}

export default function AgroPage() {
  return (
    <main
      className="relative z-10 min-h-screen"
      style={{ backgroundColor: agroTheme.cream }}
    >
      <AgroNavbar />
      <AgroHeroSection />
      <AgroContentSections />
      <div className="h-1" style={{ backgroundColor: agroTheme.olive }} />
      <AgroAboutSection />
      <div className="h-1" style={{ backgroundColor: agroTheme.olive }} />
      <AgroBookingSection />
      <Footer />
    </main>
  )
}
