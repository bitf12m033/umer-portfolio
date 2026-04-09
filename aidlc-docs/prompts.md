# Prompts Log

---

## Prompt 001 - Inception Plan

Create an Inception plan for a personal portfolio website for M. Umer Majeed.
Positioning: Full Stack Engineer | AI-Integrated Systems.
Style: dark, AI-themed, modern, professional.
Return user stories, units, risks, and execution plan.

---

## Prompt 002 - App Shell (Bolt 1)

Build the base layout for a personal portfolio using Next.js + Tailwind.

Requirements:
- Navbar
- Footer
- Section wrapper
- Homepage structure
- Dark AI-themed style

Stop after base layout.

---

## Prompt 003 - Hero Section (Bolt 2)

We are following AI-SDLC.

Context:
- Next.js App Router project (no /src)
- Header and footer implemented
- Construction phase, Unit 02, Bolt 2

Task:
Implement Hero section with:
- Name: M. Umer Majeed
- Title: Full Stack Engineer | AI-Integrated Systems
- Supporting text (8+ years, full-stack, AI systems)
- CTA buttons (View Projects, Contact Me)
- Trust indicators

Style:
- Dark, AI-themed, modern, professional

Constraints:
- Do not modify other sections
- Use Tailwind only

Output:
- components/Hero.tsx
- updated app/page.tsx

---

## Prompt 004 - About & Skills (Bolt 3)

We are following AI-SDLC. This is Construction Phase.

Current State:
- Next.js App Router project (no /src folder)
- Navbar, Footer, Hero already implemented
- Unit 03: About & Skills
- This is Bolt 3 only

Do NOT go beyond this scope.

Project Context:
- Portfolio for M. Umer Majeed
- Positioning: Full Stack Engineer | AI-Integrated Systems
- 8+ years experience
- Style: dark, AI-themed, modern, professional

Task:
Implement About and Skills sections.

Requirements:

1. Create components:
   - components/About.tsx
   - components/Skills.tsx

2. About Section:
   - Short paragraph (4–6 lines max)
   - Must include:
     - 8+ years experience
     - full-stack development
     - building production systems
     - working with APIs, CMS, and integrations
     - AI-enabled systems (transcription, Vertex AI, etc.)
   - Tone: confident, senior-level, professional

3. Skills Section:
   Group skills into categories:

   Frontend:
   - React, Next.js, JavaScript, HTML, CSS, Tailwind

   Backend:
   - PHP (Laravel, CodeIgniter), Python, ColdFusion

   AI / Automation:
   - Vertex AI, Speech-to-Text, real-time transcription

   Integrations:
   - REST APIs, OAuth, payment gateways, third-party APIs

   Tools / Cloud:
   - GCP, Docker, Git, databases (MySQL, PostgreSQL, MongoDB)

4. UI:
   - Use grid or card layout
   - Clean spacing
   - Consistent with Hero styling
   - Responsive

5. Integration:
   - Add About and Skills to app/page.tsx below Hero
   - Do not modify existing components

Constraints:
- No external UI libraries
- No excessive animations
- No long text blocks
- Keep it clean and readable

Output:
- components/About.tsx
- components/Skills.tsx
- updated app/page.tsx
- stop after this

---

## Prompt 005 - Projects (Bolt 4)

We are following AI-SDLC. This is Construction Phase.

Current State:
- Next.js App Router project (no /src folder)
- Navbar, Footer, Hero, About, Skills already implemented
- Unit 04: Projects
- This is Bolt 4 only

Do NOT go beyond this scope.

Project Context:
- Portfolio for M. Umer Majeed
- Positioning: Full Stack Engineer | AI-Integrated Systems
- Style: dark, AI-themed, modern, professional

Task:
Implement the Projects section using real project data.

Requirements:

1. Create:
   - components/Projects.tsx
   - data/projects.ts

2. Add 3–4 projects:

Project 1:
Minutes – Real-Time Collaboration
- SaaS platform with video calls, transcription, e-signatures, billing
- AI: real-time transcription, intent analysis (Vertex AI)
- Integrations: Vonage, Google STT, Signit

Project 2:
Offrs Marketing Applications
- Marketing automation platform
- API integration (LOB.com)
- Automated campaigns and workflows

Project 3:
Lead & Deal Reporting System
- Laravel + MySQL system
- HubSpot API integration
- Automated reporting (daily to annual)

Project 4 (optional):
Shopify Migration
- Migrated store data (products, variants, images)
- Ensured data integrity

3. Each project card must include:
   - Title
   - Short description (2–3 lines)
   - Key highlights (bullet points)
   - Tech stack
   - Optional: role or impact

4. UI:
   - Grid layout (2–3 columns)
   - Clean cards with hover effect (subtle)
   - Consistent dark theme
   - Good spacing and hierarchy

5. Integration:
   - Add Projects section to app/page.tsx below Skills
   - Use reusable structure

Constraints:
- No generic design
- No long text blocks
- No external UI libraries
- Keep it clean and senior-level

Output:
- components/Projects.tsx
- data/projects.ts
- updated app/page.tsx
- stop after this

---

## Prompt 006 - Experience (Bolt 5)

We are following AI-SDLC. This is Construction Phase.

Current State:
- Next.js App Router project (no /src folder)
- Navbar, Footer, Hero, About, Skills, Projects implemented
- Unit 05: Experience
- This is Bolt 5 only

Do NOT go beyond this scope.

Project Context:
- Portfolio for M. Umer Majeed
- Positioning: Full Stack Engineer | AI-Integrated Systems
- Style: dark, AI-themed, modern, professional

Task:
Implement Experience section using real work history.

Requirements:

1. Create:
   - components/Experience.tsx
   - data/experience.ts

2. Add roles:

vinSUITE (Senior Software Developer) — 2023–Present
- Bug fixes, feature development, performance optimization
- Payment gateway and API integrations

Offrs (Senior Software Developer) — 2019–2023
- Built marketing platforms and automation systems
- Integrated LOB.com API and automated workflows

PureLogics (Software Engineer) — 2018–2019
- Developed Shopify stores and Laravel reporting tools
- Integrated HubSpot APIs

Techleadz (Web Developer) — 2016–2018
- Built web applications and backend systems
- Worked with Laravel, ColdFusion, Python

3. Each role must include:
   - Company name
   - Role
   - Duration
   - 3–4 bullet points (concise)
   - Tech stack (short)

4. UI:
   - Vertical timeline OR clean stacked cards
   - Clear spacing and hierarchy
   - Consistent dark theme
   - Readable and professional

5. Integration:
   - Add Experience section below Projects
   - Do not modify other sections

Constraints:
- No long paragraphs
- No fake content
- No external UI libraries
- Keep it clean and senior-level

Output:
- components/Experience.tsx
- data/experience.ts
- updated app/page.tsx
- stop after this

---

## Prompt 007 - Contact & CTA (Bolt 6)

We are following AI-SDLC. This is Construction Phase.

Current State:
- Next.js App Router project (no /src folder)
- All sections implemented except Contact
- Unit 06: Contact & CTA
- This is Bolt 6 only

Do NOT go beyond this scope.

Project Context:
- Portfolio for M. Umer Majeed
- Positioning: Full Stack Engineer | AI-Integrated Systems
- Style: dark, AI-themed, modern, professional

Contact Info:
- Email: umermj2@gmail.com
- GitHub: https://github.com/bitf12m033
- LinkedIn: https://linkedin.com/in/umer-majeed

Task:
Implement Contact section.

Requirements:

1. Create:
   - components/Contact.tsx

2. Content:
   - Headline:
     "Let’s Work Together"

   - Supporting text:
     Short line encouraging contact (projects, opportunities, collaboration)

3. Contact options:
   - Email (clickable mailto link)
   - GitHub
   - LinkedIn

4. UI:
   - Centered layout
   - Clear CTA focus
   - Clean spacing
   - Subtle highlight (gradient/glow)
   - Buttons or links styled consistently

5. Integration:
   - Add Contact section at bottom of app/page.tsx (above footer)
   - Do not modify other sections

Constraints:
- No complex forms
- No external UI libraries
- Keep it simple and professional
- Fully responsive

Output:
- components/Contact.tsx
- updated app/page.tsx
- stop after this

---

## Prompt 008 - Polish and SEO (Bolt 7)

We are following AI-SDLC. This is Construction Phase.

Current State:
- Next.js App Router project (no /src folder)
- Navbar, Footer, Hero, About, Skills, Projects, Experience, and Contact are already implemented
- Unit 07: Polish and SEO
- This is Bolt 7 only

Do NOT go beyond this scope.

Project Context:
- Portfolio for M. Umer Majeed
- Positioning: Full Stack Engineer | AI-Integrated Systems
- Style: dark, AI-themed, modern, professional
- Goal: make the site feel premium, complete, and production-ready

Task:
Apply final polish and SEO improvements to the existing portfolio.

Requirements:

1. Improve visual consistency:
   - refine section spacing
   - ensure headings and text hierarchy feel consistent
   - improve button and link hover states
   - ensure cards have consistent padding and borders

2. Add subtle polish:
   - smooth scrolling
   - subtle transitions/hover effects
   - optional minimal reveal/fade effects using CSS/Tailwind only if simple
   - do not make the site flashy

3. SEO / metadata:
   - update app/layout.tsx metadata
   - title: M. Umer Majeed | Full Stack Engineer | AI-Integrated Systems
   - description: Portfolio of M. Umer Majeed, a Full Stack Engineer specializing in modern web systems, integrations, and AI-enabled products.
   - add relevant keywords
   - include basic openGraph metadata if appropriate

4. Accessibility / UX:
   - ensure buttons and links have visible focus states
   - ensure section ids support navbar anchor navigation
   - ensure text contrast remains readable

5. Responsiveness:
   - review all sections for spacing and mobile behavior
   - preserve current structure

Constraints:
- No new sections
- No external UI libraries
- No heavy animation libraries
- Keep all code modular and production-ready
- Only refine existing implementation

Output:
- updated app/layout.tsx
- any updated shared components needed for polish
- any updated app/page.tsx if section ids or structure need refinement
- stop after this