import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import {
  ClubesHeroSection,
  ClubesContentSection,
  ClubesPlansSection,
  ClubesBookingSection,
} from "@/components/clubes";

export default function ClubesPage() {
  return (
    <main className="relative z-10 min-h-screen bg-background">
      <Navbar />
      <ClubesHeroSection />
      <div className="h-1 bg-primary" />
      <ClubesContentSection />
      <div className="h-1 bg-primary" />
      <ClubesPlansSection />
      <div className="h-1 bg-primary" />
      <ClubesBookingSection />
      <div className="h-1 bg-primary" />
      <Footer />
    </main>
  );
}
