"use client";

import React from "react";
import { Calendar, UserCheck, Syringe, FileText, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Calendar,
    title: "Book Appointment",
    description: "Choose your required blood test or package online, or call our Guwahati helpline directly at 9365001624. Select a date and time slot that fits your schedule.",
    badge: "Step 1",
    color: "bg-blue-500 text-white",
  },
  {
    number: "02",
    icon: UserCheck,
    title: "Phlebotomist Arrives",
    description: "Our certified, background-verified phlebotomist arrives at your home at the exact scheduled time with a sealed sterile kit and temperature box.",
    badge: "Step 2",
    color: "bg-emerald-500 text-white",
  },
  {
    number: "03",
    icon: Syringe,
    title: "Safe Sample Collection",
    description: "Painless sample collection following strict international hygiene protocols. Single-use needles opened right in front of you.",
    badge: "Step 3",
    color: "bg-purple-500 text-white",
  },
  {
    number: "04",
    icon: FileText,
    title: "Get Digital Reports",
    description: "Your sample is processed at NABL-certified labs. Receive official PDF diagnostic reports straight to your WhatsApp & Email within 24 hours.",
    badge: "Step 4",
    color: "bg-amber-500 text-white",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-slate-50 border-b border-slate-200/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="px-3.5 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider">
            SIMPLE & TRANSPARENT PROCESS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            How Doorstep Collection Works
          </h2>
          <p className="text-base text-slate-600 font-normal">
            Getting your blood test done in Guwahati is now completely hassle-free. Just 4 simple steps from booking to report delivery.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="relative bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Top Badge & Number */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-12 h-12 rounded-xl ${step.color} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-3xl font-black text-slate-200 font-mono group-hover:text-blue-200 transition-colors">
                      {step.number}
                    </span>
                  </div>

                  <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider inline-block mb-3">
                    {step.badge}
                  </span>

                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Bottom Step Indicator Arrow */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-white p-1 rounded-full border border-slate-200 text-slate-400">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Quick Call Box */}
        <div className="mt-12 sm:mt-16 max-w-3xl mx-auto bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-5 sm:p-8 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left">
          <div>
            <h4 className="text-lg sm:text-xl font-bold">Ready to schedule your home blood test?</h4>
            <p className="text-xs text-blue-100 mt-1">Get 30% OFF on your first test with instant slot confirmation.</p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-2.5 w-full sm:w-auto shrink-0">
            <a
              href="#booking"
              className="w-full sm:w-auto px-5 py-3 rounded-xl bg-white text-blue-700 font-extrabold text-xs sm:text-sm text-center hover:bg-slate-100 transition-colors shadow-md"
            >
              Book Test Now
            </a>
            <a
              href="tel:+919365001624"
              className="w-full sm:w-auto px-5 py-3 rounded-xl bg-blue-800 hover:bg-blue-900 text-white font-extrabold text-xs sm:text-sm text-center border border-blue-500/40 transition-colors"
            >
              Call 9365001624
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
