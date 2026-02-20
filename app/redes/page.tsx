import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import {
  RedesHeroSection,
  RedesContentSection,
  RedesPlansSection,
  RedesBookingSection,
} from "@/components/redes";

export default function RedesPage() {
  return (
    <main className="relative z-10 min-h-screen bg-background">
      <Navbar />
      <RedesHeroSection />
      <div className="h-1 bg-primary" />
      <RedesContentSection />
      <div className="h-1 bg-primary" />
      <RedesPlansSection />
      <div className="h-1 bg-primary" />
      <RedesBookingSection />
      <div className="h-1 bg-primary" />
      <Footer />
    </main>
  );
}
