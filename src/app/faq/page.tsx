"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { HelpCircle, ChevronDown, Phone, Search } from "lucide-react";

const faqs = [
  {
    q: "How does doorstep blood sample collection work in Guwahati?",
    a: "After you book online or call 9365001624, our certified phlebotomist visits your home at your selected time slot with a sealed sterile kit. Blood is drawn painlessly, stored in cold-chain temperature boxes, and delivered directly to accredited partner labs.",
  },
  {
    q: "Do I need to fast before my blood test?",
    a: "For Full Body Checkups, Fasting Blood Sugar, and Lipid Profiles, a 10 to 12-hour overnight fast is recommended. Water is allowed. For Thyroid, Vitamin B12/D3, or CBC tests, fasting is generally not mandatory.",
  },
  {
    q: "How will I receive my test reports?",
    a: "Reports are processed within 24 hours and delivered directly in PDF format via WhatsApp and registered Email. You can also download them anytime on our /reports page.",
  },
  {
    q: "Which areas in Guwahati do you cover?",
    a: "We cover all major localities across Guwahati including Zoo Road, GS Road, Christian Basti, Beltola, Dispur, Chandmari, Jalukbari, Maligaon, Six Mile, and surrounding areas.",
  },
  {
    q: "Are the partner laboratories NABL certified?",
    a: "Yes. LabLink is partnered with NABL and ISO certified diagnostic labs including Apollo Diagnostics, Dr Lal PathLabs, Lupin Pharmaceuticals, Redcliffe Labs, SagePath, and LDPL.",
  },
  {
    q: "What payment methods are accepted?",
    a: "You can pay via Cash or UPI (Google Pay, PhonePe, Paytm, BHIM) directly to the phlebotomist after sample collection is completed.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <main className="min-h-screen bg-slate-50 flex flex-col">
      <Header />
      
      {/* Banner */}
      <div className="bg-slate-900 text-white py-12 px-4 md:px-8 border-b border-slate-800 text-center">
        <div className="max-w-4xl mx-auto space-y-3">
          <span className="px-3.5 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider border border-blue-500/30">
            HELP & PATIENT GUIDANCE
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
            Everything you need to know about home blood collection, fasting guidelines, and report downloads in Guwahati.
          </p>
        </div>
      </div>

      {/* Accordion List */}
      <div className="py-16 max-w-4xl mx-auto px-4 md:px-8 w-full flex-1 space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden transition-all"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-bold text-slate-900 text-base hover:text-blue-600 transition-colors"
            >
              <span className="flex items-center gap-3">
                <HelpCircle className="w-5 h-5 text-blue-600 shrink-0" />
                <span>{faq.q}</span>
              </span>
              <ChevronDown
                className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                  openIndex === index ? "rotate-180 text-blue-600" : ""
                }`}
              />
            </button>
            
            {openIndex === index && (
              <div className="px-6 pb-6 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100/80">
                <p className="pt-4">{faq.a}</p>
              </div>
            )}
          </div>
        ))}

        {/* Helpline Banner */}
        <div className="pt-8 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg">
            <div className="text-left">
              <h4 className="text-base font-bold">Have a specific question not answered here?</h4>
              <p className="text-xs text-blue-100">Our lab coordinators are available 7 AM - 8 PM daily in Guwahati.</p>
            </div>
            <a
              href="tel:+919365001624"
              className="px-5 py-3 rounded-xl bg-white text-blue-700 font-bold text-xs shrink-0 hover:bg-slate-100 transition-colors shadow-md"
            >
              Call 9365001624
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
