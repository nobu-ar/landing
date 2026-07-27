import { ShoppingCart, Package, CreditCard, LayoutGrid } from "lucide-react";
import type { ServiceSliceConfig } from "@/components/service-slice/types";
import type { Language } from "@/lib/i18n/language-context";

export const marketConfig: Record<Language, ServiceSliceConfig> = {
  es: {
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
    booking: {
      sectionSubtitle: "Agendá una Reunión",
      sectionTitle: "Conversemos sobre tu tienda",
      sectionDescription: "Elegí el método que prefieras para agendar una reunión con nosotros.",
      ctaTitle: "Conversemos sobre tu tienda online",
    },
  },
  en: {
    slug: "market",
    hero: {
      title: "Market / E-commerce",
      description:
        "A complete online store with catalog, cart, integrated payments, and a professional admin panel.",
      backgroundImage: "/ecommerceBg.png",
    },
    content: {
      sectionSubtitle: "Features",
      sectionTitle: "Everything you need for your online store",
      sectionDescription: "A comprehensive solution to sell and manage orders.",
      features: [
        {
          icon: LayoutGrid,
          title: "Digital catalog",
          description: "Products, categories, variants, and real-time stock.",
        },
        {
          icon: CreditCard,
          title: "Online payments",
          description: "Multiple payment methods and integrated gateways.",
        },
        {
          icon: Package,
          title: "Order management",
          description: "Orders, shipping, statuses, and automatic notifications.",
        },
        {
          icon: ShoppingCart,
          title: "Cart and checkout",
          description: "An optimized shopping experience for your customers.",
        },
      ],
      extraBlock1: {
        title: "Admin panel",
        description: "Manage products, prices, promotions, and reports from a single place.",
        image: "/marketBackoffice.png",
        imageAlt: "Admin panel - Nobu",
      },
      extraBlock2: {
        title: "Mobile app for customers",
        description: "Your customers can buy products and services directly from their phone.",
        image: "/marketCel.png",
        imageAlt: "Mobile app for customers - Nobu",
      },
    },
    booking: {
      sectionSubtitle: "Book a Meeting",
      sectionTitle: "Let's talk about your store",
      sectionDescription: "Choose the method you prefer to schedule a meeting with us.",
      ctaTitle: "Let's talk about your online store",
    },
  },
};
