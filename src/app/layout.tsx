import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "LabLink Guwahati | Phlebotomist at Your Doorstep",
  description:
    "Professional, sterile blood sample collection at home in Guwahati. Partnered with Apollo Diagnostics, Dr Lal PathLabs, Lupin & Redcliffe Labs. Get 30% OFF on your first test!",
  keywords: [
    "blood test at home guwahati",
    "home phlebotomist guwahati",
    "lablink guwahati",
    "dr lal pathlabs home collection guwahati",
    "apollo diagnostics guwahati",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jakartaSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans bg-slate-50 text-slate-900">
        {children}
      </body>
    </html>
  );
}

