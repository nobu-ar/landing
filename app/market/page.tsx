import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import {
  MarketHeroSection,
  MarketContentSection,
  MarketPlansSection,
  MarketBookingSection,
} from "@/components/market";

export default function MarketPage() {
  return (
    <main className="relative z-10 min-h-screen bg-background">
      <Navbar />
      <MarketHeroSection />
      <div className="h-1 bg-primary" />
      <MarketContentSection />
      <div className="h-1 bg-primary" />
      <MarketPlansSection />
      <div className="h-1 bg-primary" />
      <MarketBookingSection />
      <div className="h-1 bg-primary" />
      <Footer />
    </main>
  );
}
