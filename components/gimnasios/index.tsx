"use client";

import {
  ServiceHeroSection,
  ServiceContentSection,
  ServicePlansSection,
  ServiceBookingSection,
} from "@/components/service-slice";
import { gimnasiosConfig } from "./config";
import { useLanguage } from "@/lib/i18n/language-context";

export function GimnasiosHeroSection() {
  const { language } = useLanguage();
  return <ServiceHeroSection config={gimnasiosConfig[language].hero} />;
}

export function GimnasiosContentSection() {
  const { language } = useLanguage();
  return <ServiceContentSection config={gimnasiosConfig[language].content} />;
}

export function GimnasiosPlansSection() {
  const { language } = useLanguage();
  return <ServicePlansSection config={gimnasiosConfig[language].plans} />;
}

export function GimnasiosBookingSection() {
  const { language } = useLanguage();
  return <ServiceBookingSection config={gimnasiosConfig[language].booking} />;
}
