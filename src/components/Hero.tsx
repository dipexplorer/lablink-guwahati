"use client";

import React, { useState } from "react";
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
  Upload,
  Search,
  MapPin,
  Check,
  Percent,
  FileText,
  Lock,
} from "lucide-react";

export default function Hero() {
  const [activeTab, setActiveTab] = useState<"book" | "prescription">("book");
  const [locality, setLocality] = useState("");
  const [selectedTest, setSelectedTest] = useState("Full Body Health Checkup (₹1,499)");
  const [rxUploaded, setRxUploaded] = useState(false);

  const handleRxSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setRxUploaded(true);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-blue-950 py-10 sm:py-16 lg:py-24 text-white border-b border-slate-800">
      {/* Dynamic Background Glow Blobs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[400px] h-[400px] bg-emerald-500/15 rounded-full blur-[100px] pointer-events-none" />
      
      {/* Background Micro Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Revenue-Driving Copy & Trust Value Prop */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Offer Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 text-xs font-bold tracking-wide shadow-inner max-w-full">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping shrink-0" />
              <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span className="truncate">GUWAHATI SPECIAL: Flat 30% OFF on First Home Blood Test</span>
            </div>

            {/* Main Conversion Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12]">
              Certified <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">Phlebotomist</span> at Your Doorstep in Guwahati
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed">
              No long hospital queues or travel hassle. Our certified phlebotomists collect blood samples at your home with <strong className="text-white">100% sterile single-use kits</strong> and <strong className="text-white">cold-chain transport</strong>. Reports delivered in 24 hours.
            </p>

            {/* Trust Grid Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs sm:text-sm font-semibold text-slate-200">
              <div className="flex items-center gap-2.5 p-2 rounded-xl bg-slate-800/50 border border-slate-700/60">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>NABL & ISO Partner Laboratories</span>
              </div>
              <div className="flex items-center gap-2.5 p-2 rounded-xl bg-slate-800/50 border border-slate-700/60">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Zero Advance Payment (Pay Cash/UPI After)</span>
              </div>
              <div className="flex items-center gap-2.5 p-2 rounded-xl bg-slate-800/50 border border-slate-700/60">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Digital PDF Reports on WhatsApp in 24 hrs</span>
              </div>
              <div className="flex items-center gap-2.5 p-2 rounded-xl bg-slate-800/50 border border-slate-700/60">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>30-Min Fast Technician Arrival</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href="#booking"
                className="w-full sm:w-auto px-7 py-4 rounded-2xl text-sm sm:text-base font-extrabold text-white bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 shadow-xl shadow-blue-600/30 transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2.5 group"
              >
                <Calendar className="w-5 h-5 text-blue-200" />
                <span>Book Home Collection</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <div className="grid grid-cols-2 gap-2.5 w-full sm:w-auto">
                <a
                  href="tel:+919365001624"
                  className="px-4 py-4 rounded-2xl text-xs sm:text-sm font-bold text-white bg-slate-800/90 hover:bg-slate-700 border border-slate-700 transition-colors flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <span>Call 9365001624</span>
                </a>

                <a
                  href="https://wa.me/917575962265?text=Hi%20LabLink,%20I%20want%20to%20book%20a%20blood%20test%20in%20Guwahati"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-4 rounded-2xl text-xs sm:text-sm font-bold text-emerald-300 bg-emerald-950/60 hover:bg-emerald-900/60 border border-emerald-500/40 transition-colors flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Micro Guarantee Label */}
            <p className="text-[11px] text-slate-400 flex items-center gap-2 pt-1 font-medium">
              <Lock className="w-3.5 h-3.5 text-slate-400" />
              <span>100% Confidential • No Hidden Convenience Fees in Guwahati</span>
            </p>

            {/* Proof Bar */}
            <div className="pt-6 border-t border-slate-800 grid grid-cols-3 gap-3 text-center sm:text-left">
              <div>
                <p className="text-2xl sm:text-3xl font-black text-white">10,000+</p>
                <p className="text-[10px] sm:text-xs font-semibold text-slate-400">Guwahati Patients Served</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-black text-blue-400">30 Mins</p>
                <p className="text-[10px] sm:text-xs font-semibold text-slate-400">Average Arrival Time</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-black text-emerald-400">4.9 ★</p>
                <p className="text-[10px] sm:text-xs font-semibold text-slate-400">Patient Satisfaction</p>
              </div>
            </div>

          </div>

          {/* Right Column: High-Converting Interactive Booking & Prescription Widget */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md bg-slate-950/90 backdrop-blur-2xl rounded-3xl p-5 sm:p-7 border border-slate-800 shadow-2xl shadow-black/80 space-y-5">
              
              {/* Tab Selector Header */}
              <div className="grid grid-cols-2 p-1 rounded-2xl bg-slate-900 border border-slate-800 text-xs font-extrabold">
                <button
                  type="button"
                  onClick={() => setActiveTab("book")}
                  className={`py-2.5 rounded-xl transition-all flex items-center justify-center gap-1.5 ${
                    activeTab === "book"
                      ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Instant Booking</span>
                </button>
                
                <button
                  type="button"
                  onClick={() => setActiveTab("prescription")}
                  className={`py-2.5 rounded-xl transition-all flex items-center justify-center gap-1.5 ${
                    activeTab === "prescription"
                      ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/30"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  <Upload className="w-3.5 h-3.5" />
                  <span>Upload Doctor Rx</span>
                </button>
              </div>

              {/* TAB 1: Instant Quick Booking Widget */}
              {activeTab === "book" && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-bold text-white text-base">Quick Home Collection</h3>
                      <p className="text-[11px] text-slate-400">Guwahati Doorstep Slot Booking</p>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 font-bold text-[10px] uppercase tracking-wider flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                      Slot Available
                    </span>
                  </div>

                  <div className="space-y-3">
                    {/* Locality Input */}
                    <div>
                      <label className="text-[11px] font-bold text-slate-300 block mb-1">
                        Your Guwahati Area / Locality:
                      </label>
                      <div className="relative">
                        <MapPin className="w-4 h-4 text-blue-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          placeholder="e.g. Zoo Road, GS Road, Jalukbari..."
                          value={locality}
                          onChange={(e) => setLocality(e.target.value)}
                          className="w-full pl-10 pr-3 py-3 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        />
                      </div>
                    </div>

                    {/* Test Selection */}
                    <div>
                      <label className="text-[11px] font-bold text-slate-300 block mb-1">
                        Select Blood Test / Package:
                      </label>
                      <select
                        value={selectedTest}
                        onChange={(e) => setSelectedTest(e.target.value)}
                        className="w-full px-3 py-3 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                      >
                        <option>Full Body Health Checkup (₹1,499 - 30% OFF)</option>
                        <option>Complete Diabetes Care Profile (₹699)</option>
                        <option>Total Thyroid Care Profile (₹399)</option>
                        <option>Vitamin B12 & D3 Package (₹1,199)</option>
                        <option>Senior Citizen Wellness Profile (₹1,999)</option>
                        <option>Custom Prescription Test (Lab Advisor Call)</option>
                      </select>
                    </div>

                    {/* Price & Discount Summary */}
                    <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between text-xs">
                      <div>
                        <span className="text-[10px] text-slate-400 block font-medium">Estimated Payable:</span>
                        <span className="text-base font-black text-emerald-400">{selectedTest.split("(")[1]?.replace(")", "") || "Best Price"}</span>
                      </div>
                      <span className="px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 text-[10px] font-bold">
                        Pay After Collection
                      </span>
                    </div>
                  </div>

                  <a
                    href="#booking"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-extrabold text-xs text-center shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 transition-all"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Proceed to Slot Selection</span>
                  </a>
                </div>
              )}

              {/* TAB 2: Upload Doctor's Prescription */}
              {activeTab === "prescription" && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <div>
                    <h3 className="font-bold text-white text-base">Upload Doctor Prescription</h3>
                    <p className="text-[11px] text-slate-400">Our lab expert will read your prescription & WhatsApp you the price in 5 mins.</p>
                  </div>

                  {!rxUploaded ? (
                    <form onSubmit={handleRxSubmit} className="space-y-3">
                      <div className="border-2 border-dashed border-slate-800 rounded-2xl p-6 text-center hover:border-emerald-500/60 transition-colors bg-slate-900/50">
                        <Upload className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
                        <p className="text-xs font-bold text-slate-200">Tap to upload prescription image or PDF</p>
                        <p className="text-[10px] text-slate-500 mt-1">PNG, JPG, PDF up to 10MB</p>
                      </div>

                      <a
                        href={`https://wa.me/917575962265?text=Hi%20LabLink,%20I%20want%20to%20send%20my%20doctor%20prescription%20photo%20for%20a%20blood%20test`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs shadow-lg shadow-emerald-600/30 flex items-center justify-center gap-2 transition-all"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>Send Prescription Photo via WhatsApp</span>
                      </a>
                    </form>
                  ) : (
                    <div className="text-center py-6 space-y-3 bg-emerald-950/30 rounded-2xl border border-emerald-500/30">
                      <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                      <h4 className="text-sm font-bold text-white">Prescription Received!</h4>
                      <p className="text-xs text-slate-300">Our Guwahati lab advisor is calling you right away.</p>
                    </div>
                  )}
                </div>
              )}

              {/* Card Footer Trust Bar */}
              <div className="pt-3 border-t border-slate-900 flex items-center justify-between text-[10px] text-slate-400 font-medium">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-400" /> NABL Partner Labs
                </span>
                <span className="flex items-center gap-1">
                  <Award className="w-3.5 h-3.5 text-emerald-400" /> Sterile Equipment
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
