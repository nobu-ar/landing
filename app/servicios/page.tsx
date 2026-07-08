import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { ExploreServicesHeroSection } from "@/components/service-slice"
import { ServicesSection } from "@/components/services-section"
import { AboutSection } from "@/components/about-section"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Nobu | Nuestros Servicios",
  description:
    "Soluciones integrales para escalar tu negocio: financieras, clubes, e-commerce, mutuales y más.",
}

export default function ServiciosPage() {
  return (
    <main className="relative z-10 min-h-screen bg-background">
      <Navbar />
      <ExploreServicesHeroSection />
      <div className="h-1 bg-primary" />
      <ServicesSection />
      <div className="h-1 bg-primary" />
      <AboutSection />
      <div className="h-1 bg-primary" />
      <Footer />
    </main>
  )
}
