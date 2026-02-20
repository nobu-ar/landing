import { Megaphone, BarChart3, Users, FileText } from "lucide-react";
import { getDefaultPlansConfig } from "@/components/service-slice/default-plans";
import type { ServiceSliceConfig } from "@/components/service-slice/types";

const defaultPlans = getDefaultPlansConfig();

export const agenciasMarketingConfig: ServiceSliceConfig = {
  slug: "agencias-marketing",
  hero: {
    title: "Agencias de Marketing",
    description:
      "Gestiona clientes, campañas, métricas y reportes. Workflow completo para agencias digitales.",
    imageAlt: "Sistema para agencias de marketing - Nobu",
    backgroundImage: "/marketinBg.png"
  },
  content: {
    sectionSubtitle: "Funcionalidades",
    sectionTitle: "Todo lo que necesitás para tu agencia",
    sectionDescription: "Una solución integral para gestionar clientes y campañas.",
    features: [
      {
        icon: Users,
        title: "Gestión de campañas",
        description: "Planificación, ejecución y seguimiento de campañas por cliente.",
      },
      {
        icon: BarChart3,
        title: "Métricas y KPIs",
        description: "Dashboards y reportes de rendimiento por canal y cliente.",
      },
      {
        icon: FileText,
        title: "Reportes para clientes",
        description: "Reportes personalizados y white-label para entregar a clientes.",
      },
      {
        icon: Megaphone,
        title: "Workflow de aprobación",
        description: "Flujos de trabajo para briefs, aprobaciones y entregas.",
      },
    ],
    extraBlock1: {
      title: "Multi-cliente",
      description: "Gestioná varios clientes con sus campañas y accesos diferenciados.",
    },
    extraBlock2: {
      title: "Integraciones",
      description: "Conectá con redes sociales, Google Ads y otras plataformas.",
    },
  },
  /*plans: {
    ...defaultPlans,
    sectionSubtitle: "Comparativa de planes",
    sectionTitle: "Planes para agencias",
    sectionDescription: "Elegí el plan según la cantidad de clientes y usuarios.",
  },*/
  booking: {
    sectionSubtitle: "Agendá una Reunión",
    sectionTitle: "Conversemos sobre tu agencia",
    sectionDescription: "Elegí el método que prefieras para agendar una reunión con nosotros.",
    ctaTitle: "Conversemos sobre tu agencia",
  },
};
