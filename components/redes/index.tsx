"use client";

import {
  ServiceHeroSection,
  ServiceContentSection,
  ServicePlansSection,
  ServiceBookingSection,
} from "@/components/service-slice";
import { redesConfig } from "./config";

export function RedesHeroSection() {
  return <ServiceHeroSection config={redesConfig.hero} />;
}

export function RedesContentSection() {
  return <ServiceContentSection config={redesConfig.content} />;
}

export function RedesPlansSection() {
  return <ServicePlansSection config={redesConfig.plans} />;
}

export function RedesBookingSection() {
  return <ServiceBookingSection config={redesConfig.booking} />;
}
