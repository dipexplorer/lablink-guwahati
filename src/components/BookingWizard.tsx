"use client";

import React, { useState } from "react";
import {
  Calendar as CalendarIcon,
  Clock,
  MapPin,
  User,
  Phone,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  ChevronRight,
  ArrowLeft,
} from "lucide-react";

export default function BookingWizard() {
  const [step, setStep] = useState(1);
  const [selectedPackage, setSelectedPackage] = useState("Full Body Health Checkup (30% OFF)");
  const [bookingDate, setBookingDate] = useState("");
  const [bookingTime, setBookingTime] = useState("07:00 AM - 09:00 AM (Recommended for Fasting)");
  const [patientName, setPatientName] = useState("");
  const [patientPhone, setPatientPhone] = useState("");
  const [locality, setLocality] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!patientName || !patientPhone || !locality) return;
    setSubmitted(true);
  };

  return (
    <section id="booking" className="py-20 bg-slate-900 text-white border-b border-slate-800 relative overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <span className="px-3.5 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider border border-blue-500/30">
            FAST 3-STEP BOOKING
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Schedule Home Sample Collection
          </h2>
          <p className="text-sm text-slate-300">
            Select your preferred time slot and location in Guwahati. Pay after sample collection.
          </p>
        </div>

        {/* Wizard Card Container */}
        <div className="bg-slate-800/90 backdrop-blur-xl rounded-3xl p-6 sm:p-10 border border-slate-700/80 shadow-2xl shadow-black/40">
          
          {!submitted ? (
            <div>
              {/* Stepper Progress Header */}
              <div className="flex items-center justify-between mb-8 pb-6 border-b border-slate-700/60">
                {[
                  { num: 1, label: "Select Test" },
                  { num: 2, label: "Date & Time" },
                  { num: 3, label: "Patient Info" },
                ].map((s) => (
                  <div key={s.num} className="flex items-center gap-2">
                    <div
                      className={`w-8 h-8 rounded-xl flex items-center justify-center font-bold text-xs transition-colors ${
                        step === s.num
                          ? "bg-blue-600 text-white shadow-md shadow-blue-600/40"
                          : step > s.num
                          ? "bg-emerald-500 text-white"
                          : "bg-slate-700 text-slate-400"
                      }`}
                    >
                      {step > s.num ? <CheckCircle2 className="w-4 h-4" /> : s.num}
                    </div>
                    <span
                      className={`text-xs font-bold hidden sm:inline ${
                        step === s.num ? "text-white" : "text-slate-400"
                      }`}
                    >
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* STEP 1: Select Test */}
              {step === 1 && (
                <div className="space-y-6">
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-blue-400" />
                    <span>Choose Blood Test or Package:</span>
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      "Full Body Health Checkup (30% OFF)",
                      "Complete Diabetes Care Profile",
                      "Total Thyroid Care Profile (T3, T4, TSH)",
                      "Vitamin B12 & D3 Deficiency Profile",
                      "Senior Citizen Wellness Package",
                      "Custom Doctor Prescription Test",
                    ].map((pkg) => (
                      <button
                        type="button"
                        key={pkg}
                        onClick={() => setSelectedPackage(pkg)}
                        className={`p-4 rounded-xl text-left text-xs font-semibold transition-all border ${
                          selectedPackage === pkg
                            ? "bg-blue-600/20 border-blue-500 text-white shadow-md shadow-blue-600/20"
                            : "bg-slate-700/50 border-slate-600 text-slate-300 hover:bg-slate-700"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span>{pkg}</span>
                          {selectedPackage === pkg && (
                            <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                          )}
                        </div>
                      </button>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm transition-all shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2"
                  >
                    <span>Next: Choose Time Slot</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              )}

              {/* STEP 2: Date & Time Slot */}
              {step === 2 && (
                <div className="space-y-6">
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <Clock className="w-5 h-5 text-emerald-400" />
                    <span>Select Date & Time Slot in Guwahati:</span>
                  </h3>

                  <div className="space-y-4">
                    <div>
                      <label className="text-xs font-bold text-slate-300 block mb-2">
                        Preferred Date:
                      </label>
                      <input
                        type="date"
                        value={bookingDate}
                        onChange={(e) => setBookingDate(e.target.value)}
                        className="w-full p-3.5 rounded-xl bg-slate-700 border border-slate-600 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-300 block mb-2">
                        Preferred Time Window:
                      </label>
                      <div className="space-y-2">
                        {[
                          "07:00 AM - 09:00 AM (Recommended for Fasting Sugar)",
                          "09:00 AM - 11:00 AM",
                          "11:00 AM - 01:00 PM",
                          "04:00 PM - 06:00 PM",
                        ].map((time) => (
                          <button
                            type="button"
                            key={time}
                            onClick={() => setBookingTime(time)}
                            className={`w-full p-3.5 rounded-xl text-left text-xs font-semibold transition-all border ${
                              bookingTime === time
                                ? "bg-emerald-600/20 border-emerald-500 text-white"
                                : "bg-slate-700/50 border-slate-600 text-slate-300 hover:bg-slate-700"
                            }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="px-5 py-3.5 rounded-xl bg-slate-700 text-slate-300 font-bold text-xs hover:bg-slate-600 transition-colors flex items-center gap-1.5"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="flex-1 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm transition-all shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2"
                    >
                      <span>Next: Patient Details</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3: Patient Info */}
              {step === 3 && (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <User className="w-5 h-5 text-purple-400" />
                    <span>Patient Contact & Guwahati Address:</span>
                  </h3>

                  <div>
                    <label className="text-xs font-bold text-slate-300 block mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={patientName}
                      onChange={(e) => setPatientName(e.target.value)}
                      className="w-full p-3.5 rounded-xl bg-slate-700 border border-slate-600 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-300 block mb-1.5">
                      Phone Number (For WhatsApp Confirmation) *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 98640XXXXX"
                      value={patientPhone}
                      onChange={(e) => setPatientPhone(e.target.value)}
                      className="w-full p-3.5 rounded-xl bg-slate-700 border border-slate-600 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-300 block mb-1.5">
                      Guwahati Locality & House Address *
                    </label>
                    <textarea
                      required
                      rows={3}
                      placeholder="e.g. House No 42, Zoo Road, near City Center Mall, Guwahati"
                      value={locality}
                      onChange={(e) => setLocality(e.target.value)}
                      className="w-full p-3.5 rounded-xl bg-slate-700 border border-slate-600 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div className="flex items-center gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="px-5 py-3.5 rounded-xl bg-slate-700 text-slate-300 font-bold text-xs hover:bg-slate-600 transition-colors flex items-center gap-1.5"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      Back
                    </button>
                    <button
                      type="submit"
                      className="flex-1 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-sm transition-all shadow-lg shadow-emerald-500/30 flex items-center justify-center gap-2"
                    >
                      <ShieldCheck className="w-5 h-5" />
                      <span>Confirm Home Appointment</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          ) : (
            /* SUBMITTED CONFIRMATION CARD */
            <div className="text-center py-8 space-y-6 animate-in zoom-in-95 duration-300">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider">
                  BOOKING CONFIRMED
                </span>
                <h3 className="text-2xl font-extrabold text-white mt-3">
                  Appointment Scheduled Successfully!
                </h3>
                <p className="text-xs text-slate-300 mt-2 max-w-md mx-auto">
                  Thank you, <strong className="text-white">{patientName}</strong>. Our certified Guwahati phlebotomist will call you 30 minutes before arriving at your location.
                </p>
              </div>

              {/* Booking Summary Box */}
              <div className="bg-slate-700/60 p-5 rounded-2xl border border-slate-600/80 text-left text-xs space-y-2 max-w-md mx-auto text-slate-200">
                <p><strong>Package:</strong> {selectedPackage}</p>
                <p><strong>Time Slot:</strong> {bookingTime}</p>
                <p><strong>Phone:</strong> {patientPhone}</p>
                <p><strong>Address:</strong> {locality}</p>
                <p className="text-emerald-400 pt-1 font-semibold">Payment Method: Pay Cash/UPI after Sample Collection</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <a
                  href={`https://wa.me/917575962265?text=Hi%20LabLink,%20I%20just%20booked%20${encodeURIComponent(selectedPackage)}%20for%20${encodeURIComponent(patientName)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-xs transition-colors shadow-md flex items-center justify-center gap-2"
                >
                  <span>WhatsApp Instant Confirmation</span>
                </a>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setStep(1);
                  }}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-700 hover:bg-slate-600 text-slate-200 font-bold text-xs transition-colors"
                >
                  Book Another Test
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
