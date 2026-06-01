// ─────────────────────────────────────────────────────────────────────────────
// Inner Theory — all site copy & data, transcribed verbatim from the Figma
// "Inner Theory (Copy)" v1 frame (1575×9990). Edit text here, not in components.
// ─────────────────────────────────────────────────────────────────────────────

export const site = {
  name: "Inner Theory",
  tagline: "WHERE SCIENCE MEETS HEALING",
  phone: "(818) 679-2867",
  phoneHref: "tel:+18186792867",
  email: "info@innertheory.com",
  emailHref: "mailto:info@innertheory.com",
  address: "1450 Cloverfield Blvd, Suite 10/20 Santa Monica, CA 90404",
  rating: "5 / 5",
};

export const nav = [
  { label: "Treatments", href: "/services", dropdown: true },
  { label: "Pricing", href: "/services#pricing" },
  { label: "Specials", href: "/services#specials" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/journal" },
  { label: "Contact", href: "/book" },
];

export const hero = {
  title: "Your Biology Is Not a Mystery. It Is a System.",
  body:
    "Most people accept fatigue, brain fog, poor sleep, and declining performance as normal parts of aging. They are not. They are signals — measurable, diagnosable, correctable signals — that your body's systems are operating below capacity.",
  cta: { label: "Book Appointment", href: "/book" },
};

export const problem = {
  eyebrow: "Core Programs",
  title: "The Problem No One Is Solving",
  body:
    "Here is what the traditional healthcare system offers you: annual bloodwork with 20 markers, a 12-minute appointment, and a prescription if something falls outside a reference range built for population averages. It is reactive, fragmented, and built to catch disease — not to optimize how you function.",
};

// Cream section: "Structured Protocols, Not Service Menus" + staggered program cards
export const programs = {
  eyebrow: "Core Programs",
  title: "Structured Protocols, Not Service Menus",
  body:
    "At Inner Theory, the care plan is the product. Individual therapies are components of a system — sequenced, combined, and calibrated to your biology — not a menu of services you pick from.",
  items: [
    {
      title: "Longevity Programs",
      body:
        "Protocol-based programs targeting the biological drivers of aging: cellular degradation, hormonal decline, chronic inflammation, and metabolic inefficiency.",
      image: "/images/program-longevity.jpg",
      href: "/services",
    },
    {
      title: "Hormone Optimization",
      body:
        "Comprehensive HRT protocols for men and women, including pelleting, peptide support, and metabolic calibration.",
      image: "/images/program-hormone.jpg",
      href: "/services",
    },
    {
      title: "Performance & Recovery",
      body:
        "Combines regenerative therapies, oxygen protocols, IV optimization, and recovery modalities in a structured sequence.",
      image: "/images/program-performance.jpg",
      href: "/services",
    },
    {
      title: "Medical Weight Loss",
      body:
        "Addressing insulin resistance, hormonal imbalances, thyroid function, and peptide-supported fat metabolism.",
      image: "/images/program-weightloss.jpg",
      href: "/services",
    },
  ],
};

// Process — three big-number steps
export const process = {
  eyebrow: "Our Process",
  title: "How Inner Theory Works",
  body:
    "Every patient at Inner Theory begins with a comprehensive diagnostic assessment — not the 20-marker panel your primary care physician orders, but a deep-level analysis of hormonal function, metabolic efficiency, inflammatory markers, cellular health, and nutrient status. From that data, we build a structured protocol. A physician-designed, sequenced treatment plan calibrated to your biology.",
  steps: [
    {
      no: "01",
      title: "Diagnostic Assessment",
      body:
        "Functional blood testing and cellular-level diagnostics to establish your biological baseline. We measure over 80 biomarkers across hormonal, metabolic, inflammatory, and cellular panels.",
    },
    {
      no: "02",
      title: "Protocol Design",
      body:
        "Your provider builds a multi-phase care plan based on your data. Therapies are sequenced and combined for compounding effect — not offered a la carte.",
    },
    {
      no: "03",
      title: "Therapy Delivery",
      body:
        "Every treatment is administered in our advanced facility by trained clinical staff, then re-measured at defined intervals so the protocol evolves as your data evolves.",
    },
  ],
};

// "Not a Med Spa…" — WHO WE ARE, over the two-faces image band
export const difference = {
  eyebrow: "Who We Are",
  title: "Not a Med Spa. Not a Drip Lounge. Not Traditional Healthcare.",
  body:
    "We do not wait for disease to appear and then manage symptoms. We identify dysfunction at the cellular and systemic level and intervene before clinical disease manifests.",
  image: "/images/difference.jpg",
  items: [
    { title: "Diagnostic-First", body: "Every treatment decision is driven by data from comprehensive biomarker testing — not intuition, not trends." },
    { title: "Protocol-Driven", body: "Therapies are sequenced and combined for compounding effect, not offered a la carte." },
    { title: "Expert-led", body: "Every care plan is designed and overseen by our clinical team with expertise in functional and regenerative medicine." },
    { title: "Advanced facility", body: "Our Santa Monica center is built to clinical standards — not retail wellness standards." },
    { title: "Results-Measured", body: "We re-test at defined intervals. Protocols evolve as your data evolves. Your biology is the scoreboard." },
  ],
};

// "We Do Not Guess…" intro to the therapy grid
export const measure = {
  eyebrow: "How It Works",
  title: "We Do Not Guess. We Measure, Intervene, and Re-Measure.",
  body:
    "Every patient begins with a comprehensive diagnostic assessment — not the standard panel, but a deep read of the systems that govern how you feel and perform.",
};

// Advanced therapies — second staggered card grid (dark)
export const therapies = [
  {
    no: "01",
    title: "Stem Cell Therapy",
    body: "Expert-administered regenerative treatments for tissue repair, joint function, and recovery.",
    image: "/images/structured-1.jpg",
    href: "/services",
  },
  {
    no: "02",
    title: "Exosome Therapy",
    body: "Cell-derived signaling molecules that accelerate tissue repair and cellular communication.",
    image: "/images/structured-2.jpg",
    href: "/services",
  },
  {
    no: "03",
    title: "Hyperbaric Oxygen Therapy",
    body: "Pressurized oxygen delivery that drives oxygen saturation to tissue for accelerated recovery.",
    image: "/images/structured-3.jpg",
    href: "/services",
  },
  {
    no: "04",
    title: "Plasma Exchange Therapy (EBOO)",
    body: "Extracorporeal blood oxygenation and ozonation. A specialist-grade protocol for systemic renewal.",
    image: "/images/structured-4.jpg",
    href: "/services",
  },
];

export const provenModel = {
  eyebrow: "Visible Results",
  title: "A Proven Model. Built for You.",
  intro:
    "Inner Theory is not an experiment. The protocol-driven, diagnostics-first model behind this center has already been validated with an 80% client conversion rate at the operation that preceded it.",
  points: [
    {
      title: "An 80% Conversion Rate.",
      body:
        "Eight out of ten people who experience this model become long-term clients. Not because of loyalty programs or contracts — because the results are visible in their data.",
    },
    {
      title: "Outcomes Over Impressions.",
      body:
        "Every protocol is measured. Biomarkers are re-tested at defined intervals. If the data does not move, the protocol changes. This is what accountability looks like in health optimization.",
    },
  ],
  cta: { label: "Book Appointment", href: "/book" },
  images: ["/images/facility-reception.jpg", "/images/facility-room.jpg"],
};

export const results = {
  title: "Results Speak for Itself",
  rating: "5 / 5",
};

export const testimonials = [
  {
    quote:
      "Inner Theory completely changed how I approach my health. For the first time, I'm working with data that actually makes sense. My energy, focus, and recovery have never been better.",
    name: "Michael R.",
    role: "45, Entrepreneur",
  },
  {
    quote:
      "The level of care and attention I've received has been incredible. My hormone levels, sleep, and energy have all measurably improved.",
    name: "Jennifer L.",
    role: "42, Executive",
  },
  {
    quote:
      "As an athlete, every detail matters. Inner Theory helped me optimize my performance in ways no doctor ever has.",
    name: "David A.",
    role: "38, Athlete",
  },
];

export const stats = [
  { value: "98%", label: "Reported Improved Energy & Vitality" },
  { value: "94%", label: "Experienced Better Sleep Quality" },
  { value: "96%", label: "Reported Improved Overall Well-Being" },
  { value: "90%", label: "Would Recommend Inner Theory" },
];

export const contact = {
  mapImage: "/images/map.jpg",
  cta: { label: "Book Appointment", href: "/book" },
};

// Final CTA band with the sculptural figure on the right
export const finalCta = {
  eyebrow: "Get Started",
  title: "Your Biology Is a System. We Know How to Read It.",
  body:
    "Health optimization is not a destination. It is a maintenance discipline. Begin with a diagnostic assessment and build a protocol calibrated to you.",
  cta: { label: "Book Your Consult", href: "/book" },
  image: "/images/contact-figure.png",
};

export const footer = {
  newsletterTitle: "join our newsletter",
  newsletterBody:
    "Stay informed with physician-guided insights, wellness updates, and evidence-based protocols.",
  columns: [
    {
      links: [
        { label: "About", href: "/about" },
        { label: "Treatments", href: "/services" },
        { label: "Pricing", href: "/services#pricing" },
        { label: "Specials", href: "/services#specials" },
      ],
    },
    {
      links: [
        { label: "Blog", href: "/journal" },
        { label: "Book a Session", href: "/book" },
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms of Use", href: "/terms" },
      ],
    },
  ],
  copyright: "Inner Theory · Copyright 2026 · All rights reserved.",
};

// Blog / journal articles (for /journal)
export const articles = [
  {
    slug: "biomarkers-that-matter",
    title: "The 80 Biomarkers That Actually Matter",
    excerpt:
      "Why a 20-marker annual panel misses the signals that define how you function — and what a deep-panel diagnostic measures instead.",
    date: "March 2025",
    image: "/images/journal-1.jpg",
  },
  {
    slug: "protocols-vs-services",
    title: "Protocols vs. Services: Why Sequence Matters",
    excerpt:
      "Compounding effect is the difference between a treatment menu and a designed system. Here is how sequencing changes outcomes.",
    date: "February 2025",
    image: "/images/journal-2.jpg",
  },
  {
    slug: "hormones-and-aging",
    title: "Hormonal Decline Is Not Inevitable",
    excerpt:
      "Fatigue, poor sleep, and brain fog are measurable signals — not the price of getting older. What the data says about optimization.",
    date: "January 2025",
    image: "/images/journal-3.jpg",
  },
];

// Success stories (for /stories)
export const stories = [
  {
    slug: "michael-r",
    name: "Michael R.",
    role: "45, Entrepreneur",
    result: "Energy, focus, and recovery restored over two protocol cycles.",
    image: "/images/story-1.jpg",
  },
  {
    slug: "jennifer-l",
    name: "Jennifer L.",
    role: "42, Executive",
    result: "Hormone levels and sleep measurably improved in one cycle.",
    image: "/images/story-2.jpg",
  },
];
