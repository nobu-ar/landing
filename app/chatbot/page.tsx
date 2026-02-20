import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import {
  ChatbotHeroSection,
  ChatbotContentSection,
  ChatbotPlansSection,
  ChatbotBookingSection,
} from "@/components/chatbot";

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
