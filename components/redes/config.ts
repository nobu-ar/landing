import { Share2, BarChart3, FileText, Instagram } from "lucide-react";
import { getDefaultPlansConfig } from "@/components/service-slice/default-plans";
import type { ServiceSliceConfig } from "@/components/service-slice/types";

const defaultPlans = getDefaultPlansConfig();

export const redesConfig: ServiceSliceConfig = {
  slug: "redes",
  hero: {
    title: "Análisis de Redes Sociales",
    description:
      "Plataforma de análisis de datos de las principales redes sociales. Carga perfiles y obtén reportes específicos con métricas detalladas, obten un panorama general de la actividad de tus perfiles. Ideal para políticos y empresas.",
    imageAlt: "Análisis de redes sociales - Nobu",
    backgroundImage:"/bigdataBg.png"
  },
  content: {
    sectionSubtitle: "Funcionalidades",
    sectionTitle: "Todo lo que necesitás para analizar redes",
    sectionDescription: "Reportes y métricas para tomar decisiones basadas en datos.",
    features: [
      {
        icon: Share2,
        title: "Análisis de perfiles",
        description: "Carga perfiles de Twitter e Instagram y analizá su actividad.",
      },
      {
        icon: FileText,
        title: "Reportes personalizados",
        description: "Reportes específicos con métricas y comparativas.",
      },
      {
        icon: BarChart3,
        title: "Métricas de engagement",
        description: "Alcance, interacciones, crecimiento y tendencias.",
      },
      {
        icon: Instagram,
        title: "Multi-plataforma",
        description: "X, Instagram, Facebook, Youtube en una sola plataforma.",
      },
    ],
    extraBlock1: {
      title: "Análisis de datos en tiempo real",
      description: "Análisis en tiempo real de perfiles y campañas para tomar decisiones basadas en datos.",
      image: "/bigdataBackoffice.png",
      imageAlt: "Análisis de datos en tiempo real - Nobu",
    },
    extraBlock2: {
      title: "Metrícas detalladas",
      description: "Metrícas detalladas y clasificadas segun emociones, palabras clave, etc.",
      image: "/bigdataAnalisis.png",
      imageAlt: "Metrícas detalladas - Nobu",
    },
    extraBlock3: {
      title: "Informes inteligentes",
      description: "Tendras informes diarios, semanales y mensuales, con métricas, comparativas y sugerencias de como mejorar tu presencia en redes para tomar decisiones basadas en datos.",
      image: "/bigdataInformes.png",
      imageAlt: "Informes inteligentes - Nobu",
    },
  },
  /*plans: {
    ...defaultPlans,
    sectionSubtitle: "Comparativa de planes",
    sectionTitle: "Planes de análisis",
    sectionDescription: "Elegí el plan según la cantidad de perfiles y reportes.",
  },*/
  booking: {
    sectionSubtitle: "Agendá una Reunión",
    sectionTitle: "Conversemos sobre análisis de redes",
    sectionDescription: "Elegí el método que prefieras para agendar una reunión con nosotros.",
    ctaTitle: "Conversemos sobre tu proyecto",
  },
};
