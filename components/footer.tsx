import Link from "next/link"
import { MapPin, Mail, Phone, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative isolate overflow-hidden border-t border-border outline-none" style={{ backgroundColor: '#f3f4f6', transform: 'translateZ(0)' }}>
      {/* Capa sólida para que nada (body, scripts, etc.) se dibuje encima */}
      <div className="pointer-events-none absolute inset-0 z-0" style={{ backgroundColor: 'rgb(243, 244, 246)' }} aria-hidden />
      <div className="container relative z-10 mx-auto px-4 py-10 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <img 
                src="/Logo_Color_Version_2.svg" 
                alt="Nobu Logo" 
                className="h-8 w-auto"
              />
            </Link>
            
            <div className="flex items-center gap-2 text-sm" style={{ color: 'black' }}>
              <MapPin className="w-4 h-4 text-primary" />
              <span>Tucumán, Argentina</span>
            </div>
          </div>

          {/* Redes sociales */}
          <div>
            <h3 className="font-semibold mb-4" style={{ fontFamily: 'var(--font-display)', color: 'black' }}>Redes sociales</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://www.instagram.com/nobuempresarial/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 transition-colors text-sm hover:opacity-80"
                  style={{ color: 'black' }}
                >
                  <Instagram className="w-4 h-4 text-primary" />
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/nobuar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 transition-colors text-sm hover:opacity-80"
                  style={{ color: 'black' }}
                >
                  <Linkedin className="w-4 h-4 text-primary" />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h3 className="font-semibold mb-4" style={{ fontFamily: 'var(--font-display)', color: 'black' }}>Empresa</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#nosotros" className="transition-colors text-sm" style={{ color: 'black' }}>
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link href="#contacto" className="transition-colors text-sm" style={{ color: 'black' }}>
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="font-semibold mb-4" style={{ fontFamily: 'var(--font-display)', color: 'black' }}>Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm" style={{ color: 'black' }}>
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:info@nobu.com.ar" className="transition-colors" style={{ color: 'black' }}>
                  info@nobu.com.ar
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm" style={{ color: 'black' }}>
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:+5493844405628" className="transition-colors" style={{ color: 'black' }}>
                  +54 9 3844 40-5628
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-300 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-center md:text-left" style={{ color: 'black' }}>
            © {new Date().getFullYear()} Nobu. Todos los derechos reservados.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
            <Link href="/privacidad" className="transition-colors text-sm" style={{ color: 'black' }}>
              Política de Privacidad
            </Link>
            <Link href="/terminos" className="transition-colors text-sm" style={{ color: 'black' }}>
              Términos de Servicio
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
