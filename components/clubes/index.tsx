"use client";

import {
  ServiceHeroSection,
  ServiceContentSection,
  ServicePlansSection,
  ServiceBookingSection,
} from "@/components/service-slice";
import { clubesConfig } from "./config";

export function ClubesHeroSection() {
  return <ServiceHeroSection config={clubesConfig.hero} />;
}

export function ClubesContentSection() {
  return <ServiceContentSection config={clubesConfig.content} />;
}

export function ClubesPlansSection() {
  return <ServicePlansSection config={clubesConfig.plans} />;
}

export function ClubesBookingSection() {
  return <ServiceBookingSection config={clubesConfig.booking} />;
}
