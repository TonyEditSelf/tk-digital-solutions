// lib/constants.js
// Shared brand + data constants

export const BRAND = {
  name: "TK Digital Solutions",
  shortName: "TK Digital",
  tagline: "Helping businesses grow online with clarity, consistency & automation.",
  email: "hello@tkdigitalsolutions.com",
  phone: "+91 00000 00000",
  location: "India",
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "Plans", href: "/plans" },
  { label: "Contact", href: "/contact" },
];

export const VALUE_STRIP = [
  { title: "More Visibility", desc: "Reach the right audience with strategic placement.", icon: "Eye" },
  { title: "Better Engagement", desc: "Content that sparks real conversations.", icon: "MessageCircle" },
  { title: "Less Manual Work", desc: "Automation that frees your time for growth.", icon: "Zap" },
  { title: "Measurable Growth", desc: "Data-backed decisions, consistent outcomes.", icon: "TrendingUp" },
];

export const SERVICES = [
  { slug: "social-media-growth", title: "Social Media Growth", desc: "Strategy, management & growth across platforms that matter to your audience.", icon: "Share2" },
  { slug: "content-creative", title: "Content & Creative", desc: "Scroll-stopping visuals and copy that reflect your brand's premium voice.", icon: "PenTool" },
  { slug: "website-design", title: "Website Design", desc: "Fast, elegant, high-converting websites built to scale with your business.", icon: "Layout" },
  { slug: "video-reels", title: "Video & Reels", desc: "Short-form content engineered for reach, retention and brand recall.", icon: "Video" },
  { slug: "campaigns", title: "Campaigns", desc: "Performance-driven ad campaigns with sharp targeting and clear ROI.", icon: "Target" },
  { slug: "automation-systems", title: "Automation Systems", desc: "Workflows, CRM & AI-powered systems that remove repetitive work.", icon: "Cog" },
];

export const HOW_IT_WORKS = [
  { step: "01", title: "Understand", desc: "We dive deep into your business, goals and audience." },
  { step: "02", title: "Plan", desc: "A tailored strategy with measurable milestones." },
  { step: "03", title: "Create", desc: "Premium content, systems and campaigns go live." },
  { step: "04", title: "Optimize", desc: "We refine based on data — compounding your growth." },
];

export const FOCUS_AREAS = [
  { title: "Brand Presence", desc: "Establish a recognizable, premium identity across every touchpoint.", icon: "Crown" },
  { title: "Engagement & Growth", desc: "Turn passive followers into loyal customers with intentional content.", icon: "Users" },
  { title: "Systems & Automation", desc: "Scale without chaos using automated workflows and smart tools.", icon: "Workflow" },
];

export const TESTIMONIALS = [
  { name: "Ananya Sharma", role: "Founder, Lumen Co.", quote: "TK Digital transformed our online presence. Within 3 months, inbound leads tripled and our brand finally feels premium.", photo: "https://images.unsplash.com/photo-1581065178047-8ee15951ede6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1ODR8MHwxfHNlYXJjaHwzfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBvcnRyYWl0fGVufDB8fHx8MTc3NzUwNjE4OXww&ixlib=rb-4.1.0&q=85" },
  { name: "Rohan Mehta", role: "CEO, Atelier Build", quote: "The automation systems they set up saved our team 20+ hours a week. The ROI was obvious within the first month.", photo: "https://images.pexels.com/photos/36645466/pexels-photo-36645466.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" },
  { name: "Priya Iyer", role: "Director, Noor Studio", quote: "Working with TK Digital feels like having an in-house creative + growth team. Calm, clear, and consistently great work.", photo: "https://images.unsplash.com/photo-1655249481446-25d575f1c054?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1ODR8MHwxfHNlYXJjaHw0fHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBvcnRyYWl0fGVufDB8fHx8MTc3NzUwNjE4OXww&ixlib=rb-4.1.0&q=85" },
  { name: "Arjun Kapoor", role: "Founder, Veritas Group", quote: "Premium, professional, and genuinely results-driven. They delivered exactly what they promised — and more.", photo: "https://images.pexels.com/photos/28442317/pexels-photo-28442317.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" },
];

export const PLANS = [
  {
    id: "starter",
    name: "Starter",
    price: 14999,
    priceLabel: "₹14,999",
    period: "/month",
    tagline: "Launch your digital presence with confidence.",
    features: [
      "12 social media posts / month",
      "2 platform management (IG + LinkedIn)",
      "Basic content calendar & strategy",
      "4 branded reels / month",
      "Monthly performance report",
      "Email support",
    ],
    cta: "Add to Cart",
    highlight: false,
    buyable: true,
  },
  {
    id: "growth",
    name: "Growth",
    price: 29999,
    priceLabel: "₹29,999",
    period: "/month",
    tagline: "Scale faster with a full-stack growth engine.",
    features: [
      "24 social media posts / month",
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
    id: "custom",
    name: "Custom",
    price: null,
    priceLabel: "Let's talk",
    period: "",
    tagline: "Built around your goals. Scale without limits.",
    features: [
      "Everything in Growth, plus:",
      "Unlimited content scope",
      "Full website design & development",
      "Advanced AI-powered automation",
      "Dedicated account strategist",
      "Custom analytics dashboards",
      "On-demand creative team",
    ],
    cta: "Build Your Plan",
    highlight: false,
    buyable: false,
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
