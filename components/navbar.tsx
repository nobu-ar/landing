"use client"

import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg border-b border-border transition-all duration-300" 
      style={{ 
        backgroundColor: isScrolled ? 'rgba(32, 78, 206, 0.7)' : '#204ece'
      }}
    >
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-[4.5rem] lg:h-20 gap-3">
          <Link href="/" className="flex items-center gap-2">
            <img 
              src="/logo.svg" 
              alt="Nobu"
              className="h-10 sm:h-11 lg:h-12 w-auto"
            />
          </Link>

          <div className="hidden lg:flex items-center gap-5 xl:gap-6">
            <Link href="/#servicios" className="text-white hover:text-white/80 transition-colors text-sm">
              Servicios
            </Link>
            <Link href="/#nosotros" className="text-white hover:text-white/80 transition-colors text-sm">
              Nosotros
            </Link>
            
            <div className="ml-2 xl:ml-4 gap-2 xl:gap-4 flex">
              <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-sm xl:text-base px-4 xl:px-7 py-4 xl:py-5"
              style={{ color: 'black', lineHeight: '4px' } as React.CSSProperties}
              asChild
            >
              <Link href="/#contacto" style={{ color: 'rgba(0, 0, 0, 1)', lineHeight: '4px' } as React.CSSProperties}>
                Agendar reunión
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-border hover:bg-secondary/80 text-sm xl:text-base px-4 xl:px-7 py-4 xl:py-5 bg-transparent"
              style={{ lineHeight: '4px', backgroundColor: 'rgba(23, 63, 171, 1)', borderColor: 'rgba(23, 63, 171, 1)', color: 'white' } as React.CSSProperties}
              asChild
            >
              <Link href="https://espacios.nobu.com.ar" style={{ color: 'white', lineHeight: '4px' } as React.CSSProperties}>
                Iniciar sesión
              </Link>
            </Button>
            </div>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-white shrink-0"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <Link href="/servicios" className="text-white hover:text-white/80 transition-colors py-2">
                Servicios
              </Link>
              <Link href="/servicios#nosotros" className="text-white hover:text-white/80 transition-colors py-2">
                Nosotros
              </Link>
              <Link href="/#contacto" className="text-white hover:text-white/80 transition-colors py-2">
                Contacto
              </Link>
              <div className="flex flex-col gap-3 pt-4 border-t border-border">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-base px-6 py-3 w-full"
                  style={{ color: 'black' } as React.CSSProperties}
                  asChild
                >
                  <Link href="/#contacto" style={{ color: "black" }}>
                    Agendar Demo
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full border-border hover:bg-secondary/80 text-base px-6 py-3 bg-transparent"
                  style={{ backgroundColor: 'rgba(23, 63, 171, 1)', borderColor: 'rgba(23, 63, 171, 1)', color: 'white' } as React.CSSProperties}
                  asChild
                >
                  <Link href="https://espacios.nobu.com.ar" style={{ color: "white" }}>
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
