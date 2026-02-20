"use client";

import {
  ServiceHeroSection,
  ServiceContentSection,
  ServicePlansSection,
  ServiceBookingSection,
} from "@/components/service-slice";
import { agenciasMarketingConfig } from "./config";

export function AgenciasMarketingHeroSection() {
  return <ServiceHeroSection config={agenciasMarketingConfig.hero} />;
}

export function AgenciasMarketingContentSection() {
  return <ServiceContentSection config={agenciasMarketingConfig.content} />;
}

export function AgenciasMarketingPlansSection() {
  return <ServicePlansSection config={agenciasMarketingConfig.plans} />;
}

export function AgenciasMarketingBookingSection() {
  return <ServiceBookingSection config={agenciasMarketingConfig.booking} />;
}
