# LabLink - HealthTech Platform Reimagined

## Project Overview
LabLink is an on-demand, at-home blood collection service operating in Guwahati. They bridge the gap between patients and leading diagnostic laboratories (Apollo, Dr Lal PathLabs, Redcliffe Labs, etc.). The current website (`lablinkguwahati.in`) functions, but suffers from a fragmented UI, outdated design paradigms, and a lack of modern "trust" signals crucial for healthcare. 

The goal of this project is to completely reimagine the platform. We will transform it from a basic template into a premium, trustworthy, and incredibly user-friendly HealthTech web application.

## Core Objectives
1. **Instill Absolute Trust:** Healthcare requires extreme trust. We need a clinical, clean, and highly professional aesthetic (blues, whites, subtle medical greens).
2. **Frictionless Booking:** The "Book Now" flow must be front-and-center, incredibly simple (grandparent-friendly), and mobile-first.
3. **Clear Value Proposition:** "Phlebotomist at Your Doorstep" needs to be communicated instantly via high-quality visuals and clean typography.

## Target Audience
- **Primary:** Patients (especially elderly or chronically ill) who cannot easily visit labs.
- **Secondary:** Busy professionals who want quick, scheduled health checkups at home or work.
- **Tertiary:** Family members booking on behalf of their parents/grandparents.

## Key Features to Re-engineer
1. **Hero Section:** Needs to be conversion-optimized. Big, trustworthy imagery, clear headline, and a 1-click entry into the booking flow. Emphasize the "30% OFF First Test" offer subtly but effectively.
2. **How It Works (4 Steps):** Needs to be a highly visual, animated timeline. (Book -> Phlebotomist Arrives -> Sample Collection -> Digital Reports).
3. **Partner Labs Section:** Displaying Apollo, Lupin, Dr Lal PathLabs, etc., as a high-end, scrolling marquee to instantly build authority.
4. **Services & Process:** Clean, grid-based layout emphasizing "Safe & Sterile," "Quick Service," and "Digital Reports."
5. **Floating Action Buttons:** Retain WhatsApp integration but style it elegantly so it doesn't look like spam. Same for the AI Assistant.
6. **Portals:** Dedicated, clean entry points for "Phlebotomist Login" and "Admin Login" (likely via a subtle top-bar or footer link).

## Tech Stack
- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS + custom global variables for strict theming.
- **Animations:** Framer Motion (for scroll reveals, timeline animations, and micro-interactions).
- **Icons:** Lucide React (cleaner and more modern than FontAwesome).
- **Forms/Validation:** React Hook Form + Zod (for the booking modal).
