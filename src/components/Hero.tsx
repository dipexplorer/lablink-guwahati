"use client";

import React from "react";
import {
  Calendar,
  Phone,
  ShieldCheck,
  Award,
  Sparkles,
  CheckCircle2,
  Clock,
  Thermometer,
  ArrowRight,
  MessageSquare,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-blue-50/20 to-slate-50 py-10 lg:py-16 border-b border-slate-200/60">
      {/* Background Decorative Blur Blobs */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Clear Conversion Copy */}
          <div className="lg:col-span-7 space-y-5 text-left">
            
            {/* Promo Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-bold tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-blue-600 shrink-0" />
              <span>SPECIAL OFFER: 30% OFF ON YOUR FIRST BLOOD TEST</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.15]">
              Certified <span className="text-blue-600">Phlebotomist</span> at Your Doorstep in Guwahati
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl font-normal leading-relaxed">
              No long lab queues or traffic hassle. Our trained, certified phlebotomists visit your home in Guwahati with sterile single-use kits and temperature-controlled sample boxes (2°C - 8°C).
            </p>

            {/* Verified Trust Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-xs sm:text-sm font-semibold text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>NABL & ISO Certified Partner Labs</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>100% Sterile Single-Use Equipment</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Fast Digital PDF Reports in 24 hrs</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Pay Cash or UPI After Collection</span>
              </div>
            </div>

            {/* Action CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href="#booking"
                className="w-full sm:w-auto px-7 py-3.5 sm:py-4 rounded-xl text-sm sm:text-base font-extrabold text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-600/20 transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2.5 group"
              >
                <Calendar className="w-5 h-5" />
                <span>Book Home Sample Collection</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <div className="grid grid-cols-2 gap-2.5 w-full sm:w-auto">
                <a
                  href="tel:+919365001624"
                  className="px-4 py-3 sm:py-3.5 rounded-xl text-xs sm:text-sm font-bold text-slate-800 bg-white hover:bg-slate-50 border border-slate-200 transition-colors flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-emerald-600" />
                  <span>Call 9365001624</span>
                </a>

                <a
                  href="https://wa.me/917575962265"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3 sm:py-3.5 rounded-xl text-xs sm:text-sm font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-600" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Real Guwahati Metrics */}
            <div className="pt-4 border-t border-slate-200/80 grid grid-cols-3 gap-2 sm:gap-4 text-center sm:text-left">
              <div>
                <p className="text-xl sm:text-2xl font-black text-slate-900">10,000+</p>
                <p className="text-[10px] sm:text-xs font-semibold text-slate-500">Samples Collected</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-black text-blue-600">30 Mins</p>
                <p className="text-[10px] sm:text-xs font-semibold text-slate-500">Avg Arrival Time</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-black text-emerald-600">4.9 ★</p>
                <p className="text-[10px] sm:text-xs font-semibold text-slate-500">Patient Rating</p>
              </div>
            </div>

          </div>

          {/* Right Column: High-Impact Visual Image Card for Instant Visual Understanding */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative mx-auto max-w-md bg-white rounded-3xl p-3 sm:p-4 border border-slate-200 shadow-xl space-y-4">
              
              {/* Main Visual Image Showing Doorstep Sample Collection */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] group shadow-sm">
                <img
                  src="/guwahati_phlebotomist_home_collection.png"
                  alt="Certified LabLink Phlebotomist conducting doorstep blood sample collection at home in Guwahati"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Live Badge Overlay */}
                <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded-full text-white text-[11px] font-bold flex items-center gap-1.5 border border-slate-700/60 shadow-md">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
                  <span>Doorstep Collection Active in Guwahati</span>
                </div>

                {/* Cold Chain Badge */}
                <div className="absolute bottom-3 right-3 bg-blue-600/90 backdrop-blur-md px-2.5 py-1 rounded-xl text-white text-[10px] font-bold flex items-center gap-1 shadow-md border border-blue-400/40">
                  <Thermometer className="w-3.5 h-3.5" />
                  <span>2°C - 8°C Cold Chain Transport</span>
                </div>
              </div>

              {/* Instant Visual Caption & Trust Features */}
              <div className="px-1 space-y-2.5">
                <div className="flex items-center justify-between">
                  <h3 className="font-extrabold text-slate-900 text-sm">LabLink Guwahati Phlebotomy</h3>
                  <span className="px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 font-extrabold text-[10px] border border-emerald-200">
                    NABL Partner Labs
                  </span>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  Trained medical staff visits your home with sterile single-use kits & sealed blood collection vials.
                </p>

                {/* Service Highlights */}
                <div className="grid grid-cols-2 gap-2 text-[11px] font-semibold text-slate-700 pt-1">
                  <div className="flex items-center gap-1.5 bg-slate-50 p-2 rounded-xl border border-slate-100">
                    <Award className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span>Painless Vein Access</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-slate-50 p-2 rounded-xl border border-slate-100">
                    <Clock className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>24-Hr WhatsApp PDF</span>
                  </div>
                </div>
              </div>

              {/* Quick Call Action Box */}
              <div className="bg-slate-900 p-3.5 rounded-2xl text-white flex items-center justify-between">
                <div>
                  <p className="text-[10px] text-slate-400 font-medium">Need Urgent Blood Test?</p>
                  <p className="text-sm font-extrabold text-emerald-400">9365001624</p>
                </div>
                <a
                  href="tel:+919365001624"
                  className="px-3.5 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs shadow-sm transition-colors"
                >
                  Call Now
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

