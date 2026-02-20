import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import {
  GimnasiosHeroSection,
  GimnasiosContentSection,
  GimnasiosPlansSection,
  GimnasiosBookingSection,
} from "@/components/gimnasios";

export default function GimnasiosPage() {
  return (
    <main className="relative z-10 min-h-screen bg-background">
      <Navbar />
      <GimnasiosHeroSection />
      <div className="h-1 bg-primary" />
      <GimnasiosContentSection />
      <div className="h-1 bg-primary" />
      <GimnasiosPlansSection />
      <div className="h-1 bg-primary" />
      <GimnasiosBookingSection />
      <div className="h-1 bg-primary" />
      <Footer />
    </main>
  );
}
