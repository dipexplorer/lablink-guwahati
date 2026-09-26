"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-slate-50 flex flex-col">
      <Header />
      
      {/* Banner */}
      <div className="bg-slate-900 text-white py-12 px-4 md:px-8 border-b border-slate-800 text-center">
        <div className="max-w-4xl mx-auto space-y-3">
          <span className="px-3.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider border border-emerald-500/30">
            GUWAHATI HELPLINE & SUPPORT
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Contact LabLink Guwahati
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
            Have questions about blood test packages or prescription inquiries? Our lab support team is available 7 days a week.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16 max-w-7xl mx-auto px-4 md:px-8 w-full flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
              Get in Touch Directly
            </h2>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Phone Helplines</h3>
                  <p className="text-xs text-slate-500 mb-2">Speak directly with a Guwahati phlebotomy coordinator</p>
                  <a href="tel:+919365001624" className="text-sm font-extrabold text-blue-600 hover:underline block">
                    +91 9365001624
                  </a>
                  <a href="tel:+917575962265" className="text-sm font-extrabold text-blue-600 hover:underline block">
                    +91 7575962265
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Email Inquiry</h3>
                  <p className="text-xs text-slate-500 mb-1">Send doctor prescriptions or bulk checkup requests</p>
                  <a href="mailto:lablinkguwahati@gmail.com" className="text-xs font-bold text-blue-600 hover:underline">
                    lablinkguwahati@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Operating Hours</h3>
                  <p className="text-xs text-slate-600">
                    <strong>Monday - Sunday:</strong> 7:00 AM - 8:00 PM<br />
                    (Home collection slots available from 7:00 AM)
                  </p>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/917575962265"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm shadow-md transition-colors flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-5 h-5" />
              <span>Instant WhatsApp Chat</span>
            </a>
          </div>

          {/* Right Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Send an Instant Message</h3>
              <p className="text-xs text-slate-500 mb-6">
                Fill out your details below and our lab executive will call you back within 15 minutes.
              </p>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ankur Das"
                      className="w-full p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Mobile Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 98640XXXXX"
                      className="w-full p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Message / Required Blood Test *</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Specify required tests or ask any questions..."
                      className="w-full p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md shadow-blue-600/25 transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message to LabLink</span>
                  </button>
                </form>
              ) : (
                <div className="text-center py-8 space-y-4">
                  <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
                  <h4 className="text-lg font-bold text-slate-900">Message Received!</h4>
                  <p className="text-xs text-slate-600">
                    Thank you. A Guwahati lab coordinator will call you back shortly at your provided phone number.
                  </p>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </main>
  );
}
