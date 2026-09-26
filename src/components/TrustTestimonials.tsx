"use client";

import React from "react";
import { Star, ShieldCheck, Quote, MapPin, CheckCircle2 } from "lucide-react";

const reviews = [
  {
    name: "Anjan Barua",
    location: "Zoo Road, Guwahati",
    test: "Full Body Health Checkup",
    rating: 5,
    comment:
      "Extremely polite phlebotomist! Arrived right at 7:15 AM for my fasting sugar test. Single-use needle opened in front of me. Got PDF report on WhatsApp by evening.",
    date: "Verified Patient • 3 days ago",
  },
  {
    name: "Dr. P. K. Hazarika",
    location: "Dispur, Guwahati",
    test: "Senior Citizen Diabetes Profile",
    rating: 5,
    comment:
      "Booked sample collection for my elderly parents in Guwahati. Very gentle blood draw with zero pain. Reports are processed by certified NABL labs. Highly recommended!",
    date: "Verified Medical Professional • 1 week ago",
  },
  {
    name: "Meenakshi Sarma",
    location: "Beltola, Guwahati",
    test: "Total Thyroid Care Profile",
    rating: 5,
    comment:
      "Saved me from standing in the morning hospital queue. Phlebotomist used a cold ice container for blood sample storage. Very professional and affordable!",
    date: "Verified Patient • 2 weeks ago",
  },
];

export default function TrustTestimonials() {
  return (
    <section className="py-16 sm:py-20 bg-slate-900 text-white border-b border-slate-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <span className="px-3.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-extrabold uppercase tracking-wider border border-emerald-500/30 inline-flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5" />
            100% VERIFIED GUWAHATI PATIENT REVIEWS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Trusted by 10,000+ Families in Guwahati
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-normal">
            Read real feedback from patients who experience safe, painless, and prompt doorstep blood sample collection every day.
          </p>
        </div>

        {/* Testimonials 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {reviews.map((rev, index) => (
            <div
              key={index}
              className="bg-slate-800/80 backdrop-blur-xl rounded-3xl p-6 sm:p-7 border border-slate-700/80 shadow-xl flex flex-col justify-between relative hover:border-blue-500/50 transition-all duration-300 group"
            >
              <Quote className="w-10 h-10 text-slate-700 group-hover:text-blue-500/30 transition-colors absolute top-6 right-6 pointer-events-none" />

              <div className="space-y-4">
                {/* Rating Stars */}
                <div className="flex items-center gap-1">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed italic">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-700/60 flex items-center justify-between text-xs">
                <div>
                  <h4 className="font-extrabold text-white text-sm flex items-center gap-1.5">
                    {rev.name}
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  </h4>
                  <p className="text-[11px] text-slate-400 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3 text-blue-400" />
                    {rev.location}
                  </p>
                </div>
                <span className="text-[10px] font-bold text-blue-300 bg-blue-500/10 border border-blue-500/20 px-2.5 py-1 rounded-full">
                  {rev.test}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Local Doctor Guarantee Callout */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-blue-900/60 to-slate-950 border border-blue-500/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold shrink-0">
              ✓
            </div>
            <div>
              <p className="text-sm font-extrabold text-white">Recommended by Local General Physicians & Consultants in Assam</p>
              <p className="text-xs text-slate-300">All pathology samples tested strictly at NABL & ISO 9001:2015 accredited partner laboratories.</p>
            </div>
          </div>
          <a
            href="tel:+919365001624"
            className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-extrabold text-xs shrink-0 shadow-md transition-colors"
          >
            Call Lab Doctor (9365001624)
          </a>
        </div>

      </div>
    </section>
  );
}
