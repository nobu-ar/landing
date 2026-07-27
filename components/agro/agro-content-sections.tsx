"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, BarChart3, Eye, Leaf, Map, ScanLine, ShieldCheck, Tractor } from "lucide-react"
import { Button } from "@/components/ui/button"
import { agroTheme } from "./theme"
import { useLanguage, type Language } from "@/lib/i18n/language-context"

const content = {
  es: {
    banner: {
      eyebrow: "Nobu Agro",
      title: "Tu aliado inteligente que predice, monitorea y optimiza tus cultivos",
      description:
        "Acompañamos cada etapa de la campaña para que tomes decisiones agrícolas más precisas, sostenibles y basadas en datos reales de tu campo.",
    },
    splits: [
      {
        eyebrow: "Experiencia en el campo",
        title: "Tecnología pensada para quienes producen",
        description:
          "Conocemos el agro porque trabajamos codo a codo con productores y empresas del sector. Diseñamos sistemas que se adaptan a tu operación real, con la seguridad y el respaldo que necesitás para crecer.",
        bullets: [
          { icon: Tractor, text: "Soluciones a medida para cada tipo de explotación y escala productiva." },
          { icon: ShieldCheck, text: "Plataformas seguras, confiables y con años de experiencia en el rubro." },
          { icon: Leaf, text: "Herramientas que respetan el ritmo del campo y potencian la sostenibilidad." },
        ],
        imageAlt: "Manos de productor revisando cultivos al atardecer",
      },
      {
        eyebrow: "Datos y automatización",
        title: "Convertimos información en decisiones precisas",
        description:
          "Lo que te imagines, lo podemos construir. Automatizamos procesos, analizamos datos de gran volumen y te ayudamos a anticipar escenarios para optimizar recursos en cada campaña.",
        bullets: [
          { icon: BarChart3, text: "Análisis de datos masivos para entender rendimiento, costos y oportunidades." },
          { icon: Leaf, text: "Monitoreo inteligente de cultivos en todas las etapas de la producción." },
          { icon: ShieldCheck, text: "Decisiones más precisas, sostenibles y respaldadas por información confiable." },
        ],
        imageAlt: "Vista aérea de cultivos y campos agrícolas",
      },
      {
        eyebrow: "Análisis con drones",
        title: "Visión aérea para decisiones más precisas",
        description:
          "Cobertura total del lote con drones y procesamiento de datos para detectar problemas antes de que impacten el rendimiento.",
        bullets: [
          { icon: ScanLine, text: "Análisis multiespectral con índices NDVI: vigor, salud y uniformidad del cultivo." },
          { icon: Map, text: "Monitoreo de grandes extensiones con detección rápida de zonas críticas." },
          { icon: Eye, text: "Control del estado: estrés hídrico, nutrientes, enfermedades y plagas." },
        ],
        imageAlt: "Drone agrícola sobrevolando cultivos para análisis multiespectral",
      },
    ],
    cta: {
      eyebrow: "Sumate al agro inteligente",
      title: "Producí con tecnología, confianza y resultados",
      description:
        "En Nobu desarrollamos plataformas a medida para productores, acopios y empresas del agro. Automatizamos procesos, centralizamos la gestión y convertimos la información del campo en ventaja competitiva.",
      cta: "Agendar reunión",
      imageAlt: "Paisaje agrícola al atardecer",
    },
  },
  en: {
    banner: {
      eyebrow: "Nobu Agro",
      title: "Your intelligent partner that predicts, monitors, and optimizes your crops",
      description:
        "We support every stage of the season so you can make more precise, sustainable decisions based on real data from your fields.",
    },
    splits: [
      {
        eyebrow: "Field experience",
        title: "Technology built for those who produce",
        description:
          "We know agriculture because we work side by side with producers and companies in the sector. We design systems that adapt to your real operation, with the security and support you need to grow.",
        bullets: [
          { icon: Tractor, text: "Tailored solutions for every type of farm and production scale." },
          { icon: ShieldCheck, text: "Secure, reliable platforms backed by years of industry experience." },
          { icon: Leaf, text: "Tools that respect the pace of the field and boost sustainability." },
        ],
        imageAlt: "Producer's hands checking crops at sunset",
      },
      {
        eyebrow: "Data and automation",
        title: "We turn information into precise decisions",
        description:
          "Whatever you can imagine, we can build it. We automate processes, analyze large volumes of data, and help you anticipate scenarios to optimize resources each season.",
        bullets: [
          { icon: BarChart3, text: "Massive data analysis to understand performance, costs, and opportunities." },
          { icon: Leaf, text: "Smart crop monitoring across every stage of production." },
          { icon: ShieldCheck, text: "More precise, sustainable decisions backed by reliable information." },
        ],
        imageAlt: "Aerial view of crops and farmland",
      },
      {
        eyebrow: "Drone analysis",
        title: "Aerial vision for more precise decisions",
        description:
          "Full field coverage with drones and data processing to detect problems before they impact yield.",
        bullets: [
          { icon: ScanLine, text: "Multispectral analysis with NDVI indexes: vigor, health, and crop uniformity." },
          { icon: Map, text: "Monitor large areas and quickly detect critical zones." },
          { icon: Eye, text: "Track crop status: water stress, nutrient deficiencies, disease, and pests." },
        ],
        imageAlt: "Agricultural drone flying over crops for multispectral analysis",
      },
    ],
    cta: {
      eyebrow: "Join smart agriculture",
      title: "Produce with technology, trust, and results",
      description:
        "At Nobu we build tailored platforms for producers, storage facilities, and agribusinesses. We automate processes, centralize management, and turn field information into a competitive advantage.",
      cta: "Book a meeting",
      imageAlt: "Agricultural landscape at sunset",
    },
  },
} satisfies Record<
  Language,
  {
    banner: { eyebrow: string; title: string; description: string }
    splits: Array<{
      eyebrow: string
      title: string
      description: string
      bullets: Array<{ icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>; text: string }>
      imageAlt: string
    }>
    cta: { eyebrow: string; title: string; description: string; cta: string; imageAlt: string }
  }
>

function useSectionVisibility() {
  const [isVisible, setIsVisible] = React.useState(false)
  const sectionRef = React.useRef<HTMLElement>(null)

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.12 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return { isVisible, sectionRef }
}

function AgroBannerSection() {
  const { isVisible, sectionRef } = useSectionVisibility()
  const { language } = useLanguage()
  const t = content[language].banner

  return (
    <section ref={sectionRef} className="relative w-full overflow-hidden">
      <Image
        src="/agroImage2.jpg"
        alt="Campos agrícolas vistos desde el aire"
        width={4048}
        height={2268}
        className="w-full h-auto block"
        sizes="100vw"
      />
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(135deg, ${agroTheme.dark}cc 0%, ${agroTheme.dark}88 45%, ${agroTheme.darkMuted}99 100%)`,
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center px-5 sm:px-8 lg:px-12 py-12 sm:py-16">
        <div
          className={`max-w-4xl text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p
            className="font-medium mb-4 uppercase tracking-wider text-xs sm:text-sm"
            style={{ color: agroTheme.oliveMuted}}
          >
            {t.eyebrow}
          </p>
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-5 sm:mb-6 text-balance leading-tight text-white"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {t.title}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-pretty leading-relaxed text-white/90 max-w-3xl mx-auto">
            {t.description}
          </p>
        </div>
      </div>
    </section>
  )
}

function AgroSplitSection({
  eyebrow,
  title,
  description,
  bullets,
  imageSrc,
  imageAlt,
  imageWidth,
  imageHeight,
  reversed = false,
  backgroundColor = agroTheme.cream,
  textColor = agroTheme.dark,
  iconColor = agroTheme.dark,
}: {
  eyebrow: string
  title: string
  description: string
  bullets: Array<{ icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>; text: string }>
  imageSrc: string
  imageAlt: string
  imageWidth: number
  imageHeight: number
  reversed?: boolean
  backgroundColor?: string
  textColor?: string
  iconColor?: string
}) {
  const { isVisible, sectionRef } = useSectionVisibility()

  return (
    <section
      ref={sectionRef}
      className="py-14 sm:py-16 lg:py-24"
      style={{ backgroundColor }}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div
          className={`grid lg:grid-cols-2 gap-10 lg:gap-14 xl:gap-16 items-center ${
            reversed ? "lg:[&>*:first-child]:order-2" : ""
          }`}
        >
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : `opacity-0 ${reversed ? "translate-x-8" : "-translate-x-8"}`
            }`}
          >
            <p
              className="font-medium mb-3 sm:mb-4 uppercase tracking-wider text-xs sm:text-sm"
              style={{ color: agroTheme.olive }}
            >
              {eyebrow}
            </p>
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-balance leading-tight"
              style={{ fontFamily: "var(--font-display)", color: textColor }}
            >
              {title}
            </h2>
            <p
              className="text-base sm:text-lg leading-relaxed text-pretty mb-6 sm:mb-8"
              style={{ color: `${textColor}cc` }}
            >
              {description}
            </p>
            <ul className="space-y-4">
              {bullets.map((bullet) => (
                <li key={bullet.text} className="flex items-start gap-3">
                  <div
                    className="shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${iconColor}18` }}
                  >
                    <bullet.icon className="w-5 h-5" style={{ color: iconColor }} />
                  </div>
                  <span className="text-sm sm:text-base leading-relaxed pt-2" style={{ color: textColor }}>
                    {bullet.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div
            className={`transition-all duration-1000 delay-150 ${
              isVisible ? "opacity-100 translate-x-0" : `opacity-0 ${reversed ? "-translate-x-8" : "translate-x-8"}`
            }`}
          >
            <div className="overflow-hidden rounded-2xl shadow-[0_20px_45px_-15px_rgba(30,77,47,0.35)]">
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={imageWidth}
                height={imageHeight}
                className="w-full h-auto"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function AgroCtaSection() {
  const { isVisible, sectionRef } = useSectionVisibility()
  const { language } = useLanguage()
  const t = content[language].cta

  return (
    <section
      ref={sectionRef}
      className="py-14 sm:py-16 lg:py-24"
      style={{ backgroundColor: agroTheme.creamMuted }}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p
              className="font-medium mb-3 sm:mb-4 uppercase tracking-wider text-xs sm:text-sm"
              style={{ color: agroTheme.olive }}
            >
              {t.eyebrow}
            </p>
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-balance leading-tight"
              style={{ fontFamily: "var(--font-display)", color: agroTheme.dark }}
            >
              {t.title}
            </h2>
            <p
              className="text-base sm:text-lg leading-relaxed text-pretty mb-8"
              style={{ color: `${agroTheme.dark}cc` }}
            >
              {t.description}
            </p>
            <Button
              size="lg"
              className="hover:opacity-90 w-full sm:w-auto"
              style={{ backgroundColor: agroTheme.olive, color: agroTheme.cream }}
              asChild
            >
              <Link href="/agro#contacto">
                {t.cta}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          <div
            className={`transition-all duration-1000 delay-150 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="overflow-hidden rounded-2xl shadow-[0_20px_45px_-15px_rgba(30,77,47,0.35)]">
              <Image
                src="/agroImage5.jpg"
                alt={t.imageAlt}
                width={2000}
                height={1241}
                className="w-full h-auto"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function AgroContentSections() {
  const { language } = useLanguage()
  const t = content[language]

  return (
    <>
      <AgroBannerSection />

      <AgroSplitSection
        eyebrow={t.splits[0].eyebrow}
        title={t.splits[0].title}
        description={t.splits[0].description}
        bullets={t.splits[0].bullets}
        imageSrc="/agroImage3.jpg"
        imageAlt={t.splits[0].imageAlt}
        imageWidth={6720}
        imageHeight={4480}
      />

      <AgroSplitSection
        eyebrow={t.splits[1].eyebrow}
        title={t.splits[1].title}
        description={t.splits[1].description}
        bullets={t.splits[1].bullets}
        imageSrc="/agroImage4.jpg"
        imageAlt={t.splits[1].imageAlt}
        imageWidth={3655}
        imageHeight={3587}
        reversed
        backgroundColor={agroTheme.dark}
        textColor={agroTheme.cream}
        iconColor={agroTheme.oliveMuted}
      />

      <AgroSplitSection
        eyebrow={t.splits[2].eyebrow}
        title={t.splits[2].title}
        description={t.splits[2].description}
        bullets={t.splits[2].bullets}
        imageSrc="/agroImage7.jpg"
        imageAlt={t.splits[2].imageAlt}
        imageWidth={3000}
        imageHeight={2000}
      />

      <AgroCtaSection />
    </>
  )
}
