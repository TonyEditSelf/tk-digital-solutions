// lib/constants.js
// Shared brand + data constants

export const BRAND = {
  name: "Tofabza",
  shortName: "TOFABZA",
  tagline:
    "Helping businesses grow online with clarity, consistency & automation.",
  email: "togmotiv@gmail.com",
  phone: "+91 90486 39145",
  location: "India",
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "What I Build", href: "/#WhatIBuild" },
  { label: "Plans", href: "/plans" },
  { label: "Contact", href: "/contact" },
];

// export const VALUE_STRIP = [
//   {
//     title: "More Visibility",
//     desc: "Reach the right audience with strategic placement.",
//     icon: "Eye",
//   },
//   {
//     title: "Better Engagement",
//     desc: "Content that sparks real conversations.",
//     icon: "MessageCircle",
//   },
//   {
//     title: "Less Manual Work",
//     desc: "Automation that frees your time for growth.",
//     icon: "Zap",
//   },
//   {
//     title: "Measurable Growth",
//     desc: "Data-backed decisions, consistent outcomes.",
//     icon: "TrendingUp",
//   },
// ];

export const WHAT_I_BUILD = [
  {
    slug: "website-design",
    title: "Build",
    desc: "Websites & Digital Presence",
    icon: "Layout",
    items: ["Static Websites", "Full Stack Applications", "eCommerce Stores"],
  },
  {
    slug: "automation-systems",
    title: "Automate",
    desc: "Systems that save time",
    icon: "Workflow",
    items: [
      "Lead capture systems",
      "Follow-up automation",
      "AI-powered workflows",
    ],
  },
  {
    slug: "social-media-growth",
    title: "Grow",
    desc: "Content and presence that reach the right people.",
    icon: "TrendingUp",
    items: [
      "Social media strategy",
      "Content creation",
      "Short-form video & campaigns",
    ],
  },
];

export const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Understand",
    desc: "I learn your business, who you're trying to reach, and what success looks like for you.",
  },
  {
    step: "02",
    title: "Strategize",
    desc: "I map out the exact system — what to build, what to automate, and in what order.",
  },
  {
    step: "03",
    title: "Build & Launch",
    desc: "I build your website, systems, and content setup — and get everything live and running.",
  },
  {
    step: "04",
    title: "Refine",
    desc: "I track what's performing, cut what isn't, and improve what has potential.",
  },
];

export const WHAT_YOU_GET = [
  {
    step: "01",
    title: "Websites that convert — not just impress.",
    desc: "Built with structure, speed, and clarity — designed to perform.",
  },
  {
    step: "02",
    title: "Systems that reduce manual work",
    desc: "Automation that removes repetitive tasks — so you can focus on work that actually moves the needle.",
  },
  {
    step: "03",
    title: "Content that compounds over time",
    desc: "Structured content systems designed for ongoing visibility.",
  },
  {
    step: "04",
    title: "Decisions backed by real data",
    desc: "Know what's working, what's wasting your time, and exactly where to focus next.",
  },
];

// export const FOCUS_AREAS = [
//   {
//     title: "Brand Presence",
//     desc: "Establish a recognizable, premium identity across every touchpoint.",
//     icon: "Crown",
//   },
//   {
//     title: "Engagement & Growth",
//     desc: "Turn passive followers into loyal customers with intentional content.",
//     icon: "Users",
//   },
//   {
//     title: "Systems & Automation",
//     desc: "Scale without chaos using automated workflows and smart tools.",
//     icon: "Workflow",
//   },
// ];

export const TESTIMONIALS = [
  {
    name: "Ananya Sharma",
    role: "Founder, Lumen Co.",
    quote:
      "TK Digital transformed our online presence. Within 3 months, inbound leads tripled and our brand finally feels premium.",
    photo:
      "https://images.unsplash.com/photo-1581065178047-8ee15951ede6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1ODR8MHwxfHNlYXJjaHwzfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBvcnRyYWl0fGVufDB8fHx8MTc3NzUwNjE4OXww&ixlib=rb-4.1.0&q=85",
  },
  {
    name: "Rohan Mehta",
    role: "CEO, Atelier Build",
    quote:
      "The automation systems they set up saved our team 20+ hours a week. The ROI was obvious within the first month.",
    photo:
      "https://images.pexels.com/photos/36645466/pexels-photo-36645466.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    name: "Priya Iyer",
    role: "Director, Noor Studio",
    quote:
      "Working with TK Digital feels like having an in-house creative + growth team. Calm, clear, and consistently great work.",
    photo:
      "https://images.unsplash.com/photo-1655249481446-25d575f1c054?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1ODR8MHwxfHNlYXJjaHw0fHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBvcnRyYWl0fGVufDB8fHx8MTc3NzUwNjE4OXww&ixlib=rb-4.1.0&q=85",
  },
  {
    name: "Arjun Kapoor",
    role: "Founder, Veritas Group",
    quote:
      "Premium, professional, and genuinely results-driven. They delivered exactly what they promised — and more.",
    photo:
      "https://images.pexels.com/photos/28442317/pexels-photo-28442317.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
];

export const PLANS = [
  {
    id: "launch",
    name: "Launch",
    price: 9999,
    priceLabel: "₹9,999",
    period: "/month",
    tagline: "Get online and credible \u2014 fast.",
    features: [
      "8 social media posts / month",
      "1 platform management",
      "Basic content calendar",
      "2 branded reels / month",
      "Monthly performance snapshot",
      "Email support",
    ],
    cta: "Add to Cart",
    highlight: false,
    buyable: true,
  },
  {
    id: "build",
    name: "Build",
    price: 19999,
    priceLabel: "₹19,999",
    period: "/month",
    tagline: "Establish a consistent digital presence.",
    features: [
      "16 social media posts / month",
      "2 platform management",
      "Content strategy + calendar",
      "5 branded reels / month",
      "Basic copywriting support",
      "Monthly performance report",
      "Email + chat support",
    ],
    cta: "Add to Cart",
    highlight: false,
    buyable: true,
  },
  {
    id: "grow",
    name: "Grow",
    price: 34999,
    priceLabel: "₹34,999",
    period: "/month",
    tagline: "Scale faster with a full-stack growth engine.",
    features: [
      "28 social media posts / month",
      "4 platform management",
      "Advanced strategy + competitor research",
      "10 premium reels / month",
      "1 paid ad campaign managed",
      "Basic automation setup (CRM / lead flow)",
      "Bi-weekly strategy calls",
      "Priority support",
    ],
    cta: "Add to Cart",
    highlight: true,
    buyable: true,
  },
  {
    id: "scale",
    name: "Scale",
    price: 54999,
    priceLabel: "₹54,999",
    period: "/month",
    tagline: "Aggressive growth across every channel.",
    features: [
      "Everything in Grow, plus:",
      "45 premium social posts / month",
      "2 paid ad campaigns (meta + google)",
      "15 premium reels / month",
      "Advanced automation workflows",
      "Dedicated account manager",
      "Weekly strategy reviews",
    ],
    cta: "Add to Cart",
    highlight: false,
    buyable: true,
  },
  {
    id: "accelerate",
    name: "Accelerate",
    price: 79999,
    priceLabel: "₹79,999",
    period: "/month",
    tagline: "Full-funnel growth with a senior team.",
    features: [
      "Everything in Scale, plus:",
      "Unlimited content within scope",
      "3 paid campaigns across channels",
      "20 premium reels / month",
      "Conversion-optimised landing pages",
      "Custom analytics dashboard",
      "Dedicated creative + strategy team",
    ],
    cta: "Add to Cart",
    highlight: false,
    buyable: true,
  },
  {
    id: "dominate",
    name: "Dominate",
    price: 119999,
    priceLabel: "₹1,19,999",
    period: "/month",
    tagline: "Own your category. White-glove, end-to-end.",
    features: [
      "Everything in Accelerate, plus:",
      "Unlimited content & creative",
      "Full paid media management",
      "Premium video production",
      "AI-powered automation systems",
      "Dedicated senior strategist",
      "24/7 priority support",
      "Quarterly executive reviews",
    ],
    cta: "Add to Cart",
    highlight: false,
    buyable: true,
  },
];

export const SERVICE_OPTIONS = [
  "Social Media Growth",
  "Content & Creative",
  "Website Design",
  "Video & Reels",
  "Campaigns",
  "Automation Systems",
  "Custom / Not sure",
];
