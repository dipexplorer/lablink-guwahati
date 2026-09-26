"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, ShieldCheck, UserCheck, Menu, X, Calendar, ChevronRight, FileText } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services & Tests", href: "/services" },
    { name: "Book Appointment", href: "/booking" },
    { name: "Download Reports", href: "/reports" },
    { name: "Contact", href: "/contact" },
    { name: "Help & FAQ", href: "/faq" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Emergency & Trust Bar */}
      <div className="bg-slate-900 text-slate-200 text-xs py-2 px-4 md:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
              <ShieldCheck className="w-3.5 h-3.5" />
              Guwahati Verified Doorstep Collection
            </span>
            <span className="hidden md:inline text-slate-500">|</span>
            <span className="hidden md:flex items-center gap-1 text-slate-300">
              ⚡ 30% OFF on First Blood Test
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="tel:+919365001624"
              className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors font-semibold"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>9365001624</span>
            </a>
            <span className="text-slate-600">/</span>
            <a
              href="tel:+917575962265"
              className="hidden sm:inline hover:text-emerald-400 transition-colors"
            >
              7575962265
            </a>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <a
              href="https://www.lablinkguwahati.in/phlebotomist/login"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center gap-1 text-blue-400 hover:text-blue-300 transition-colors"
            >
              <UserCheck className="w-3.5 h-3.5" />
              <span>Phlebotomist Login</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-slate-100"
            : "bg-white py-4 border-b border-slate-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-700 to-blue-500 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <circle cx="12" cy="12" r="3" fill="currentColor" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-slate-900 flex items-center">
                LAB<span className="text-blue-600">LINK</span>
              </span>
              <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">
                Phlebotomist at Doorstep
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-7 text-sm font-medium">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors py-1 ${
                  pathname === item.href
                    ? "text-blue-600 font-bold border-b-2 border-blue-600"
                    : "text-slate-700 hover:text-blue-600"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/reports"
              className="px-3.5 py-2 rounded-lg text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors flex items-center gap-1.5"
            >
              <FileText className="w-4 h-4 text-blue-600" />
              Reports
            </Link>
            <Link
              href="/booking"
              className="px-4 py-2.5 rounded-lg text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-600/25 transition-all hover:-translate-y-0.5 flex items-center gap-1.5"
            >
              <Calendar className="w-4 h-4" />
              Book Home Test
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 shadow-xl px-6 py-6 space-y-4 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-3 font-medium text-slate-800">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-2 border-b border-slate-100 flex justify-between items-center ${
                  pathname === item.href ? "text-blue-600 font-bold" : "text-slate-800"
                }`}
              >
                <span>{item.name}</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </Link>
            ))}

            <a
              href="https://www.lablinkguwahati.in/phlebotomist/login"
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 text-blue-600 flex justify-between items-center font-semibold"
            >
              <span>Phlebotomist Portal Login</span>
              <ChevronRight className="w-4 h-4 text-blue-600" />
            </a>
          </div>

          <div className="pt-2 flex flex-col gap-3">
            <a
              href="tel:+919365001624"
              className="w-full py-3 rounded-lg text-center font-semibold text-slate-800 bg-slate-100 flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-emerald-600" />
              Call Phlebotomist (9365001624)
            </a>
            <Link
              href="/booking"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 rounded-lg text-center font-bold text-white bg-blue-600 shadow-md shadow-blue-600/30 flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              Book Home Test Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
