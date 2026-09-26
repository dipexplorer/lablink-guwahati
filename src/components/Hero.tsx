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
  MapPin,
  FileText,
  Search,
  Check,
} from "lucide-react";

export default function Hero() {
  const [activeTab, setActiveTab] = useState<"packages" | "prescription" | "locality">("packages");
  const [localityQuery, setLocalityQuery] = useState("");
  const [localityChecked, setLocalityChecked] = useState(false);
  const [prescriptionUploaded, setPrescriptionUploaded] = useState(false);

  const handlePrescriptionSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPrescriptionUploaded(true);
  };

  const handleLocalityCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (localityQuery.trim()) {
      setLocalityChecked(true);
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-blue-50/20 to-slate-50 py-8 sm:py-14 lg:py-20 border-b border-slate-200/60">
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-10 left-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Revenue-Generating Copy & Trust Badges */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-left">
            
            {/* Top Offer Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-bold tracking-wide shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-blue-600 shrink-0" />
              <span>GUARANTEED 30% OFF ON YOUR FIRST BLOOD TEST</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.15]">
              Certified <span className="text-blue-600">Phlebotomist</span> at Your Doorstep in Guwahati
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-lg text-slate-600 max-w-2xl font-normal leading-relaxed">
              No long lab queues or traffic stress. Our trained, certified phlebotomists visit your home in Guwahati with sterile single-use kits and cold-chain sample transport containers ($2^\circ\text{C} - 8^\circ\text{C}$).
            </p>

            {/* Verified Trust Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-xs sm:text-sm font-semibold text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>NABL & ISO Accredited Partner Labs</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>100% Sterile Single-Use Equipment</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Fast Digital PDF Reports on WhatsApp</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Pay Cash or UPI After Sample Collection</span>
              </div>
            </div>

            {/* Action CTAs */}
            <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href="#booking"
                className="w-full sm:w-auto px-7 py-4 rounded-xl text-sm sm:text-base font-extrabold text-white bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-600/25 transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2.5 group"
              >
                <Calendar className="w-5 h-5" />
                <span>Book Home Sample Collection</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <div className="grid grid-cols-2 gap-2.5 w-full sm:w-auto">
                <a
                  href="tel:+919365001624"
                  className="px-4 py-3.5 sm:py-4 rounded-xl text-xs sm:text-sm font-bold text-slate-800 bg-white hover:bg-slate-50 border border-slate-200 shadow-2xs transition-colors flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-emerald-600" />
                  <span>Call 9365001624</span>
                </a>

                <a
                  href="https://wa.me/917575962265"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3.5 sm:py-4 rounded-xl text-xs sm:text-sm font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-600" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Real Guwahati Metrics */}
            <div className="pt-5 border-t border-slate-200/80 grid grid-cols-3 gap-2 sm:gap-4 text-center sm:text-left">
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

          {/* Right Column: High-Converting Interactive Booking & Prescription Widget */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="bg-white rounded-3xl border border-slate-200 shadow-xl p-5 sm:p-6 space-y-4">
              
              {/* Card Header Tabs */}
              <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-2xl text-xs font-bold text-slate-600">
                <button
                  onClick={() => setActiveTab("packages")}
                  className={`flex-1 py-2 rounded-xl transition-all ${
                    activeTab === "packages"
                      ? "bg-white text-blue-600 shadow-sm font-extrabold"
                      : "hover:text-slate-900"
                  }`}
                >
                  Quick Book
                </button>
                <button
                  onClick={() => setActiveTab("prescription")}
                  className={`flex-1 py-2 rounded-xl transition-all ${
                    activeTab === "prescription"
                      ? "bg-white text-blue-600 shadow-sm font-extrabold"
                      : "hover:text-slate-900"
                  }`}
                >
                  Upload Rx
                </button>
                <button
                  onClick={() => setActiveTab("locality")}
                  className={`flex-1 py-2 rounded-xl transition-all ${
                    activeTab === "locality"
                      ? "bg-white text-blue-600 shadow-sm font-extrabold"
                      : "hover:text-slate-900"
                  }`}
                >
                  Check Area
                </button>
              </div>

              {/* TAB 1: Quick Popular Packages */}
              {activeTab === "packages" && (
                <div className="space-y-3 animate-in fade-in duration-200">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">
                      Popular Health Checkups
                    </span>
                    <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                      Free Home Collection
                    </span>
                  </div>

                  <div className="space-y-2">
                    <a
                      href="#booking"
                      className="p-3 rounded-2xl bg-slate-50 hover:bg-blue-50/60 border border-slate-200/80 transition-all flex items-center justify-between group"
                    >
                      <div>
                        <p className="text-xs font-extrabold text-slate-900 group-hover:text-blue-600">
                          Full Body Health Profile (60+ Tests)
                        </p>
                        <p className="text-[11px] text-slate-500">CBC, Sugar, LFT, KFT, Lipid & Thyroid</p>
                      </div>
                      <div className="text-right shrink-0 ml-2">
                        <span className="text-xs font-black text-blue-600 block">₹1,499</span>
                        <span className="text-[10px] text-slate-400 line-through">₹2,199</span>
                      </div>
                    </a>

                    <a
                      href="#booking"
                      className="p-3 rounded-2xl bg-slate-50 hover:bg-blue-50/60 border border-slate-200/80 transition-all flex items-center justify-between group"
                    >
                      <div>
                        <p className="text-xs font-extrabold text-slate-900 group-hover:text-blue-600">
                          Complete Diabetes Care Profile
                        </p>
                        <p className="text-[11px] text-slate-500">HbA1c, Fasting & PP Sugar, Microalbumin</p>
                      </div>
                      <div className="text-right shrink-0 ml-2">
                        <span className="text-xs font-black text-blue-600 block">₹699</span>
                        <span className="text-[10px] text-slate-400 line-through">₹999</span>
                      </div>
                    </a>

                    <a
                      href="#booking"
                      className="p-3 rounded-2xl bg-slate-50 hover:bg-blue-50/60 border border-slate-200/80 transition-all flex items-center justify-between group"
                    >
                      <div>
                        <p className="text-xs font-extrabold text-slate-900 group-hover:text-blue-600">
                          Total Thyroid Care Profile
                        </p>
                        <p className="text-[11px] text-slate-500">T3, T4, TSH Thyroid Function Parameters</p>
                      </div>
                      <div className="text-right shrink-0 ml-2">
                        <span className="text-xs font-black text-blue-600 block">₹399</span>
                        <span className="text-[10px] text-slate-400 line-through">₹599</span>
                      </div>
                    </a>
                  </div>

                  <a
                    href="#booking"
                    className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs text-center transition-colors shadow-md shadow-blue-600/20 flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Select Time Slot & Book Test</span>
                  </a>
                </div>
              )}

              {/* TAB 2: Doctor Prescription Photo Upload */}
              {activeTab === "prescription" && (
                <div className="space-y-3 animate-in fade-in duration-200">
                  <div className="text-left space-y-1">
                    <p className="text-xs font-extrabold text-slate-900">Upload Doctor's Prescription</p>
                    <p className="text-[11px] text-slate-500 leading-relaxed">
                      Upload a photo of your doctor's handwritten prescription. Our lab technician will review it and call you with an exact quote & booking link.
                    </p>
                  </div>

                  {!prescriptionUploaded ? (
                    <form onSubmit={handlePrescriptionSubmit} className="space-y-3">
                      <div className="border-2 border-dashed border-slate-200 rounded-2xl p-4 text-center hover:border-blue-500 transition-colors bg-slate-50/50 cursor-pointer">
                        <Upload className="w-6 h-6 text-blue-600 mx-auto mb-1" />
                        <p className="text-xs font-bold text-slate-800">Tap to Upload Prescription Image/PDF</p>
                        <p className="text-[10px] text-slate-400">PNG, JPG, PDF up to 10MB</p>
                      </div>

                      <input
                        type="tel"
                        required
                        placeholder="Enter 10-Digit Mobile Number *"
                        className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />

                      <button
                        type="submit"
                        className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs transition-colors shadow-md shadow-blue-600/20 flex items-center justify-center gap-2"
                      >
                        <FileText className="w-4 h-4" />
                        <span>Submit Prescription for Free Quote</span>
                      </button>
                    </form>
                  ) : (
                    <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-2">
                      <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
                      <p className="text-xs font-extrabold text-emerald-900">Prescription Received!</p>
                      <p className="text-[11px] text-emerald-700">
                        Our Guwahati phlebotomist will call you within 15 minutes to confirm test pricing & home slot.
                      </p>
                      <button
                        onClick={() => setPrescriptionUploaded(false)}
                        className="text-[10px] text-emerald-800 underline font-bold"
                      >
                        Upload Another Prescription
                      </button>
                    </div>
                  )}
                </div>
              )}

              {/* TAB 3: Guwahati Locality Serviceability Checker */}
              {activeTab === "locality" && (
                <div className="space-y-3 animate-in fade-in duration-200">
                  <div className="text-left space-y-1">
                    <p className="text-xs font-extrabold text-slate-900">Check Guwahati Home Collection</p>
                    <p className="text-[11px] text-slate-500">
                      Enter your Guwahati locality name or pincode to check instant phlebotomist slot availability.
                    </p>
                  </div>

                  <form onSubmit={handleLocalityCheck} className="space-y-3">
                    <div className="relative">
                      <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        required
                        placeholder="e.g. Zoo Road, GS Road, 781005..."
                        value={localityQuery}
                        onChange={(e) => {
                          setLocalityQuery(e.target.value);
                          setLocalityChecked(false);
                        }}
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs transition-colors shadow-md shadow-blue-600/20 flex items-center justify-center gap-2"
                    >
                      <Search className="w-4 h-4" />
                      <span>Check Doorstep Availability</span>
                    </button>
                  </form>

                  {localityChecked && (
                    <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      <div>
                        <p className="font-extrabold text-[11px]">⚡ Doorstep Collection Active in "{localityQuery}"</p>
                        <p className="text-[10px] text-emerald-700">Phlebotomist available for arrival today!</p>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Quick Call Box inside Card */}
              <div className="bg-slate-900 p-3.5 rounded-2xl text-white flex items-center justify-between text-xs">
                <div>
                  <p className="text-[10px] text-slate-400 font-medium">Need Urgent Help?</p>
                  <p className="text-sm font-extrabold text-emerald-400">9365001624</p>
                </div>
                <a
                  href="tel:+919365001624"
                  className="px-3 py-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs shadow-sm transition-colors"
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

