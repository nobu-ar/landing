"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { agroTheme } from "./theme"
import { useLanguage } from "@/lib/i18n/language-context"

const content = {
  es: {
    eyebrow: "Soluciones para el agro",
    title: "Tecnología que cultiva resultados",
  },
  en: {
    eyebrow: "Solutions for agriculture",
    title: "Technology that grows results",
  },
} as const

export function AgroHeroSection() {
  const [isVisible, setIsVisible] = React.useState(false)
  const { language } = useLanguage()
  const t = content[language]

  React.useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section
      className="relative min-h-screen flex flex-col lg:flex-row pt-16 sm:pt-[4.5rem] lg:pt-20 overflow-hidden"
      style={{ backgroundColor: agroTheme.cream }}
    >
      {/* Left — logo & copy */}
      <div className="relative z-10 flex w-full lg:w-1/2 flex-col justify-center items-center px-5 sm:px-8 lg:px-10 xl:px-16 py-10 sm:py-12 lg:py-16 min-h-[55vh] lg:min-h-screen text-center">
        <div
          className={`max-w-xl transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="mb-6 sm:mb-8 items-center justify-center">
            <div className="flex items-center justify-center">
              <Image
                src="/svg/nobuAgro.svg"
                alt="Nobu Agro"
                width={200}
                height={200}
                className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-44 lg:h-44"
                priority
              />
            </div>
          </div>

          <p
            className="font-medium mb-3 sm:mb-4 uppercase tracking-wider text-xs sm:text-sm items-center justify-center text-center"
            style={{ color: agroTheme.olive }}
          >
            {t.eyebrow}
          </p>

          <h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[3.25rem] font-bold mb-4 sm:mb-6 text-balance leading-tight"
            style={{ fontFamily: "var(--font-display)", color: agroTheme.dark }}
          >
            {t.title}
          </h1>

        

          <Button
            size="lg"
            variant="outline"
            className="backdrop-blur-sm hover:opacity-90 w-full sm:w-auto"
            style={{
              borderColor: `${agroTheme.dark}40`,
              backgroundColor: `${agroTheme.olive}18`,
              color: agroTheme.dark,
            }}
            asChild
          >
          </Button>
        </div>
      </div>

      {/* Right — full-bleed image */}
      <div className="relative w-full lg:w-1/2 min-h-[45vh] sm:min-h-[50vh] lg:min-h-screen flex-1 lg:flex-none">
        <Image
          src="/agroImage.jpg"
          alt="Campo agrícola al atardecer"
          fill
          className="object-cover object-center lg:object-center"
          sizes="(max-width: 1023px) 100vw, 50vw"
          priority
        />
        <div
          className="absolute inset-0 lg:hidden"
          style={{
            background: `linear-gradient(to bottom, ${agroTheme.cream} 0%, transparent 18%)`,
          }}
        />
        <div
          className="absolute inset-y-0 left-0 w-16 hidden lg:block"
          style={{
            background: `linear-gradient(to right, ${agroTheme.cream}, transparent)`,
          }}
        />
      </div>
    </section>
  )
}
