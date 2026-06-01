# ClearPath — Pixel-Perfect Rebuild Spec

Reference site: https://clearpath-template.framer.website/
Original: Framer template "ClearPath" by Anton Drukarov (therapy / coaching studio).
Goal: reproduce the site **pixel-perfect, including scroll animations**, on a custom stack.

Recommended stack (chosen for closest match to Framer output):
- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** for layout/spacing
- **Framer Motion** for scroll-reveal, parallax, counters, toggles (mirrors Framer's own motion engine)
- **next/font** for self-hosted Crimson Text + Inter
- **Lenis** (optional) for the smooth-scroll feel Framer sites have

---

## 1. Design tokens

### Colors
| Token | Value | Use |
|---|---|---|
| `--sage` | `#7FA69B` (rgb 127 166 155) | primary accent, pill buttons, links, eyebrows |
| `--sage-soft` | `rgba(127,166,155,0.2)` | tints, hover fills, card backgrounds |
| `--ink` | `#2E3231` (rgb 46 50 49) | headings, dark text |
| `--muted` | `#535956` (rgb 83 89 86) | body paragraphs |
| `--paper` | `#FAFAFA` | alt section background |
| `--white` | `#FFFFFF` | base background |
| `--black` | `#000000` | occasional dark sections / footer text |

Body background: white. Several sections sit on `--paper`. Dark CTA/quote blocks use ink/black.

### Typography
Two families only:
- **Crimson Text** (serif, weight 400) — all large display headings, service titles, story headlines, the logo lockup. Light, elegant, generous line-height.
- **Inter** (sans, weights 400/500) — body copy, nav, buttons, eyebrows, form labels, the two "statement" H2s.

Observed type scale (desktop, 1366px):
| Element | Font | Size | Weight |
|---|---|---|---|
| Hero H1 | Crimson Text | 136px | 400 |
| Big statement H2 | Inter | 44px | 500 |
| Section display H2 | Crimson Text | 72px | 400 |
| Counter H2 | Crimson Text | 136px | 400 |
| Service / story H3 | Crimson Text | 36px | 400 |
| Eyebrow label | Inter | ~12-13px | 500-600, UPPERCASE, letter-spacing ~0.08em, color sage |
| Body | Inter | 16-18px | 400, color muted |
| Nav links / button text | Inter | ~12px | 500, uppercase, letter-spacing |

Use `clamp()` for fluid scaling, e.g. hero `clamp(56px, 10vw, 136px)`.

### Buttons (pills)
- Shape: fully rounded, `border-radius: 999px`.
- Primary: background `--sage`, text white, uppercase ~12px, letter-spacing, a small dot/arrow on the right (`pad ~ 14px 20px`, extra right padding for the icon).
- On dark imagery: same sage pill OR white pill with ink text.
- Hover: slight darken / scale, dot animates.
- Examples: "Start Your Journey", "Book a Session", "Read More", "Read Full Story", "Get Started", "About ClearPath", "Subscribe".

### Layout
- Max content width ~1200-1280px, centered, with generous side gutters.
- Very airy vertical rhythm — large section padding (~120-160px top/bottom).
- Rounded image corners (~12-20px) on cards/story images.
- Total page height ~15,700px; 26 images.

---

## 2. Global behaviors / animations

These are what make it feel like Framer. Implement with Framer Motion + IntersectionObserver (`whileInView`).

1. **Scroll reveal** — most blocks fade up (`opacity 0->1`, `y 24->0`, ~0.6s ease-out) as they enter viewport, staggered for groups (cards, list items).
2. **Word-by-word / line reveal** on the big statement headings (philosophy paragraph reveals word-by-word as you scroll — opacity ramps from grey to ink). Implement as per-word spans with scroll-linked opacity (`useScroll` + `useTransform`).
3. **Sticky/parallax hero** — hero portrait stays fixed-ish while text scrolls; subtle scale.
4. **Animated number counters** — the rolling-digit odometer ("420+", "50+", years, programs). Build a digit-roll component (stacked 0-9 columns that translateY into place) triggered on view.
5. **Pricing toggle** — Monthly / Yearly (20% off) switch that swaps prices with a quick transition.
6. **FAQ accordion** — expand/collapse with height animation; one open at a time.
7. **Sticky header** — transparent over hero, gains solid/blur background after scroll; nav pill highlight.
8. **Smooth scrolling** — Lenis for inertia (optional but adds to the feel).

---

## 3. Section-by-section breakdown

> Copy below is the template placeholder copy — reuse verbatim for the visual clone.

### 0. Header (sticky)
- Left: logo "* clear-path" (serif, the bullet is sage).
- Center nav: ABOUT - SERVICES - STORIES - JOURNAL (Inter, uppercase, small).
- Right: "BOOK A SESSION" pill (sage, with dot).
- Transparent on hero, solid white + subtle shadow/blur after scrolling.

### 1. Hero
- Full-bleed dreamy portrait (woman, soft green/gold gradient, faint line streaks).
- H1 (Crimson, 136px): "A Path That Shapes Your Future." — left-aligned, overlapping the image.
- Right-lower: intro paragraph (Inter, white): "We offer therapy and coaching to help you navigate life's challenges with confidence and care. Together, we'll build personal insight, emotional well-being, and the steps needed for lasting change — at your own pace."
- Pill CTA: "START YOUR JOURNEY".

### 2. Balance intro
- Eyebrow "BALANCE".
- H2 statement (Inter, 44px): "There may not be a single switch, but there are clear steps forward."
- Sub: "Every path is different. These are the ways we help people move forward with confidence."

### 3. Center statement (on imagery)
- Full-bleed soft portrait, centered text:
  "If only finding balance were as simple as flipping a switch."
  "You're closer than you think. And every step you take makes it clearer."
- Small animated dot in the middle.

### 4. Services — 4 cards
Eyebrow + grid of 4. Each card: Crimson title + Inter description + "READ MORE".
1. **Mindfulness & Stress Support** — "Gentle practices to reduce overwhelm, build resilience, and reconnect with yourself."
2. **Individual Therapy** — "One-on-one sessions for emotional clarity, healing, and deeper self-understanding."
3. **Clarity Consult** — "A short-term space to gain insight, assess your needs, or reset your course."
4. **Life Coaching** — "Goal-focused sessions to build direction, motivation, and confidence."

### 5. Philosophy
- Eyebrow "OUR PHILOSOPHY".
- Large word-by-word reveal paragraph: "At ClearPath, we don't rush change — we help it unfold with intention. Through meaningful conversation, mindful tools, and a steady pace, we support growth that lasts."
- Pill "ABOUT CLEARPATH".

### 6. Client story #1
- Eyebrow "REAL PEOPLE. REAL CHANGE."
- H2 (Crimson, 72px): "Finding balance after burnout."
- Paragraph: "After years of chronic stress and emotional fatigue, Maya reached out during a low point. Through small, consistent steps, she rediscovered stability and reconnected with her creative energy."
- Pill "READ FULL STORY".
- Two overlapping rounded portrait images on the right.

### 7. How It Works (3 steps)
- Intro: "How It Works — Getting started doesn't have to be complicated..."
- Numbered steps:
  1. **Reach Out** — "Start with a short introductory call. We'll talk through what brings you here and how we might support you — no pressure, just space to begin. You can share as much or as little as you're comfortable with, and we'll listen without judgment."
  2. **Define Direction** — "Together, we'll shape a path that fits your needs and pace. Whether it's emotional clarity, burnout recovery, or navigating change — we'll find a focus that feels right. It's not about rushing toward a fixed goal, but about identifying what truly matters to you."
  3. **Meet & Reflect** — "Ongoing one-on-one sessions, held online, offer a consistent space to explore, reflect, and move forward with support and intention. We'll celebrate progress, address challenges, and keep your path aligned with your needs."

### 8. Counter + CTA
- Odometer counting animation.
- H2 (Crimson, 136px): "Ready to find your path?"
- Paragraph: "Every step is flexible — we adapt to your needs, pace, and comfort level. Whether you're here for a short chapter or a longer journey, we'll walk it together."
- Pill "START YOUR JOURNEY".
- Trust row: "Trusted by 80+ clients", "+81" avatars, "Excellent 4.9 out of 5 — TrustPoint".

### 9. Pricing
- Eyebrow "OUR PRICES".
- H2: "Support that fits your pace."
- Sub: "A first session is often just a conversation — a starting point. From there, you choose the pace and depth of support that feels right for you."
- Toggle: MONTHLY / YEARLY (20% OFF).
- 3 cards: **Starter**, **Growth** (highlighted), **Complete**. Each: name, blurb, "/ month" price, feature list, "GET STARTED" pill.
  - Starter ("Explore therapy at your own pace."): Dedicated therapist - Online or in-person - Personalized goal-setting - Client portal access.
  - Growth ("Ongoing support for continued growth."): Everything in Starter - More flexible scheduling - Progress tracking - Extra resources.
  - Complete ("Consistent support with full access."): All Growth features - Extended sessions - Priority booking - Direct therapist messaging.

### 10. Founder quote (dark block)
- Lead: "Support grounded in experience, guided by clarity, and built for lasting change" + "Our sessions create space for that change to happen. We take time to understand your needs, offer structure where it helps, and support your direction — not ours. Learn more about how we work and what to expect from the process."
- Pull quote (Crimson, large): "What we don't need in the midst of struggle is shame for being human." — "Anna Keller, Therapist & Founder of ClearPath".

### 11. Client story #2
- Same layout as story #1. "Starting over and finding herself in the process." + "After moving to a new city, Lisa thought she'd feel excited. Instead, she felt unmoored — away from her friends, her old routines, and her sense of who she was. She came to therapy not because something was 'wrong,' but because she wanted to feel at home in her own life again." + "READ FULL STORY".

### 12. Journal / blog
- Eyebrow "OUR JOURNAL".
- H2: "Insights for Growth, Healing and Clarity." + "BROWSE INSIGHTS" pill.
- 3 article cards:
  - "Learning to Pause Without Guilt." — "Taking a break isn't failure — it's part of the process. Here's how to slow down with kindness."
  - "What Makes Therapy Work?" — "Beyond techniques or tools, therapy works best when it feels safe, real, and human."
  - "The Gentle Art of Slowing Down" (featured/larger) — "Slowing down is more than just taking a break — it's a conscious choice to live at a pace that allows space for reflection, connection, and clarity..."
  - Each "READ MORE".

### 13. Stats
- Intro: "From first steps to lasting change, these numbers reflect the impact of walking the path together." + "Behind every number is a story of progress..."
- 4 odometer stats: **420+** Therapy sessions completed - **50+** Clients supported - **(N)+** Years of professional experience - **(N)+** Programs and tools offered.

### 14. FAQ
- H2: "Your questions. Answered." + "Not sure what to expect? These answers might help you feel more confident as you begin."
- Accordion, 6 items (one open at a time):
  1. How do I know if therapy is right for me? — "Therapy isn't just for crises. It's for anyone curious about growth, clarity, or navigating life's changes with more support and self-awareness."
  2. What can I expect from the first session? — "The first session is a gentle starting point. You'll talk with your therapist about what brings you here, what you're hoping for, and what feels comfortable for you right now."
  3. Do you offer both online and in-person sessions? — "Yes. Whether you prefer meeting face-to-face or from the comfort of home, we offer flexible options to meet you where you are."
  4. How often should I come to therapy? — "There's no one-size-fits-all answer. Some people come weekly, others bi-weekly or monthly. You and your therapist will decide what feels right based on your needs and pace."
  5. Is everything I share kept private? — "Yes. Your sessions are completely confidential, except in very rare cases related to safety. Your privacy is always a priority."
  6. What if I don't know what to talk about? — "That's okay. You don't need to have it all figured out. Sometimes just showing up is the most important first step — and your therapist will guide you from there."

### 15. Booking CTA + form
- Eyebrow "BOOK A SESSION".
- H2: "Support starts with a simple step." + "Whether you're starting fresh, returning for ongoing support, or simply exploring your options — we're here to meet you where you are. Use the form to book a session that feels right for you."
- Trust row repeated.
- Form: "Tell us about you." with fields:
  - Preferred Pronouns (She/Her, He/Him, They/Them, Prefer not to say) — pill selectors.
  - "How can we help?" / support type radios: Individual Therapy, Life Coaching, Stress & Mindfulness Support, Clarity Session / One-Time Consult, Not sure yet — just exploring.
  - "Where did you hear about us?" (Google Search, A friend or colleague, Therapist referral, Other).
  - Email opt-in checkbox + newsletter note.
  - "BOOK A SESSION" submit pill.

### 16. Footer
- Big serif "clear-path" lockup.
- Nav columns: ABOUT, SERVICES, STORIES, JOURNAL, BOOK A SESSION.
- "Join Our Newsletter." block + email field + "SUBSCRIBE" + "By signing up to receive emails from ClearPath, you agree to our Privacy Policy."
- SITEMAP column (Main Page, About, Services, Stories, Client Story, Journal, Article, Book a Session, Privacy Policy, Terms of Use, 404).
- Contact: hello@clearpath.com.
- Credit line "Framer Template handcrafted by Anton Drukarov" + "Copyright 2026 ClearPath. All rights reserved."

---

## 4. Assets
The original images are AI-generated soft portraits on green/gold gradients. For a clone:
- Source 8-10 similar calm portrait photos (Unsplash/Pexels: "soft portrait pastel", "calm woman natural light") OR generate placeholders.
- Apply a subtle green gradient overlay + slight blur to match the dreamy tone.
- Keep rounded corners on story/journal images.
- Store under `/public/images/` with the names referenced in components.

## 5. Pages (multi-page version)
Nav implies separate routes: `/about`, `/services`, `/stories` (+ `/stories/[slug]`), `/journal` (+ `/journal/[slug]`), `/book`, `/privacy`, `/terms`, plus a `404`. Home composes the sections above. Build home first, then stub the rest.

## 6. Acceptance checklist
- [ ] Fonts match (Crimson Text display, Inter UI).
- [ ] Sage #7FA69B accent + ink/muted text exact.
- [ ] All 16 sections present with verbatim placeholder copy.
- [ ] Pill buttons 999px with dot/arrow.
- [ ] Scroll-reveal + word reveal + odometer counters + pricing toggle + FAQ accordion working.
- [ ] Sticky header transparent->solid.
- [ ] Responsive (mobile nav drawer, stacked grids).
- [ ] Lighthouse: no layout shift, images optimized.
