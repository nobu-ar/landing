import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { BarHeroSection, BarContentSection, BarPlansSection, BarBookingSection } from "@/components/bar";

export default function BarPage() {
  return (
    <main className="relative z-10 min-h-screen bg-background">
      <Navbar />
      <BarHeroSection />
      <div className="h-1 bg-primary" />
      <BarContentSection />
      <div className="h-1 bg-primary" />
      <BarPlansSection />
      <div className="h-1 bg-primary" />
      <BarBookingSection />
      <div className="h-1 bg-primary" />
      <Footer />
    </main>
  );
}
