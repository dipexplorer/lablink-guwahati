import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookingWizard from "@/components/BookingWizard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book Home Blood Test Appointment | LabLink Guwahati",
  description:
    "Schedule home blood sample collection in Guwahati. Fast slot selection, certified phlebotomist arrival, and 30% OFF on your first test.",
};

export default function BookingPage() {
  return (
    <main className="min-h-screen bg-slate-50 flex flex-col">
      <Header />
      
      {/* Banner */}
      <div className="bg-slate-900 text-white py-12 px-4 md:px-8 border-b border-slate-800 text-center">
        <div className="max-w-4xl mx-auto space-y-3">
          <span className="px-3.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider border border-emerald-500/30">
            FAST GUWAHATI HOME VISIT
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Book Home Sample Collection
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
            Choose your test package and preferred time slot. Pay after painless blood draw.
          </p>
        </div>
      </div>

      <BookingWizard />
      <Footer />
    </main>
  );
}
