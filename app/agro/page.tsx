import type { Metadata } from "next"
import { AgroNavbar, AgroHeroSection, AgroContentSections, AgroAboutSection, AgroBookingSection, agroTheme } from "@/components/agro"
import { Footer } from "@/components/footer"
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from "@/lib/site"

const AGRO_URL = `${SITE_URL}/agro`

const AGRO_TITLE =
  "Nobu Agro | Soluciones Digitales para el Campo"

const AGRO_DESCRIPTION =
  "Tecnología inteligente para el agro argentino: predicción de cultivos, monitoreo en tiempo real, automatización y gestión con datos precisos para una producción más eficiente y sostenible."

export const metadata: Metadata = {
  title: {
    absolute: AGRO_TITLE,
  },

  description: AGRO_DESCRIPTION,

  keywords: [
    "Nobu Agro",
    "software agro",
    "tecnología agrícola",
    "agricultura de precisión",
    "monitoreo de cultivos",
    "gestión agrícola",
    "automatización agro",
    "datos agrícolas",
    "Argentina",
    "agtech",
  ],

  openGraph: {
    title: AGRO_TITLE,
    description: AGRO_DESCRIPTION,
    url: AGRO_URL,
    siteName: SITE_NAME,
    locale: "es_AR",
    type: "website",
    images: [DEFAULT_OG_IMAGE],
  },

  twitter: {
    card: "summary_large_image",
    title: AGRO_TITLE,
    description: AGRO_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE.url],
  },

  alternates: {
    canonical: AGRO_URL,
  },
}

const agroJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: AGRO_TITLE,
  description: AGRO_DESCRIPTION,
  url: AGRO_URL,
  isPartOf: {
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
  },
  about: {
    "@type": "Thing",
    name: "Soluciones digitales para el sector agropecuario",
  },
}

export default function AgroPage() {
  return (
    <main
      className="relative z-10 min-h-screen"
      style={{ backgroundColor: agroTheme.cream }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(agroJsonLd),
        }}
      />

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
