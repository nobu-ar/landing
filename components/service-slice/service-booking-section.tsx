"use client";

import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Video, Mail, Phone } from "lucide-react";
import { bookingBackground } from "./backgrounds";
import type { ServiceBookingConfig } from "./types";
import { useLanguage, type Language } from "@/lib/i18n/language-context";

interface ServiceBookingSectionProps {
  config: ServiceBookingConfig;
}

const content: Record<
  Language,
  {
    googleCalendar: string;
    calendarTitle: string;
    calendarDescription: string;
    meetTitle: string;
    meetDescription: string;
    directContact: string;
    contactTitle: string;
    contactDescription: string;
    email: string;
    whatsapp: string;
    hoursTitle: string;
    weekdays: string;
    saturdays: string;
    guaranteed: string;
    guaranteedRest: string;
  }
> = {
  es: {
    googleCalendar: "Google Calendar",
    calendarTitle: "Agendá directo en nuestro calendario",
    calendarDescription: "Elegí el horario que mejor te quede y recibí confirmación automática.",
    meetTitle: "Reunión por Google Meet",
    meetDescription: "Te enviaremos el link de la videollamada por email.",
    directContact: "Contacto Directo",
    contactTitle: "O escribinos directamente",
    contactDescription: "Preferís coordinar por otro medio? Contactanos por email o WhatsApp.",
    email: "Email",
    whatsapp: "WhatsApp",
    hoursTitle: "Horarios de atención",
    weekdays: "Lunes a Viernes",
    saturdays: "Sábados",
    guaranteed: "Respuesta garantizada",
    guaranteedRest: "en menos de 24 horas hábiles.",
  },
  en: {
    googleCalendar: "Google Calendar",
    calendarTitle: "Book directly on our calendar",
    calendarDescription: "Pick the time that suits you best and get automatic confirmation.",
    meetTitle: "Meeting via Google Meet",
    meetDescription: "We'll send you the video call link by email.",
    directContact: "Direct Contact",
    contactTitle: "Or write to us directly",
    contactDescription: "Prefer another way to reach us? Contact us by email or WhatsApp.",
    email: "Email",
    whatsapp: "WhatsApp",
    hoursTitle: "Business hours",
    weekdays: "Monday to Friday",
    saturdays: "Saturdays",
    guaranteed: "Guaranteed response",
    guaranteedRest: "in less than 24 business hours.",
  },
};

export function ServiceBookingSection({ config }: ServiceBookingSectionProps) {
  const [isVisible, setIsVisible] = React.useState(false);
  const sectionRef = React.useRef<HTMLElement>(null);
  const { language } = useLanguage();
  const t = content[language];
  const shouldLoadCalendar = isVisible;

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const title = config.ctaTitle ?? config.sectionTitle;

  return (
    <section
      id="contacto"
      ref={sectionRef}
      className="py-16 sm:py-20 lg:py-28"
      style={bookingBackground}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div
          className={`max-w-3xl mx-auto text-center mb-10 sm:mb-14 lg:mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="font-medium mb-4 uppercase tracking-wider text-sm" style={{ color: "white" }}>
            {config.sectionSubtitle}
          </p>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 sm:mb-6 text-balance"
            style={{ fontFamily: "var(--font-display)", color: "white" }}
          >
            {title}
          </h2>
          <p className="text-base sm:text-lg text-pretty" style={{ color: "white" }}>
            {config.sectionDescription}
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-5 sm:gap-8">
            <Card
              className={`bg-gray-100 border-border hover:border-primary/50 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium" style={{ color: "#000000" }}>
                    {t.googleCalendar}
                  </span>
                </div>
                <CardTitle style={{ fontFamily: "var(--font-display)", color: "black" }}>
                  {t.calendarTitle}
                </CardTitle>
                <CardDescription style={{ color: "black" }}>
                  {t.calendarDescription}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative w-full bg-gray-200 rounded-lg overflow-hidden h-[420px] sm:h-[510px]">
                  {shouldLoadCalendar ? (
                    <iframe
                      src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2zSqgVFcuVzptWhs23heY0yUMqGW6kaNdeq4kkdwBveXI5npTpSoHFoMm655n9AESoHodN4UGZ?gv=true"
                      className="absolute top-0 left-0 w-full h-full border-0"
                      title="Agendar reunión con Nobu"
                      loading="lazy"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-sm text-black/70 px-4 text-center">
                      {t.calendarDescription}
                    </div>
                  )}
                </div>
                <div className="mt-4 p-4 bg-primary/10 rounded-lg">
                  <div className="flex items-start gap-3">
                    <Video className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium text-sm" style={{ color: "black" }}>
                        {t.meetTitle}
                      </p>
                      <p className="text-xs mt-1" style={{ color: "black" }}>
                        {t.meetDescription}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card
              className={`bg-gray-100 border-border hover:border-primary/50 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Mail className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium" style={{ color: "#000000" }}>
                    {t.directContact}
                  </span>
                </div>
                <CardTitle style={{ fontFamily: "var(--font-display)", color: "black" }}>
                  {t.contactTitle}
                </CardTitle>
                <CardDescription style={{ color: "black" }}>
                  {t.contactDescription}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="p-4 bg-gray-200 rounded-lg hover:bg-primary/10 transition-colors">
                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-primary mt-0.5" />
                      <div className="flex-1">
                        <p className="font-medium text-sm mb-1" style={{ color: "black" }}>
                          {t.email}
                        </p>
                        <a
                          href="mailto:info@nobu.com.ar"
                          className="hover:opacity-80 transition-colors text-sm"
                          style={{ color: "black" }}
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
                        <p className="font-medium text-sm mb-1" style={{ color: "black" }}>
                          {t.whatsapp}
                        </p>
                        <a
                          href="https://wa.me/5493844405628"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:opacity-80 transition-colors text-sm"
                          style={{ color: "black" }}
                        >
                          +54 9 3844 40-5628
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pt-6 border-t border-border">
                  <h4 className="font-semibold mb-3 text-sm" style={{ color: "black" }}>
                    {t.hoursTitle}
                  </h4>
                  <div className="space-y-2 text-sm" style={{ color: "black" }}>
                    <div className="flex justify-between">
                      <span>{t.weekdays}</span>
                      <span>9:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>{t.saturdays}</span>
                      <span>9:00 - 13:00</span>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
                  <p className="text-sm" style={{ color: "black" }}>
                    <strong className="text-primary">{t.guaranteed}</strong> {t.guaranteedRest}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
