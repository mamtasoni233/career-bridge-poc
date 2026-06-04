# CareerBridge - Proof of Concept (POC)

CareerBridge is a dynamic, user-centric career guidance platform built as part of the Tequity Consulting intern assessment. It features a progressive multi-step onboarding flow, data-driven tailored career roadmaps, structured actionable checklists, and a standalone comprehensive mentors directory.

## 🚀 Live Links & Deliverables
- **Live Application**: [Insert Your Vercel Deployment Link Here]
- **Source Code**: [Insert Your GitHub Repository Link Here]
- **Walkthrough Video**: [Insert Your Loom Video Link Here]

---

## 🛠️ Tech Stack & Architectural Decisions

- **Frontend & Routing**: **Next.js (App Router)** - Chosen for its modern, file-based routing architecture which enables high-utility features like dynamic state-based parameters (`/dashboard?type=...`) and independent standalone views (`/mentors`).
- **Styling**: **Tailwind CSS** - Used to deliver a responsive, clean, and modern UI/UX design with precise typography and visual progress mapping.
- **State Management & Data Architecture**: **React State Hook & Fallback Objects** - Implemented robust client-side filtering and data synchronization without introducing database bottlenecks, perfectly aligning with the strict 5-day scope.

---

## ✨ Core Features Implemented

1. **User Onboarding Flow (Form Container)**: A progressive 3-step form containing input fields for Candidate Name, Education Level, and Areas of Interest to gather user context seamlessly.
2. **Dynamic Profile Summary**: Synchronizes form inputs via query parameters to display a verified profile summary badge system on top of the main layout.
3. **Tailored Career Roadmap View**: Automatically maps the selected interest track to predefined, multi-stage visual career paths (e.g., Web Developer, Frontend Specialization, Data Scientist, Junior Data Analyst).
4. **Actionable Checklist Widget**: A targeted callout container titled *"What to do this week"* featuring a custom checkbox interface for immediate, sector-specific tasks.
5. **Standalone Mentors Directory**: Features a clean component integration within the main view alongside an independent `/mentors` page containing an exhaustive directory of certified industry professionals.

---

## 📁 Repository Directory Structure

```text
CAREER-BRIDGE
├── src/
│   ├── app/                  
│   │   ├── dashboard/        
│   │   │   └── page.js       # Dynamic Dashboard view mapping query params
│   │   ├── mentors/          
│   │   │   └── page.js       # Standalone Master Mentors directory layout
│   │   ├── layout.js
│   │   ├── globals.css
│   │   └── page.js           # Progressive Onboarding multi-step form
│   │
│   └── components/           
│       └── Dashboard.jsx     # Reusable conditional layout engine
```

---

## 🏃‍♂️ How to Run Locally

Follow these steps to spin up the development environment on your local machine:

1. **Clone the repository:**
   ```bash
   git clone [Insert Your GitHub Repo URL]
   cd career-bridge
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Navigate to `http://localhost:3000` to interact with the system.

---

## 🎯 Evaluation Criteria Met (Scope Management)
- **No Complex DB Overhead**: Strictly relied on fixed, robust JSON schema dictionaries for instant, rule-based data loading as explicitly requested.
- **No Auth Bottlenecks**: Skipped user sign-up/login processes to optimize development velocity and perfect the required core feature views.
- **Responsive Framework Design**: Structured using clean layout components that degrade gracefully on varying screen dimensions.
