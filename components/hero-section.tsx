"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/lib/i18n/language-context"

const content = {
  es: {
    headline: "Engineering, AI & Data para transformar tu negocio",
    subtitle:
      "Diseñamos sistemas a medida y plataformas inteligentes que conectan procesos, automatizan operaciones y convierten tus datos en valor real.",
    cta: "Agendar reunión",
    ctaSecondary: "Explorar Servicios",
  },
  en: {
    headline: "Engineering, AI & Data to transform your business",
    subtitle:
      "We design custom systems and intelligent platforms that connect processes, automate operations, and turn your data into real value.",
    cta: "Book a meeting",
    ctaSecondary: "Explore Services",
  },
} as const

export function HeroSection() {
  const [isVisible, setIsVisible] = React.useState(false)
  const { language } = useLanguage()
  const t = content[language]

  React.useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center pt-24 pb-10 sm:pb-0"
      style={{
        backgroundColor: '#204ece',
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' version='1.1' width='1440' height='250' preserveAspectRatio='none' viewBox='0 0 1440 250'%3E%3Cg mask='url(%26quot%3B%23SvgjsMask1073%26quot%3B)' fill='none'%3E%3Crect width='1440' height='250' x='0' y='0' fill='url(%26quot%3B%23SvgjsLinearGradient1073%26quot%3B)'%3E%3C/rect%3E%3Cpath d='M44 250L294 0L558 0L308 250z' fill='url(%26quot%3B%23SvgjsLinearGradient1074%26quot%3B)'%3E%3C/path%3E%3Cpath d='M249.6 250L499.6 0L654.1 0L404.1 250z' fill='url(%26quot%3B%23SvgjsLinearGradient1074%26quot%3B)'%3E%3C/path%3E%3Cpath d='M517.2 250L767.2 0L1070.2 0L820.2 250z' fill='url(%26quot%3B%23SvgjsLinearGradient1074%26quot%3B)'%3E%3C/path%3E%3Cpath d='M744.8 250L994.8 0L1053.3 0L803.3 250z' fill='url(%26quot%3B%23SvgjsLinearGradient1074%26quot%3B)'%3E%3C/path%3E%3Cpath d='M1394 250L1144 0L811 0L1061 250z' fill='url(%26quot%3B%23SvgjsLinearGradient1075%26quot%3B)'%3E%3C/path%3E%3Cpath d='M1186.4 250L936.4 0L805.9 0L1055.9 250z' fill='url(%26quot%3B%23SvgjsLinearGradient1075%26quot%3B)'%3E%3C/path%3E%3Cpath d='M939.8 250L689.8 0L394.3 0L644.3 250z' fill='url(%26quot%3B%23SvgjsLinearGradient1075%26quot%3B)'%3E%3C/path%3E%3Cpath d='M708.2 250L458.2 0L417.7 0L667.7 250z' fill='url(%26quot%3B%23SvgjsLinearGradient1075%26quot%3B)'%3E%3C/path%3E%3Cpath d='M1205.19 250L1440 15.19L1440 250z' fill='url(%26quot%3B%23SvgjsLinearGradient1074%26quot%3B)'%3E%3C/path%3E%3Cpath d='M0 250L234.81 250L0 15.19z' fill='url(%26quot%3B%23SvgjsLinearGradient1075%26quot%3B)'%3E%3C/path%3E%3C/g%3E%3Cdefs%3E%3Cmask id='SvgjsMask1073'%3E%3Crect width='1440' height='250' fill='%23ffffff'%3E%3C/rect%3E%3C/mask%3E%3ClinearGradient x1='0%25' y1='0%25' x2='100%25' y2='100%25' id='SvgjsLinearGradient1073'%3E%3Cstop stop-color='%233a5dd8' offset='0'%3E%3C/stop%3E%3Cstop stop-color='%23204ece' offset='0.5'%3E%3C/stop%3E%3Cstop stop-color='%231a3fa0' offset='1'%3E%3C/stop%3E%3C/linearGradient%3E%3ClinearGradient x1='0%25' y1='100%25' x2='100%25' y2='0%25' id='SvgjsLinearGradient1074'%3E%3Cstop stop-color='%233a5dd8' stop-opacity='0.3' offset='0'%3E%3C/stop%3E%3Cstop stop-opacity='0' stop-color='%231a3fa0' offset='0.66'%3E%3C/stop%3E%3C/linearGradient%3E%3ClinearGradient x1='100%25' y1='100%25' x2='0%25' y2='0%25' id='SvgjsLinearGradient1075'%3E%3Cstop stop-color='%231a3fa0' stop-opacity='0.3' offset='0'%3E%3C/stop%3E%3Cstop stop-opacity='0' stop-color='%233a5dd8' offset='0.66'%3E%3C/stop%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left side - Text content */}
          <div className="flex-1 text-center lg:text-left w-full" style={{ color: 'rgba(255, 255, 255, 1)' }}>
            {/* Main headline */}
            <h1 
              className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-5 sm:mb-6 text-balance leading-tight transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ fontFamily: 'var(--font-display)', color: 'var(--color-white)' }}
            >
              <style dangerouslySetInnerHTML={{__html: `
                @keyframes fadeInOut {
                  0%, 100% {
                    opacity: 1;
                  }
                  50% {
                    opacity: 0.3;
                  }
                }
                .green-pulse {
                  animation: fadeInOut 2s ease-in-out infinite;
                }
              `}} />
              {t.headline}
            </h1>

            {/* Subtitle */}
            <p className={`text-base sm:text-lg md:text-xl mb-8 sm:mb-10 max-w-2xl mx-auto lg:mx-0 text-pretty leading-relaxed transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ color: 'var(--color-white)' }}>
            {t.subtitle}
            </p>

            {/* CTA Buttons */}
            <div className={`flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-sm sm:text-base px-5 sm:px-8 py-4 sm:py-6 w-full sm:w-auto"
                style={{ color: 'black', lineHeight: '4px' } as React.CSSProperties}
                asChild
              >
                <Link href="#contacto" style={{ color: 'rgba(0, 0, 0, 1)', lineHeight: '4px' } as React.CSSProperties}>
                  {t.cta}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-border hover:bg-secondary text-sm sm:text-base px-5 sm:px-8 py-4 sm:py-6 bg-transparent w-full sm:w-auto"
                style={{ backgroundColor: 'rgba(23, 63, 171, 1)', borderColor: 'rgba(23, 63, 171, 1)', color: 'white' }}
                asChild
              >
                <Link href="#servicios" style={{ color: 'white' }}>
                  {t.ctaSecondary}
                </Link>
              </Button>
            </div>
          </div>

          {/* Right side - Image */}
          <div className={`flex-1 flex items-center justify-center lg:justify-end transition-all duration-1000 delay-700 w-full ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <img 
              src="/celnobu.png" 
              alt="Nobu Mobile App" 
              className={`mb-4 sm:mb-8 lg:mb-0 w-full max-w-[600px] lg:max-w-[1100px] h-auto filter-[drop-shadow(0_8px_18px_rgba(0,0,0,.25))_drop-shadow(0_20px_35px_rgba(0,0,0,.18))] transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
