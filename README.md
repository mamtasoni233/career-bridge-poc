# CareerBridge - Full-Stack Proof of Concept (POC)

CareerBridge is a dynamic, user-centric career guidance platform built as a high-velocity Proof of Concept (POC) for the Tequity Consulting intern assessment. It features a progressive multi-step onboarding flow, context-aware user profile tracking, interest-targeted career roadmaps, a modular action checklist, and an independent master mentors directory.

## 🚀 Live Project URLs
- **Live Deployment Link**: [Insert Your Vercel Deployment Link Here]
- **Source Code Repository**: https://github.com/mamtasoni233/career-bridge-poc
- **Video Presentation Walkthrough**: [Insert Your Loom Video Link Here]

---

## 🛠️ Core Features Implemented

1. **Progressive Onboarding Flow (3-Step Form)**: Captures user context across Candidate Name, Education Level, and Core Area of Interest seamlessly.
2. **Dynamic UI/UX Conditional Filtering**: The target role options on Step 3 automatically adapt based on the Step 2 choice (`software coding` ➔ Web/Frontend, `data-science` ➔ Data Scientist/Analyst, `design` ➔ UI/UX Designer, `marketing` ➔ Digital Marketing Specialist).
3. **Synchronized User Profile Summary Header**: Extracts variables from URL query parameters to construct a persistent personal welcome greeting and verified badge indicator banner (`/dashboard?name=...&education=...&interest=...`).
4. **Tailored Career Roadmap View**: Maps user-specific tracks to high-utility milestone guides outlining technical skill acquisition dynamically.
5. **Decoupled Next Steps Widget (Section 3.4)**: Extracted into a standalone modular client-side component (`NextSteps.jsx`) that renders specific practical weekly tasks based on the chosen track. Features interactive checkbox elements with responsive line-through/strikeout status updates.
6. **Isolated Mentors Directory View**: Integrated direct route linking (`Link` component) that cleanly opens a standalone directory route (`/mentors`) listing master profiles.

---

## 🔮 Future Scope & Scalability (According to PDF Evolution Requirements)

If given more development timeline, the platform will scale across these three distinct layers to meet production-level standards:

1. **AI-Driven Personalization (Section 4 Compatibility)**: Integrating Large Language Model (LLM) microservices via API endpoints to replace rule-based mock dictionaries, providing hyper-personalized, non-linear career roadmaps based on resume uploads and historical user behavior analysis.
2. **Persistent Database Integration & Session Authentication**: Adding a relational database tier (PostgreSQL or MongoDB) combined with NextAuth (Auth.js) to securely persist user sessions, securely store profile structures, and track checklist history over multiple weeks.
3. **Live Mentor Booking Workspace**: Upgrading the static mentor directory into an active engagement layer with scheduling API integrations (Cal.com or Calendly) and real-time chat spaces for instant mentor-mentee connectivity and video mock interview sessions.

---

## 📂 Project Architecture & Directory Layout

```text
CAREER-BRIDGE
├── src/
│   ├── app/                  
│   │   ├── dashboard/        
│   │   │   └── page.js       # Dynamic Dashboard view mapping query parameters
│   │   ├── mentors/          
│   │   │   └── page.js       # Standalone Master Mentors directory route
│   │   ├── layout.js
│   │   ├── globals.css
│   │   └── page.js           # Progressive Onboarding form engine
│   │
│   ├── components/           
│   │   ├── Dashboard.jsx     # Career assessment presentation grid
│   │   ├── Header.jsx        # Resuable header component
│   │   └── NextSteps.jsx     # Decoupled interactive checklist layout module
│   │
│   └── data/                 
│       ├── mentors.js        # Hardcoded master mentor structures
│       └── roadmaps.js       # Structured 4-track schema dictionaries
```

---

## 💻 Tech Stack & Architectural Justifications

- **Framework**: **Next.js (App Router)** - Selected for its production-grade file routing framework, enabling swift component isolation, automatic performance optimizations, and robust search parameter parsing.
- **Styling Layout Engine**: **Tailwind CSS** - Chosen to compose clean visual structures, responsive grids, and uniform typography quickly to preserve design fidelity within a tight timeline.
- **State Architecture**: **State Hooks & Query Parameters** - Utilized state hooks for local UI controls and synchronized URL queries to sync data globally across separate view trees, preventing data drops during router switches while avoiding dehydration issues or server-rendering errors tied to browser LocalStorage.

---

## 🏃‍♂️ Local Machine Spinning Guide

Follow these steps to run the project on your local machine:

1. Clone the repository down to your directory setup:
   ```bash
   git clone [Insert Your GitHub Repo URL Here]
   cd career-bridge
   ```
2. Fetch and deploy all necessary build-dependencies:
   ```bash
   npm install
   ```
3. Boot up the local runtime compilation environment:
   ```bash
   npm run dev
   ```
4. Access via browser address space: `http://localhost:3000`

---
## 🎯 Evaluation Criteria Met (Scope Management)
- **No Complex DB Overhead**: Strictly relied on fixed, robust JSON schema dictionaries for instant, - - rule-based data loading as explicitly requested.
- **No Sign-In Friction Barriers**: Skipped user sign-up/login processes to optimize development velocity and perfect the required core feature views.
- **Responsive Framework Design**: Structured using clean, modern layout components that degrade gracefully across varying mobile, tablet, and desktop dimensions.
