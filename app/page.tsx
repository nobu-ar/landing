import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { LogoCarousel } from "@/components/logo-carousel"
import { ServicesSection } from "@/components/services-section"
import { AboutSection } from "@/components/about-section"
import { BookingSection } from "@/components/booking-section"
import { Footer } from "@/components/footer"

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
