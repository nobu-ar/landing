import type { LucideIcon } from "lucide-react";

export interface ServiceHeroConfig {
  title: string;
  description: string;
  /** Optional: hero image (when omitted, only title/description/CTA are shown) */
  image?: string;
  imageAlt?: string;
  /** Optional: custom background image for the hero section (e.g. "/financieraBg.png") */
  backgroundImage?: string;

  allowsUsersAccess?: boolean;
  usersAccessText?: string;
  usersAccessLink?: string;
}

export interface ServiceFeatureItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface ServiceContentConfig {
  sectionSubtitle: string;
  sectionTitle: string;
  sectionDescription: string;
  features: ServiceFeatureItem[];
  /** Optional: title, description, image for an extra content block */
  extraBlock1?: { title: string; description: string; image?: string; imageAlt?: string };
  extraBlock2?: { title: string; description: string; image?: string; imageAlt?: string };
  extraBlock3?: { title: string; description: string; image?: string; imageAlt?: string };
}

export type PlanCellValue = boolean | "ilimitado";

export interface ServicePlansConfig {
  sectionSubtitle: string;
  sectionTitle: string;
  sectionDescription: string;
  planLabels: readonly string[];
  tableData: Array<
    | { type: "section"; label: string }
    | { type: "feature"; feature: string; plans: PlanCellValue[] }
  >;
}

export interface ServiceBookingConfig {
  sectionSubtitle: string;
  sectionTitle: string;
  sectionDescription: string;
  /** Optional override for CTA title e.g. "Conversemos sobre tu club" */
  ctaTitle?: string;
}

export interface ServiceSliceConfig {
  slug: string;
  hero: ServiceHeroConfig;
  content: ServiceContentConfig;
  /** Opcional: sección de comparativa de planes (si no se define, no se muestra) */
  plans?: ServicePlansConfig | null;
  booking: ServiceBookingConfig;
}
