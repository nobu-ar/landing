import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { CompanyIntroSection } from "@/components/company-intro-section"
import { LogoCarousel } from "@/components/logo-carousel"
import { ServiceCategoriesSection } from "@/components/service-categories-section"
import { AboutSection } from "@/components/about-section"
import { BookingSection } from "@/components/booking-section"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from "@/lib/site"

const HOME_TITLE =
  "Nobu | Soluciones Digitales, IA y Data para Empresas"

const HOME_DESCRIPTION =
  "Diseñamos sistemas a medida y plataformas inteligentes que conectan procesos, automatizan operaciones y convierten tus datos en valor real. Menos burocracia, más crecimiento."

export const metadata: Metadata = {
  title: {
    absolute: HOME_TITLE,
  },

  description: HOME_DESCRIPTION,

  keywords: [
    "Nobu",
    "soluciones digitales",
    "inteligencia artificial",
    "data analytics",
    "automatización empresarial",
    "desarrollo software a medida",
    "software empresarial Argentina",
    "transformación digital",
    "Tucumán",
  ],

  openGraph: {
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "es_AR",
    type: "website",
    images: [DEFAULT_OG_IMAGE],
  },

  twitter: {
    card: "summary_large_image",
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE.url],
  },

  alternates: {
    canonical: SITE_URL,
  },
}

const webSiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  description: HOME_DESCRIPTION,
  publisher: {
    "@type": "Organization",
    name: SITE_NAME,
    logo: `${SITE_URL}/nobuBlue.png`,
  },
}

export default function Home() {
  return (
    <main className="relative z-10 min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webSiteJsonLd),
        }}
      />

      <Navbar />
      <HeroSection />

      <div className="h-1 bg-primary" />

      <LogoCarousel />
      <div className="h-1 bg-primary"></div>
      <CompanyIntroSection />
      <div className="h-1 bg-primary"></div>
      
      <ServiceCategoriesSection />
      <div className="h-1 bg-primary"></div>
      <AboutSection />

      <div className="h-1 bg-primary" />

      <BookingSection />

      <div className="h-1 bg-primary" />

      <Footer />
    </main>
  )
}
