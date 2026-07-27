"use client";

import {
  ServiceHeroSection,
  ServiceContentSection,
  ServicePlansSection,
  ServiceBookingSection,
} from "@/components/service-slice";
import { barConfig } from "./config";
import { useLanguage } from "@/lib/i18n/language-context";

export function BarHeroSection() {
  const { language } = useLanguage();
  return <ServiceHeroSection config={barConfig[language].hero} />;
}

export function BarContentSection() {
  const { language } = useLanguage();
  return <ServiceContentSection config={barConfig[language].content} />;
}

export function BarPlansSection() {
  const { language } = useLanguage();
  if (!barConfig[language].plans) return null;
  return <ServicePlansSection config={barConfig[language].plans} />;
}

export function BarBookingSection() {
  const { language } = useLanguage();
  return <ServiceBookingSection config={barConfig[language].booking} />;
}
