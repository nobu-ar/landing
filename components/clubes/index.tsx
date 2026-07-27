"use client";

import {
  ServiceHeroSection,
  ServiceContentSection,
  ServicePlansSection,
  ServiceBookingSection,
} from "@/components/service-slice";
import { clubesConfig } from "./config";
import { useLanguage } from "@/lib/i18n/language-context";

export function ClubesHeroSection() {
  const { language } = useLanguage();
  return <ServiceHeroSection config={clubesConfig[language].hero} />;
}

export function ClubesContentSection() {
  const { language } = useLanguage();
  return <ServiceContentSection config={clubesConfig[language].content} />;
}

export function ClubesPlansSection() {
  const { language } = useLanguage();
  return <ServicePlansSection config={clubesConfig[language].plans} />;
}

export function ClubesBookingSection() {
  const { language } = useLanguage();
  return <ServiceBookingSection config={clubesConfig[language].booking} />;
}
