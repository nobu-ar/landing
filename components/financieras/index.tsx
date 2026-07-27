"use client";

import {
  ServiceHeroSection,
  ServiceContentSection,
  ServicePlansSection,
  ServiceBookingSection,
} from "@/components/service-slice";
import { financierasConfig } from "./config";
import { useLanguage } from "@/lib/i18n/language-context";

export function FinancierasHeroSection() {
  const { language } = useLanguage();
  return <ServiceHeroSection config={financierasConfig[language].hero} />;
}

export function FinancierasContentSection() {
  const { language } = useLanguage();
  return <ServiceContentSection config={financierasConfig[language].content} />;
}

export function FinancierasPlansSection() {
  const { language } = useLanguage();
  return <ServicePlansSection config={financierasConfig[language].plans} />;
}

export function FinancierasBookingSection() {
  const { language } = useLanguage();
  return <ServiceBookingSection config={financierasConfig[language].booking} />;
}
