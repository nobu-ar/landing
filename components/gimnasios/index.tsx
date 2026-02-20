"use client";

import {
  ServiceHeroSection,
  ServiceContentSection,
  ServicePlansSection,
  ServiceBookingSection,
} from "@/components/service-slice";
import { gimnasiosConfig } from "./config";

export function GimnasiosHeroSection() {
  return <ServiceHeroSection config={gimnasiosConfig.hero} />;
}

export function GimnasiosContentSection() {
  return <ServiceContentSection config={gimnasiosConfig.content} />;
}

export function GimnasiosPlansSection() {
  return <ServicePlansSection config={gimnasiosConfig.plans} />;
}

export function GimnasiosBookingSection() {
  return <ServiceBookingSection config={gimnasiosConfig.booking} />;
}
