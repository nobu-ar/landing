import { Dumbbell, Users, Calendar, CreditCard } from "lucide-react";
import type { ServiceSliceConfig } from "@/components/service-slice/types";
import type { Language } from "@/lib/i18n/language-context";

export const gimnasiosConfig: Record<Language, ServiceSliceConfig> = {
  es: {
    slug: "gimnasios",
    hero: {
      title: "Sistema para Gimnasios",
      description:
        "Sistema completo para gestionar membresías, clases, instructores y pagos. Control total de tu centro fitness.",
      backgroundImage: "/gymBg.png",
      allowsUsersAccess: true,
      usersAccessText: "Acceder al portal del socio",
      usersAccessLink: "https://app.gym.nobu.com.ar",
    },
    content: {
      sectionSubtitle: "Funcionalidades",
      sectionTitle: "Todo lo que necesitás para tu gimnasio",
      sectionDescription: "Una solución integral para membresías, clases y cobranza.",
      features: [
        {
          icon: Users,
          title: "Gestión de socios",
          description: "Altas, renovaciones, planes y control de acceso.",
        },
        {
          icon: Calendar,
          title: "Clases y horarios",
          description: "Armado de grillas, reservas y cupos por actividad.",
        },
        {
          icon: CreditCard,
          title: "Pagos y cuotas",
          description: "Cobro de cuotas, débito automático y recordatorios.",
        },
        {
          icon: Dumbbell,
          title: "Instructores y actividades",
          description: "Asignación de instructores y seguimiento de asistencia.",
        },
      ],
      extraBlock1: {
        title: "App para socios",
        description: "Tus socios pueden reservar clases, ver horarios y gestionar su membresía desde el celular.",
        image: "/paymentGym.png",
        imageAlt: "App para socios - Nobu",
      },
      extraBlock2: {
        title: "Maquinas interactivas",
        description: "Tus socios pueden escanear los Qr de las maquinas para tener un tutorial de como usarla.",
        image: "/gymCel.png",
        imageAlt: "Maquinas interactivas - Nobu",
      },
    },
    booking: {
      sectionSubtitle: "Agendá una Reunión",
      sectionTitle: "Conversemos sobre tu gimnasio",
      sectionDescription: "Elegí el método que prefieras para agendar una reunión con nosotros.",
      ctaTitle: "Conversemos sobre tu gimnasio",
    },
  },
  en: {
    slug: "gimnasios",
    hero: {
      title: "Gym Management System",
      description:
        "A complete system to manage memberships, classes, instructors, and payments. Total control of your fitness center.",
      backgroundImage: "/gymBg.png",
      allowsUsersAccess: true,
      usersAccessText: "Access the member portal",
      usersAccessLink: "https://app.gym.nobu.com.ar",
    },
    content: {
      sectionSubtitle: "Features",
      sectionTitle: "Everything you need for your gym",
      sectionDescription: "A complete solution for memberships, classes, and billing.",
      features: [
        {
          icon: Users,
          title: "Member management",
          description: "Sign-ups, renewals, plans, and access control.",
        },
        {
          icon: Calendar,
          title: "Classes and schedules",
          description: "Build schedules, bookings, and capacity per activity.",
        },
        {
          icon: CreditCard,
          title: "Payments and dues",
          description: "Dues collection, automatic debit, and reminders.",
        },
        {
          icon: Dumbbell,
          title: "Instructors and activities",
          description: "Instructor assignment and attendance tracking.",
        },
      ],
      extraBlock1: {
        title: "Member app",
        description: "Your members can book classes, check schedules, and manage their membership from their phone.",
        image: "/paymentGym.png",
        imageAlt: "Member app - Nobu",
      },
      extraBlock2: {
        title: "Interactive machines",
        description: "Your members can scan a QR code on each machine to get a usage tutorial.",
        image: "/gymCel.png",
        imageAlt: "Interactive machines - Nobu",
      },
    },
    booking: {
      sectionSubtitle: "Book a Meeting",
      sectionTitle: "Let's talk about your gym",
      sectionDescription: "Choose the method you prefer to schedule a meeting with us.",
      ctaTitle: "Let's talk about your gym",
    },
  },
};
