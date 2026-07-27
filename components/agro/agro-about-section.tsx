"use client"

import React from "react"
import Image from "next/image"
import { Rocket, Zap, ChartNoAxesColumnIncreasing, Award, Users, Clock } from "lucide-react"
import { agroTheme } from "./theme"
import { useLanguage } from "@/lib/i18n/language-context"

const content = {
  es: {
    eyebrow: "Sobre Nosotros",
    title: "Tecnología con raíces en el campo",
    description:
      "En Nobu Agro combinamos experiencia en el rubro con desarrollo de software a medida. Creamos plataformas seguras y confiables para productores y empresas del sector, con el respaldo de años trabajando junto al agro argentino.",
    imageAlt: "Equipo y trabajo en el campo agrícola",
    features: [
      {
        icon: ChartNoAxesColumnIncreasing,
        title: "Datos que impulsan el campo",
        description:
          "Transformamos la información de tu producción en decisiones claras para optimizar cada campaña.",
      },
      {
        icon: Rocket,
        title: "Innovación para el agro",
        description:
          "Aplicamos IA, automatización y Big Data para modernizar la gestión de cultivos y operaciones rurales.",
      },
      {
        icon: Zap,
        title: "Menos complejidad, más resultados",
        description:
          "Simplificamos procesos para que te enfoques en producir, mientras la tecnología trabaja por vos.",
      },
    ],
    highlights: [
      { icon: Award, value: "#1", label: "Inmediatez de respuestas" },
      { icon: Users, value: "100%", label: "Adaptaciones a medida" },
      { icon: Clock, value: "24/7", label: "Soporte dedicado" },
    ],
  },
  en: {
    eyebrow: "About Us",
    title: "Technology rooted in the field",
    description:
      "At Nobu Agro we combine industry experience with custom software development. We build secure, reliable platforms for producers and agribusinesses, backed by years working alongside Argentine agriculture.",
    imageAlt: "Team and work in the agricultural field",
    features: [
      {
        icon: ChartNoAxesColumnIncreasing,
        title: "Data that drives the field",
        description:
          "We turn your production data into clear decisions to optimize every season.",
      },
      {
        icon: Rocket,
        title: "Innovation for agriculture",
        description:
          "We apply AI, automation, and Big Data to modernize crop management and rural operations.",
      },
      {
        icon: Zap,
        title: "Less complexity, more results",
        description:
          "We simplify processes so you can focus on producing, while technology works for you.",
      },
    ],
    highlights: [
      { icon: Award, value: "#1", label: "Response time" },
      { icon: Users, value: "100%", label: "Tailored solutions" },
      { icon: Clock, value: "24/7", label: "Dedicated support" },
    ],
  },
} as const

export function AgroAboutSection() {
  const [isVisible, setIsVisible] = React.useState(false)
  const sectionRef = React.useRef<HTMLElement>(null)
  const { language } = useLanguage()
  const t = content[language]

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="nosotros"
      ref={sectionRef}
      className="py-16 sm:py-20 lg:py-28 overflow-hidden"
      style={{ backgroundColor: agroTheme.cream }}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div
          className={`max-w-2xl mx-auto text-center mb-10 sm:mb-12 lg:mb-14 transition-all duration-1000 ${
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
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-balance leading-tight"
            style={{ fontFamily: "var(--font-display)", color: agroTheme.dark }}
          >
            {t.title}
          </h2>
        </div>

        <div
          className={`relative max-w-6xl mx-auto transition-all duration-1000 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div
            className="absolute -inset-3 sm:-inset-4 rounded-[1.75rem] sm:rounded-4xl -z-10 opacity-60"
            style={{
              background: `linear-gradient(135deg, ${agroTheme.olive}55, ${agroTheme.dark}33)`,
            }}
          />

          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_30px_60px_-20px_rgba(30,77,47,0.45)]">
            <Image
              src="/agroImage6.jpg"
              alt={t.imageAlt}
              width={7360}
              height={4912}
              className="w-full h-auto block"
              sizes="(max-width: 1152px) 100vw, 1152px"
            />

            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(to top, ${agroTheme.dark}f2 0%, ${agroTheme.dark}99 28%, transparent 62%)`,
              }}
            />
            <div
              className="absolute inset-0 hidden lg:block"
              style={{
                background: `linear-gradient(to right, ${agroTheme.dark}ee 0%, ${agroTheme.dark}99 32%, transparent 58%)`,
              }}
            />

            <div className="absolute inset-0 flex flex-col justify-end lg:justify-center lg:max-w-[48%] p-6 sm:p-8 lg:p-10 xl:p-12">
              <p
                className="text-base sm:text-lg lg:text-xl leading-relaxed text-pretty mb-6 sm:mb-8"
                style={{ color: agroTheme.cream }}
              >
                {t.description}
              </p>

              <div className="grid grid-cols-3 gap-3 sm:gap-4">
                {t.highlights.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-xl px-3 py-3 sm:px-4 sm:py-4 text-center backdrop-blur-sm"
                    style={{
                      backgroundColor: `${agroTheme.cream}14`,
                      border: `1px solid ${agroTheme.cream}25`,
                    }}
                  >
                    <item.icon
                      className="w-4 h-4 sm:w-5 sm:h-5 mx-auto mb-1.5 sm:mb-2"
                      style={{ color: agroTheme.olive }}
                    />
                    <p
                      className="text-lg sm:text-xl lg:text-2xl font-bold"
                      style={{ fontFamily: "var(--font-display)", color: agroTheme.cream }}
                    >
                      {item.value}
                    </p>
                    <p className="text-[10px] sm:text-xs leading-tight" style={{ color: `${agroTheme.cream}cc` }}>
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mt-8 sm:mt-10 lg:mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {t.features.map((feature, index) => (
            <div
              key={feature.title}
              className={`rounded-2xl p-5 sm:p-6 transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{
                backgroundColor: agroTheme.cream,
                border: `1px solid ${agroTheme.olive}35`,
                boxShadow: "0 12px 30px -18px rgba(30, 77, 47, 0.35)",
                transitionDelay: `${250 + index * 100}ms`,
              }}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                style={{ backgroundColor: `${agroTheme.olive}20` }}
              >
                <feature.icon className="w-5 h-5" style={{ color: agroTheme.olive }} />
              </div>
              <h3
                className="font-semibold mb-2 text-base sm:text-lg"
                style={{ fontFamily: "var(--font-display)", color: agroTheme.dark }}
              >
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: `${agroTheme.dark}aa` }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
