import { ShoppingCart, Package, CreditCard, LayoutGrid } from "lucide-react";
import { getDefaultPlansConfig } from "@/components/service-slice/default-plans";
import type { ServiceSliceConfig } from "@/components/service-slice/types";

const defaultPlans = getDefaultPlansConfig();

export const marketConfig: ServiceSliceConfig = {
  slug: "market",
  hero: {
    title: "Market / E-commerce",
    description:
      "Tienda online completa con catálogo, carrito, pagos integrados y panel de administración profesional.",
    backgroundImage: "/ecommerceBg.png",
  },
  content: {
    sectionSubtitle: "Funcionalidades",
    sectionTitle: "Todo lo que necesitás para tu tienda online",
    sectionDescription: "Una solución integral para vender y gestionar pedidos.",
    features: [
      {
        icon: LayoutGrid,
        title: "Catálogo digital",
        description: "Productos, categorías, variantes y stock en tiempo real.",
      },
      {
        icon: CreditCard,
        title: "Pagos online",
        description: "Múltiples medios de pago y pasarelas integradas.",
      },
      {
        icon: Package,
        title: "Gestión de pedidos",
        description: "Pedidos, envíos, estados y notificaciones automáticas.",
      },
      {
        icon: ShoppingCart,
        title: "Carrito y checkout",
        description: "Experiencia de compra optimizada para tus clientes.",
      },
    ],
    extraBlock1: {
      title: "Panel de administración",
      description: "Gestioná productos, precios, promociones y reportes desde un solo lugar.",
      image: "/marketBackoffice.png",
      imageAlt: "Panel de administración - Nobu",
    },
    extraBlock2: {
      title: "App móvil para clientes",
      description: "Tus clientes pueden comprar productos y servicios directamente desde su celular.",
      image: "/marketCel.png",
      imageAlt: "App móvil para clientes - Nobu",
    },
  },
  /*plans: {
    ...defaultPlans,
    sectionSubtitle: "Comparativa de planes",
    sectionTitle: "Planes para e-commerce",
    sectionDescription: "Elegí el plan que mejor se adapte a tu volumen de ventas.",
  },*/
  booking: {
    sectionSubtitle: "Agendá una Reunión",
    sectionTitle: "Conversemos sobre tu tienda",
    sectionDescription: "Elegí el método que prefieras para agendar una reunión con nosotros.",
    ctaTitle: "Conversemos sobre tu tienda online",
  },
};
