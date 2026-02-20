"use client";

import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Video, Mail, Phone } from "lucide-react";
import { bookingBackground } from "./backgrounds";
import type { ServiceBookingConfig } from "./types";

interface ServiceBookingSectionProps {
  config: ServiceBookingConfig;
}

export function ServiceBookingSection({ config }: ServiceBookingSectionProps) {
  const [isVisible, setIsVisible] = React.useState(false);
  const sectionRef = React.useRef<HTMLElement>(null);

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
                    Google Calendar
                  </span>
                </div>
                <CardTitle style={{ fontFamily: "var(--font-display)", color: "black" }}>
                  Agendá directo en nuestro calendario
                </CardTitle>
                <CardDescription style={{ color: "black" }}>
                  Elegí el horario que mejor te quede y recibí confirmación automática.
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
                <div className="mt-4 p-4 bg-primary/10 rounded-lg">
                  <div className="flex items-start gap-3">
                    <Video className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium text-sm" style={{ color: "black" }}>
                        Reunión por Google Meet
                      </p>
                      <p className="text-xs mt-1" style={{ color: "black" }}>
                        Te enviaremos el link de la videollamada por email.
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
                    Contacto Directo
                  </span>
                </div>
                <CardTitle style={{ fontFamily: "var(--font-display)", color: "black" }}>
                  O escribinos directamente
                </CardTitle>
                <CardDescription style={{ color: "black" }}>
                  Preferís coordinar por otro medio? Contactanos por email o WhatsApp.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="p-4 bg-gray-200 rounded-lg hover:bg-primary/10 transition-colors">
                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-primary mt-0.5" />
                      <div className="flex-1">
                        <p className="font-medium text-sm mb-1" style={{ color: "black" }}>
                          Email
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
                          WhatsApp
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
                    Horarios de atención
                  </h4>
                  <div className="space-y-2 text-sm" style={{ color: "black" }}>
                    <div className="flex justify-between">
                      <span>Lunes a Viernes</span>
                      <span>9:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sábados</span>
                      <span>9:00 - 13:00</span>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
                  <p className="text-sm" style={{ color: "black" }}>
                    <strong className="text-primary">Respuesta garantizada</strong> en menos de 24 horas hábiles.
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
