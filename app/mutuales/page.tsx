import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import {
  MutualesHeroSection,
  MutualesContentSection,
  MutualesPlansSection,
  MutualesBookingSection,
} from "@/components/mutuales";

export default function MutualesPage() {
  return (
    <main className="relative z-10 min-h-screen bg-background">
      <Navbar />
      <MutualesHeroSection />
      <div className="h-1 bg-primary" />
      <MutualesContentSection />
      <div className="h-1 bg-primary" />
      <MutualesPlansSection />
      <div className="h-1 bg-primary" />
      <MutualesBookingSection />
      <div className="h-1 bg-primary" />
      <Footer />
    </main>
  );
}
