"use client"

import React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Video, Mail, Phone } from "lucide-react"

export function BookingSection() {
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
      id="contacto" 
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
        {/* Header */}
        <div className={`max-w-3xl mx-auto text-center mb-10 sm:mb-14 lg:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="font-medium mb-4 uppercase tracking-wider text-sm" style={{ color: 'white' }}>Agendá una Reunión</p>
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 sm:mb-6 text-balance"
            style={{ fontFamily: 'var(--font-display)', color: 'white' }}
          >
            Conversemos sobre tu proyecto
          </h2>
          <p className="text-base sm:text-lg text-pretty" style={{ color: 'white' }}>
            Elegí el método que prefieras para agendar una reunión con nosotros
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          
          <div className="grid lg:grid-cols-2 gap-5 sm:gap-8">
            {/* Google Calendar Card */}
            <Card className={`bg-gray-100 border-border hover:border-primary/50 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`} style={{ transitionDelay: '200ms' }}>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium" style={{ color: '#000000' }}>Google Calendar</span>
                </div>
                <CardTitle style={{ fontFamily: 'var(--font-display)', color: 'black' }}>Agendá directo en nuestro calendario</CardTitle>
                <CardDescription style={{ color: 'black' }}>
                  Elegí el horario que mejor te quede y recibí confirmación automática
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative w-full bg-gray-200 rounded-lg overflow-hidden h-[420px] sm:h-[510px]">
                  <iframe
                    src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2zSqgVFcuVzptWhs23heY0yUMqGW6kaNdeq4kkdwBveXI5npTpSoHFoMm655n9AESoHodN4UGZ?gv=true"
                    className="absolute top-0 left-0 w-full h-full border-0"
                    title="Agendar reunión con Nobu"
                  />
                </div>
                <div className="mt-4 p-4 bg-gray-200 rounded-lg">
                  <div className="flex items-start gap-3">
                    <Video className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium text-sm" style={{ color: 'black' }}>Reunión por Google Meet</p>
                      <p className="text-xs mt-1" style={{ color: 'black' }}>
                        Te enviaremos el link de la videollamada por email
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
              
            </Card>

            {/* Contact Info Card */}
            <Card className={`bg-gray-100 border-border hover:border-primary/50 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`} style={{ transitionDelay: '400ms' }}>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Mail className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium" style={{ color: '#000000' }}>Contacto Directo</span>
                </div>
                <CardTitle style={{ fontFamily: 'var(--font-display)', color: 'black' }}>O escribinos directamente</CardTitle>
                <CardDescription style={{ color: 'black' }}>
                  Preferís coordinar por otro medio? Contactanos por email o WhatsApp
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="p-4 bg-gray-200 rounded-lg hover:bg-primary/10 transition-colors">
                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-primary mt-0.5" />
                      <div className="flex-1">
                        <p className="font-medium text-sm mb-1" style={{ color: 'black' }}>Email</p>
                        <a 
                          href="mailto:info@nobu.com.ar" 
                          className="hover:opacity-80 transition-colors text-sm"
                          style={{ color: 'black' }}
                        >
                          info@nobu.com.ar
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-gray-200 rounded-lg hover:bg-primary/10 transition-colors">
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-primary mt-0.5" />
                      <div className="flex-1">
                        <p className="font-medium text-sm mb-1" style={{ color: 'black' }}>WhatsApp</p>
                        <a 
                          href="https://wa.me/5493844405628" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="hover:opacity-80 transition-colors text-sm"
                          style={{ color: 'black' }}
                        >
                          +54 9 3844 40-5628
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-border">
                  <h4 className="font-semibold mb-3 text-sm" style={{ color: 'black' }}>Horarios de atención</h4>
                  <div className="space-y-2 text-sm" style={{ color: 'black' }}>
                    <div className="flex justify-between gap-3">
                      <span>Lunes a Viernes</span>
                      <span>9:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between gap-3">
                      <span>Sábados</span>
                      <span>9:00 - 13:00</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
                  <p className="text-sm" style={{ color: 'black' }}>
                    <strong className="text-primary">Respuesta garantizada</strong> en menos de 24 horas hábiles
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
