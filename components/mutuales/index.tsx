"use client";

import {
  ServiceHeroSection,
  ServiceContentSection,
  ServicePlansSection,
  ServiceBookingSection,
} from "@/components/service-slice";
import { mutualesConfig } from "./config";
import { useLanguage } from "@/lib/i18n/language-context";

export function MutualesHeroSection() {
  const { language } = useLanguage();
  return <ServiceHeroSection config={mutualesConfig[language].hero} />;
}

export function MutualesContentSection() {
  const { language } = useLanguage();
  return <ServiceContentSection config={mutualesConfig[language].content} />;
}

export function MutualesPlansSection() {
  const { language } = useLanguage();
  return <ServicePlansSection config={mutualesConfig[language].plans} />;
}

export function MutualesBookingSection() {
  const { language } = useLanguage();
  return <ServiceBookingSection config={mutualesConfig[language].booking} />;
}
