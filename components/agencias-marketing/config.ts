import { Megaphone, BarChart3, Users, FileText } from "lucide-react";
import type { ServiceSliceConfig } from "@/components/service-slice/types";
import type { Language } from "@/lib/i18n/language-context";

export const agenciasMarketingConfig: Record<Language, ServiceSliceConfig> = {
  es: {
    slug: "agencias-marketing",
    hero: {
      title: "Agencias de Marketing",
      description:
        "Gestiona clientes, campañas, métricas y reportes. Workflow completo para agencias digitales.",
      imageAlt: "Sistema para agencias de marketing - Nobu",
      backgroundImage: "/marketinBg.png",
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
    booking: {
      sectionSubtitle: "Agendá una Reunión",
      sectionTitle: "Conversemos sobre tu agencia",
      sectionDescription: "Elegí el método que prefieras para agendar una reunión con nosotros.",
      ctaTitle: "Conversemos sobre tu agencia",
    },
  },
  en: {
    slug: "agencias-marketing",
    hero: {
      title: "Marketing Agencies",
      description:
        "Manage clients, campaigns, metrics, and reports. A complete workflow for digital agencies.",
      imageAlt: "System for marketing agencies - Nobu",
      backgroundImage: "/marketinBg.png",
    },
    content: {
      sectionSubtitle: "Features",
      sectionTitle: "Everything you need for your agency",
      sectionDescription: "A comprehensive solution to manage clients and campaigns.",
      features: [
        {
          icon: Users,
          title: "Campaign management",
          description: "Planning, execution, and tracking of campaigns per client.",
        },
        {
          icon: BarChart3,
          title: "Metrics and KPIs",
          description: "Dashboards and performance reports by channel and client.",
        },
        {
          icon: FileText,
          title: "Client reports",
          description: "Custom, white-label reports to deliver to clients.",
        },
        {
          icon: Megaphone,
          title: "Approval workflow",
          description: "Workflows for briefs, approvals, and deliverables.",
        },
      ],
      extraBlock1: {
        title: "Multi-client",
        description: "Manage multiple clients with their campaigns and differentiated access.",
      },
      extraBlock2: {
        title: "Integrations",
        description: "Connect with social media, Google Ads, and other platforms.",
      },
    },
    booking: {
      sectionSubtitle: "Book a Meeting",
      sectionTitle: "Let's talk about your agency",
      sectionDescription: "Choose the method you prefer to schedule a meeting with us.",
      ctaTitle: "Let's talk about your agency",
    },
  },
};
