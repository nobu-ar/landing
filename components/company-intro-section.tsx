"use client"

import React from "react"
import { Shield, Cog, Database, Layers } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"

function useCounter(end: number, duration: number = 2000, start: number = 0) {
  const [count, setCount] = React.useState(start)
  const [hasStarted, setHasStarted] = React.useState(false)

  React.useEffect(() => {
    if (!hasStarted) return

    let startTime: number | null = null
    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      const easeOut = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(start + (end - start) * easeOut))

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setCount(end)
      }
    }

    requestAnimationFrame(animate)
  }, [hasStarted, end, duration, start])

  return { count, startCounter: () => setHasStarted(true) }
}

const content = {
  es: {
    eyebrow: "Sobre la empresa",
    title: "Sistemas a medida con la confianza de años en el rubro",
    description:
      "En Nobu creamos soluciones digitales personalizadas para cada cliente, con la seguridad y el respaldo que solo da la experiencia. Transformamos ideas en herramientas reales para automatizar procesos, analizar datos de gran escala y gestionar servicios de forma integral.",
    capabilities: [
      {
        icon: Cog,
        title: "Automatización de procesos",
        description: "Lo que te imagines, lo podemos construir para optimizar y automatizar cada etapa de tu operación.",
      },
      {
        icon: Database,
        title: "Análisis de datos masivos",
        description: "Procesamos y analizamos grandes volúmenes de información para darle valor a tus datos.",
      },
      {
        icon: Layers,
        title: "Gestión de servicios",
        description: "Centralizamos la administración de tus servicios en plataformas intuitivas, escalables y a medida.",
      },
      {
        icon: Shield,
        title: "Seguridad y confianza",
        description: "Desarrollamos con los más altos estándares de protección para que tu negocio opere con total tranquilidad.",
      },
    ],
    stats: [
      { label: "Empresas Activas" },
      { label: "Satisfacción" },
      { label: "Soporte" },
    ],
  },
  en: {
    eyebrow: "About the company",
    title: "Custom systems backed by years of industry trust",
    description:
      "At Nobu we create personalized digital solutions for every client, with the security and support that only real experience can provide. We turn ideas into real tools to automate processes, analyze large-scale data, and manage services end to end.",
    capabilities: [
      {
        icon: Cog,
        title: "Process automation",
        description: "Whatever you can imagine, we can build it to optimize and automate every stage of your operation.",
      },
      {
        icon: Database,
        title: "Big data analysis",
        description: "We process and analyze large volumes of information to add real value to your data.",
      },
      {
        icon: Layers,
        title: "Service management",
        description: "We centralize your service management in intuitive, scalable, and tailored platforms.",
      },
      {
        icon: Shield,
        title: "Security and trust",
        description: "We build with the highest protection standards so your business runs with total peace of mind.",
      },
    ],
    stats: [
      { label: "Active Businesses" },
      { label: "Satisfaction" },
      { label: "Support" },
    ],
  },
} as const

export function CompanyIntroSection() {
  const [isVisible, setIsVisible] = React.useState(false)
  const sectionRef = React.useRef<HTMLElement>(null)
  const { language } = useLanguage()
  const t = content[language]
  const counter50 = useCounter(50, 2000)
  const counter98 = useCounter(98, 2000)
  const counter24 = useCounter(24, 2000)

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

  React.useEffect(() => {
    if (!isVisible) return

    const timer = setTimeout(() => {
      counter50.startCounter()
      counter98.startCounter()
      counter24.startCounter()
    }, 300)

    return () => clearTimeout(timer)
  }, [isVisible])

  return (
    <section
      ref={sectionRef}
      className="py-16 sm:py-20 lg:py-28"
      style={{
        backgroundColor: "#204ece",
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3E%3Cg mask='url(%26quot%3B%23SvgjsMask1018%26quot%3B)' fill='none'%3E%3Crect width='1440' height='560' x='0' y='0' fill='url(%26quot%3B%23SvgjsLinearGradient1019%26quot%3B)'%3E%3C/rect%3E%3Cpath d='M0 0L709.96 0L0 3.06z' fill='rgba(255, 255, 255, .1)'%3E%3C/path%3E%3Cpath d='M0 3.06L709.96 0L950.4300000000001 0L0 74.51z' fill='rgba(255, 255, 255, .075)'%3E%3C/path%3E%3Cpath d='M0 74.51L950.4300000000001 0L1125.78 0L0 372.9z' fill='rgba(255, 255, 255, .05)'%3E%3C/path%3E%3Cpath d='M0 372.9L1125.78 0L1323.6 0L0 392.21z' fill='rgba(255, 255, 255, .025)'%3E%3C/path%3E%3Cpath d='M1440 560L957.63 560L1440 338.47z' fill='rgba(0, 0, 0, .1)'%3E%3C/path%3E%3Cpath d='M1440 338.47L957.63 560L508.11 560L1440 304.13z' fill='rgba(0, 0, 0, .075)'%3E%3C/path%3E%3Cpath d='M1440 304.13L508.11 560L493.74 560L1440 222.26z' fill='rgba(0, 0, 0, .05)'%3E%3C/path%3E%3Cpath d='M1440 222.26L493.74 560L206.38 560L1440 165.54z' fill='rgba(0, 0, 0, .025)'%3E%3C/path%3E%3C/g%3E%3Cdefs%3E%3Cmask id='SvgjsMask1018'%3E%3Crect width='1440' height='560' fill='%23ffffff'%3E%3C/rect%3E%3C/mask%3E%3ClinearGradient x1='15.28%25' y1='-39.29%25' x2='84.72%25' y2='139.29%25' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient1019'%3E%3Cstop stop-color='%233a5dd8' offset='0'%3E%3C/stop%3E%3Cstop stop-color='%23204ece' offset='0.5'%3E%3C/stop%3E%3Cstop stop-color='%231a3fa0' offset='1'%3E%3C/stop%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div
          className={`max-w-3xl mx-auto text-center mb-12 sm:mb-16 lg:mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-primary font-medium mb-4 uppercase tracking-wider text-sm">
            {t.eyebrow}
          </p>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 sm:mb-6 text-balance"
            style={{ fontFamily: "var(--font-display)", color: "#ffffff" }}
          >
            {t.title}
          </h2>
          <p
            className="text-base sm:text-lg text-pretty leading-relaxed"
            style={{ color: "#ffffff" }}
          >
            {t.description}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {t.capabilities.map((item, index) => (
            <div
              key={item.title}
              className={`rounded-xl p-5 sm:p-6 backdrop-blur-sm transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.08)",
                border: "1px solid rgba(148, 238, 207, 0.15)",
                transitionDelay: `${index * 100}ms`,
              }}
            >
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3
                className="font-semibold mb-2 text-base sm:text-lg"
                style={{ fontFamily: "var(--font-display)", color: "#ffffff" }}
              >
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255, 255, 255, 0.85)" }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div
          className={`mt-12 sm:mt-16 lg:mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center">
            <p
              className="text-3xl md:text-4xl font-bold"
              style={{ fontFamily: "var(--font-display)", color: "#ffffff" }}
            >
              {counter50.count}+
            </p>
            <p className="text-sm mt-1" style={{ color: "#ffffff" }}>
              {t.stats[0].label}
            </p>
          </div>
          <div className="text-center">
            <p
              className="text-3xl md:text-4xl font-bold"
              style={{ fontFamily: "var(--font-display)", color: "#ffffff" }}
            >
              {counter98.count}%
            </p>
            <p className="text-sm mt-1" style={{ color: "#ffffff" }}>
              {t.stats[1].label}
            </p>
          </div>
          <div className="text-center">
            <p
              className="text-3xl md:text-4xl font-bold"
              style={{ fontFamily: "var(--font-display)", color: "#ffffff" }}
            >
              {counter24.count}/7
            </p>
            <p className="text-sm mt-1" style={{ color: "#ffffff" }}>
              {t.stats[2].label}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
