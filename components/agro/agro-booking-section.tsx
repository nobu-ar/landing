"use client"

import React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Video, Mail, Phone } from "lucide-react"
import { agroTheme } from "./theme"
import { useLanguage } from "@/lib/i18n/language-context"

const content = {
  es: {
    eyebrow: "Agendá una Reunión",
    title: "Conversemos sobre tu proyecto agro",
    description: "Elegí el método que prefieras para coordinar una reunión con nuestro equipo",
    googleCalendar: "Google Calendar",
    calendarTitle: "Agendá directo en nuestro calendario",
    calendarDescription: "Elegí el horario que mejor te quede y recibí confirmación automática",
    meetTitle: "Reunión por Google Meet",
    meetDescription: "Te enviaremos el link de la videollamada por email",
    directContact: "Contacto Directo",
    contactTitle: "O escribinos directamente",
    contactDescription: "Preferís coordinar por otro medio? Contactanos por email o WhatsApp",
    email: "Email",
    whatsapp: "WhatsApp",
    hoursTitle: "Horarios de atención",
    weekdays: "Lunes a Viernes",
    saturdays: "Sábados",
    guaranteed: "Respuesta garantizada",
    guaranteedRest: "en menos de 24 horas hábiles",
  },
  en: {
    eyebrow: "Book a Meeting",
    title: "Let's talk about your agro project",
    description: "Choose the method you prefer to coordinate a meeting with our team",
    googleCalendar: "Google Calendar",
    calendarTitle: "Book directly on our calendar",
    calendarDescription: "Pick the time that suits you best and get automatic confirmation",
    meetTitle: "Meeting via Google Meet",
    meetDescription: "We'll send you the video call link by email",
    directContact: "Direct Contact",
    contactTitle: "Or write to us directly",
    contactDescription: "Prefer another way to reach us? Contact us by email or WhatsApp",
    email: "Email",
    whatsapp: "WhatsApp",
    hoursTitle: "Business hours",
    weekdays: "Monday to Friday",
    saturdays: "Saturdays",
    guaranteed: "Guaranteed response",
    guaranteedRest: "in less than 24 business hours",
  },
} as const

export function AgroBookingSection() {
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
      id="contacto"
      ref={sectionRef}
      className="py-16 sm:py-20 lg:py-28"
      style={{
        backgroundColor: agroTheme.darkMuted,
        background: `linear-gradient(160deg, ${agroTheme.darkMuted} 0%, ${agroTheme.dark} 40%, #2d6a4f 100%)`,
      }}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div
          className={`max-w-3xl mx-auto text-center mb-10 sm:mb-14 lg:mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p
            className="font-medium mb-4 uppercase tracking-wider text-sm"
            style={{ color: agroTheme.olive }}
          >
            {t.eyebrow}
          </p>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 sm:mb-6 text-balance"
            style={{ fontFamily: "var(--font-display)", color: agroTheme.cream }}
          >
            {t.title}
          </h2>
          <p className="text-base sm:text-lg text-pretty" style={{ color: agroTheme.cream }}>
            {t.description}
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-5 sm:gap-8">
            <Card
              className={`border transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{
                backgroundColor: agroTheme.cream,
                borderColor: `${agroTheme.olive}40`,
                transitionDelay: "200ms",
              }}
            >
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="w-5 h-5" style={{ color: agroTheme.olive }} />
                  <span className="text-sm font-medium" style={{ color: agroTheme.dark }}>
                    {t.googleCalendar}
                  </span>
                </div>
                <CardTitle style={{ fontFamily: "var(--font-display)", color: agroTheme.dark }}>
                  {t.calendarTitle}
                </CardTitle>
                <CardDescription style={{ color: `${agroTheme.dark}bb` }}>
                  {t.calendarDescription}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div
                  className="relative w-full rounded-lg overflow-hidden h-[420px] sm:h-[510px]"
                  style={{ backgroundColor: agroTheme.creamMuted }}
                >
                  <iframe
                    src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2zSqgVFcuVzptWhs23heY0yUMqGW6kaNdeq4kkdwBveXI5npTpSoHFoMm655n9AESoHodN4UGZ?gv=true"
                    className="absolute top-0 left-0 w-full h-full border-0"
                    title="Agendar reunión con Nobu Agro"
                  />
                </div>
                <div
                  className="mt-4 p-4 rounded-lg"
                  style={{ backgroundColor: agroTheme.creamMuted }}
                >
                  <div className="flex items-start gap-3">
                    <Video className="w-5 h-5 mt-0.5" style={{ color: agroTheme.olive }} />
                    <div>
                      <p className="font-medium text-sm" style={{ color: agroTheme.dark }}>
                        {t.meetTitle}
                      </p>
                      <p className="text-xs mt-1" style={{ color: `${agroTheme.dark}bb` }}>
                        {t.meetDescription}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card
              className={`border transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{
                backgroundColor: agroTheme.cream,
                borderColor: `${agroTheme.olive}40`,
                transitionDelay: "400ms",
              }}
            >
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Mail className="w-5 h-5" style={{ color: agroTheme.olive }} />
                  <span className="text-sm font-medium" style={{ color: agroTheme.dark }}>
                    {t.directContact}
                  </span>
                </div>
                <CardTitle style={{ fontFamily: "var(--font-display)", color: agroTheme.dark }}>
                  {t.contactTitle}
                </CardTitle>
                <CardDescription style={{ color: `${agroTheme.dark}bb` }}>
                  {t.contactDescription}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div
                    className="p-4 rounded-lg transition-colors hover:opacity-90"
                    style={{ backgroundColor: agroTheme.creamMuted }}
                  >
                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 mt-0.5" style={{ color: agroTheme.olive }} />
                      <div className="flex-1">
                        <p className="font-medium text-sm mb-1" style={{ color: agroTheme.dark }}>
                          {t.email}
                        </p>
                        <a
                          href="mailto:info@nobu.com.ar"
                          className="hover:opacity-80 transition-colors text-sm"
                          style={{ color: agroTheme.dark }}
                        >
                          info@nobu.com.ar
                        </a>
                      </div>
                    </div>
                  </div>

                  <div
                    className="p-4 rounded-lg transition-colors hover:opacity-90"
                    style={{ backgroundColor: agroTheme.creamMuted }}
                  >
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 mt-0.5" style={{ color: agroTheme.olive }} />
                      <div className="flex-1">
                        <p className="font-medium text-sm mb-1" style={{ color: agroTheme.dark }}>
                          {t.whatsapp}
                        </p>
                        <a
                          href="https://wa.me/5493844405628"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:opacity-80 transition-colors text-sm"
                          style={{ color: agroTheme.dark }}
                        >
                          +54 9 3844 40-5628
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t" style={{ borderColor: `${agroTheme.olive}35` }}>
                  <h4 className="font-semibold mb-3 text-sm" style={{ color: agroTheme.dark }}>
                    {t.hoursTitle}
                  </h4>
                  <div className="space-y-2 text-sm" style={{ color: agroTheme.dark }}>
                    <div className="flex justify-between gap-3">
                      <span>{t.weekdays}</span>
                      <span>9:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between gap-3">
                      <span>{t.saturdays}</span>
                      <span>9:00 - 13:00</span>
                    </div>
                  </div>
                </div>

                <div
                  className="p-4 rounded-lg border"
                  style={{
                    backgroundColor: `${agroTheme.olive}18`,
                    borderColor: `${agroTheme.olive}40`,
                  }}
                >
                  <p className="text-sm" style={{ color: agroTheme.dark }}>
                    <strong style={{ color: agroTheme.olive }}>{t.guaranteed}</strong> {t.guaranteedRest}
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
