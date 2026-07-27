import { Bot, MessageCircle, Zap, Globe } from "lucide-react";
import type { ServiceSliceConfig } from "@/components/service-slice/types";
import type { Language } from "@/lib/i18n/language-context";

export const chatbotConfig: Record<Language, ServiceSliceConfig> = {
  es: {
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
    booking: {
      sectionSubtitle: "Agendá una Reunión",
      sectionTitle: "Conversemos sobre tu chatbot",
      sectionDescription: "Elegí el método que prefieras para agendar una reunión con nosotros.",
      ctaTitle: "Conversemos sobre tu proyecto",
    },
  },
  en: {
    slug: "chatbot",
    hero: {
      title: "AI Chatbot",
      description:
        "An intelligent AI virtual assistant for 24/7 customer service, automated responses, and multi-channel integration.",
      backgroundImage: "/chatbotBg.png",
    },
    content: {
      sectionSubtitle: "Features",
      sectionTitle: "Everything you need for your chatbot",
      sectionDescription: "Automated, intelligent support for your business.",
      features: [
        {
          icon: MessageCircle,
          title: "24/7 support",
          description: "Automatic responses at any time of day.",
        },
        {
          icon: Bot,
          title: "Conversational AI",
          description: "Natural, contextual responses using natural language.",
        },
        {
          icon: Globe,
          title: "Multi-channel",
          description: "WhatsApp, web, social media, and more from a single platform.",
        },
        {
          icon: Zap,
          title: "Automation",
          description: "Conversation flows, routing, and escalation to human agents.",
        },
      ],
      extraBlock1: {
        title: "Sales and customer service chatbot",
        description: "A sales and customer service chatbot so your customers can buy products and services directly from the chat.",
        image: "/chat.png",
        imageAlt: "Sales and customer service chatbot - Nobu",
      },
      extraBlock2: {
        title: "Support assistant for your users",
        description: "A support chatbot for your users so they can resolve their questions directly from the chat.",
        image: "/chatBackoffice.png",
        imageAlt: "Support chatbot for your users - Nobu",
      },
    },
    booking: {
      sectionSubtitle: "Book a Meeting",
      sectionTitle: "Let's talk about your chatbot",
      sectionDescription: "Choose the method you prefer to schedule a meeting with us.",
      ctaTitle: "Let's talk about your project",
    },
  },
};
