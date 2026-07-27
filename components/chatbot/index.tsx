"use client";

import {
  ServiceHeroSection,
  ServiceContentSection,
  ServicePlansSection,
  ServiceBookingSection,
} from "@/components/service-slice";
import { chatbotConfig } from "./config";
import { useLanguage } from "@/lib/i18n/language-context";

export function ChatbotHeroSection() {
  const { language } = useLanguage();
  return <ServiceHeroSection config={chatbotConfig[language].hero} />;
}

export function ChatbotContentSection() {
  const { language } = useLanguage();
  return <ServiceContentSection config={chatbotConfig[language].content} />;
}

export function ChatbotPlansSection() {
  const { language } = useLanguage();
  return <ServicePlansSection config={chatbotConfig[language].plans} />;
}

export function ChatbotBookingSection() {
  const { language } = useLanguage();
  return <ServiceBookingSection config={chatbotConfig[language].booking} />;
}
