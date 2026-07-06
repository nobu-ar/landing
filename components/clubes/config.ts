import { Users, Calendar, CreditCard, CalendarDays } from "lucide-react";
import { getDefaultPlansConfig } from "@/components/service-slice/default-plans";
import type { ServiceSliceConfig } from "@/components/service-slice/types";

const defaultPlans = getDefaultPlansConfig();

export const clubesConfig: ServiceSliceConfig = {
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
  /*plans: {
    ...defaultPlans,
    sectionSubtitle: "Comparativa de planes",
    sectionTitle: "Planes para tu club",
    sectionDescription: "Elegí el plan que mejor se adapte al tamaño de tu institución.",
  },*/
  booking: {
    sectionSubtitle: "Agendá una Reunión",
    sectionTitle: "Conversemos sobre tu club",
    sectionDescription: "Elegí el método que prefieras para agendar una reunión con nosotros.",
    ctaTitle: "Conversemos sobre tu club",
  },
};
