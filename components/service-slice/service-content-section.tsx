"use client";

import React from "react";
import Image from "next/image";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { servicesBackground } from "./backgrounds";
import { ImageLightbox } from "@/components/ui/image-lightbox";
import type { ServiceContentConfig } from "./types";
import { useLanguage } from "@/lib/i18n/language-context";

interface ServiceContentSectionProps {
  config: ServiceContentConfig;
}

const content = {
  es: { imagePlaceholder: "Imagen" },
  en: { imagePlaceholder: "Image" },
} as const;

export function ServiceContentSection({ config }: ServiceContentSectionProps) {
  const [isVisible, setIsVisible] = React.useState(false);
  const { language } = useLanguage();
  const t = content[language];
  const [lightboxImage, setLightboxImage] = React.useState<{ src: string; alt: string } | null>(null);
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

  return (
    <section
      id="funcionalidades"
      ref={sectionRef}
      className="py-16 sm:py-20 lg:py-28"
      style={servicesBackground}
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
            {config.sectionTitle}
          </h2>
          <p className="text-base sm:text-lg text-pretty" style={{ color: "white" }}>
            {config.sectionDescription}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {config.features.map((item, index) => (
            <Card
              key={index}
              className={`bg-gray-200 border-border hover:bg-secondary/50 hover:border-primary/50 transition-all duration-700 h-full ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <item.icon className="w-8 h-8 sm:w-10 sm:h-10 text-primary mb-2" />
                <CardTitle style={{ fontFamily: "var(--font-display)", color: "black" }}>
                  {item.title}
                </CardTitle>
                <CardDescription style={{ color: "black" }}>{item.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        {config.extraBlock1 && (
          <div
            className={`mt-16 lg:mt-24 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div
              className="w-full order-2 lg:order-1"
              style={{
                filter: "drop-shadow(0 8px 18px rgba(0,0,0,0.25)) drop-shadow(0 20px 35px rgba(0,0,0,0.18))",
              }}
            >
              {config.extraBlock1.image ? (
                <div
                  className="group relative w-full max-w-xl lg:max-w-2xl mx-auto aspect-16/10 rounded-2xl overflow-hidden cursor-pointer"
                  onClick={() =>
                    setLightboxImage({
                      src: config.extraBlock1!.image!,
                      alt: config.extraBlock1!.imageAlt ?? config.extraBlock1!.title,
                    })
                  }
                >
                  <Image
                    src={config.extraBlock1.image}
                    alt={config.extraBlock1.imageAlt ?? config.extraBlock1.title}
                    fill
                    className="object-contain rounded-2xl p-2 transition-transform duration-500 ease-out group-hover:scale-105"
                    sizes="(max-width: 1023px) 100vw, 50vw"
                  />
                </div>
              ) : (
                <div className="w-full aspect-video rounded-2xl bg-white/10 flex items-center justify-center text-white/70">
                  {t.imagePlaceholder}
                </div>
              )}
            </div>
            <div className="flex flex-col justify-center text-center lg:text-left order-1 lg:order-2">
              <h3
                className="text-2xl md:text-3xl font-bold mb-4"
                style={{ fontFamily: "var(--font-display)", color: "white" }}
              >
                {config.extraBlock1.title}
              </h3>
              <p className="text-base md:text-lg leading-relaxed" style={{ color: "rgba(255,255,255,0.95)" }}>
                {config.extraBlock1.description}
              </p>
            </div>
          </div>
        )}

        {config.extraBlock2 && (
          <div
            className={`mt-16 lg:mt-20 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center transition-all duration-1000 delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="flex flex-col justify-center text-center lg:text-left">
              <h3
                className="text-2xl md:text-3xl font-bold mb-4"
                style={{ fontFamily: "var(--font-display)", color: "white" }}
              >
                {config.extraBlock2.title}
              </h3>
              <p className="text-base md:text-lg leading-relaxed" style={{ color: "rgba(255,255,255,0.95)" }}>
                {config.extraBlock2.description}
              </p>
            </div>
            <div
              className="w-full order-1 lg:order-1 object-center justify-center"
              style={{
                filter: "drop-shadow(0 8px 18px rgba(0,0,0,0.25)) drop-shadow(0 20px 35px rgba(0,0,0,0.18))",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {config.extraBlock2.image ? (
                <div
                  className="group relative w-full max-w-xl lg:max-w-2xl aspect-16/10 rounded-2xl overflow-hidden cursor-pointer"
                  onClick={() =>
                    setLightboxImage({
                      src: config.extraBlock2!.image!,
                      alt: config.extraBlock2!.imageAlt ?? config.extraBlock2!.title,
                    })
                  }
                >
                  <Image
                    src={config.extraBlock2.image}
                    alt={config.extraBlock2.imageAlt ?? config.extraBlock2.title}
                    fill
                    className="object-contain rounded-2xl p-2 transition-transform duration-500 ease-out group-hover:scale-105"
                    sizes="(max-width: 1023px) 100vw, 50vw"
                  />
                </div>
              ) : (
                <div className="w-full max-w-lg aspect-video rounded-2xl bg-white/10 flex items-center justify-center text-white/70">
                  {t.imagePlaceholder}
                </div>
              )}
              
              
            </div>
          </div>
        )}

    {config.extraBlock3 && (
          <div
            className={`mt-16 lg:mt-24 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div
              className="w-full order-2 lg:order-1"
              style={{
                filter: "drop-shadow(0 8px 18px rgba(0,0,0,0.25)) drop-shadow(0 20px 35px rgba(0,0,0,0.18))",
              }}
            >
              {config.extraBlock3.image ? (
                <div
                  className="group relative w-full max-w-xl lg:max-w-2xl mx-auto aspect-16/10 rounded-2xl overflow-hidden cursor-pointer"
                  onClick={() =>
                    setLightboxImage({
                      src: config.extraBlock3!.image!,
                      alt: config.extraBlock3!.imageAlt ?? config.extraBlock3!.title,
                    })
                  }
                >
                  <Image
                    src={config.extraBlock3.image}
                    alt={config.extraBlock3.imageAlt ?? config.extraBlock3.title}
                    fill
                    className="object-contain rounded-2xl p-2 transition-transform duration-500 ease-out group-hover:scale-105"
                    sizes="(max-width: 1023px) 100vw, 50vw"
                  />
                </div>
              ) : (
                <div className="w-full aspect-video rounded-2xl bg-white/10 flex items-center justify-center text-white/70">
                  {t.imagePlaceholder}
                </div>
              )}
            </div>
            <div className="flex flex-col justify-center text-center lg:text-left order-1 lg:order-2">
              <h3
                className="text-2xl md:text-3xl font-bold mb-4"
                style={{ fontFamily: "var(--font-display)", color: "white" }}
              >
                {config.extraBlock3.title}
              </h3>
              <p className="text-base md:text-lg leading-relaxed" style={{ color: "rgba(255,255,255,0.95)" }}>
                {config.extraBlock3.description}
              </p>
            </div>
          </div>
        )} 
      </div>

      <ImageLightbox
        src={lightboxImage?.src ?? ""}
        alt={lightboxImage?.alt ?? ""}
        isOpen={!!lightboxImage}
        onClose={() => setLightboxImage(null)}
      />
    </section>
  );
}
