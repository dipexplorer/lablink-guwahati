"use client";

import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, ShieldCheck, UserCheck, Lock, MessageSquare } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold">
                L
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                LAB<span className="text-blue-500">LINK</span>
              </span>
            </Link>
            
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Professional, verified, and sterile blood sample collection at your doorstep in Guwahati. Partnered with NABL-accredited laboratories for 100% accurate diagnostic reports.
            </p>

            <div className="pt-2 flex flex-col space-y-2 text-xs text-slate-300 font-medium">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400" />
                <a href="tel:+919365001624" className="hover:text-emerald-400 transition-colors font-semibold">
                  +91 9365001624
                </a>
                <span>/</span>
                <a href="tel:+917575962265" className="hover:text-emerald-400 transition-colors">
                  +91 7575962265
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400" />
                <a href="mailto:lablinkguwahati@gmail.com" className="hover:text-blue-400 transition-colors">
                  lablinkguwahati@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-400" />
                <span>Guwahati, Assam, India (Home Collection Service Area)</span>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400 font-medium">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Blood Test Packages
                </Link>
              </li>
              <li>
                <Link href="/booking" className="hover:text-white transition-colors">
                  Book Home Appointment
                </Link>
              </li>
              <li>
                <Link href="/reports" className="hover:text-white transition-colors">
                  Download Patient Reports
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition-colors">
                  Help & FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Portals & Logins */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Portals & Logins
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400 font-medium">
              <li>
                <a
                  href="https://www.lablinkguwahati.in/phlebotomist/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1.5 font-semibold"
                >
                  <UserCheck className="w-3.5 h-3.5" />
                  <span>Phlebotomist Portal</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.lablinkguwahati.in/admin/#/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <Lock className="w-3.5 h-3.5 text-amber-400" />
                  <span>Admin Dashboard</span>
                </a>
              </li>
              <li>
                <Link href="/reports" className="hover:text-white transition-colors">
                  Patient PDF Download
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Legal & Hours */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Legal & Hours
            </h4>
            <p className="text-xs text-slate-400 mb-3">
              <strong className="text-slate-200">Guwahati Service Hours:</strong><br />
              7:00 AM - 8:00 PM (Mon - Sun)
            </p>
            <ul className="space-y-2 text-[11px] text-slate-500">
              <li>
                <a href="https://www.lablinkguwahati.in/terms-conditions" className="hover:text-slate-300">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="https://www.lablinkguwahati.in/refund-policy" className="hover:text-slate-300">
                  Refund & Cancellation Policy
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} LabLink Guwahati. All rights reserved.</p>
          <div className="flex items-center gap-2 text-emerald-400 font-medium">
            <ShieldCheck className="w-4 h-4" />
            <span>NABL Certified Diagnostic Network</span>
          </div>
        </div>

      </div>

      {/* Floating Action Buttons for Mobile */}
      <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
        <a
          href="https://wa.me/917575962265"
          target="_blank"
          rel="noopener noreferrer"
          className="w-13 h-13 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-xl flex items-center justify-center transition-transform hover:scale-110"
          title="Chat on WhatsApp"
        >
          <MessageSquare className="w-6 h-6" />
        </a>
        <a
          href="tel:+919365001624"
          className="w-13 h-13 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-xl flex items-center justify-center transition-transform hover:scale-110 md:hidden"
          title="Call Phlebotomist Helpline"
        >
          <Phone className="w-6 h-6" />
        </a>
      </div>
    </footer>
  );
}
