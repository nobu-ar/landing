"use client";

import {
  ServiceHeroSection,
  ServiceContentSection,
  ServicePlansSection,
  ServiceBookingSection,
} from "@/components/service-slice";
import { mutualesConfig } from "./config";

export function MutualesHeroSection() {
  return <ServiceHeroSection config={mutualesConfig.hero} />;
}

export function MutualesContentSection() {
  return <ServiceContentSection config={mutualesConfig.content} />;
}

export function MutualesPlansSection() {
  return <ServicePlansSection config={mutualesConfig.plans} />;
}

export function MutualesBookingSection() {
  return <ServiceBookingSection config={mutualesConfig.booking} />;
}
