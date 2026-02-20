import { Building2, TrendingUp, FileText, Shield } from "lucide-react";
import { getDefaultPlansConfig } from "@/components/service-slice/default-plans";
import type { ServiceSliceConfig } from "@/components/service-slice/types";

const defaultPlans = getDefaultPlansConfig();

export const financierasConfig: ServiceSliceConfig = {
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
  /*plans: {  
    ...defaultPlans,
    sectionSubtitle: "Comparativa de planes",
    sectionTitle: "Planes para financieras",
    sectionDescription: "Elegí el plan que mejor se adapte a tu operación.",
  },*/      
  booking: {
    sectionSubtitle: "Agendá una Reunión",
    sectionTitle: "Conversemos sobre tu financiera",
    sectionDescription: "Elegí el método que prefieras para agendar una reunión con nosotros.",
    ctaTitle: "Conversemos sobre tu financiera",
  },
};
