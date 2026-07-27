import { Share2, BarChart3, FileText, Instagram } from "lucide-react";
import type { ServiceSliceConfig } from "@/components/service-slice/types";
import type { Language } from "@/lib/i18n/language-context";

export const redesConfig: Record<Language, ServiceSliceConfig> = {
  es: {
    slug: "redes",
    hero: {
      title: "Análisis de Redes Sociales",
      description:
        "Plataforma de análisis de datos de las principales redes sociales. Carga perfiles y obtén reportes específicos con métricas detalladas, obten un panorama general de la actividad de tus perfiles. Ideal para políticos y empresas.",
      imageAlt: "Análisis de redes sociales - Nobu",
      backgroundImage: "/bigdataBg.png",
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
    booking: {
      sectionSubtitle: "Agendá una Reunión",
      sectionTitle: "Conversemos sobre análisis de redes",
      sectionDescription: "Elegí el método que prefieras para agendar una reunión con nosotros.",
      ctaTitle: "Conversemos sobre tu proyecto",
    },
  },
  en: {
    slug: "redes",
    hero: {
      title: "Social Media Analysis",
      description:
        "A data analysis platform for the leading social networks. Load profiles and get specific reports with detailed metrics, plus a general overview of your profiles' activity. Ideal for politicians and businesses.",
      imageAlt: "Social media analysis - Nobu",
      backgroundImage: "/bigdataBg.png",
    },
    content: {
      sectionSubtitle: "Features",
      sectionTitle: "Everything you need to analyze social media",
      sectionDescription: "Reports and metrics to make data-driven decisions.",
      features: [
        {
          icon: Share2,
          title: "Profile analysis",
          description: "Load Twitter and Instagram profiles and analyze their activity.",
        },
        {
          icon: FileText,
          title: "Custom reports",
          description: "Specific reports with metrics and comparisons.",
        },
        {
          icon: BarChart3,
          title: "Engagement metrics",
          description: "Reach, interactions, growth, and trends.",
        },
        {
          icon: Instagram,
          title: "Multi-platform",
          description: "X, Instagram, Facebook, and YouTube on a single platform.",
        },
      ],
      extraBlock1: {
        title: "Real-time data analysis",
        description: "Real-time analysis of profiles and campaigns to make data-driven decisions.",
        image: "/bigdataBackoffice.png",
        imageAlt: "Real-time data analysis - Nobu",
      },
      extraBlock2: {
        title: "Detailed metrics",
        description: "Detailed metrics classified by sentiment, keywords, and more.",
        image: "/bigdataAnalisis.png",
        imageAlt: "Detailed metrics - Nobu",
      },
      extraBlock3: {
        title: "Smart reports",
        description: "Get daily, weekly, and monthly reports with metrics, comparisons, and suggestions to improve your social media presence and make data-driven decisions.",
        image: "/bigdataInformes.png",
        imageAlt: "Smart reports - Nobu",
      },
    },
    booking: {
      sectionSubtitle: "Book a Meeting",
      sectionTitle: "Let's talk about social media analysis",
      sectionDescription: "Choose the method you prefer to schedule a meeting with us.",
      ctaTitle: "Let's talk about your project",
    },
  },
};
