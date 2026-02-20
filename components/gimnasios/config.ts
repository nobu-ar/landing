import { Dumbbell, Users, Calendar, CreditCard } from "lucide-react";
import { getDefaultPlansConfig } from "@/components/service-slice/default-plans";
import type { ServiceSliceConfig } from "@/components/service-slice/types";

const defaultPlans = getDefaultPlansConfig();

export const gimnasiosConfig: ServiceSliceConfig = {
  slug: "gimnasios",
  hero: {
    title: "Sistema para Gimnasios",
    description:
      "Sistema completo para gestionar membresías, clases, instructores y pagos. Control total de tu centro fitness.",
    backgroundImage: "/gymBg.png",
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
  /*plans: {
    ...defaultPlans,
    sectionSubtitle: "Comparativa de planes",
    sectionTitle: "Planes para gimnasios",
    sectionDescription: "Elegí el plan que mejor se adapte al tamaño de tu centro.",
  },*/
  booking: {
    sectionSubtitle: "Agendá una Reunión",
    sectionTitle: "Conversemos sobre tu gimnasio",
    sectionDescription: "Elegí el método que prefieras para agendar una reunión con nosotros.",
    ctaTitle: "Conversemos sobre tu gimnasio",
  },
};
