import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicesGrid from "@/components/ServicesGrid";
import PartnerLabs from "@/components/PartnerLabs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blood Tests & Pathology Services | LabLink Guwahati",
  description:
    "Explore 500+ blood test packages in Guwahati including Full Body Checkups, Diabetes Profile, Thyroid Profile, and Vitamin tests with 30% OFF.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-slate-50 flex flex-col">
      <Header />
      
      {/* Banner */}
      <div className="bg-slate-900 text-white py-12 px-4 md:px-8 border-b border-slate-800 text-center">
        <div className="max-w-4xl mx-auto space-y-3">
          <span className="px-3.5 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider border border-blue-500/30">
            500+ DIAGNOSTIC TESTS AVAILABLE
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Services & Blood Test Packages
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
            Doorstep blood collection across Guwahati with NABL-accredited lab processing & 24-hour digital PDF reports.
          </p>
        </div>
      </div>

      <ServicesGrid />
      <PartnerLabs />
      <Footer />
    </main>
  );
}
