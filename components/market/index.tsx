"use client";

import {
  ServiceHeroSection,
  ServiceContentSection,
  ServicePlansSection,
  ServiceBookingSection,
} from "@/components/service-slice";
import { marketConfig } from "./config";
import { useLanguage } from "@/lib/i18n/language-context";

export function MarketHeroSection() {
  const { language } = useLanguage();
  return <ServiceHeroSection config={marketConfig[language].hero} />;
}

export function MarketContentSection() {
  const { language } = useLanguage();
  return <ServiceContentSection config={marketConfig[language].content} />;
}

export function MarketPlansSection() {
  const { language } = useLanguage();
  return <ServicePlansSection config={marketConfig[language].plans} />;
}

export function MarketBookingSection() {
  const { language } = useLanguage();
  return <ServiceBookingSection config={marketConfig[language].booking} />;
}
