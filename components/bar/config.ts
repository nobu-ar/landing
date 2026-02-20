import { Wine, LayoutGrid, BarChart3, ClipboardList } from "lucide-react";
import type { ServiceSliceConfig } from "@/components/service-slice/types";

const PLAN_LABELS = [
  "Otros sistemas Plan Inicial",
  "Otros sistemas Plan Avanzado",
  "Otros sistemas Plan Pro",
  "Nobu Prime",
  "Nobu Black",
  "Nobu Business",
] as const;

export const barConfig: ServiceSliceConfig = {
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
  /*plans: {
    sectionSubtitle: "Comparativa de planes",
    sectionTitle: "Todo lo que incluye cada plan",
    sectionDescription:
      "Compará funcionalidades entre Otros sistemas y los planes Nobu para bar y restaurante.",
    planLabels: [...PLAN_LABELS],
    tableData: [
      { type: "section", label: "Gestión de gastos e inventario" },
      { type: "feature", feature: "Carga de gastos", plans: [true, true, true, true, true, true] },
      { type: "feature", feature: "Categorías de gastos", plans: [true, true, true, true, true, true] },
      { type: "feature", feature: "Actualización automática de costos", plans: [false, true, true, true, true, true] },
      { type: "feature", feature: "Actualización automática del inventario en base a gastos", plans: [false, true, true, true, true, true] },
      { type: "feature", feature: "Control de inventario de productos e ingredientes", plans: [false, true, true, true, true, true] },
      { type: "feature", feature: "Registros históricos de movimientos de inventario", plans: [false, true, true, true, true, true] },
      { type: "feature", feature: "Notificaciones por falta de stock", plans: [false, true, true, true, true, true] },
      { type: "feature", feature: "Base de datos de proveedores", plans: [false, true, true, true, true, true] },
      { type: "feature", feature: "Cuentas corrientes de proveedores", plans: [false, true, true, true, true, true] },
      { type: "feature", feature: "Conteo de inventario", plans: [false, false, true, true, true, true] },
      { type: "feature", feature: "Inventario valorizado", plans: [false, false, true, true, true, true] },
      { type: "feature", feature: "Estado de resultados", plans: [false, false, true, true, true, true] },
      { type: "feature", feature: "Control de vencimiento de gastos", plans: [false, false, true, true, true, true] },
      { type: "section", label: "Atención al público" },
      { type: "feature", feature: "Ventas por mostrador", plans: [true, true, true, true, true, true] },
      { type: "feature", feature: "Carta QR", plans: [true, true, true, true, true, true] },
      { type: "feature", feature: "Impresión de precuentas", plans: [true, true, true, true, true, true] },
      { type: "feature", feature: "Impresión de comandas", plans: [true, true, true, true, true, true] },
      { type: "feature", feature: "App móvil para camareros", plans: [true, true, true, true, true, true] },
      { type: "feature", feature: "Productos favoritos", plans: [true, true, true, true, true, true] },
      { type: "feature", feature: "Operación con diversos medios de pago", plans: [true, true, true, true, true, true] },
      { type: "feature", feature: "Descuentos sobre ventas", plans: [true, true, true, true, true, true] },
      { type: "feature", feature: "Asignación de clientes sobre ventas", plans: [true, true, true, true, true, true] },
      { type: "feature", feature: "Pedido desde la mesa con Carta QR", plans: [false, true, true, true, true, true] },
      { type: "feature", feature: "Base de datos de clientes", plans: [false, true, true, true, true, true] },
      { type: "feature", feature: "Cuentas corrientes de clientes", plans: [false, true, true, true, true, true] },
      { type: "feature", feature: "Cierre parcial de ventas", plans: [false, true, true, true, true, true] },
      { type: "feature", feature: "Restricciones para vender sin stock", plans: [false, true, true, true, true, true] },
      { type: "feature", feature: "Descuentos automáticos por cliente", plans: [false, true, true, true, true, true] },
      { type: "feature", feature: "Múltiples turnos", plans: [false, false, true, true, true, true] },
      { type: "feature", feature: "Diferentes listas de precios", plans: [false, false, true, true, true, true] },
      { type: "section", label: "Administración de la cocina" },
      { type: "feature", feature: "Categorías y subcategorías de productos", plans: [true, true, true, true, true, true] },
      { type: "feature", feature: "Categorías de ingredientes", plans: [true, true, true, true, true, true] },
      { type: "feature", feature: "Modificadores y adicionales de productos", plans: [true, true, true, true, true, true] },
      { type: "feature", feature: "Combos de productos", plans: [true, true, true, true, true, true] },
      { type: "feature", feature: "Subingredientes", plans: [false, true, true, true, true, true] },
      { type: "feature", feature: "Carga de recetas", plans: [false, true, true, true, true, true] },
      { type: "feature", feature: "Control de mermas y desperdicios", plans: [false, true, true, true, true, true] },
      { type: "feature", feature: "Fichas técnicas de productos e ingredientes", plans: [false, false, true, true, true, true] },
      { type: "section", label: "Extras Nobu" },
      { type: "feature", feature: "Función offline (sin internet)", plans: [false, false, false, true, true, true] },
      { type: "feature", feature: "Chatbot para reservas y pedidos", plans: [false, false, false, true, "ilimitado", "ilimitado"] },
      { type: "feature", feature: "Soporte dedicado", plans: [false, false, false, false, false, true] },
    ],
  },*/
  booking: {
    sectionSubtitle: "Agendá una Reunión",
    sectionTitle: "Conversemos sobre tu bar",
    sectionDescription: "Elegí el método que prefieras para agendar una reunión con nosotros.",
    ctaTitle: "Conversemos sobre tu bar",
  },
};
