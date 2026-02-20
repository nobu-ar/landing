import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import {
  AgenciasMarketingHeroSection,
  AgenciasMarketingContentSection,
  AgenciasMarketingPlansSection,
  AgenciasMarketingBookingSection,
} from "@/components/agencias-marketing";

export default function AgenciasMarketingPage() {
  return (
    <main className="relative z-10 min-h-screen bg-background">
      <Navbar />
      <AgenciasMarketingHeroSection />
      <div className="h-1 bg-primary" />
      <AgenciasMarketingContentSection />
      <div className="h-1 bg-primary" />
      <AgenciasMarketingPlansSection />
      <div className="h-1 bg-primary" />
      <AgenciasMarketingBookingSection />
      <div className="h-1 bg-primary" />
      <Footer />
    </main>
  );
}
