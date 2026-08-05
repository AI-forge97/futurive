# Futurive.ai — Website Redesign & Rebuild Brief

**For:** Coding/design agent rebuilding the site
**Goal:** Reposition futurive.ai from a generic "AI for every industry" agency into a domain-focused studio: **AI voice agents and intelligent triage for insurance, legal, and healthcare — built for the UAE (English + Arabic).**
**Priority order of verticals:** Insurance (beachhead) → Legal → Healthcare. Marketing/generic AI content must be removed entirely.

---

## 1. Context (read before touching code)

Futurive.ai is a Dubai-based (Dubai Silicon Oasis) AI studio run by an AI engineer with shipped work in legal apps, voice agents, and triage agents. The current site is a generic AI-services template: it lists every possible AI service, uses placeholder-style testimonials, and gives no reason for a specific buyer to trust it. The rebuild must make a Dubai insurance-SaaS executive or a law-firm partner think within 5 seconds: *"These people solve exactly my problem."*

---

## 2. Positioning & Messaging (source of truth for all copy)

**One-liner (hero):** Futurive builds AI voice agents and triage systems for insurance, legal, and healthcare — in English and Arabic.

**Messaging rules:**
- Name the verticals explicitly. Never say "every industry," "diverse industries," or "AI transformation journey."
- Every claim is concrete: an outcome, a number, or a demo. Ban the words: revolutionary, cutting-edge, unlock, transform, journey, magic.
- Lead with outcomes ("no missed claims calls," "contract review in minutes"), then the tech (RAG, MLOps, fine-tuning) as supporting detail only.
- Voice/tone: plain, confident, engineer-who-ships. Sentence case everywhere. Active voice. Short sentences.
- Arabic capability is a differentiator — mention "English + Arabic, Gulf code-switching" wherever voice agents are described.

---

## 3. Site Structure

```
/                → Home (single scrolling page, sections below)
/insurance       → Vertical page: Insurance AI
/legal           → Vertical page: Legal AI
/healthcare      → Vertical page: Healthcare AI (lighter; "early access" framing OK)
/about           → Founder + studio story
/contact         → Booking + form (keep Calendly link: calendly.com/contact-futurive/30min)
```

### Home page sections (in order)
1. **Hero** — headline: "AI that answers calls. AI that reads documents." Subhead: the one-liner above. Two CTAs: **[Try the live voice demo]** (primary) and **[Book a consultation]**.
2. **Live voice demo** — embedded web-call widget or a displayed phone number visitors can call to talk to Futurive's own agent. If no widget is available at build time, create the section with a clearly marked placeholder component (`<VoiceDemo />`) and a "Demo launching soon — book a walkthrough" fallback CTA. This section is the signature element of the site (see §5).
3. **Three verticals** — Insurance / Legal / Healthcare cards, each: one outcome sentence + 3 concrete use cases + link to vertical page.
   - Insurance: claims intake voice agent, claim classification & routing (triage), policy document extraction, renewal & payment reminder calls.
   - Legal: contract review & risk flagging, drafting from firm templates, cited research over firm documents (RAG), matter intake triage.
   - Healthcare: appointment booking voice agent, patient intake triage, no-show reduction reminder calls.
4. **How it works** — 4 short steps: Discover → Working prototype in 2 weeks → Deploy → Optimize. Emphasize "prototype in 2 weeks."
5. **Trust & data** — dedicated section, not a footnote: UAE/private hosting options, client data never used for model training, audit logs, human-handoff on every agent. This addresses the #1 objection from legal and insurance buyers.
6. **The engineering behind it** — small, quiet section folding in RAG, integrations, MLOps, fine-tuned open models. Capabilities, not offerings.
7. **Founder note** — short first-person paragraph + photo placeholder. In the UAE market, buyers buy the person.
8. **Contact** — Calendly + short form (Name, Email, Company, Message). Keep contact@futurive.ai and the Dubai Digital Park address.

### Vertical pages (template, one per vertical)
Hero (vertical-specific outcome headline) → 3–4 use cases with 2–3 sentence descriptions each → mini "how a pilot works" (2-week pilot, fixed scope, success metrics agreed upfront) → trust/data section (same component as home) → CTA.

---

## 4. Content to REMOVE (do not carry over)

- All four testimonials (Sarah Chen / TechCorp, Michael Rodriguez / Global Finance, Jennifer Park / RetailNext, David Thompson / DataDrive). They read as fabricated placeholders and damage credibility. Do **not** replace with new invented testimonials. Leave a `<CaseStudies />` placeholder component, hidden until real content exists.
- The "Trusted by Industry Leaders" section title and any implied client logos.
- Generic pillars ("Business Acceleration," "Content & Creative Automation," "AI Strategy & Consulting" as standalone offers).
- The generic FAQ. Replace with 4–5 buyer-specific questions: "Can it speak Arabic?", "Where is our data hosted?", "What happens when the AI can't handle a call?", "How long until we're live?", "How is pricing structured?"

---

## 5. Design Direction

Do not produce a generic AI-startup template (dark background + neon accent, or cream + serif + terracotta). This is a Gulf B2B trust product; design for credibility with one memorable signature.

- **Signature element:** the live voice demo in the hero area — visualize it as a sound/waveform motif. A restrained animated waveform (respecting `prefers-reduced-motion`) may appear in the hero; everywhere else stays quiet and disciplined.
- **Palette:** professional and regionally grounded — e.g., deep ink navy or dark teal base, warm sand/off-white surfaces, one confident accent (deep gold or gulf-teal) used sparingly for CTAs and the waveform. Agent may refine exact hexes but must define 4–6 named tokens and use them consistently.
- **Typography:** pair a characterful display face with a highly readable body face; must support Arabic script well for future localization (e.g., a family with a matching Arabic companion). Define a clear type scale.
- **Layout:** generous whitespace, max-width content column, strong section rhythm. No card-grid-of-everything.
- **Quality floor:** fully responsive to 360px, visible keyboard focus, semantic HTML, alt text, reduced-motion respected, Lighthouse ≥ 90 on performance/accessibility/SEO.
- **RTL-ready:** structure CSS (logical properties) so an Arabic RTL version can be added without rework. An actual Arabic version is out of scope for v1 but nothing should block it.

---

## 6. Technical Requirements

- Keep it simple and fast: static or lightly hydrated site (plain HTML/CSS/JS, Astro, or Next.js static export — agent's choice, justify briefly). No heavy CMS.
- Components to build as reusable: `VerticalCard`, `TrustSection`, `PilotSteps`, `VoiceDemo` (placeholder-capable), `CaseStudies` (hidden by default), `ContactForm`.
- Contact form: client-side validation + POST to a configurable endpoint (env var); graceful "email us at contact@futurive.ai" fallback if unset.
- SEO: per-page titles/descriptions using vertical keywords ("AI voice agent insurance UAE," "legal AI Dubai," "Arabic voice agent"). OpenGraph tags. Sitemap.xml.
- Analytics: placeholder slot for a privacy-friendly analytics snippet (env-configurable).
- Preserve existing links: Calendly URL, LinkedIn/Twitter/GitHub, contact email, Dubai address.

---

## 7. Acceptance Criteria (check every one before finishing)

1. A first-time visitor can state what Futurive does and for whom within 5 seconds of landing.
2. The words "insurance," "legal," "voice agent," and "Arabic" all appear above the fold or within the first scroll.
3. Zero fabricated testimonials, client names, or invented metrics anywhere on the site.
4. Trust/data-privacy section exists on home and on every vertical page.
5. Voice demo section exists (real widget or clearly built placeholder with fallback CTA).
6. Site scores ≥ 90 Lighthouse (performance, accessibility, SEO) on mobile.
7. All copy follows §2 messaging rules — run a final pass to strip banned buzzwords.
8. RTL-safe CSS (logical properties) throughout.

**Out of scope for v1:** blog, Arabic translation, client portal, pricing page (pricing is discussed in consultations for now).