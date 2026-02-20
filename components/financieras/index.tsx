"use client";

import {
  ServiceHeroSection,
  ServiceContentSection,
  ServicePlansSection,
  ServiceBookingSection,
} from "@/components/service-slice";
import { financierasConfig } from "./config";

export function FinancierasHeroSection() {
  return <ServiceHeroSection config={financierasConfig.hero} />;
}

export function FinancierasContentSection() {
  return <ServiceContentSection config={financierasConfig.content} />;
}

export function FinancierasPlansSection() {
  return <ServicePlansSection config={financierasConfig.plans} />;
}

export function FinancierasBookingSection() {
  return <ServiceBookingSection config={financierasConfig.booking} />;
}
