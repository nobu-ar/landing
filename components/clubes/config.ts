import { Users, Calendar, CreditCard, CalendarDays } from "lucide-react";
import type { ServiceSliceConfig } from "@/components/service-slice/types";
import type { Language } from "@/lib/i18n/language-context";

export const clubesConfig: Record<Language, ServiceSliceConfig> = {
  es: {
    slug: "clubes",
    hero: {
      title: "Gestión para Clubes",
      description:
        "Sistema integral para gestionar socios, cuotas, eventos y beneficios. Todo en un solo lugar con acceso digital para tu institución.",
      backgroundImage: "/clubBg.png",
      image: "/clubService.png",
      imageAlt: "Sistema de gestión para clubes - Nobu",
      allowsUsersAccess: true,
      usersAccessText: "Acceder al portal del socio",
      usersAccessLink: "https://app.club.nobu.com.ar",
    },
    content: {
      sectionSubtitle: "Funcionalidades",
      sectionTitle: "Todo lo que necesitás para tu club",
      sectionDescription: "Una solución integral que se adapta al día a día de tu institución.",
      features: [
        {
          icon: Users,
          title: "Gestión de socios",
          description: "Alta, renovaciones, categorías y familiares. Base de datos centralizada.",
        },
        {
          icon: CreditCard,
          title: "Cuotas y pagos",
          description: "Cobro de cuotas, planes y medios de pago integrados con recordatorios automáticos.",
        },
        {
          icon: CalendarDays,
          title: "Eventos y actividades",
          description: "Calendario de actividades, inscripciones y control de asistencia.",
        },
        {
          icon: Calendar,
          title: "Portal del socio",
          description: "Acceso digital para que los socios vean su estado, pagos y reservas.",
        },
      ],
      extraBlock1: {
        title: "Backoffice y marketplace",
        description:
          "Gestioná tu club desde un solo lugar. Alta de socios, actividades, pagos y reportes. Marketplace de servicios para que los socios puedan comprar productos y servicios.",
        image: "/clubbackoffice.png",
        imageAlt: "Backoffice y marketplace - Nobu",
      },
      extraBlock2: {
        title: "App móvil para socios",
        description:
          "Tus socios pueden ver el calendario, inscribirse a actividades y gestionar sus cuotas desde el celular.",
        image: "/clubCel.png",
        imageAlt: "App para socios - Nobu",
      },
      extraBlock3: {
        title: "Marketplace integrado en la app",
        description:
          "Marketplace integrado para que los socios puedan comprar productos y servicios. Integración con la plataforma de pagos para que los socios puedan pagar sus cuotas y servicios directamente desde la plataforma.",
        image: "/clubMarket.png",
        imageAlt: "Marketplace integrado - Nobu",
      },
    },
    booking: {
      sectionSubtitle: "Agendá una Reunión",
      sectionTitle: "Conversemos sobre tu club",
      sectionDescription: "Elegí el método que prefieras para agendar una reunión con nosotros.",
      ctaTitle: "Conversemos sobre tu club",
    },
  },
  en: {
    slug: "clubes",
    hero: {
      title: "Club Management",
      description:
        "A comprehensive system to manage members, dues, events, and benefits. Everything in one place with digital access for your institution.",
      backgroundImage: "/clubBg.png",
      image: "/clubService.png",
      imageAlt: "Club management system - Nobu",
      allowsUsersAccess: true,
      usersAccessText: "Access the member portal",
      usersAccessLink: "https://app.club.nobu.com.ar",
    },
    content: {
      sectionSubtitle: "Features",
      sectionTitle: "Everything you need for your club",
      sectionDescription: "A comprehensive solution that adapts to your institution's daily operations.",
      features: [
        {
          icon: Users,
          title: "Member management",
          description: "Sign-ups, renewals, categories, and family members. Centralized database.",
        },
        {
          icon: CreditCard,
          title: "Dues and payments",
          description: "Dues collection, plans, and integrated payment methods with automatic reminders.",
        },
        {
          icon: CalendarDays,
          title: "Events and activities",
          description: "Activity calendar, registrations, and attendance tracking.",
        },
        {
          icon: Calendar,
          title: "Member portal",
          description: "Digital access for members to check their status, payments, and bookings.",
        },
      ],
      extraBlock1: {
        title: "Backoffice and marketplace",
        description:
          "Manage your club from a single place. Member sign-ups, activities, payments, and reports. A services marketplace where members can buy products and services.",
        image: "/clubbackoffice.png",
        imageAlt: "Backoffice and marketplace - Nobu",
      },
      extraBlock2: {
        title: "Mobile app for members",
        description:
          "Your members can check the calendar, sign up for activities, and manage their dues from their phone.",
        image: "/clubCel.png",
        imageAlt: "Member app - Nobu",
      },
      extraBlock3: {
        title: "Marketplace built into the app",
        description:
          "An integrated marketplace so members can buy products and services. Integrated with the payments platform so members can pay their dues and services directly from the app.",
        image: "/clubMarket.png",
        imageAlt: "Integrated marketplace - Nobu",
      },
    },
    booking: {
      sectionSubtitle: "Book a Meeting",
      sectionTitle: "Let's talk about your club",
      sectionDescription: "Choose the method you prefer to schedule a meeting with us.",
      ctaTitle: "Let's talk about your club",
    },
  },
};
