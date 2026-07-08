"use client"

import React from "react"
import Link from "next/link"
import { ArrowRight, Sprout, Layers } from "lucide-react"
import { heroBackground } from "@/components/service-slice/backgrounds"

const categories = [
  {
    title: "Agro",
    description: "Tecnología para el campo",
    href: "/agro",
    icon: Sprout,
    gradient: "linear-gradient(135deg, #1e4d2f 0%, #2d6a4f 45%, #87a345 100%)",
    accent: "#94eecf",
  },
  {
    title: "Otros servicios",
    description: "Financieras, clubes, e-commerce y más",
    href: "/servicios",
    icon: Layers,
    gradient: "linear-gradient(135deg, #1a3fa0 0%, #173FAB 50%, #3a5dd8 100%)",
    accent: "#94eecf",
  },
]

export function ServiceCategoriesSection() {
  const [isVisible, setIsVisible] = React.useState(false)
  const sectionRef = React.useRef<HTMLElement>(null)

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
      id="servicios"
      ref={sectionRef}
      className={`py-14 sm:py-16 lg:py-20 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={heroBackground}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12 lg:mb-14">
          <p
            className="font-medium mb-4 uppercase tracking-wider text-sm"
            style={{ color: "var(--primary)" }}
          >
            Nuestros Servicios
          </p>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-5 sm:mb-6 text-balance leading-tight"
            style={{ fontFamily: "var(--font-display)", color: "var(--color-white)" }}
          >
            Explora nuestros servicios
          </h2>
          <p
            className="text-base sm:text-lg md:text-xl text-pretty leading-relaxed max-w-2xl mx-auto"
            style={{ color: "var(--color-white)" }}
          >
            Elegí el camino que mejor se adapte a tu negocio y descubrí todo lo que Nobu puede hacer por vos.
          </p>
        </div>

        <div
          className={`max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 lg:gap-6 transition-all duration-1000 delay-150 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {categories.map((category) => (
            <Link
              key={category.title}
              href={category.href}
              className="group relative aspect-4/5 sm:aspect-3/4 max-h-[420px] w-full overflow-hidden rounded-2xl outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#204ece]"
            >
              <div
                className="absolute inset-0 origin-center transition-transform duration-700 ease-out group-hover:scale-110"
                style={{ background: category.gradient }}
              />

              <div className="relative z-10 flex h-full flex-col items-center justify-center px-5 py-8 sm:px-6 sm:py-10 text-center">
                <div className="flex flex-col items-center origin-center transition-transform duration-500 ease-out group-hover:scale-105">
                  <div className="mb-4 sm:mb-5 flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm transition-all duration-500 group-hover:bg-white/20 group-hover:scale-110">
                    <category.icon className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
                  </div>

                  <h3
                    className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2 sm:mb-3 text-balance"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {category.title}
                  </h3>

                  <p className="text-sm sm:text-base text-white/85 max-w-[220px] sm:max-w-none text-pretty mb-5 sm:mb-6">
                    {category.description}
                  </p>

                  <div className="flex items-center gap-2 text-white font-medium">
                    <span className="text-xs sm:text-sm uppercase tracking-wider opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                      Explorar
                    </span>
                    <ArrowRight
                      className="h-4 w-4 sm:h-5 sm:w-5 origin-center transition-transform duration-500 ease-out group-hover:scale-125"
                      style={{ color: category.accent }}
                    />
                  </div>
                </div>
              </div>

              <div
                className="absolute inset-0 origin-center scale-100 opacity-0 transition-all duration-700 ease-out group-hover:scale-105 group-hover:opacity-100 pointer-events-none rounded-2xl"
                style={{
                  background: `radial-gradient(circle at center, ${category.accent}22 0%, transparent 90%)`,
                }}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
