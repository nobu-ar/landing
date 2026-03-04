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

export function TerminosCondicionesSection() {
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
              className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 tracking-tight"
              style={{ fontFamily: "var(--font-display)", color: "white" }}
            >
              TÉRMINOS Y CONDICIONES DE USO DE NOBU
            </h1>
            <p className="text-sm sm:text-base" style={{ color: "rgba(255,255,255,0.9)" }}>
              Última actualización: 02 de marzo de 2026
            </p>
          </div>
        </div>

        {/* Contenido en card */}
        <div
          className=" mx-auto rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-xl"
          style={{ backgroundColor: "#f3f4f6" }}
        >
          <Section title="1. ACEPTACIÓN DE LOS TÉRMINOS">
            <Paragraph>
              Al acceder y utilizar la plataforma digital de Nobu (en adelante, la &quot;Plataforma&quot;), el usuario acepta de manera expresa y sin reservas los presentes Términos y Condiciones, los cuales rigen el uso de los servicios provistos bajo la modalidad Software como Servicio (SaaS).
            </Paragraph>
          </Section>

          <Section title="2. IDENTIFICACIÓN DEL PRESTADOR">
            <Paragraph>
              La Plataforma es operada por Nobu, nombre de fantasía de la razón social responsable del servicio, quien actúa conforme a las normativas vigentes en la República Argentina. Para cualquier comunicación, puede contactarse a:
            </Paragraph>
            <EmailLink email="info@nobu.com.ar" />
          </Section>

          <Section title="3. CAPACIDAD PARA UTILIZAR LA PLATAFORMA">
            <Paragraph>
              El uso de la Plataforma Nobu está restringido a personas que reúnan alguna de las siguientes condiciones:
            </Paragraph>
            <ListItem>Sean mayores de 18 años;</ListItem>
            <ListItem>
              Se encuentren emancipadas legalmente, conforme a lo previsto en el Código Civil y Comercial de la Nación;
            </ListItem>
            <ListItem>
              O cuenten con el consentimiento expreso de sus representantes legales (padre, madre o tutor).
            </ListItem>
            <Paragraph>
              En este último caso, la aceptación de estos Términos y Condiciones por parte del menor de edad se considerará realizada con el consentimiento del representante legal, quien se entiende que ha leído, comprendido y aceptado estos términos, asumiendo toda responsabilidad legal derivada del uso de la Plataforma por parte del menor.
            </Paragraph>
            <Paragraph>
              Nobu se reserva el derecho de requerir documentación que acredite el cumplimiento de estas condiciones, así como de suspender o cancelar cuentas en caso de detectar el incumplimiento de esta política.
            </Paragraph>
          </Section>

          <Section title="4. DATOS PERSONALES RECOPILADOS">
            <Paragraph>
              En cumplimiento de la Ley 25.326 de Protección de Datos Personales, informamos que se recaban algunos de los siguientes datos del usuario:
            </Paragraph>
            <ListItem>Nombre y apellido</ListItem>
            <ListItem>DNI</ListItem>
            <ListItem>CUIT/CUIL</ListItem>
            <ListItem>Correo electrónico</ListItem>
            <ListItem>Edad</ListItem>
            <ListItem>Fecha de nacimiento</ListItem>
            <ListItem>Datos biométricos (Face ID, huella digital)</ListItem>
            <Paragraph>
              Estos datos son recolectados con el único objetivo de facilitar el uso de los servicios ofrecidos dentro del ecosistema Nobu y permitir la correcta identificación del usuario, garantizando la trazabilidad y correlación de la información dentro de la Plataforma.
            </Paragraph>
            <Paragraph>
              Asimismo, se informa que se realiza cruce de datos con el RENAPER (Registro Nacional de las Personas), en los casos que sea necesario validar identidad.
            </Paragraph>
          </Section>

          <Section title="5. DESTINO Y ALMACENAMIENTO DE LOS DATOS">
            <Paragraph>
              Los datos recolectados se almacenan en servidores propios ubicados en infraestructura cloud provista por Amazon Web Services (AWS), bajo estrictos estándares de seguridad.
            </Paragraph>
            <Paragraph>
              No se comparten los datos con terceros, salvo autorización expresa del titular o requerimiento judicial o legal.
            </Paragraph>
            <Paragraph>
              Nobu no recolecta, procesa ni almacena datos sensibles tales como información médica, filiación política, religiosa o sindical.
            </Paragraph>
          </Section>

          <Section title="6. DERECHOS DEL USUARIO SOBRE SUS DATOS">
            <Paragraph>
              Conforme a la Ley 25.326, el usuario podrá en cualquier momento:
            </Paragraph>
            <ListItem>Solicitar acceso a sus datos personales</ListItem>
            <ListItem>Solicitar la actualización, rectificación o supresión de sus datos</ListItem>
            <ListItem>Revocar el consentimiento otorgado para el tratamiento de los mismos</ListItem>
            <Paragraph>
              Para ejercer estos derechos, el usuario podrá enviar un correo electrónico a:
            </Paragraph>
            <EmailLink email="info@nobu.com.ar" />
            <Paragraph>
              Se procederá a la baja de la cuenta y eliminación de todos los datos personales, dentro de los plazos establecidos por la normativa vigente.
            </Paragraph>
          </Section>

          <Section title="7. USO DE LA PLATAFORMA">
            <Paragraph>
              El usuario se compromete a utilizar la Plataforma respetando las leyes aplicables, la moral y buenas costumbres, y los presentes Términos.
            </Paragraph>
            <Paragraph>Queda prohibido:</Paragraph>
            <ListItem>Utilizar la Plataforma para actividades ilegales o fraudulentas</ListItem>
            <ListItem>Intentar acceder a recursos restringidos o vulnerar la seguridad del sistema</ListItem>
            <ListItem>Suplantar la identidad de terceros</ListItem>
          </Section>

          <Section title="8. PROPIEDAD INTELECTUAL">
            <Paragraph>
              En cumplimiento de la Ley 11.723 de Propiedad Intelectual, se informa que todos los elementos de la Plataforma, incluyendo pero no limitándose a: código fuente, interfaces, diseño, marca, contenido visual y textual, son propiedad de Nobu o de sus licenciantes, y se encuentran protegidos por la legislación vigente.
            </Paragraph>
            <Paragraph>
              Queda prohibida su reproducción, modificación o distribución sin autorización previa y por escrito.
            </Paragraph>
          </Section>

          <Section title="9. RELACIÓN DE CONSUMO">
            <Paragraph>
              Los usuarios revisten el carácter de consumidores conforme a la Ley 24.240 de Defensa del Consumidor, y en virtud de ello tienen derecho a:
            </Paragraph>
            <ListItem>Recibir un servicio de calidad y conforme a lo pactado</ListItem>
            <ListItem>Ser informados en forma clara, veraz y suficiente</ListItem>
            <ListItem>
              Realizar reclamos ante la Autoridad de Aplicación si consideran que sus derechos han sido vulnerados
            </ListItem>
            <Paragraph>
              Nobu se compromete a dar respuesta a cualquier reclamo o consulta en un plazo razonable.
            </Paragraph>
          </Section>

          <Section title="10. MODIFICACIONES">
            <Paragraph>
              Nobu se reserva el derecho de modificar estos Términos y Condiciones en cualquier momento. Las modificaciones serán notificadas al usuario mediante los canales habituales y se considerarán aceptadas si el usuario continúa utilizando la Plataforma luego de su entrada en vigor.
            </Paragraph>
          </Section>

          <Section title="11. JURISDICCIÓN Y LEY APLICABLE">
            <Paragraph>
              Toda controversia relacionada con la interpretación o cumplimiento de los presentes Términos será resuelta conforme a las leyes de la República Argentina, sometiéndose las partes a la jurisdicción de los tribunales ordinarios con competencia en la Ciudad Autónoma de Buenos Aires.
            </Paragraph>
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
