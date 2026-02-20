"use client";

import {
  ServiceHeroSection,
  ServiceContentSection,
  ServicePlansSection,
  ServiceBookingSection,
} from "@/components/service-slice";
import { chatbotConfig } from "./config";

export function ChatbotHeroSection() {
  return <ServiceHeroSection config={chatbotConfig.hero} />;
}

export function ChatbotContentSection() {
  return <ServiceContentSection config={chatbotConfig.content} />;
}

export function ChatbotPlansSection() {
  return <ServicePlansSection config={chatbotConfig.plans} />;
}

export function ChatbotBookingSection() {
  return <ServiceBookingSection config={chatbotConfig.booking} />;
}
