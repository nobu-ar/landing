import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { ExploreServicesHeroSection } from "@/components/service-slice"
import { ServicesSection } from "@/components/services-section"
import { AboutSection } from "@/components/about-section"
import { Footer } from "@/components/footer"
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from "@/lib/site"

const SERVICIOS_URL = `${SITE_URL}/servicios`

const SERVICIOS_TITLE =
  "Nobu | Soluciones Digitales para tu Empresa"

const SERVICIOS_DESCRIPTION =
  "Explorá nuestras soluciones integrales: software para financieras, clubes, gimnasios, e-commerce, mutuales, chatbots con IA, agro y más. Escalá tu negocio con tecnología a medida."

export const metadata: Metadata = {
  title: {
    absolute: SERVICIOS_TITLE,
  },

  description: SERVICIOS_DESCRIPTION,

  keywords: [
    "servicios Nobu",
    "software empresarial",
    "soluciones digitales",
    "gestión de clubes",
    "software financieras",
    "e-commerce",
    "chatbot IA",
    "software gimnasios",
    "mutuales",
    "Argentina",
  ],

  openGraph: {
    title: SERVICIOS_TITLE,
    description: SERVICIOS_DESCRIPTION,
    url: SERVICIOS_URL,
    siteName: SITE_NAME,
    locale: "es_AR",
    type: "website",
    images: [DEFAULT_OG_IMAGE],
  },

  twitter: {
    card: "summary_large_image",
    title: SERVICIOS_TITLE,
    description: SERVICIOS_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE.url],
  },

  alternates: {
    canonical: SERVICIOS_URL,
  },
}

const serviciosJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: SERVICIOS_TITLE,
  description: SERVICIOS_DESCRIPTION,
  url: SERVICIOS_URL,
  isPartOf: {
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
  },
}

export default function ServiciosPage() {
  return (
    <main className="relative z-10 min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviciosJsonLd),
        }}
      />

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
