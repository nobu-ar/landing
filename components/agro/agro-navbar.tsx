"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { agroTheme } from "./theme"

export function AgroNavbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg transition-all duration-300"
      style={{
        backgroundColor: isScrolled
          ? "rgba(30, 77, 47, 0.92)"
          : agroTheme.dark,
        borderBottom: `1px solid rgba(135, 163, 69, 0.35)`,
      }}
    >
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-[4.5rem] lg:h-20 gap-3">
          <Link href="/agro" className="flex items-center gap-2">
            <Image
              src="/svg/nobuAgro.svg"
              alt="Nobu Agro"
              width={48}
              height={48}
              className="h-10 sm:h-11 lg:h-12 w-auto"
              priority
            />
          </Link>

          <div className="hidden lg:flex items-center gap-5 xl:gap-6">

            <Link
              href="/agro#nosotros"
              className="transition-colors text-sm hover:opacity-80"
              style={{ color: agroTheme.cream }}
            >
              Nosotros
            </Link>
            <Link
              href="/agro#contacto"
              className="transition-colors text-sm hover:opacity-80"
              style={{ color: agroTheme.cream }}
            >
              Contacto
            </Link>
            <div className="ml-2 xl:ml-4 gap-2 xl:gap-4 flex">
              <Button
                size="lg"
                className="text-sm xl:text-base px-4 xl:px-7 py-4 xl:py-5 hover:opacity-90"
                style={{
                  backgroundColor: agroTheme.olive,
                  color: agroTheme.cream,
                  lineHeight: "4px",
                }}
                asChild
              >
                <Link href="/agro#contacto" style={{ color: agroTheme.cream, lineHeight: "4px" }}>
                  Agendar una reunión
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-sm xl:text-base px-4 xl:px-7 py-4 xl:py-5 bg-transparent hover:opacity-90"
                style={{
                  lineHeight: "4px",
                  backgroundColor: agroTheme.darkMuted,
                  borderColor: "rgba(251, 249, 241, 0.25)",
                  color: agroTheme.cream,
                }}
                asChild
              >
                <Link
                  href="https://espacios.nobu.com.ar"
                  style={{ color: agroTheme.cream, lineHeight: "4px" }}
                >
                  Iniciar sesión
                </Link>
              </Button>
            </div>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 shrink-0"
            style={{ color: agroTheme.cream }}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div
            className="lg:hidden py-4"
            style={{ borderTop: `1px solid rgba(135, 163, 69, 0.35)` }}
          >
            <div className="flex flex-col gap-4">
              <Link
                href="/servicios"
                className="py-2 transition-colors hover:opacity-80"
                style={{ color: agroTheme.cream }}
              >
                Servicios
              </Link>
              <Link
                href="/agro#nosotros"
                className="py-2 transition-colors hover:opacity-80"
                style={{ color: agroTheme.cream }}
              >
                Nosotros
              </Link>
              <Link
                href="/agro#contacto"
                className="py-2 transition-colors hover:opacity-80"
                style={{ color: agroTheme.cream }}
              >
                Contacto
              </Link>
              <div
                className="flex flex-col gap-3 pt-4"
                style={{ borderTop: `1px solid rgba(135, 163, 69, 0.35)` }}
              >
                <Button
                  size="lg"
                  className="text-base px-6 py-3 w-full hover:opacity-90"
                  style={{ backgroundColor: agroTheme.olive, color: agroTheme.cream }}
                  asChild
                >
                  <Link href="/agro#contacto" style={{ color: agroTheme.cream }}>
                    Agendar Demo
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full text-base px-6 py-3 bg-transparent hover:opacity-90"
                  style={{
                    backgroundColor: agroTheme.darkMuted,
                    borderColor: "rgba(251, 249, 241, 0.25)",
                    color: agroTheme.cream,
                  }}
                  asChild
                >
                  <Link href="https://espacios.nobu.com.ar" style={{ color: agroTheme.cream }}>
                    Iniciar sesión
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
