# LabLink AI Agent Guidelines

## Tech Stack
- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React (Icons)

## Formatting & Code Rules
- **Component Architecture:** Break complex UIs into highly reusable, granular components (e.g., `Hero`, `Timeline`, `PartnerMarquee`, `BookingModal`).
- **Styling:** Use standard Tailwind CSS classes. Do NOT use inline styles unless strictly necessary for dynamic Framer Motion values.
- **Animations:** Animations must feel smooth and native. Do not overuse them. Use `useScroll` and `whileInView` for elegant, subtle reveals.
- **File Structure:**
  - `src/app/` (Pages and routing)
  - `src/components/ui/` (Reusable buttons, inputs, cards)
  - `src/components/sections/` (Hero, Features, Footer)
- **Icons:** ONLY use `lucide-react`. Do not import heavy icon libraries.
- **Images:** Use `next/image` always.

## Commands
- **Install:** `npm install`
- **Dev:** `npm run dev`
- **Build:** `npm run build`

## Execution Context
Read `PROJECT.md` for business logic and `DESIGN_PROMPT.md` for visual guidelines before writing any code. The primary goal is a trustworthy, lightning-fast, and highly accessible HealthTech UI.
