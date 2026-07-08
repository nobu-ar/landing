"use client"

import React from "react"
import { 
  Users, 
  Heart, 
  Building2, 
  Wine, 
  ShoppingCart, 
  Share2,
  Megaphone,
  Dumbbell,
  Bot,
  ArrowRight
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

const services: Array<{
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  image: string;
  href?: string;
}> = [
  {
    icon: Building2,
    title: "Financieras",
    description: "Software para gestión de préstamos, inversiones, carteras y cobranzas con análisis de riesgo automatizado.",
    image: "/financiera.png",
    href: "/financieras",
  },
  {
    icon: Users,
    title: "Clubes",
    description: "Sistema integral para gestionar socios, cuotas, eventos y beneficios. Todo en un solo lugar con acceso digital.",
    image: "/club.png",
    href: "/clubes",
  },
  {
    icon: Wine,
    title: "Bares",
    description: "Sistema POS, control de inventario, comandas digitales y análisis de ventas para optimizar tu local.",
    image: "/bar.png",
    href: "/bar",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    description: "Tienda online completa con catálogo, carrito, pagos integrados y panel de administración profesional.",
    image: "/emarket.png",
    href: "/market",
  },
  {
    icon: Heart,
    title: "Mutuales",
    description: "Plataforma completa para administrar afiliados, servicios de salud, subsidios y trámites con total transparencia.",
    image: "/mutual.png",
    href: "/mutuales",
  },
  {
    icon: Share2,
    title: "Big Data",
    description: "Plataforma de análisis de datos de redes sociales. Carga perfiles y obtén reportes específicos con métricas detalladas.",
    image: "/redes.png",
    href: "/redes",
  },
  /*{
    icon: Megaphone,
    title: "Marketing tools",
    description: "Gestiona clientes, campañas, métricas y reportes. Workflow completo para agencias digitales.",
    image: "/marketing.png",
    href: "/agencias-marketing",
  },*/
  {
    icon: Dumbbell,
    title: "Gimnasios",
    description: "Sistema completo para gestionar membresías, clases, instructores y pagos. Control total de tu centro fitness.",
    image: "/gym.png",
    href: "/gimnasios",
  },
  {
    icon: Bot,
    title: "Chatbot",
    description: "Asistente virtual inteligente con IA para atención al cliente 24/7, automatización de respuestas y integración multi-canal.",
    image: "/chatbot.png",
    href: "/chatbot",
  }
]

export function ServicesSection() {
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
      className="py-16 sm:py-20 lg:py-28"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3E%3Cg mask='url(%26quot%3B%23SvgjsMask1002%26quot%3B)' fill='none'%3E%3Crect width='1440' height='560' x='0' y='0' fill='url(%26quot%3B%23SvgjsLinearGradient1003%26quot%3B)'%3E%3C/rect%3E%3Cpath d='M1440 0L780.99 0L1440 186.08z' fill='rgba(255, 255, 255, .1)'%3E%3C/path%3E%3Cpath d='M780.99 0L1440 186.08L1440 186.77L496.47 0z' fill='rgba(255, 255, 255, .075)'%3E%3C/path%3E%3Cpath d='M496.47 0L1440 186.77L1440 305.56L441.66 0z' fill='rgba(255, 255, 255, .05)'%3E%3C/path%3E%3Cpath d='M441.6600000000001 0L1440 305.56L1440 467.97L400.4500000000001 0z' fill='rgba(255, 255, 255, .025)'%3E%3C/path%3E%3Cpath d='M0 560L544.32 560L0 476.18z' fill='rgba(0, 0, 0, .1)'%3E%3C/path%3E%3Cpath d='M0 476.18L544.32 560L758.5300000000001 560L0 234.53z' fill='rgba(0, 0, 0, .075)'%3E%3C/path%3E%3Cpath d='M0 234.52999999999997L758.5300000000001 560L1070.65 560L0 141.60999999999996z' fill='rgba(0, 0, 0, .05)'%3E%3C/path%3E%3Cpath d='M0 141.60999999999996L1070.65 560L1325.2 560L0 141.54999999999995z' fill='rgba(0, 0, 0, .025)'%3E%3C/path%3E%3C/g%3E%3Cdefs%3E%3Cmask id='SvgjsMask1002'%3E%3Crect width='1440' height='560' fill='%23ffffff'%3E%3C/rect%3E%3C/mask%3E%3ClinearGradient x1='15.28%25' y1='-39.29%25' x2='84.72%25' y2='139.29%25' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient1003'%3E%3Cstop stop-color='%233a5dd8' offset='0'%3E%3C/stop%3E%3Cstop stop-color='%23204ece' offset='0.5'%3E%3C/stop%3E%3Cstop stop-color='%231a3fa0' offset='1'%3E%3C/stop%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="container mx-auto px-4 lg:px-8">
        {/* Services grid */}
        <div className={`transition-all duration-2000 overflow-visible ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
            {services.map((service, index) => {
              const cardContent = (
                <Card className="group bg-gray-100 transition-all duration-500 ease-out w-full min-h-[220px] sm:min-h-[240px] flex flex-row rounded shadow-lg hover:shadow-[0_25px_50px_-12px_rgba(11,217,146,0.45)] hover:scale-[1.01] origin-center relative overflow-hidden gap-0 border-none">
                  <div
                    className="absolute inset-0 z-0"
                    style={{
                      backgroundImage: 'url(/wpservices.png)',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                    }}
                  />
                  <div className="relative z-10 h-auto w-[42%] sm:w-5/12 shrink-0">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover border-none"
                    />
                  </div>
                  <div className="relative z-10 flex-1 flex flex-col p-4 sm:p-5 lg:p-6 justify-center">
                    <CardHeader className="p-0">
                      <CardTitle className="text-base sm:text-lg lg:text-xl mb-2" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-secondary)' }}>
                        {service.title}
                      </CardTitle>
                      <CardDescription style={{ color: 'black' }} className="text-xs sm:text-sm lg:text-[0.95rem] leading-relaxed">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-0 pt-3">
                    </CardContent>
                  </div>
                </Card>
              )
              return (
                <div key={index} className="overflow-hidden py-1 sm:py-2">
                  {service.href ? (
                    <Link href={service.href} className="block">
                      {cardContent}
                    </Link>
                  ) : (
                    cardContent
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-8 sm:mt-12">
        {/*<Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-sm sm:text-base px-5 sm:px-8 py-4 sm:py-6 w-full sm:w-auto max-w-xs sm:max-w-none"
              style={{ color: 'black', lineHeight: '4px' } as React.CSSProperties}
              asChild
            >
              <Link href="#servicios" style={{ color: 'black', lineHeight: '4px' } as React.CSSProperties}>
                Ver todos los servicios
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            */}
        </div>
      </div>
    </section>
  )
}
