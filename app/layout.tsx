import React from "react"
import type { Metadata } from "next"
import Script from "next/script"
import { Inter, Space_Grotesk } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from "@/lib/site"
import { LanguageProvider } from "@/lib/i18n/language-context"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" })

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },

  description:
    "Creamos soluciones digitales a medida para transformar y escalar tu negocio. Menos burocracia, más crecimiento con IA y automatización.",

  keywords: [
    "desarrollo software",
    "gestión empresarial",
    "inteligencia artificial",
    "argentina",
    "tucumán",
    "automatización",
    "software empresarial",
    "sistema gestión",
    "chatbot IA",
    "e-commerce",
    "gimnasios",
    "clubes",
    "financieras",
    "mutuales",
    "agro",
    "soluciones digitales",
  ],

  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: "Nobu Fintech S.A.S.",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: [
      { url: "/nobuBlue.png", type: "image/png", sizes: "512x512" },
      { url: "/favicon.ico", sizes: "48x48" },
    ],
    shortcut: "/nobuBlue.png",
    apple: "/nobuBlue.png",
  },

  openGraph: {
    type: "website",
    locale: "es_AR",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_NAME,
    description:
      "Creamos soluciones digitales a medida para transformar y escalar tu negocio. Menos burocracia, más crecimiento con IA y automatización.",
    images: [DEFAULT_OG_IMAGE],
  },

  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description:
      "Creamos soluciones digitales a medida para transformar y escalar tu negocio.",
    images: [DEFAULT_OG_IMAGE.url],
  },

  alternates: {
    canonical: SITE_URL,
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  legalName: "Nobu Fintech S.A.S.",
  url: SITE_URL,
  logo: `${SITE_URL}/nobuBlue.png`,
  description:
    "Soluciones digitales a medida para transformar y escalar tu negocio. Software para gimnasios, clubes, financieras, mutuales, e-commerce, agro y más.",
  email: "info@nobu.com.ar",
  sameAs: [
    "https://www.instagram.com/nobuempresarial/",
    "https://www.linkedin.com/company/nobuar/",
  ],
  address: {
    "@type": "PostalAddress",
    addressCountry: "AR",
    addressRegion: "Tucumán",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}
      >
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-EHBYL5T5T5"
          strategy="lazyOnload"
        />

        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag("js", new Date());
            gtag("config", "G-EHBYL5T5T5");
          `}
        </Script>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />

        <LanguageProvider>{children}</LanguageProvider>

        <Analytics />
      </body>
    </html>
  )
}
