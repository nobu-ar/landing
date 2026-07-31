import { Heart, Users, FileCheck, Globe } from "lucide-react";
import type { ServiceSliceConfig } from "@/components/service-slice/types";
import type { Language } from "@/lib/i18n/language-context";

export const mutualesConfig: Record<Language, ServiceSliceConfig> = {
  es: {
    slug: "mutuales",
    hero: {
      title: "Plataforma para Mutuales",
      description:
        "Plataforma completa para administrar afiliados, servicios de salud, subsidios y trámites con total transparencia.",
      backgroundImage: "/mutualBg.png",
      imageAlt: "Sistema para mutuales - Nobu",
      image: "/mutualService.png",
      allowsUsersAccess: true,
      usersAccessText: "Acceder al portal del afiliado",
      usersAccessLink: "https://app.mutual.nobu.com.ar",
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
    booking: {
      sectionSubtitle: "Agendá una Reunión",
      sectionTitle: "Conversemos sobre tu mutual",
      sectionDescription: "Elegí el método que prefieras para agendar una reunión con nosotros.",
      ctaTitle: "Conversemos sobre tu mutual",
    },
  },
  en: {
    slug: "mutuales",
    hero: {
      title: "Platform for Mutual Associations",
      description:
        "A complete platform to manage members, health services, subsidies, and paperwork with total transparency.",
      backgroundImage: "/mutualBg.png",
      imageAlt: "System for mutual associations - Nobu",
      image: "/mutualService.png",
    },
    content: {
      sectionSubtitle: "Features",
      sectionTitle: "Everything you need for your mutual association",
      sectionDescription: "A comprehensive solution for members, subsidies, and a digital portal.",
      features: [
        {
          icon: Users,
          title: "Members and family",
          description: "Management of members, family groups, and beneficiaries.",
        },
        {
          icon: FileCheck,
          title: "Subsidies",
          description: "Submission and tracking of subsidies, documentation, and approvals.",
        },
        {
          icon: Globe,
          title: "Digital portal",
          description: "A portal for members to manage paperwork and inquiries.",
        },
        {
          icon: Heart,
          title: "Health services",
          description: "Management of providers, appointments, and coverage.",
        },
      ],
      extraBlock1: {
        title: "Staff and member management",
        description: "Manage staff and members efficiently and securely.",
        image: "/mutualPersonal.png",
        imageAlt: "Staff and member management - Nobu",
      },
      extraBlock2: {
        title: "Accounting and reports",
        description: "Accounting and reports so administrators can manage the mutual association efficiently.",
        image: "/mutualContabilidad.png",
        imageAlt: "Accounting and reports - Nobu",
      },
    },
    booking: {
      sectionSubtitle: "Book a Meeting",
      sectionTitle: "Let's talk about your mutual association",
      sectionDescription: "Choose the method you prefer to schedule a meeting with us.",
      ctaTitle: "Let's talk about your mutual association",
    },
  },
};
