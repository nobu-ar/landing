"use client";

import {
  ServiceHeroSection,
  ServiceContentSection,
  ServicePlansSection,
  ServiceBookingSection,
} from "@/components/service-slice";
import { agenciasMarketingConfig } from "./config";
import { useLanguage } from "@/lib/i18n/language-context";

export function AgenciasMarketingHeroSection() {
  const { language } = useLanguage();
  return <ServiceHeroSection config={agenciasMarketingConfig[language].hero} />;
}

export function AgenciasMarketingContentSection() {
  const { language } = useLanguage();
  return <ServiceContentSection config={agenciasMarketingConfig[language].content} />;
}

export function AgenciasMarketingPlansSection() {
  const { language } = useLanguage();
  return <ServicePlansSection config={agenciasMarketingConfig[language].plans} />;
}

export function AgenciasMarketingBookingSection() {
  const { language } = useLanguage();
  return <ServiceBookingSection config={agenciasMarketingConfig[language].booking} />;
}
