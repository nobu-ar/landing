"use client";

import {
  ServiceHeroSection,
  ServiceContentSection,
  ServicePlansSection,
  ServiceBookingSection,
} from "@/components/service-slice";
import { redesConfig } from "./config";
import { useLanguage } from "@/lib/i18n/language-context";

export function RedesHeroSection() {
  const { language } = useLanguage();
  return <ServiceHeroSection config={redesConfig[language].hero} />;
}

export function RedesContentSection() {
  const { language } = useLanguage();
  return <ServiceContentSection config={redesConfig[language].content} />;
}

export function RedesPlansSection() {
  const { language } = useLanguage();
  return <ServicePlansSection config={redesConfig[language].plans} />;
}

export function RedesBookingSection() {
  const { language } = useLanguage();
  return <ServiceBookingSection config={redesConfig[language].booking} />;
}
