import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PartnerLabs from "@/components/PartnerLabs";
import HowItWorks from "@/components/HowItWorks";
import ServicesGrid from "@/components/ServicesGrid";
import BookingWizard from "@/components/BookingWizard";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 flex flex-col">
      <Header />
      <Hero />
      <PartnerLabs />
      <HowItWorks />
      <ServicesGrid />
      <BookingWizard />
      <Footer />
    </main>
  );
}
