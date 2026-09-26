"use client";

import React from "react";
import { ShieldCheck, Award, FileCheck, ThermometerSnowflake } from "lucide-react";

const partnerLabs = [
  { name: "Apollo Diagnostics", role: "Healthcare Excellence Partner" },
  { name: "Dr Lal PathLabs", role: "Trusted Diagnostic Partner" },
  { name: "Lupin Pharmaceuticals", role: "Pharmaceutical & Clinical Excellence" },
  { name: "Redcliffe Labs", role: "Modern Diagnostic Solutions" },
  { name: "SagePath", role: "Pathology Specialists" },
  { name: "LDPL Diagnostics", role: "Advanced Laboratory Services" },
  { name: "Breathe Clinic", role: "Comprehensive Health Diagnostics" },
];

export default function PartnerLabs() {
  return (
    <section id="partners" className="py-16 bg-white border-b border-slate-200/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 text-center mb-10">
        <span className="px-3.5 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider">
          OUR ACCREDITED PARTNERS
        </span>
        <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Partnered with India’s Top Diagnostic Labs
        </h2>
        <p className="mt-2 text-base text-slate-600 max-w-2xl mx-auto font-normal">
          Your blood samples are processed in NABL & ISO certified partner laboratories in Guwahati, ensuring 100% accurate and clinical-grade results.
        </p>
      </div>

      {/* Infinite Logo/Brand Marquee */}
      <div className="relative w-full overflow-hidden bg-slate-900 py-8 text-white">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-900 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-900 to-transparent z-10 pointer-events-none" />

        <div className="flex w-[200%] animate-marquee">
          {/* Loop 1 */}
          <div className="flex items-center justify-around w-full shrink-0 gap-8 px-4">
            {partnerLabs.map((lab, index) => (
              <div
                key={`loop1-${index}`}
                className="flex items-center gap-3 px-6 py-3 rounded-xl bg-slate-800/80 border border-slate-700/60 shrink-0 hover:border-blue-500/50 transition-colors"
              >
                <div className="w-9 h-9 rounded-lg bg-blue-600/20 text-blue-400 font-bold flex items-center justify-center text-sm border border-blue-500/30">
                  {lab.name.charAt(0)}
                </div>
                <div className="text-left">
                  <p className="text-sm font-bold text-white tracking-wide">{lab.name}</p>
                  <p className="text-[10px] text-slate-400 font-medium">{lab.role}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Loop 2 (Seamless Duplicate) */}
          <div className="flex items-center justify-around w-full shrink-0 gap-8 px-4">
            {partnerLabs.map((lab, index) => (
              <div
                key={`loop2-${index}`}
                className="flex items-center gap-3 px-6 py-3 rounded-xl bg-slate-800/80 border border-slate-700/60 shrink-0 hover:border-blue-500/50 transition-colors"
              >
                <div className="w-9 h-9 rounded-lg bg-blue-600/20 text-blue-400 font-bold flex items-center justify-center text-sm border border-blue-500/30">
                  {lab.name.charAt(0)}
                </div>
                <div className="text-left">
                  <p className="text-sm font-bold text-white tracking-wide">{lab.name}</p>
                  <p className="text-[10px] text-slate-400 font-medium">{lab.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Trust Pillars Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3.5">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-xs sm:text-sm font-bold text-slate-900">100% NABL Accredited</h4>
            <p className="text-[11px] sm:text-xs text-slate-600 mt-0.5 leading-relaxed">
              Samples are processed strictly in certified labs with rigorous quality control protocols.
            </p>
          </div>
        </div>

        <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3.5">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
            <ThermometerSnowflake className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-xs sm:text-sm font-bold text-slate-900">Cold-Chain Sample Safe</h4>
            <p className="text-[11px] sm:text-xs text-slate-600 mt-0.5 leading-relaxed">
              Maintained under 2°C - 8°C temperature control during transit to prevent degradation.
            </p>
          </div>
        </div>

        <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3.5">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center shrink-0">
            <FileCheck className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-xs sm:text-sm font-bold text-slate-900">Official Direct PDF Reports</h4>
            <p className="text-[11px] sm:text-xs text-slate-600 mt-0.5 leading-relaxed">
              Get official diagnostic reports delivered straight to your WhatsApp & Email within 24 hours.
            </p>
          </div>
        </div>

        <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3.5">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
            <Award className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-xs sm:text-sm font-bold text-slate-900">Zero Convenience Fee</h4>
            <p className="text-[11px] sm:text-xs text-slate-600 mt-0.5 leading-relaxed">
              Transparent lab-direct pricing with no hidden doorstep surcharges in Guwahati.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
