import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { LogoCarousel } from "@/components/logo-carousel"
import { ServicesSection } from "@/components/services-section"
import { AboutSection } from "@/components/about-section"
import { BookingSection } from "@/components/booking-section"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

const SITE_URL = "https://nobu.com.ar"

export const metadata: Metadata = {
  title: {
    absolute: "Nobu",
  },

  description:
    "Creamos soluciones digitales a medida para transformar y escalar tu negocio. Menos burocracia, más crecimiento con IA y automatización.",

  openGraph: {
    title: "Nobu",
    description:
      "Creamos soluciones digitales a medida para transformar y escalar tu empresa. Soluciones digitales con IA y automatización.",
    url: SITE_URL,
    siteName: "Nobu",
    images: [
      {
        url: "/nobuBlue.png",
        width: 512,
        height: 512,
        alt: "Nobu",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Nobu",
    description:
      "Creamos soluciones digitales a medida para transformar y escalar tu negocio.",
    images: ["/nobuBlue.png"],
  },

  alternates: {
    canonical: SITE_URL,
  },
}

export default function Home() {
  return (
    <main className="relative z-10 min-h-screen bg-background">
      <Navbar />
      <HeroSection />

      <div className="h-1 bg-primary" />

      <LogoCarousel />

      <div className="h-1 bg-primary" />

      <ServicesSection />

      <div className="h-1 bg-primary" />

      <AboutSection />

      <div className="h-1 bg-primary" />

      <BookingSection />

      <div className="h-1 bg-primary" />

      <Footer />
    </main>
  )
}