"use client";

import {
  ServiceHeroSection,
  ServiceContentSection,
  ServicePlansSection,
  ServiceBookingSection,
} from "@/components/service-slice";
import { marketConfig } from "./config";

export function MarketHeroSection() {
  return <ServiceHeroSection config={marketConfig.hero} />;
}

export function MarketContentSection() {
  return <ServiceContentSection config={marketConfig.content} />;
}

export function MarketPlansSection() {
  return <ServicePlansSection config={marketConfig.plans} />;
}

export function MarketBookingSection() {
  return <ServiceBookingSection config={marketConfig.booking} />;
}
