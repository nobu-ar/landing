"use client";

import {
  ServiceHeroSection,
  ServiceContentSection,
  ServicePlansSection,
  ServiceBookingSection,
} from "@/components/service-slice";
import { barConfig } from "./config";

export function BarHeroSection() {
  return <ServiceHeroSection config={barConfig.hero} />;
}

export function BarContentSection() {
  return <ServiceContentSection config={barConfig.content} />;
}

export function BarPlansSection() {
  if (!barConfig.plans) return null;
  return <ServicePlansSection config={barConfig.plans} />;
}

export function BarBookingSection() {
  return <ServiceBookingSection config={barConfig.booking} />;
}
