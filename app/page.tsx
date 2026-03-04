import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { LogoCarousel } from "@/components/logo-carousel"
import { ServicesSection } from "@/components/services-section"
import { AboutSection } from "@/components/about-section"
import { BookingSection } from "@/components/booking-section"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Inicio",
  description: "Nobu - El futuro de tu empresa: menos burocracia. Organizá, controlá y hacé crecer tu negocio desde un solo lugar. Software para gimnasios, clubes, financieras, mutuales, e-commerce, bares y más. +50 empresas activas, 98% satisfacción.",
  openGraph: {
    title: "Nobu | Identidad Digital y Módulos para Gestionar tu Empresa",
    description: "Organizá, controlá y hacé crecer tu empresa desde un solo lugar. Soluciones digitales con IA y automatización.",
    url: "https://nobu.com.ar",
  },
  alternates: {
    canonical: "https://nobu.com.ar",
  },
}

export default function Home() {
  return (
    <main className="relative z-10 min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <div className="h-1 bg-primary"></div>
      <LogoCarousel />
      <div className="h-1 bg-primary"></div>
      <ServicesSection />
      <div className="h-1 bg-primary"></div>
      <AboutSection />
      <div className="h-1 bg-primary"></div>
      <BookingSection />
      <div className="h-1 bg-primary"></div>
      <Footer />
    </main>
  )
}
