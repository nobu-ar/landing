import React from "react"
import type { Metadata } from 'next'
import Script from 'next/script'
import { Inter, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });

const SITE_URL = 'https://nobu.com.ar'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Nobu | Identidad Digital y Módulos para Gestionar tu Empresa',
    template: '%s | Nobu',
  },
  description: 'Creamos soluciones digitales a medida para transformar y escalar tu negocio. Menos burocracia, más crecimiento con IA y automatización. Software para gimnasios, clubes, financieras, mutuales, e-commerce y más.',
  keywords: ['desarrollo software', 'gestión empresarial', 'inteligencia artificial', 'argentina', 'tucumán', 'automatización', 'software empresarial', 'sistema gestión', 'chatbot IA', 'e-commerce', 'gimnasios', 'clubes', 'financieras', 'mutuales'],
  authors: [{ name: 'Nobu', url: SITE_URL }],
  creator: 'Nobu',
  publisher: 'Nobu Fintech S.A.S.',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: SITE_URL,
    siteName: 'Nobu',
    title: 'Nobu | Identidad Digital y Módulos para Gestionar tu Empresa',
    description: 'Creamos soluciones digitales a medida para transformar y escalar tu negocio. Menos burocracia, más crecimiento con IA y automatización.',
    images: [{ url: '/logoBlue.svg', width: 512, height: 512, alt: 'Nobu - Soluciones digitales' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nobu | Identidad Digital y Módulos para Gestionar tu Empresa',
    description: 'Creamos soluciones digitales a medida para transformar y escalar tu negocio.',
  },
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/logoBlue.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/logoBlue.svg',
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Nobu",
  legalName: "Nobu Fintech S.A.S.",
  url: SITE_URL,
  logo: `${SITE_URL}/logoBlue.svg`,
  description: "Soluciones digitales a medida para transformar y escalar tu negocio. Software para gimnasios, clubes, financieras, mutuales, e-commerce y más.",
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
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-EHBYL5T5T5"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-EHBYL5T5T5');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
