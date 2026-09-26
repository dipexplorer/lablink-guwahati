# LabLink Design System & UX Rules

## Brand Identity & Vibe
- **Keywords:** Trustworthy, Clinical, Clean, Modern, Frictionless, Empathetic.
- **Vibe:** A premium HealthTech startup. It should not look like a generic WordPress theme. It should feel like an app (think Practo, 1mg, or Apollo 24/7, but cleaner).

## Color Palette
We are moving away from generic default colors to a highly curated, medical-grade palette.
- **Primary (Brand Blue):** `hsl(215, 80%, 40%)` - Evokes trust, security, and professionalism.
- **Accent (Health Green):** `hsl(150, 60%, 45%)` - Used for success states, "Safe & Sterile" badges, and WhatsApp.
- **Alert (Urgency/Offer):** `hsl(350, 75%, 55%)` - Used sparingly for the "30% OFF" badge.
- **Background (App White):** `hsl(0, 0%, 98%)` - Not pure white, slightly soft to reduce eye strain.
- **Surface (Card White):** `hsl(0, 0%, 100%)` - For overlapping cards to create depth.
- **Text:** 
  - Main: `hsl(220, 20%, 15%)` - Deep slate for highly readable text.
  - Muted: `hsl(220, 10%, 45%)` - For secondary descriptions.

## Typography
- **Headings:** `Inter` or `Plus Jakarta Sans` (Sans-serif, geometric, highly legible). Font weights: 600, 700.
- **Body:** `Inter` (Sans-serif). Font weights: 400, 500.

## UI Components & Patterns

### 1. The Hero Section
- **Layout:** Split layout (Text on left, Image on right) or a clean centered layout.
- **Visuals:** High-quality, bright imagery of a professional phlebotomist (wearing a mask/gloves) interacting with a happy patient.
- **Interactions:** The "Book Home Collection" button should have a magnetic hover effect or a subtle pulse.

### 2. Glassmorphism & Depth
- Use very subtle drop shadows (e.g., `shadow-[0_8px_30px_rgb(0,0,0,0.04)]`) rather than heavy borders.
- Instead of the harsh blurred box from the old site, use crisp, highly legible cards with very slight borders (`border-gray-200/50`).

### 3. The "How It Works" Timeline
- Design a beautiful vertical or horizontal timeline using Framer Motion. As the user scrolls, the active step should light up (change from muted grey to Brand Blue).

### 4. Marquee for Lab Partners
- Instead of static images, use a smooth CSS/Framer Motion infinite scrolling marquee for the lab partner logos (Apollo, Dr Lal PathLabs, etc.) to show momentum and authority.

### 5. Floating CTAs
- **Mobile Rule:** On mobile, there MUST be a sticky bottom bar with a prominent "Book Now" and "Call Us" button. Health emergencies require immediate access to booking.

## Accessibility (A11y)
- **Grandparent-friendly:** High contrast is non-negotiable. Font sizes should be slightly larger than typical SaaS apps (Base 16px-18px).
- **Hit areas:** Buttons must be large and easy to tap on mobile devices (min 48px height).
