"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, ShieldCheck, UserCheck, Menu, X, Calendar, ChevronRight, FileText, MessageSquare } from "lucide-react";

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

  // Close menu on route change or ESC
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services & Tests", href: "/services" },
    { name: "Book Appointment", href: "/booking" },
    { name: "Download Reports", href: "/reports" },
    { name: "Contact Us", href: "/contact" },
    { name: "Help & FAQ", href: "/faq" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Emergency & Trust Bar */}
      <div className="bg-slate-900 text-slate-200 text-xs py-2 px-3 sm:px-6 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 sm:gap-4 truncate">
            <span className="flex items-center gap-1.5 text-emerald-400 font-semibold text-[11px] sm:text-xs truncate">
              <ShieldCheck className="w-3.5 h-3.5 shrink-0 text-emerald-400" />
              <span className="truncate">Guwahati Doorstep Collection</span>
            </span>
            <span className="hidden md:inline text-slate-600">|</span>
            <span className="hidden md:flex items-center gap-1 text-amber-300 font-medium">
              ⚡ 30% OFF First Test
            </span>
          </div>

          <div className="flex items-center gap-3 shrink-0 text-[11px] sm:text-xs">
            <a
              href="tel:+919365001624"
              className="flex items-center gap-1 hover:text-emerald-400 transition-colors font-bold text-emerald-300 sm:text-slate-200"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>9365001624</span>
            </a>
            <span className="text-slate-600 hidden sm:inline">/</span>
            <a
              href="tel:+917575962265"
              className="hidden sm:inline hover:text-emerald-400 transition-colors"
            >
              7575962265
            </a>
            <span className="text-slate-600 hidden lg:inline">|</span>
            <a
              href="https://www.lablinkguwahati.in/phlebotomist/login"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center gap-1 text-blue-400 hover:text-blue-300 transition-colors"
            >
              <UserCheck className="w-3.5 h-3.5" />
              <span>Phlebotomist Portal</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm py-2.5 border-b border-slate-100"
            : "bg-white py-3.5 border-b border-slate-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group shrink-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-blue-700 to-blue-500 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
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
              <span className="text-lg sm:text-xl font-black tracking-tight text-slate-900 leading-none">
                LAB<span className="text-blue-600">LINK</span>
              </span>
              <span className="text-[9px] sm:text-[10px] font-bold text-slate-500 uppercase tracking-wider mt-0.5">
                Guwahati Phlebotomy
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-6 text-sm font-semibold">
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

          {/* Desktop Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/reports"
              className="px-3.5 py-2 rounded-xl text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors flex items-center gap-1.5"
            >
              <FileText className="w-4 h-4 text-blue-600" />
              Reports
            </Link>
            <Link
              href="/booking"
              className="px-4 py-2.5 rounded-xl text-xs font-extrabold text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-600/25 transition-all hover:-translate-y-0.5 flex items-center gap-1.5"
            >
              <Calendar className="w-4 h-4" />
              Book Home Test
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-800 hover:bg-slate-100 transition-colors border border-slate-200 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Backdrop & Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[88px] z-40 bg-slate-900/60 backdrop-blur-xs flex flex-col justify-start">
          <div className="bg-white border-b border-slate-200 shadow-2xl px-5 py-6 space-y-4 max-h-[85vh] overflow-y-auto animate-in slide-in-from-top duration-200">
            <div className="flex flex-col space-y-1 font-semibold text-slate-800">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`py-3 px-3 rounded-xl flex justify-between items-center transition-colors ${
                    pathname === item.href
                      ? "bg-blue-50 text-blue-600 font-bold"
                      : "hover:bg-slate-50 text-slate-800"
                  }`}
                >
                  <span className="text-sm">{item.name}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </Link>
              ))}

              <a
                href="https://www.lablinkguwahati.in/phlebotomist/login"
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-3 rounded-xl text-blue-600 flex justify-between items-center font-bold text-sm hover:bg-blue-50"
              >
                <div className="flex items-center gap-2">
                  <UserCheck className="w-4 h-4" />
                  <span>Phlebotomist Portal Login</span>
                </div>
                <ChevronRight className="w-4 h-4 text-blue-600" />
              </a>
            </div>

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
              <Link
                href="/booking"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3.5 rounded-xl text-center font-extrabold text-white bg-blue-600 shadow-md shadow-blue-600/30 flex items-center justify-center gap-2 text-sm"
              >
                <Calendar className="w-4 h-4" />
                Book Home Sample Collection
              </Link>
              
              <div className="grid grid-cols-2 gap-2">
                <a
                  href="tel:+919365001624"
                  className="py-3 rounded-xl text-center font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 flex items-center justify-center gap-1.5 text-xs"
                >
                  <Phone className="w-4 h-4 text-emerald-600" />
                  Call Phlebotomist
                </a>
                <a
                  href="https://wa.me/917575962265"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 rounded-xl text-center font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 flex items-center justify-center gap-1.5 text-xs"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-600" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

