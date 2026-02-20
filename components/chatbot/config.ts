import { Bot, MessageCircle, Zap, Globe } from "lucide-react";
import { getDefaultPlansConfig } from "@/components/service-slice/default-plans";
import type { ServiceSliceConfig } from "@/components/service-slice/types";

const defaultPlans = getDefaultPlansConfig();

export const chatbotConfig: ServiceSliceConfig = {
  slug: "chatbot",
  hero: {
    title: "Chatbot con IA",
    description:
      "Asistente virtual inteligente con IA para atención al cliente 24/7, automatización de respuestas y integración multi-canal.",
    backgroundImage: "/chatbotBg.png",
  },
  content: {
    sectionSubtitle: "Funcionalidades",
    sectionTitle: "Todo lo que necesitás para tu chatbot",
    sectionDescription: "Atención automatizada e inteligente para tu negocio.",
    features: [
      {
        icon: MessageCircle,
        title: "Atención 24/7",
        description: "Respuestas automáticas en cualquier momento del día.",
      },
      {
        icon: Bot,
        title: "IA conversacional",
        description: "Respuestas naturales y contextuales con lenguaje natural.",
      },
      {
        icon: Globe,
        title: "Multi-canal",
        description: "WhatsApp, web, redes y más desde una sola plataforma.",
      },
      {
        icon: Zap,
        title: "Automatización",
        description: "Flujos de conversación, derivación y escalado a humanos.",
      },
    ],
    extraBlock1: {
      title: "Chatbot de ventas y atención al cliente",
      description: "Chatbot de ventas y atención al cliente para que tus clientes puedan comprar productos y servicios directamente desde el chat.",
      image: "/chat.png",
      imageAlt: "Chatbot de ventas y atención al cliente - Nobu",
    },
    extraBlock2: {
      title: "Asistente de atencion para tus usuarios",
      description: "Chatbot de atencion para tus usuarios para que puedan resolver sus dudas y consultas directamente desde el chat.",
      image: "/chatBackoffice.png",
      imageAlt: "Chatbot de atencion para tus usuarios - Nobu",
    },
  },
  //plans: {
    /*...defaultPlans,
    sectionSubtitle: "Comparativa de planes",
    sectionTitle: "Planes para chatbot",
    sectionDescription: "Elegí el plan según volumen de conversaciones y canales.",
  },*/
  booking: {
    sectionSubtitle: "Agendá una Reunión",
    sectionTitle: "Conversemos sobre tu chatbot",
    sectionDescription: "Elegí el método que prefieras para agendar una reunión con nosotros.",
    ctaTitle: "Conversemos sobre tu proyecto",
  },
};
