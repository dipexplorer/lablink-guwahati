"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Stethoscope, Calendar, FileText, Phone, MessageSquare } from "lucide-react";

export default function MobileBottomNav() {
  const pathname = usePathname();

  const navItems = [
    {
      name: "Home",
      href: "/",
      icon: Home,
    },
    {
      name: "Tests",
      href: "/services",
      icon: Stethoscope,
    },
    {
      name: "Book",
      href: "/booking",
      icon: Calendar,
      isPrimary: true,
    },
    {
      name: "Reports",
      href: "/reports",
      icon: FileText,
    },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-xl border-t border-slate-800 shadow-2xl px-2 py-2">
      <div className="flex items-center justify-around">
        {/* Nav item 1: Home */}
        <Link
          href="/"
          className={`flex flex-col items-center justify-center py-1 px-3 rounded-xl transition-all ${
            pathname === "/" ? "text-blue-400 font-bold" : "text-slate-400 hover:text-slate-200"
          }`}
        >
          <Home className="w-5 h-5 mb-0.5" />
          <span className="text-[10px]">Home</span>
        </Link>

        {/* Nav item 2: Services */}
        <Link
          href="/services"
          className={`flex flex-col items-center justify-center py-1 px-3 rounded-xl transition-all ${
            pathname === "/services" ? "text-blue-400 font-bold" : "text-slate-400 hover:text-slate-200"
          }`}
        >
          <Stethoscope className="w-5 h-5 mb-0.5" />
          <span className="text-[10px]">Tests</span>
        </Link>

        {/* Center CTA: Book Test */}
        <Link
          href="/booking"
          className="flex flex-col items-center justify-center relative -top-3"
        >
          <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-blue-600 to-blue-500 text-white shadow-lg shadow-blue-500/40 flex items-center justify-center ring-4 ring-slate-900">
            <Calendar className="w-6 h-6" />
          </div>
          <span className="text-[10px] font-bold text-blue-400 mt-0.5">Book</span>
        </Link>

        {/* Quick Call */}
        <a
          href="tel:+919365001624"
          className="flex flex-col items-center justify-center py-1 px-3 rounded-xl text-emerald-400 hover:text-emerald-300 transition-all"
        >
          <Phone className="w-5 h-5 mb-0.5" />
          <span className="text-[10px] font-semibold">Call Lab</span>
        </a>

        {/* Nav item 4: Reports */}
        <Link
          href="/reports"
          className={`flex flex-col items-center justify-center py-1 px-3 rounded-xl transition-all ${
            pathname === "/reports" ? "text-blue-400 font-bold" : "text-slate-400 hover:text-slate-200"
          }`}
        >
          <FileText className="w-5 h-5 mb-0.5" />
          <span className="text-[10px]">Reports</span>
        </Link>
      </div>
    </div>
  );
}
