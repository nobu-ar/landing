"use client"

import React from "react"
import { Rocket, Zap, ChartNoAxesColumnIncreasing } from "lucide-react"

const features = [
  {
    icon: ChartNoAxesColumnIncreasing,
    title: "Automatizar procesos",
    description: "Automatizamos procesos complejos para que puedas enfocarte en lo que realmente importa: tu negocio."
  },
  {
    icon: Rocket,
    title: "Te Acercamos al Futuro",
    description: "Nuestros sistemas se basan en la implementación de IA y Big Data logrando transformar la manera de gestionar y escalar tus negocios."
  },
  {
    icon: Zap,
    title: "Menos Burocracia",
    description: "Simplificamos procesos complejos para que puedas enfocarte en lo que realmente importa: tu negocio."
  }
]

export function AboutSection() {
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
      id="nosotros" 
      ref={sectionRef} 
      className="py-16 sm:py-20 lg:py-28"
      style={{
        backgroundColor: '#204ece',
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3E%3Cg mask='url(%26quot%3B%23SvgjsMask1018%26quot%3B)' fill='none'%3E%3Crect width='1440' height='560' x='0' y='0' fill='url(%26quot%3B%23SvgjsLinearGradient1019%26quot%3B)'%3E%3C/rect%3E%3Cpath d='M0 0L709.96 0L0 3.06z' fill='rgba(255, 255, 255, .1)'%3E%3C/path%3E%3Cpath d='M0 3.06L709.96 0L950.4300000000001 0L0 74.51z' fill='rgba(255, 255, 255, .075)'%3E%3C/path%3E%3Cpath d='M0 74.51L950.4300000000001 0L1125.78 0L0 372.9z' fill='rgba(255, 255, 255, .05)'%3E%3C/path%3E%3Cpath d='M0 372.9L1125.78 0L1323.6 0L0 392.21z' fill='rgba(255, 255, 255, .025)'%3E%3C/path%3E%3Cpath d='M1440 560L957.63 560L1440 338.47z' fill='rgba(0, 0, 0, .1)'%3E%3C/path%3E%3Cpath d='M1440 338.47L957.63 560L508.11 560L1440 304.13z' fill='rgba(0, 0, 0, .075)'%3E%3C/path%3E%3Cpath d='M1440 304.13L508.11 560L493.74 560L1440 222.26z' fill='rgba(0, 0, 0, .05)'%3E%3C/path%3E%3Cpath d='M1440 222.26L493.74 560L206.38 560L1440 165.54z' fill='rgba(0, 0, 0, .025)'%3E%3C/path%3E%3C/g%3E%3Cdefs%3E%3Cmask id='SvgjsMask1018'%3E%3Crect width='1440' height='560' fill='%23ffffff'%3E%3C/rect%3E%3C/mask%3E%3ClinearGradient x1='15.28%25' y1='-39.29%25' x2='84.72%25' y2='139.29%25' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient1019'%3E%3Cstop stop-color='%233a5dd8' offset='0'%3E%3C/stop%3E%3Cstop stop-color='%23204ece' offset='0.5'%3E%3C/stop%3E%3Cstop stop-color='%231a3fa0' offset='1'%3E%3C/stop%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`} style={{ color: '#ffffff' }}>
            <p className="text-primary font-medium mb-4 uppercase tracking-wider text-sm">Sobre Nosotros</p>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 sm:mb-6 text-balance"
              style={{ fontFamily: 'var(--font-display)', color: '#ffffff' }}
            >
              Innovación para el Futuro Digital
            </h2>
            <p className="text-base sm:text-lg mb-7 sm:mb-8 text-pretty leading-relaxed" style={{ color: '#ffffff' }}>
              Somos la empresa que vino a revolucionar la gestión empresarial. 
              Nuestro compromiso es eliminar la burocracia innecesaria y brindarte 
              soluciones que impulsen el crecimiento de tu negocio.
            </p>

            <div className="space-y-5 sm:space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1" style={{ fontFamily: 'var(--font-display)', color: '#ffffff' }}>
                      {feature.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: '#ffffff' }}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Visual */}
          <div className={`relative transition-all duration-1000 delay-200 w-full max-w-xl mx-auto lg:max-w-none ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
          <img 
              src="/celularNobu2.png" 
              alt="Nobu Mobile App" 
              className={`mb-4 sm:mb-8 lg:mb-0 w-full max-w-[600px] lg:max-w-[1100px] h-auto filter-[drop-shadow(0_8px_18px_rgba(0,0,0,.25))_drop-shadow(0_20px_35px_rgba(0,0,0,.18))] transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
