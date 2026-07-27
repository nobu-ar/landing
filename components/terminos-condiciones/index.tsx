"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Mail } from "lucide-react";
import { heroBackground, servicesBackground } from "@/components/service-slice/backgrounds";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/i18n/language-context";

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

function TermsContentEs() {
  return (
    <>
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
        <Paragraph>Conforme a la Ley 25.326, el usuario podrá en cualquier momento:</Paragraph>
        <ListItem>Solicitar acceso a sus datos personales</ListItem>
        <ListItem>Solicitar la actualización, rectificación o supresión de sus datos</ListItem>
        <ListItem>Revocar el consentimiento otorgado para el tratamiento de los mismos</ListItem>
        <Paragraph>Para ejercer estos derechos, el usuario podrá enviar un correo electrónico a:</Paragraph>
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
    </>
  );
}

function TermsContentEn() {
  return (
    <>
      <Section title="1. ACCEPTANCE OF TERMS">
        <Paragraph>
          By accessing and using Nobu's digital platform (hereinafter, the &quot;Platform&quot;), the user expressly and unreservedly accepts these Terms and Conditions, which govern the use of the services provided under the Software as a Service (SaaS) model.
        </Paragraph>
      </Section>

      <Section title="2. PROVIDER IDENTIFICATION">
        <Paragraph>
          The Platform is operated by Nobu, the trade name of the company responsible for the service, which operates in accordance with the regulations in force in Argentina. For any inquiries, you may contact:
        </Paragraph>
        <EmailLink email="info@nobu.com.ar" />
      </Section>

      <Section title="3. ELIGIBILITY TO USE THE PLATFORM">
        <Paragraph>
          Use of the Nobu Platform is restricted to individuals who meet one of the following conditions:
        </Paragraph>
        <ListItem>Are 18 years of age or older;</ListItem>
        <ListItem>
          Are legally emancipated, as provided under the Argentine Civil and Commercial Code;
        </ListItem>
        <ListItem>
          Or have the express consent of their legal representatives (parent or guardian).
        </ListItem>
        <Paragraph>
          In the latter case, acceptance of these Terms and Conditions by a minor will be deemed made with the consent of the legal representative, who is understood to have read, understood, and accepted these terms, assuming full legal responsibility arising from the minor's use of the Platform.
        </Paragraph>
        <Paragraph>
          Nobu reserves the right to request documentation proving compliance with these conditions, as well as to suspend or cancel accounts if non-compliance with this policy is detected.
        </Paragraph>
      </Section>

      <Section title="4. PERSONAL DATA COLLECTED">
        <Paragraph>
          In compliance with Law 25,326 on the Protection of Personal Data, we inform users that some of the following data may be collected:
        </Paragraph>
        <ListItem>First and last name</ListItem>
        <ListItem>National ID (DNI)</ListItem>
        <ListItem>Tax ID (CUIT/CUIL)</ListItem>
        <ListItem>Email address</ListItem>
        <ListItem>Age</ListItem>
        <ListItem>Date of birth</ListItem>
        <ListItem>Biometric data (Face ID, fingerprint)</ListItem>
        <Paragraph>
          This data is collected solely to facilitate the use of the services offered within the Nobu ecosystem and to enable proper identification of users, ensuring traceability and consistency of information across the Platform.
        </Paragraph>
        <Paragraph>
          It is also noted that data may be cross-checked with RENAPER (Argentina's National Registry of Persons) when identity validation is required.
        </Paragraph>
      </Section>

      <Section title="5. DATA STORAGE AND DESTINATION">
        <Paragraph>
          Collected data is stored on proprietary servers hosted on cloud infrastructure provided by Amazon Web Services (AWS), under strict security standards.
        </Paragraph>
        <Paragraph>
          Data is not shared with third parties, except with the express authorization of the data subject or by judicial or legal requirement.
        </Paragraph>
        <Paragraph>
          Nobu does not collect, process, or store sensitive data such as medical information or political, religious, or union affiliation.
        </Paragraph>
      </Section>

      <Section title="6. USER RIGHTS OVER THEIR DATA">
        <Paragraph>In accordance with Law 25,326, users may at any time:</Paragraph>
        <ListItem>Request access to their personal data</ListItem>
        <ListItem>Request the update, rectification, or deletion of their data</ListItem>
        <ListItem>Revoke consent previously granted for data processing</ListItem>
        <Paragraph>To exercise these rights, users may send an email to:</Paragraph>
        <EmailLink email="info@nobu.com.ar" />
        <Paragraph>
          The account will be deactivated and all personal data deleted, within the timeframes established by applicable regulations.
        </Paragraph>
      </Section>

      <Section title="7. USE OF THE PLATFORM">
        <Paragraph>
          Users agree to use the Platform in compliance with applicable laws, morals and good customs, and these Terms.
        </Paragraph>
        <Paragraph>The following is prohibited:</Paragraph>
        <ListItem>Using the Platform for illegal or fraudulent activities</ListItem>
        <ListItem>Attempting to access restricted resources or compromise system security</ListItem>
        <ListItem>Impersonating third parties</ListItem>
      </Section>

      <Section title="8. INTELLECTUAL PROPERTY">
        <Paragraph>
          In compliance with Law 11,723 on Intellectual Property, all elements of the Platform, including but not limited to: source code, interfaces, design, brand, and visual and textual content, are the property of Nobu or its licensors and are protected under applicable law.
        </Paragraph>
        <Paragraph>
          Reproduction, modification, or distribution without prior written authorization is prohibited.
        </Paragraph>
      </Section>

      <Section title="9. CONSUMER RELATIONSHIP">
        <Paragraph>
          Users are considered consumers under Law 24,240 on Consumer Protection and, as such, are entitled to:
        </Paragraph>
        <ListItem>Receive a quality service that matches what was agreed upon</ListItem>
        <ListItem>Be informed clearly, truthfully, and sufficiently</ListItem>
        <ListItem>
          File complaints with the Enforcement Authority if they believe their rights have been violated
        </ListItem>
        <Paragraph>
          Nobu is committed to responding to any complaint or inquiry within a reasonable time.
        </Paragraph>
      </Section>

      <Section title="10. CHANGES">
        <Paragraph>
          Nobu reserves the right to modify these Terms and Conditions at any time. Changes will be notified to users through the usual channels and will be deemed accepted if the user continues using the Platform after they take effect.
        </Paragraph>
      </Section>

      <Section title="11. JURISDICTION AND APPLICABLE LAW">
        <Paragraph>
          Any dispute related to the interpretation or performance of these Terms will be resolved in accordance with the laws of Argentina, with the parties submitting to the jurisdiction of the ordinary courts of the City of Buenos Aires.
        </Paragraph>
      </Section>
    </>
  );
}

const pageContent = {
  es: {
    heading: "TÉRMINOS Y CONDICIONES DE USO DE NOBU",
    updated: "Última actualización: 02 de marzo de 2026",
    back: "Volver",
  },
  en: {
    heading: "NOBU TERMS AND CONDITIONS OF USE",
    updated: "Last updated: March 2, 2026",
    back: "Back",
  },
} as const;

export function TerminosCondicionesSection() {
  const { language } = useLanguage();
  const t = pageContent[language];

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
              {t.heading}
            </h1>
            <p className="text-sm sm:text-base" style={{ color: "rgba(255,255,255,0.9)" }}>
              {t.updated}
            </p>
          </div>
        </div>

        {/* Contenido en card */}
        <div
          className=" mx-auto rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-xl"
          style={{ backgroundColor: "#f3f4f6" }}
        >
          {language === "es" ? <TermsContentEs /> : <TermsContentEn />}

          <div className="mt-12 pt-8 border-t border-gray-200">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90"
              style={{ color: "black" } as React.CSSProperties}
              asChild
            >
              <Link href="/" className="inline-flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                {t.back}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
