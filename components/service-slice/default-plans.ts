import type { ServicePlansConfig } from "./types";

const DEFAULT_PLAN_LABELS = [
  "Plan Básico",
  "Plan Estándar",
  "Plan Pro",
  "Nobu Prime",
  "Nobu Business",
] as const;

const DEFAULT_TABLE_DATA: ServicePlansConfig["tableData"] = [
  { type: "section", label: "Gestión principal" },
  { type: "feature", feature: "Módulo base", plans: [true, true, true, true, true] },
  { type: "feature", feature: "Reportes básicos", plans: [true, true, true, true, true] },
  { type: "feature", feature: "Soporte por email", plans: [true, true, true, true, true] },
  { type: "feature", feature: "Reportes avanzados", plans: [false, true, true, true, true] },
  { type: "feature", feature: "Integraciones", plans: [false, true, true, true, true] },
  { type: "section", label: "Extras Nobu" },
  { type: "feature", feature: "Soporte prioritario", plans: [false, false, false, true, true] },
  { type: "feature", feature: "Capacitación incluida", plans: [false, false, false, true, true] },
];

export function getDefaultPlansConfig(): Omit<ServicePlansConfig, "sectionSubtitle" | "sectionTitle" | "sectionDescription"> {
  return {
    planLabels: DEFAULT_PLAN_LABELS,
    tableData: DEFAULT_TABLE_DATA,
  };
}
