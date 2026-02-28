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
}

export const projects: Project[] = [
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
    featured: true
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
    featured: true
  },
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
    url: "https://cloudflare-email-inbox-production.up.railway.app/",
    featured: true
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
    featured: true
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
    title: "Ableman Admin Portal",
    category: "Web Application",
    description: "Next.js admin portal for Ableman business operations. Centralized dashboard for managing content, users, and business workflows with a modern React stack.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    features: [
      "Admin dashboard and content management",
      "User and role management",
      "Modern responsive UI",
      "Fast development with Next.js App Router"
    ],
    gradient: "from-slate-500/20 to-gray-500/20",
    borderColor: "border-slate-500/50",
    url: null,
    featured: false
  },
  {
    title: "Ableman Main Website",
    category: "Web Application",
    description: "Next.js marketing and company website for Ableman. Public-facing site with modern design, performance optimization, and responsive layout.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    features: [
      "Marketing and landing pages",
      "Responsive design",
      "Optimized performance",
      "Modern UI with Geist font"
    ],
    gradient: "from-slate-500/20 to-gray-500/20",
    borderColor: "border-slate-500/50",
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
    title: "Deelmap Buyer",
    category: "Web Application",
    description: "Buyer-facing Next.js application for the Deelmap property marketplace. Enables property discovery, search, and inquiry with a focused user experience.",
    technologies: ["Next.js", "React", "TypeScript", "Supabase"],
    features: [
      "Property search and discovery",
      "Listing details and inquiry flow",
      "Responsive buyer experience",
      "Integration with Deelmap backend"
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
