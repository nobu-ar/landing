"use client"

import React from "react"
import Image from "next/image"

const logos = [
  { name: "Quilmes", src: "/svg/quilmes.svg" },
  { name: "Total", src: "/svg/total.svg" },
  { name: "GPX", src: "/svg/gpx.svg" },
  { name: "ICK", src: "/svg/ick.svg" },
  { name: "Garantizar", src: "/svg/garantizar.svg" },
  { name: "Pulfinance", src: "/svg/pulfinance.svg" },
  { name: "Mudop", src: "/svg/mudop.svg" },
  { name: "Lanus", src: "/svg/lanus.svg" },
  { name: "GymNas", src: "/svg/gymnas.png" },
  { name: "Santiago Urtubey Catering", src: "/svg/urtubey.png" },
]

export function LogoCarousel() {
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
      ref={sectionRef}
      className="py-4 sm:py-6 lg:py-8 bg-gray-100"
    >
      <div className="mx-auto px-4 lg:px-6">
        <div
          className={`logo-marquee-pause-on-hover transition-all duration-1000 overflow-hidden`}
        >
          <div
            className="logo-marquee-track flex w-max gap-6 sm:gap-8 md:gap-12"
            style={{ minWidth: "var(--min-width, auto)" }}
          >
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={`${logo.name}-${index}`}
                className="flex shrink-0 items-center justify-center w-28 sm:w-40 md:w-52 h-24 sm:h-32 md:h-40"
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={200}
                  height={120}
                  className={`object-contain max-w-full max-h-full ${logo.name === "Garantizar" ? "scale-125" : ""}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
