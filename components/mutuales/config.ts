import { Heart, Users, FileCheck, Globe } from "lucide-react";
import { getDefaultPlansConfig } from "@/components/service-slice/default-plans";
import type { ServiceSliceConfig } from "@/components/service-slice/types";

const defaultPlans = getDefaultPlansConfig();

export const mutualesConfig: ServiceSliceConfig = {
  slug: "mutuales",
  hero: {
    title: "Plataforma para Mutuales",
    description:
      "Plataforma completa para administrar afiliados, servicios de salud, subsidios y trámites con total transparencia.",
    backgroundImage: "/mutualBg.png",
    imageAlt: "Sistema para mutuales - Nobu",
    image: "/mutualService.png",
  },
  content: {
    sectionSubtitle: "Funcionalidades",
    sectionTitle: "Todo lo que necesitás para tu mutual",
    sectionDescription: "Una solución integral para afiliados, subsidios y portal digital.",
    features: [
      {
        icon: Users,
        title: "Afiliados y familia",
        description: "Gestión de afiliados, grupo familiar y beneficiarios.",
      },
      {
        icon: FileCheck,
        title: "Subsidios",
        description: "Carga y seguimiento de subsidios, documentación y aprobaciones.",
      },
      {
        icon: Globe,
        title: "Portal digital",
        description: "Portal para que los afiliados gestionen trámites y consultas.",
      },
      {
        icon: Heart,
        title: "Servicios de salud",
        description: "Gestión de prestadores, turnos y coberturas.",
      },
    ],
    extraBlock1: {
      title: "Gestion de personal y afiliados",
      description: "Gestioná personal y afiliados de manera eficiente y segura.",
      image: "/mutualPersonal.png",
      imageAlt: "Gestion de personal y afiliados - Nobu",
    },
    extraBlock2: {
      title: "Contabilidad y reportes",
      description: "Contabilidad y reportes para que los administradores puedan gestionar la mutual de manera eficiente.",
      image: "/mutualContabilidad.png",
      imageAlt: "Contabilidad y reportes - Nobu",
    },
  },
  /*plans: {
    ...defaultPlans,
    sectionSubtitle: "Comparativa de planes",
    sectionTitle: "Planes para mutuales",
    sectionDescription: "Elegí el plan que mejor se adapte a tu mutual.",
  },*/
  booking: {
    sectionSubtitle: "Agendá una Reunión",
    sectionTitle: "Conversemos sobre tu mutual",
    sectionDescription: "Elegí el método que prefieras para agendar una reunión con nosotros.",
    ctaTitle: "Conversemos sobre tu mutual",
  },
};
