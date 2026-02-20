import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import {
  FinancierasHeroSection,
  FinancierasContentSection,
  FinancierasPlansSection,
  FinancierasBookingSection,
} from "@/components/financieras";

export default function FinancierasPage() {
  return (
    <main className="relative z-10 min-h-screen bg-background">
      <Navbar />
      <FinancierasHeroSection />
      <div className="h-1 bg-primary" />
      <FinancierasContentSection />
      <div className="h-1 bg-primary" />
      <FinancierasPlansSection />
      <div className="h-1 bg-primary" />
      <FinancierasBookingSection />
      <div className="h-1 bg-primary" />
      <Footer />
    </main>
  );
}
