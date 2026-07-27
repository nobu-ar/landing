import { Wine, LayoutGrid, BarChart3, ClipboardList } from "lucide-react";
import type { ServiceSliceConfig } from "@/components/service-slice/types";
import type { Language } from "@/lib/i18n/language-context";

export const barConfig: Record<Language, ServiceSliceConfig> = {
  es: {
    slug: "bar",
    hero: {
      title: "Bar Management",
      description:
        "Sistema POS, control de inventario, comandas digitales, pagos y cobros integrados, análisis de ventas y app móvil para clientes para optimizar tu local.",
      image: "/barsections.png",
      imageAlt: "Pantallas del sistema Bar Management - POS, comandas y análisis",
      backgroundImage: "/barBg.png",
    },
    content: {
      sectionSubtitle: "Funcionalidades",
      sectionTitle: "Todo lo que necesitás para tu bar o restaurante",
      sectionDescription: "Una solución integral que se adapta al día a día de tu local.",
      features: [
        {
          icon: LayoutGrid,
          title: "POS intuitivo",
          description: "Punto de venta rápido y fácil de usar para cobrar en mesa, barra o delivery.",
        },
        {
          icon: Wine,
          title: "Control de stock",
          description: "Inventario en tiempo real, alertas de bajo stock y gestión de proveedores.",
        },
        {
          icon: ClipboardList,
          title: "Comandas digitales",
          description: "Pedidos desde la mesa a cocina y barra sin papeles, con seguimiento en tiempo real.",
        },
        {
          icon: BarChart3,
          title: "Análisis de ventas",
          description: "Reportes de ventas, productos más vendidos y horarios pico para tomar mejores decisiones.",
        },
      ],
      extraBlock1: {
        title: "Un sistema para todo tu local",
        description:
          "Un sistema completo para tu local. Desde la gestión de inventario hasta el control de ventas y pagos.",
        image: "/barBackoffice.png",
        imageAlt: "Sistema Bar Management - Vista del producto",
      },
      extraBlock2: {
        title: "App móvil para clientes",
        description:
          "Tus clientes pueden ver el menú, reservar mesas y pedir productos directamente desde su teléfono.",
        image: "/barcel.png",
        imageAlt: "App móvil para clientes - Bar Management",
      },
      extraBlock3: {
        title: "Aceptá todos los medios de pago",
        description:
          "Aceptá todos los medios de pago por la App. Dales a tus clientes la mejor experiencia de pago.",
        image: "/paymentbar.png",
        imageAlt: "Pagos y cobros en Bar Management",
      },
    },
    booking: {
      sectionSubtitle: "Agendá una Reunión",
      sectionTitle: "Conversemos sobre tu bar",
      sectionDescription: "Elegí el método que prefieras para agendar una reunión con nosotros.",
      ctaTitle: "Conversemos sobre tu bar",
    },
  },
  en: {
    slug: "bar",
    hero: {
      title: "Bar Management",
      description:
        "POS system, inventory control, digital orders, integrated payments, sales analytics, and a mobile app for customers to optimize your venue.",
      image: "/barsections.png",
      imageAlt: "Bar Management system screens - POS, orders, and analytics",
      backgroundImage: "/barBg.png",
    },
    content: {
      sectionSubtitle: "Features",
      sectionTitle: "Everything you need for your bar or restaurant",
      sectionDescription: "A comprehensive solution that adapts to your venue's daily operations.",
      features: [
        {
          icon: LayoutGrid,
          title: "Intuitive POS",
          description: "A fast, easy-to-use point of sale for table, bar, or delivery orders.",
        },
        {
          icon: Wine,
          title: "Stock control",
          description: "Real-time inventory, low-stock alerts, and supplier management.",
        },
        {
          icon: ClipboardList,
          title: "Digital orders",
          description: "Paperless orders from table to kitchen and bar, with real-time tracking.",
        },
        {
          icon: BarChart3,
          title: "Sales analytics",
          description: "Sales reports, best-selling products, and peak hours to make better decisions.",
        },
      ],
      extraBlock1: {
        title: "One system for your whole venue",
        description:
          "A complete system for your venue. From inventory management to sales and payment control.",
        image: "/barBackoffice.png",
        imageAlt: "Bar Management System - Product view",
      },
      extraBlock2: {
        title: "Mobile app for customers",
        description:
          "Your customers can view the menu, book tables, and order directly from their phone.",
        image: "/barcel.png",
        imageAlt: "Mobile app for customers - Bar Management",
      },
      extraBlock3: {
        title: "Accept every payment method",
        description:
          "Accept all payment methods through the app. Give your customers the best payment experience.",
        image: "/paymentbar.png",
        imageAlt: "Payments in Bar Management",
      },
    },
    booking: {
      sectionSubtitle: "Book a Meeting",
      sectionTitle: "Let's talk about your bar",
      sectionDescription: "Choose the method you prefer to schedule a meeting with us.",
      ctaTitle: "Let's talk about your bar",
    },
  },
};
