"use client";

import React, { useState } from "react";
import { Search, Calendar, ShieldCheck, Check, Sparkles, Phone } from "lucide-react";

const testPackages = [
  {
    id: "full-body",
    category: "popular",
    title: "Full Body Health Checkup",
    parameters: "60+ Parameters Covered",
    price: "₹1,499",
    originalPrice: "₹2,199",
    discount: "30% OFF",
    tag: "BESTSELLER",
    includes: [
      "Complete Blood Count (CBC)",
      "Lipid Profile (Cholesterol)",
      "Liver Function Test (LFT)",
      "Kidney Function Test (KFT)",
      "Fasting Blood Sugar (FBS)",
      "Thyroid Profile (TSH)",
    ],
  },
  {
    id: "diabetes",
    category: "chronic",
    title: "Complete Diabetes Care Profile",
    parameters: "8 Essential Tests",
    price: "₹699",
    originalPrice: "₹999",
    discount: "30% OFF",
    tag: "POPULAR",
    includes: [
      "HbA1c (3-Month Avg Sugar)",
      "Fasting Blood Glucose",
      "Post Prandial Blood Sugar",
      "Urine Microalbumin",
      "Lipid Profile Screening",
    ],
  },
  {
    id: "thyroid",
    category: "specialized",
    title: "Total Thyroid Care Profile",
    parameters: "3 Key Parameters",
    price: "₹399",
    originalPrice: "₹599",
    discount: "33% OFF",
    includes: [
      "Total Triiodothyronine (T3)",
      "Total Thyroxine (T4)",
      "Thyroid Stimulating Hormone (TSH)",
      "Free T3 & T4 Guidance",
    ],
  },
  {
    id: "vitamins",
    category: "deficiency",
    title: "Vitamin & Mineral Deficiency Package",
    parameters: "12 Vital Markers",
    price: "₹1,199",
    originalPrice: "₹1,699",
    discount: "30% OFF",
    includes: [
      "Vitamin B12 Level",
      "Vitamin D3 (25-Hydroxy)",
      "Serum Calcium",
      "Iron Studies & Ferritin",
    ],
  },
  {
    id: "cardiac",
    category: "chronic",
    title: "Executive Heart Health Profile",
    parameters: "15 Cardiac Markers",
    price: "₹1,299",
    originalPrice: "₹1,899",
    discount: "31% OFF",
    includes: [
      "Comprehensive Lipid Profile",
      "High Sensitivity CRP (hs-CRP)",
      "Apolipoprotein A1 & B",
      "Homocysteine Level",
    ],
  },
  {
    id: "senior-citizen",
    category: "popular",
    title: "Senior Citizen Total Wellness Profile",
    parameters: "75+ Comprehensive Parameters",
    price: "₹1,999",
    originalPrice: "₹2,899",
    discount: "31% OFF",
    tag: "RECOMMENDED",
    includes: [
      "All Full Body Parameters",
      "Arthritis & Bone Profile",
      "Vitamin D3 & B12",
      "Cardiac Risk Markers",
      "Free Home Sample Collection",
    ],
  },
];

export default function ServicesGrid() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredPackages = testPackages.filter((pkg) => {
    const matchesSearch =
      pkg.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pkg.includes.some((inc) => inc.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory =
      selectedCategory === "all" || pkg.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section id="services" className="py-20 bg-white border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="px-3.5 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider">
            NABL ACCREDITED BLOOD TESTS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Popular Health Checkups in Guwahati
          </h2>
          <p className="text-base text-slate-600 font-normal">
            Choose from comprehensive health profiles or individual blood tests. All packages include free home sample collection and 24-hour digital PDF reports.
          </p>
        </div>

        {/* Search Bar & Category Filters */}
        <div className="max-w-2xl mx-auto mb-10 space-y-4">
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search tests (e.g. Full Body, Sugar, Thyroid, Vitamin D)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all shadow-xs"
            />
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold overflow-x-auto pb-2 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap sm:justify-center">
            {[
              { id: "all", label: "All Packages" },
              { id: "popular", label: "🔥 Popular Checkups" },
              { id: "chronic", label: "Diabetes & Heart" },
              { id: "specialized", label: "Thyroid & Organs" },
              { id: "deficiency", label: "Vitamins & Calcium" },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-2 rounded-xl shrink-0 transition-all ${
                  selectedCategory === cat.id
                    ? "bg-blue-600 text-white shadow-md shadow-blue-600/20"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredPackages.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 flex flex-col justify-between relative overflow-hidden"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[11px] font-extrabold text-blue-600 uppercase tracking-wider block">
                    {pkg.parameters}
                  </span>
                  {pkg.tag && (
                    <span className="px-2.5 py-0.5 rounded-full bg-red-50 border border-red-200 text-red-600 text-[10px] font-extrabold tracking-wider flex items-center gap-1 shrink-0">
                      <Sparkles className="w-3 h-3 text-red-500" />
                      <span>{pkg.tag}</span>
                    </span>
                  )}
                </div>

                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-3 leading-snug">
                  {pkg.title}
                </h3>

                {/* Price Box */}
                <div className="flex items-baseline gap-2 mb-5 bg-slate-50 p-3 rounded-2xl border border-slate-100">
                  <span className="text-xl sm:text-2xl font-black text-slate-900">{pkg.price}</span>
                  <span className="text-xs text-slate-400 line-through font-medium">
                    {pkg.originalPrice}
                  </span>
                  <span className="ml-auto px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-700 text-xs font-extrabold">
                    {pkg.discount}
                  </span>
                </div>

                {/* Includes List */}
                <div className="space-y-2 mb-6">
                  <p className="text-[11px] font-bold text-slate-700 uppercase tracking-wider">
                    Package Includes:
                  </p>
                  {pkg.includes.map((inc, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-600">
                      <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{inc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 border-t border-slate-100 flex items-center gap-2.5">
                <a
                  href="#booking"
                  className="flex-1 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs text-center transition-colors shadow-md shadow-blue-600/20 flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Package</span>
                </a>
                <a
                  href="tel:+919365001624"
                  className="px-3.5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors flex items-center justify-center"
                  title="Call helpline"
                >
                  <Phone className="w-4 h-4 text-emerald-600" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Test Helpline Banner */}
        <div className="mt-12 text-center bg-slate-900 text-white p-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <ShieldCheck className="w-8 h-8 text-emerald-400 shrink-0" />
            <div>
              <p className="text-sm font-bold">Looking for a specific prescription blood test?</p>
              <p className="text-xs text-slate-300">We offer over 500+ specialized pathology tests. Call our lab experts anytime.</p>
            </div>
          </div>
          <a
            href="tel:+919365001624"
            className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs shrink-0 shadow-md transition-colors"
          >
            Call 9365001624
          </a>
        </div>

      </div>
    </section>
  );
}
