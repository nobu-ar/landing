"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Mail } from "lucide-react";
import { heroBackground, servicesBackground } from "@/components/service-slice/backgrounds";
import { Button } from "@/components/ui/button";

const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className="mb-10 last:mb-0">
    <h2
      className="text-lg font-semibold mb-4 tracking-tight"
      style={{ fontFamily: "var(--font-display)", color: "#1a3fa0" }}
    >
      {title}
    </h2>
    <div className="space-y-3" style={{ color: "#374151" }}>
      {children}
    </div>
  </div>
);

const SubSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-6">
    <h3 className="text-base font-medium mb-3" style={{ color: "#204ece" }}>
      {title}
    </h3>
    <div className="space-y-2 pl-0 sm:pl-2">{children}</div>
  </div>
);

const Paragraph = ({ children }: { children: React.ReactNode }) => (
  <p className="text-sm sm:text-base leading-relaxed">{children}</p>
);

const ListItem = ({ children }: { children: React.ReactNode }) => (
  <p className="text-sm sm:text-base leading-relaxed pl-4 flex items-start gap-2">
    <span className="text-primary mt-1.5 shrink-0">•</span>
    <span>{children}</span>
  </p>
);

const EmailLink = ({ email }: { email: string }) => (
  <a
    href={`mailto:${email}`}
    className="inline-flex items-center gap-2 mt-2 px-3 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors text-primary font-medium"
  >
    <Mail className="w-4 h-4" />
    {email}
  </a>
);

export function PoliticaPrivacidadSection() {
  return (
    <section
      className="relative min-h-screen pt-24 pb-16 sm:pb-24"
      style={servicesBackground}
    >
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header con hero background */}
        <div
          className="rounded-2xl sm:rounded-3xl overflow-hidden mb-8 sm:mb-12 shadow-xl"
          style={heroBackground}
        >
          <div className="px-6 sm:px-10 py-8 sm:py-12 text-center">
            <h1
              className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 tracking-tight"
              style={{ fontFamily: "var(--font-display)", color: "white" }}
            >
              POLÍTICA DE PRIVACIDAD
            </h1>
            <p className="text-base sm:text-lg font-medium mb-1" style={{ color: "rgba(255,255,255,0.95)" }}>
              NOBU FINTECH S.A.S.
            </p>
            <p className="text-sm sm:text-base" style={{ color: "rgba(255,255,255,0.9)" }}>
              Última actualización: 2 de marzo de 2026
            </p>
          </div>
        </div>

        {/* Contenido en card */}
        <div
          className=" mx-auto rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-xl"
          style={{ backgroundColor: "#f3f4f6" }}
        >
          <Section title="1. IDENTIFICACIÓN DEL RESPONSABLE">
            <Paragraph>
              La presente Política de Privacidad regula el tratamiento de datos personales efectuado por:
            </Paragraph>
            <div className="mt-4 p-4 rounded-lg bg-gray-50 border border-gray-100">
              <p className="font-semibold mb-1">Nobu Fintech S.A.S.</p>
              <p className="text-sm">CUIT: 30-71861012-1</p>
              <p className="text-sm">Domicilio legal: San Miguel de Tucumán, Provincia de Tucumán, República Argentina.</p>
            </div>
            <Paragraph>
              En adelante, &quot;Nobu&quot;.
            </Paragraph>
            <Paragraph>
              Nobu es responsable del tratamiento de datos personales conforme la Ley N° 25.326 de Protección de Datos Personales, su Decreto Reglamentario N° 1558/2001 y demás normativa complementaria vigente en la República Argentina.
            </Paragraph>
          </Section>

          <Section title="2. ALCANCE">
            <Paragraph>
              Esta Política aplica a todas las personas que interactúan con:
            </Paragraph>
            <ListItem>Plataformas tecnológicas desarrolladas y operadas por Nobu.</ListItem>
            <ListItem>Aplicaciones web y móviles.</ListItem>
            <ListItem>Servicios SaaS ofrecidos a organizaciones públicas o privadas.</ListItem>
            <ListItem>Sistemas digitales de gestión administrativa, financiera o transaccional.</ListItem>
            <ListItem>Servicios de identidad digital y validación de usuarios.</ListItem>
            <ListItem>Canales digitales, incluyendo sitios web, asistentes virtuales y servicios de mensajería.</ListItem>
          </Section>

          <Section title="3. SERVICIOS PRESTADOS POR NOBU">
            <Paragraph>
              Nobu desarrolla y opera soluciones tecnológicas en la nube (Software as a Service – SaaS) orientadas a la digitalización de procesos, automatización operativa y gestión transaccional para organizaciones públicas y privadas.
            </Paragraph>
            <Paragraph>
              En el marco de estos servicios, Nobu puede intervenir en carácter de:
            </Paragraph>
            <ListItem>
              <strong>Responsable del tratamiento</strong>, cuando determina los fines y medios del tratamiento de datos personales; o
            </ListItem>
            <ListItem>
              <strong>Encargado del tratamiento</strong>, cuando procesa datos personales por cuenta de sus clientes.
            </ListItem>
          </Section>

          <Section title="4. DATOS PERSONALES QUE PODEMOS TRATAR">
            <Paragraph>
              Dependiendo de la naturaleza del servicio contratado o utilizado, Nobu podrá tratar las siguientes categorías de datos:
            </Paragraph>
            <SubSection title="4.1 Datos identificatorios">
              <ListItem>Nombre y apellido</ListItem>
              <ListItem>Documento de identidad</ListItem>
              <ListItem>Identificadores fiscales</ListItem>
              <ListItem>Fecha de nacimiento</ListItem>
              <ListItem>Imagen o fotografía</ListItem>
            </SubSection>
            <SubSection title="4.2 Datos de contacto">
              <ListItem>Correo electrónico</ListItem>
              <ListItem>Número telefónico</ListItem>
              <ListItem>Domicilio</ListItem>
              <ListItem>Identificadores digitales</ListItem>
            </SubSection>
            <SubSection title="4.3 Datos económicos y transaccionales">
              <ListItem>Información de pagos</ListItem>
              <ListItem>Datos bancarios o virtuales</ListItem>
              <ListItem>Historial de operaciones</ListItem>
              <ListItem>Información de facturación</ListItem>
            </SubSection>
            <SubSection title="4.4 Datos técnicos y de navegación">
              <ListItem>Dirección IP</ListItem>
              <ListItem>Tipo de dispositivo</ListItem>
              <ListItem>Sistema operativo</ListItem>
              <ListItem>Navegador</ListItem>
              <ListItem>Registros de actividad</ListItem>
              <ListItem>Cookies y tecnologías similares</ListItem>
            </SubSection>
            <SubSection title="4.5 Datos biométricos (cuando el servicio lo requiera)">
              <ListItem>Validación facial</ListItem>
              <ListItem>Prueba de vida</ListItem>
              <ListItem>Datos necesarios para procesos de autenticación reforzada</ListItem>
            </SubSection>
            <Paragraph>
              Los datos biométricos son considerados datos sensibles y serán tratados únicamente bajo consentimiento expreso y para finalidades específicas y legítimas.
            </Paragraph>
          </Section>

          <Section title="5. FINALIDADES DEL TRATAMIENTO">
            <Paragraph>
              Los datos personales podrán ser tratados para:
            </Paragraph>
            <ListItem>Brindar, operar y mejorar los servicios tecnológicos ofrecidos.</ListItem>
            <ListItem>Verificar identidad.</ListItem>
            <ListItem>Ejecutar relaciones contractuales.</ListItem>
            <ListItem>Procesar transacciones.</ListItem>
            <ListItem>Cumplir obligaciones legales, fiscales y regulatorias.</ListItem>
            <ListItem>Prevenir fraude y actividades ilícitas.</ListItem>
            <ListItem>Garantizar la seguridad de los sistemas.</ListItem>
            <ListItem>Brindar soporte técnico.</ListItem>
            <ListItem>Generar estadísticas internas anonimizadas.</ListItem>
            <ListItem>Implementar mejoras mediante herramientas de automatización e inteligencia artificial.</ListItem>
            <Paragraph>
              Nobu no utilizará los datos para fines incompatibles con aquellos para los cuales fueron recolectados.
            </Paragraph>
          </Section>

          <Section title="6. BASE LEGAL DEL TRATAMIENTO">
            <Paragraph>
              El tratamiento de datos se fundamenta en:
            </Paragraph>
            <ListItem>Consentimiento del titular.</ListItem>
            <ListItem>Ejecución de un contrato.</ListItem>
            <ListItem>Cumplimiento de obligaciones legales.</ListItem>
            <ListItem>Interés legítimo debidamente ponderado.</ListItem>
            <ListItem>Normativa aplicable en materia financiera, fiscal y de prevención de lavado de activos cuando corresponda.</ListItem>
          </Section>

          <Section title="7. CONSERVACIÓN DE LOS DATOS">
            <Paragraph>
              Los datos serán conservados:
            </Paragraph>
            <ListItem>Mientras dure la relación contractual.</ListItem>
            <ListItem>Durante los plazos exigidos por normativa legal y regulatoria.</ListItem>
            <ListItem>Hasta que el titular ejerza su derecho de supresión cuando corresponda.</ListItem>
          </Section>

          <Section title="8. CONFIDENCIALIDAD Y SEGURIDAD">
            <Paragraph>
              Nobu implementa medidas técnicas y organizativas apropiadas para proteger los datos personales, incluyendo:
            </Paragraph>
            <ListItem>Cifrado de comunicaciones.</ListItem>
            <ListItem>Cifrado en reposo cuando corresponda.</ListItem>
            <ListItem>Control de accesos basado en roles.</ListItem>
            <ListItem>Registros auditables.</ListItem>
            <ListItem>Monitoreo de seguridad.</ListItem>
            <ListItem>Políticas internas de protección de datos.</ListItem>
            <ListItem>Contratos de confidencialidad con empleados y proveedores.</ListItem>
          </Section>

          <Section title="9. CESIÓN Y TRANSFERENCIAS">
            <Paragraph>
              Los datos podrán ser compartidos con:
            </Paragraph>
            <ListItem>Proveedores tecnológicos de infraestructura en la nube.</ListItem>
            <ListItem>Proveedores de servicios de autenticación y mensajería.</ListItem>
            <ListItem>Entidades financieras.</ListItem>
            <ListItem>Organismos públicos cuando exista obligación legal.</ListItem>
            <Paragraph>
              En caso de transferencia internacional de datos, Nobu adoptará las garantías adecuadas conforme la normativa vigente.
            </Paragraph>
          </Section>

          <Section title="10. DERECHOS DEL TITULAR">
            <Paragraph>
              El titular de los datos podrá ejercer los derechos previstos por la Ley 25.326:
            </Paragraph>
            <ListItem>Derecho de acceso.</ListItem>
            <ListItem>Derecho de rectificación.</ListItem>
            <ListItem>Derecho de actualización.</ListItem>
            <ListItem>Derecho de supresión.</ListItem>
            <ListItem>Derecho de confidencialidad.</ListItem>
            <Paragraph>
              Las solicitudes podrán enviarse al correo oficial de contacto que Nobu disponga para tal fin.
            </Paragraph>
            <Paragraph>
              La Agencia de Acceso a la Información Pública es el órgano de control de la Ley 25.326.
            </Paragraph>
          </Section>

          <Section title="11. COOKIES Y TECNOLOGÍAS SIMILARES">
            <Paragraph>
              Nobu podrá utilizar cookies y tecnologías similares para autenticación, seguridad, analítica y mejora del servicio. El usuario puede configurar su navegador para rechazarlas.
            </Paragraph>
          </Section>

          <Section title="12. MENORES DE EDAD">
            <Paragraph>
              Nobu no recopila intencionalmente datos personales de menores sin autorización de sus representantes legales.
            </Paragraph>
          </Section>

          <Section title="13. MODIFICACIONES">
            <Paragraph>
              Nobu podrá actualizar la presente Política de Privacidad cuando resulte necesario. Las modificaciones serán publicadas en los canales oficiales.
            </Paragraph>
          </Section>

          <Section title="14. CONTACTO">
            <Paragraph>
              Para ejercer derechos o realizar consultas relacionadas con protección de datos personales:
            </Paragraph>
            <div className="mt-4 p-4 rounded-lg bg-gray-50 border border-gray-100 space-y-1">
              <p className="font-semibold">Nobu Fintech S.A.S.</p>
              <p className="text-sm">CUIT: 30-71861012-1</p>
              <p className="text-sm">San Miguel de Tucumán, República Argentina</p>
              <EmailLink email="info@nobu.com.ar" />
            </div>
          </Section>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90"
              style={{ color: "black" } as React.CSSProperties}
              asChild
            >
              <Link href="/" className="inline-flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Volver
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
