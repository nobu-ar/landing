"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { heroBackground } from "./backgrounds";
import { ImageLightbox } from "@/components/ui/image-lightbox";
import type { ServiceHeroConfig } from "./types";

interface ServiceHeroSectionProps {
  config: ServiceHeroConfig;
}

export function ServiceHeroSection({ config }: ServiceHeroSectionProps) {
  const [lightboxOpen, setLightboxOpen] = React.useState(false);

  const sectionStyle = config.backgroundImage
    ? {
        ...heroBackground,
        backgroundImage: `url(${config.backgroundImage})`,
      }
    : heroBackground;

  return (
    <section
      className="relative min-h-[95vh] flex items-stretch pt-24 pb-12 sm:pb-16 overflow-hidden"
      style={sectionStyle}
    >
      <div className="container mx-auto px-4 lg:px-8 relative z-10 w-full flex flex-col lg:flex-row items-center gap-10 lg:gap-0">
        <div className="flex-1 flex flex-col justify-center text-center lg:text-left order-1 lg:order-1 lg:pr-8 xl:pr-12">
          <h1
            className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-5 lg:mb-6 text-balance leading-tight"
            style={{ fontFamily: "var(--font-display)", color: "var(--color-white)" }}
          >
            {config.title}
          </h1>
          <p
            className="text-base md:text-lg lg:text-xl mb-8 lg:mb-10 text-pretty leading-relaxed max-w-xl "
            style={{ color: "var(--color-white)" }}
          >
            {config.description}
          </p>
          <div className="flex justify-center lg:justify-start">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-sm sm:text-base px-5 sm:px-8 py-4 sm:py-6 shadow-lg shadow-primary/20 w-full sm:w-auto max-w-xs sm:max-w-none"
              style={{ color: "black", lineHeight: "4px" } as React.CSSProperties}
              asChild
            >
              <Link href="#contacto" style={{ color: "black", lineHeight: "4px" } as React.CSSProperties}>
                Agendar una Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
          <div className="h-4" /> {/* Spacer between Agendar una Demo and users access button */}
          <div className="flex justify-center lg:justify-start">
            {config.allowsUsersAccess && (
              <Button
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-sm sm:text-base px-5 sm:px-8 py-4 sm:py-6 shadow-lg shadow-secondary/20 w-full sm:w-auto max-w-xs sm:max-w-none"
                style={{ color: "white", lineHeight: "4px" } as React.CSSProperties}
                asChild
              >
                <Link href={config.usersAccessLink ?? "#contacto"} style={{ color: "black", lineHeight: "4px" } as React.CSSProperties}>
                  {config.usersAccessText ?? "Iniciar sesión"}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            )}
          </div>
     
        </div>
        {config.image && (
          <>
            <div className="flex-1 w-full flex items-center justify-center lg:justify-end order-2 lg:order-2">
              <div
                className="group relative w-full max-w-[520px] sm:max-w-[600px] lg:max-w-[680px] xl:max-w-[760px] aspect-4/3 overflow-hidden rounded-xl lg:rounded-2xl filter-[drop-shadow(0_8px_18px_rgba(0,0,0,.25))_drop-shadow(0_20px_35px_rgba(0,0,0,.18))] cursor-pointer"
                onClick={() => setLightboxOpen(true)}
              >
                <Image
                  src={config.image}
                  alt={config.imageAlt ?? ""}
                  fill
                  className="object-contain object-center lg:object-right drop-shadow-[0_25px_50px_-12px_rgba(0,0,0,0.35)] rounded-xl lg:rounded-2xl p-1 transition-transform duration-500 ease-out group-hover:scale-105"
                  sizes="(max-width: 1023px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
            <ImageLightbox
              src={config.image}
              alt={config.imageAlt ?? ""}
              isOpen={lightboxOpen}
              onClose={() => setLightboxOpen(false)}
            />
          </>
        )}
      </div>
    </section>
  );
}
