import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import {
  ChatbotHeroSection,
  ChatbotContentSection,
  ChatbotPlansSection,
  ChatbotBookingSection,
} from "@/components/chatbot";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chatbot con IA",
  description: "Asistente virtual inteligente con IA para atención al cliente 24/7, automatización de respuestas y integración multi-canal. WhatsApp, web y redes desde una sola plataforma.",
  keywords: ["chatbot", "inteligencia artificial", "atención al cliente", "automatización", "WhatsApp", "asistente virtual"],
  openGraph: {
    title: "Chatbot con IA | Nobu",
    description: "Asistente virtual inteligente para atención 24/7, automatización de respuestas y integración multi-canal.",
    url: "https://nobu.com.ar/chatbot",
  },
  alternates: {
    canonical: "https://nobu.com.ar/chatbot",
  },
};

export default function ChatbotPage() {
  return (
    <main className="relative z-10 min-h-screen bg-background">
      <Navbar />
      <ChatbotHeroSection />
      <div className="h-1 bg-primary" />
      <ChatbotContentSection />
      <div className="h-1 bg-primary" />
      <ChatbotPlansSection />
      <div className="h-1 bg-primary" />
      <ChatbotBookingSection />
      <div className="h-1 bg-primary" />
      <Footer />
    </main>
  );
}
