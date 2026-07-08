export interface CaseStudy {
  overview: string;
  problem: string;
  build: string[];
  impact: string;
  role: string;
}

export interface Project {
  title: string;
  category: string;
  description: string;
  technologies: string[];
  features: string[];
  gradient: string;
  borderColor: string;
  url: string | null;
  featured?: boolean;
  slug?: string;
  image?: string;
  galleryCount?: number;
  caseStudy?: CaseStudy;
}

export const projects: Project[] = [
  {
    title: "Deelmap",
    category: "SaaS Product",
    description: "Enterprise-grade real estate email processing and property extraction platform with AI-powered data extraction, automated listing management, and comprehensive property marketplace. Designed for real estate professionals to automatically process and organize property listings from email communications.",
    technologies: ["Next.js", "TypeScript", "React", "Supabase", "Cloudflare Workers", "AI APIs (Groq/OpenAI)", "DigitalOcean Spaces", "NextAuth"],
    features: [
      "Automated email processing via Cloudflare Email Routing",
      "AI-powered property data extraction from emails",
      "Intelligent image classification and filtering",
      "Real-time property marketplace dashboard",
      "Auto-listing with approval workflow",
      "Address verification and property lookup integration",
      "Scheduled URL import and processing",
      "Multi-user support with secure authentication",
      "Property history tracking and duplicate detection"
    ],
    gradient: "from-indigo-500/20 to-blue-500/20",
    borderColor: "border-indigo-500/50",
    url: "https://deelmap.com/",
    featured: true,
    slug: "deelmap",
    image: "/projects/deelmap/main.png",
    galleryCount: 21,
    caseStudy: {
      overview:
        "A wholesale real-estate marketplace ecosystem: a buyer marketplace, a seller SaaS portal, an admin dashboard, and a React Native mobile app, backed by a shared Supabase/PostgreSQL data layer and 5+ services on Railway.",
      problem:
        "Wholesale property deals are scattered across emails, texts, and dozens of listing sites. Investors waste hours hunting for deals, and sellers have no unified place to list, negotiate, and close.",
      build: [
        "Buyer marketplace with real-time Google Maps (clustering and boundary filters), advanced search, and financial tooling including a DSCR calculator with PDF export.",
        "Seller SaaS with listings, subscriptions, team workspaces, role-based permissions, and a Stripe Connect referral payout system.",
        "AI deal-ingestion pipelines that read inbound email and SMS (Telnyx), extract structured data with Groq LLMs, and auto-select images with Google Vision on scheduled Railway cron workers.",
        "Stripe payments and subscriptions, DocuSeal e-signature contracts, and real-time messaging with offer negotiation.",
      ],
      impact:
        "A single platform that fills itself with deals automatically and lets buyers discover, negotiate, sign, and pay end to end.",
      role: "Full-stack developer across web, mobile, backend services, and AI pipelines.",
    }
  },
  {
    title: "TransWord",
    category: "SaaS Product",
    description: "AI-powered translation platform that breaks language barriers by translating text, PDFs, images, audio, and video across 100+ languages. Unified interface enabling seamless multilingual communication for individuals and businesses worldwide.",
    technologies: ["Next.js", "TypeScript", "React", "Django", "Python", "OpenAI API", "YouTube Data API"],
    features: [
      "Unified multi-format translation platform (text, documents, media, video)",
      "100+ language coverage enabling global accessibility",
      "Real-time video processing with intelligent caption extraction",
      "Advanced customization options (style, context, audience)",
      "Scalable subscription model with automated usage tracking",
      "Robust error handling and fallback systems ensuring 99%+ uptime"
    ],
    gradient: "from-teal-500/20 to-cyan-500/20",
    borderColor: "border-teal-500/50",
    url: "https://transword.ai/home",
    featured: true,
    slug: "transword",
    image: "/projects/transword/main.png",
    galleryCount: 3,
    caseStudy: {
      overview:
        "An AI translation platform that converts text, PDFs, images, audio, and video across 100+ languages, built on a Django REST Framework backend with a Next.js frontend.",
      problem:
        "Free translators fail on real documents and media. People need accurate translation of certificates, statements, and audio or video, not just single sentences.",
      build: [
        "Unified translation for text, PDFs, images (OCR), audio, and video, plus tools for transcription, summarizing, and rephrasing.",
        "Realistic AI voice output and dubbing via ElevenLabs, with translation powered by OpenAI.",
        "Subscription plans and add-ons with SafePay payments and automated usage tracking.",
        "Django REST Framework backend on AWS EC2 with a Next.js frontend, deployed across AWS and GCP with Nginx and CI/CD.",
      ],
      impact:
        "A production translation product handling real users and payments, with coverage across 100+ languages.",
      role: "Full-stack developer: Django DRF backend, Next.js frontend, and AI integrations.",
    }
  },
  {
    title: "Fries In Box",
    category: "Brand & Restaurant Website",
    description: "Editorial, art-directed marketing website for a Johar Town, Lahore late-night fast-food brand. Features an animated hero, an interactive full menu with live pricing, a drag-to-explore signatures carousel, brand story, gallery, and an order/visit section with maps and WhatsApp ordering.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Vercel"],
    features: [
      "Editorial design with custom cursor and film-grain texture",
      "Animated hero, marquees, and scroll-reveal effects",
      "Interactive full menu with real items and pricing",
      "Drag-to-explore signatures carousel",
      "Google Maps location with WhatsApp and call-to-order",
      "Fully responsive with SEO and Open Graph optimization"
    ],
    gradient: "from-amber-500/20 to-red-500/20",
    borderColor: "border-amber-500/50",
    url: "https://fries-in-box.vercel.app",
    featured: true,
    slug: "fries-in-box",
    image: "/projects/fries-in-box/main.png",
    galleryCount: 3,
    caseStudy: {
      overview:
        "An editorial, animated marketing website for a Johar Town, Lahore late-night fast-food brand, with an interactive menu, a signatures carousel, and an order flow.",
      problem:
        "A growing food brand needed an online presence that matched its bold identity and made the menu and ordering effortless.",
      build: [
        "Art-directed design with a custom cursor, film-grain texture, and animated hero and marquees.",
        "Interactive full menu with real items and pricing, plus a drag-to-explore signatures carousel.",
        "Order and visit section with Google Maps location, WhatsApp ordering, and call-to-order.",
        "Fully responsive with SEO and Open Graph optimization.",
      ],
      impact: "A branded site that reflects the brand's identity and turns visitors into orders.",
      role: "Designer and developer, built with HTML, CSS, and JavaScript, deployed on Vercel.",
    }
  },
  {
    title: "Atif Fitness Club",
    category: "Fitness Brand Website",
    description: "Modern, dark-themed marketing website for a Lahore gym in Al-Hamra Town. Includes a bold hero, services overview, tiered membership plans, gallery, member results, and a contact section with free-trial booking and WhatsApp CTA.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Vercel"],
    features: [
      "Sleek dark UI with gold accent branding",
      "Services: modern equipment, strength, cardio, personal training",
      "Tiered membership plans (Basic, Pro, Elite)",
      "Image gallery and member results section",
      "Free-trial booking and WhatsApp contact",
      "Fully responsive and SEO optimized"
    ],
    gradient: "from-yellow-500/20 to-amber-600/20",
    borderColor: "border-yellow-500/50",
    url: "https://atif-fitness-club.vercel.app",
    featured: true,
    slug: "atif-fitness",
    image: "/projects/atif-fitness/main.png",
    galleryCount: 4,
    caseStudy: {
      overview:
        "A modern, dark-themed marketing website for a Lahore gym, with services, membership plans, a gallery, and lead capture.",
      problem:
        "The gym needed a professional site to showcase its facilities and convert visitors into trials and memberships.",
      build: [
        "Bold hero and services overview with a gold-accented dark design.",
        "Tiered membership plans (Basic, Pro, Elite) and a member results section.",
        "Free-trial booking and WhatsApp contact for lead capture.",
        "Fully responsive and SEO optimized.",
      ],
      impact: "A polished presence that drives trial bookings and membership inquiries.",
      role: "Designer and developer, built with HTML, CSS, and JavaScript, deployed on Vercel.",
    }
  },
  {
    title: "ScraperGlass",
    category: "SaaS Product",
    description: "Enterprise-grade Instagram data extraction and analysis platform with bulk operations, advanced filtering, and real-time tracking capabilities. Designed for scalability and multi-user support.",
    technologies: ["Next.js", "TypeScript", "React", "Python", "Backend APIs"],
    features: [
      "Bulk Instagram data extraction",
      "Real-time tracking dashboard",
      "Advanced filtering and search",
      "Multi-user support with secure authentication",
      "Automated data storage and processing"
    ],
    gradient: "from-blue-500/20 to-cyan-500/20",
    borderColor: "border-blue-500/50",
    url: "https://www.scraperglass.com/",
    featured: true,
    slug: "scraperglass",
    image: "/projects/scraperglass/main.png",
    galleryCount: 1,
    caseStudy: {
      overview:
        "An enterprise Instagram data extraction and analysis platform with bulk operations, advanced filtering, and real-time tracking.",
      problem:
        "Teams need large-scale social data for lead generation and market analysis, but manual collection does not scale.",
      build: [
        "Bulk Instagram data extraction with a real-time tracking dashboard.",
        "Advanced filtering and search across large datasets.",
        "Multi-user support with secure authentication and automated storage and processing.",
      ],
      impact: "Reliable, high-throughput data extraction that powers business intelligence.",
      role: "Full-stack developer.",
    }
  },
  {
    title: "Commerce Social",
    category: "SaaS Product",
    description: "Comprehensive platform for TikTok Shop partners to register accounts and manage shop operations. Integrated with TikTok Shop APIs for complete business management.",
    technologies: ["FastAPI", "Python", "React", "JavaScript", "TikTok Shop APIs"],
    features: [
      "Shop registration and account management",
      "Finance analytics and reporting",
      "Inventory alerts and management",
      "Creator and sample management",
      "Responsive and efficient user interface"
    ],
    gradient: "from-orange-500/20 to-red-500/20",
    borderColor: "border-orange-500/50",
    url: "https://dashboard.commercesocial.co/",
    featured: true,
    slug: "commercesocial",
    image: "/projects/commercesocial/main.png",
    galleryCount: 0,
    caseStudy: {
      overview:
        "A platform for TikTok Shop partners to register and manage shop operations, integrated directly with TikTok Shop APIs.",
      problem:
        "TikTok Shop partners lack a single place to manage finances, inventory, and creators across their operations.",
      build: [
        "Shop registration and account management.",
        "Finance analytics, inventory alerts, and creator and sample management.",
        "A FastAPI and React application integrating TikTok Shop APIs for real-time reporting.",
      ],
      impact: "Operational dashboards that turn shop, creator, and transaction data into decisions.",
      role: "Full-stack developer: FastAPI backend and React frontend.",
    }
  },
  {
    title: "Fiscal - Smart Financial Freedom Advisor",
    category: "Full Stack Web Application",
    description: "A comprehensive financial management platform providing researched and effective financial advice based on user's finances. Built with modern tech stack ensuring security and scalability.",
    technologies: ["Python", "Django (DRF)", "React", "PostgreSQL", "JWT Authentication"],
    features: [
      "Personalized financial advice engine",
      "Secure JWT authentication system",
      "Financial data analysis and recommendations",
      "User-friendly dashboard interface"
    ],
    gradient: "from-purple-500/20 to-pink-500/20",
    borderColor: "border-purple-500/50",
    url: null,
    featured: true
  },
  {
    title: "Stock Price Prediction Platform",
    category: "AI/ML Web Application",
    description: "Advanced stock price prediction system using machine learning models. Provides next-day stock price forecasts with high accuracy using time series analysis.",
    technologies: ["Flask", "Python", "LSTM", "Linear Regression", "Pandas", "AI/ML"],
    features: [
      "Next-day stock price prediction",
      "LSTM neural network model",
      "Linear Regression model",
      "Time series analysis",
      "Feature engineering and data processing"
    ],
    gradient: "from-green-500/20 to-emerald-500/20",
    borderColor: "border-green-500/50",
    url: null,
    featured: true
  },
  {
    title: "SMS Ableman Tool (SMS Monday)",
    category: "SaaS / Internal Tool",
    description: "Modern SMS campaign management platform integrated with Monday.com and OpenPhone. Enables teams to manage SMS campaigns, configurations, and workspace collaboration with real-time dashboards.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Framer Motion", "Monday.com API", "OpenPhone API"],
    features: [
      "Real-time dashboard for campaigns and statistics",
      "Monday.com and OpenPhone API configuration management",
      "Workspace support for shared campaigns",
      "Responsive UI with professional seller platform patterns",
      "CRUD operations for configurations and campaigns"
    ],
    gradient: "from-amber-500/20 to-orange-500/20",
    borderColor: "border-amber-500/50",
    url: null,
    featured: false
  },
  {
    title: "Deelmap Admin Portal",
    category: "Web Application",
    description: "Next.js admin portal for the Deelmap real estate platform. Manages listings, users, and platform configuration with a streamlined admin experience.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    features: [
      "Listing and user management",
      "Platform configuration",
      "Admin dashboard",
      "Integrated with Deelmap backend"
    ],
    gradient: "from-indigo-500/20 to-blue-500/20",
    borderColor: "border-indigo-500/50",
    url: null,
    featured: false
  },
  {
    title: "Seller Dashboard (Deelmap)",
    category: "Web Application",
    description: "Seller portal for Deelmap allowing sellers to manage their listings, view analytics, and handle inquiries through a dedicated Next.js dashboard.",
    technologies: ["Next.js", "React", "TypeScript"],
    features: [
      "Seller listing management",
      "Analytics and insights",
      "Inquiry management",
      "Portal-specific workflows"
    ],
    gradient: "from-indigo-500/20 to-blue-500/20",
    borderColor: "border-indigo-500/50",
    url: null,
    featured: false
  },
  {
    title: "Call and SMS (Deelmap)",
    category: "Web Application",
    description: "Next.js application for SMS and call integration with property extraction workflows. Integrates Telnyx WebRTC, Stripe, Supabase, and AI (Groq) for lead and property handling.",
    technologies: ["Next.js", "React", "Supabase", "Telnyx", "Stripe", "Groq SDK", "Tailwind CSS"],
    features: [
      "SMS and call integration",
      "Property extraction from conversations",
      "Stripe payments integration",
      "AI-powered extraction with Groq"
    ],
    gradient: "from-violet-500/20 to-purple-500/20",
    borderColor: "border-violet-500/50",
    url: null,
    featured: false
  },
  {
    title: "GHL Dashboard",
    category: "Full Stack Web Application",
    description: "Professional dashboard with GoHighLevel (GHL) API integration. Displays business metrics through interactive charts and analytics with a modern React and Node.js stack.",
    technologies: ["React", "TypeScript", "Vite", "Node.js", "Express", "Tailwind CSS", "Recharts", "Framer Motion"],
    features: [
      "GoHighLevel API integration",
      "Interactive bar, donut, and line charts",
      "Responsive design",
      "Smooth animations and modern UI"
    ],
    gradient: "from-emerald-500/20 to-teal-500/20",
    borderColor: "border-emerald-500/50",
    url: null,
    featured: false
  },
  {
    title: "DSCR Calculator",
    category: "Mobile Application",
    description: "Flutter mobile app for calculating Debt Service Coverage Ratio (DSCR). Helps real estate and lending professionals quickly compute DSCR for loan and investment decisions.",
    technologies: ["Flutter", "Dart", "iOS", "Android"],
    features: [
      "DSCR calculation",
      "Cross-platform iOS and Android",
      "Clean, focused UI",
      "Real estate and lending use cases"
    ],
    gradient: "from-cyan-500/20 to-blue-500/20",
    borderColor: "border-cyan-500/50",
    url: null,
    featured: false
  },
  {
    title: "Skillens (ML Recommendation)",
    category: "AI/ML Research & Application",
    description: "Machine learning project for recommendation and cold-start scenarios. Uses scikit-learn, LightGBM, sentence transformers, and SHAP for model training, evaluation, and explainability.",
    technologies: ["Python", "scikit-learn", "LightGBM", "sentence-transformers", "SHAP", "Streamlit", "Pandas", "Plotly"],
    features: [
      "Recommendation and cold-start modeling",
      "Model evaluation and ablation",
      "Explainability with SHAP",
      "Streamlit-based visualization"
    ],
    gradient: "from-rose-500/20 to-pink-500/20",
    borderColor: "border-rose-500/50",
    url: null,
    featured: false
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const nonFeaturedProjects = projects.filter((p) => !p.featured);
