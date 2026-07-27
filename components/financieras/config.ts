import { Building2, TrendingUp, FileText, Shield } from "lucide-react";
import type { ServiceSliceConfig } from "@/components/service-slice/types";
import type { Language } from "@/lib/i18n/language-context";

export const financierasConfig: Record<Language, ServiceSliceConfig> = {
  es: {
    slug: "financieras",
    hero: {
      title: "Financieras",
      description:
        "Gestión de préstamos, simuladores de créditos, inversiones, carteras y cobranzas con análisis de riesgo automatizado.",
      image: "/financieraService.png",
      imageAlt: "Sistema para financieras - Nobu",
      backgroundImage: "/financieraBg.png",
    },
    content: {
      sectionSubtitle: "Funcionalidades",
      sectionTitle: "Todo lo que necesitás para tu financiera",
      sectionDescription: "Una solución integral para préstamos, cobranzas y reportes.",
      features: [
        {
          icon: Building2,
          title: "Préstamos y cuotas",
          description: "Gestión de préstamos, planes de pago y seguimiento de cuotas.",
        },
        {
          icon: Shield,
          title: "Análisis de riesgo",
          description: "Evaluación de riesgo y scoring para tomar decisiones informadas.",
        },
        {
          icon: FileText,
          title: "Reportes financieros",
          description: "Reportes de cartera, morosidad y cumplimiento regulatorio.",
        },
        {
          icon: TrendingUp,
          title: "Inversiones y carteras",
          description: "Seguimiento de inversiones y gestión de carteras.",
        },
      ],
      extraBlock1: {
        title: "Simulador de créditos",
        description: "Simulá el crédito que necesitas y obtené el monto aprobado antes de aplicar.",
        image: "/financieraCredito.png",
        imageAlt: "Simulador de créditos - Financieras",
      },
      extraBlock2: {
        title: "Recordatorios y pagos",
        description: "Recordatorios automáticos y pagos en línea para que tus clientes puedan pagar sus préstamos sin complicaciones.",
        image: "/financieraCel.png",
        imageAlt: "Recordatorios y pagos - Financieras",
      },
      extraBlock3: {
        title: "Compliance y cumplimiento",
        description: "Cumplí con las normativas regulatorias y garantizá la transparencia en tus operaciones.",
        image: "/financieraCompliance.png",
        imageAlt: "Compliance y cumplimiento - Financieras",
      },
    },
    booking: {
      sectionSubtitle: "Agendá una Reunión",
      sectionTitle: "Conversemos sobre tu financiera",
      sectionDescription: "Elegí el método que prefieras para agendar una reunión con nosotros.",
      ctaTitle: "Conversemos sobre tu financiera",
    },
  },
  en: {
    slug: "financieras",
    hero: {
      title: "Financial Services",
      description:
        "Loan management, credit simulators, investments, portfolios, and collections with automated risk analysis.",
      image: "/financieraService.png",
      imageAlt: "System for financial companies - Nobu",
      backgroundImage: "/financieraBg.png",
    },
    content: {
      sectionSubtitle: "Features",
      sectionTitle: "Everything you need for your financial company",
      sectionDescription: "A comprehensive solution for loans, collections, and reporting.",
      features: [
        {
          icon: Building2,
          title: "Loans and installments",
          description: "Loan management, payment plans, and installment tracking.",
        },
        {
          icon: Shield,
          title: "Risk analysis",
          description: "Risk assessment and scoring to make informed decisions.",
        },
        {
          icon: FileText,
          title: "Financial reports",
          description: "Portfolio, delinquency, and regulatory compliance reports.",
        },
        {
          icon: TrendingUp,
          title: "Investments and portfolios",
          description: "Investment tracking and portfolio management.",
        },
      ],
      extraBlock1: {
        title: "Credit simulator",
        description: "Simulate the credit you need and get the approved amount before applying.",
        image: "/financieraCredito.png",
        imageAlt: "Credit simulator - Financial Services",
      },
      extraBlock2: {
        title: "Reminders and payments",
        description: "Automatic reminders and online payments so your clients can pay their loans hassle-free.",
        image: "/financieraCel.png",
        imageAlt: "Reminders and payments - Financial Services",
      },
      extraBlock3: {
        title: "Compliance",
        description: "Meet regulatory requirements and guarantee transparency in your operations.",
        image: "/financieraCompliance.png",
        imageAlt: "Compliance - Financial Services",
      },
    },
    booking: {
      sectionSubtitle: "Book a Meeting",
      sectionTitle: "Let's talk about your financial company",
      sectionDescription: "Choose the method you prefer to schedule a meeting with us.",
      ctaTitle: "Let's talk about your financial company",
    },
  },
};
