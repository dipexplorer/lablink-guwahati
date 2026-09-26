"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Search, FileText, Download, ShieldCheck, Phone, CheckCircle2, Clock } from "lucide-react";

export default function ReportsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searched, setSearched] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery) return;
    setSearched(true);
  };

  return (
    <main className="min-h-screen bg-slate-50 flex flex-col">
      <Header />
      
      {/* Banner */}
      <div className="bg-slate-900 text-white py-12 px-4 md:px-8 border-b border-slate-800 text-center">
        <div className="max-w-4xl mx-auto space-y-3">
          <span className="px-3.5 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider border border-blue-500/30">
            DIGITAL PATIENT PORTAL
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Download Test Reports
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
            Access official PDF diagnostic reports issued directly by NABL-accredited partner laboratories.
          </p>
        </div>
      </div>

      {/* Main Search Section */}
      <div className="py-16 max-w-3xl mx-auto px-4 md:px-8 w-full flex-1">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl space-y-6">
          
          <div className="text-center space-y-2">
            <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center mx-auto">
              <FileText className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-bold text-slate-900">Patient Report Search</h2>
            <p className="text-xs text-slate-500">
              Enter your registered 10-digit mobile number or Booking ID to view & download PDF reports.
            </p>
          </div>

          <form onSubmit={handleSearch} className="space-y-4">
            <div className="relative">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                required
                placeholder="Enter Mobile Number (e.g. 98640XXXXX) or Booking ID..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md shadow-blue-600/25 transition-all flex items-center justify-center gap-2"
            >
              <Search className="w-4 h-4" />
              <span>Search Diagnostic Reports</span>
            </button>
          </form>

          {/* Search Result Mock View */}
          {searched && (
            <div className="pt-6 border-t border-slate-100 space-y-4 animate-in fade-in duration-300">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block text-center">
                Search Result for "{searchQuery}"
              </span>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-4">
                <div className="space-y-1 text-left">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-700 font-bold text-[10px]">
                      READY FOR DOWNLOAD
                    </span>
                    <span className="text-xs text-slate-400 font-mono">#LL-89421</span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900">Full Body Health Checkup Report</h4>
                  <p className="text-xs text-slate-500">Processed by Apollo Diagnostics • Tested 24 Sep 2026</p>
                </div>

                <a
                  href="https://www.lablinkguwahati.in/reports"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shrink-0 flex items-center gap-1.5 shadow-sm"
                >
                  <Download className="w-4 h-4" />
                  <span>Download PDF</span>
                </a>
              </div>
            </div>
          )}

          {/* Help Box */}
          <div className="p-4 rounded-2xl bg-blue-50 border border-blue-100 flex items-center gap-3 text-xs text-blue-800">
            <Clock className="w-5 h-5 text-blue-600 shrink-0" />
            <div>
              <p className="font-bold">Having trouble finding your report?</p>
              <p className="text-[11px] text-blue-600">
                Reports are delivered within 24 hours of sample collection. Call helpline at <strong>9365001624</strong> for direct PDF dispatch on WhatsApp.
              </p>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </main>
  );
}
