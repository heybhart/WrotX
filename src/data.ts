import { Service, Project, ProcessStep, Testimonial, TechItem, StatItem } from './types';

export const servicesData: Service[] = [
  {
    id: 'web-dev',
    title: 'Web Development',
    description: 'Bespoke custom-engineered React, Next.js, and web systems built with extreme speed, responsiveness, and unmatched architectural cleanliness.',
    iconName: 'Globe',
    category: 'Engineering',
    benefits: ['Sub-second page load speeds', 'Perfect Lighthouse & SEO performance', 'Bank-grade application security'],
    features: ['Headless CMS Integrations', 'Interactive Client Dashboards', 'Edge-Optimized Rendering']
  },
  {
    id: 'mobile-apps',
    title: 'Mobile Apps (iOS & Android)',
    description: 'Stunning and native performance mobile applications built using React Native and Flutter with real-time updates and fluid animations.',
    iconName: 'Smartphone',
    category: 'Engineering',
    benefits: ['App Store & Play Store direct compliance', 'Offline-first core data models', 'Shared 95%+ cross-platform codebase'],
    features: ['Direct Hardware Accel', 'Biometric Security Sync', 'Geofencing & Push Systems']
  },
  {
    id: 'ai-automation',
    title: 'AI Automation',
    description: 'Deep workflow integrations leveraging Gemini and OpenAI agents to streamline repetitive data entries, ticket routing, and report generation.',
    iconName: 'Cpu',
    category: 'Intelligence',
    benefits: ['Reduce operating costs up to 60%', '24/7 autonomous data execution', 'Predictive routing and anomaly detection'],
    features: ['Custom Retrieval-Augmented Generation (RAG)', 'LLM Fine-Tuning Pipelines', 'Vector DB Embeddings (Pinecone)']
  },
  {
    id: 'ai-voice',
    title: 'AI Voice Agents',
    description: 'Human-like telephonic and conversational assistants capable of handling incoming leads, appointment booking, and smart customer support.',
    iconName: 'Mic',
    category: 'Intelligence',
    benefits: ['Zero queues for incoming callers', 'Ultra low-latency audio response (<600ms)', 'Automatic CRM summary notes'],
    features: ['Real-time Text-to-Speech (TTS)', 'Speech-to-Text Transcription', 'Conversational Flow State Control']
  },
  {
    id: 'custom-software',
    title: 'Custom Software',
    description: 'Taylor-made proprietary software assets designed from the ground up to solve complex enterprise business bottlenecks.',
    iconName: 'Code',
    category: 'Engineering',
    benefits: ['No expensive per-user licensing fees', 'Total ownership of your source code IP', 'Seamless integration with existing systems'],
    features: ['Event-Driven Microservices', 'Custom ERP & Inventory Pipelines', 'High-Throughput WebSockets']
  },
  {
    id: 'saas-platforms',
    title: 'SaaS Platforms',
    description: 'Full multi-tenant business blueprints with Stripe billing systems, tiered permissions, telemetry trackings, and interactive administration panels.',
    iconName: 'Layers',
    category: 'Engineering',
    benefits: ['Accelerate product launch in weeks', 'Frictionless recurring revenue billing', 'Highly scale-compliant container deployments'],
    features: ['Stripe & Lemonsqueezy Sync', 'Robust Multi-Tenant Security Isolation', 'Custom Domain Provisioning Panels']
  },
  {
    id: 'ui-ux',
    title: 'UI/UX Design',
    description: 'Premium visual design mockups, fully responsive design systems, interactive Figma prototypes, and cohesive aesthetic branding.',
    iconName: 'Palette',
    category: 'Design',
    benefits: ['Frictionless conversions & clean UX', 'Distinctive visual competitive advantage', 'Developer-ready design spec documents'],
    features: ['Luxury Dark/Light Theming UI', 'High-Fidelity Interactive Wireframes', 'Design System Architecture']
  },
  {
    id: 'backend-systems',
    title: 'Backend Systems',
    description: 'High performance database configurations, cloud deployment architecture, complex API design, and web socket routing handlers.',
    iconName: 'Server',
    category: 'Engineering',
    benefits: ['Millions of simultaneous request loads', '99.99% high-availability uptimes', 'Structured and safe migration pathways'],
    features: ['RESTful, GraphQL, & gRPC APIs', 'Redis Caching & Queue Pub/Sub', 'Database Clustering & Security Rules']
  }
];

export const projectsData: Project[] = [
  {
    id: 'big-broker',
    title: 'BigBroker - Smart Brokerage & Realty Index',
    category: 'saas',
    techStack: ['React', 'Node.js', 'Express', 'Vercel Edge', 'Tailwind CSS', 'MongoDB'],
    problemSolved: 'Property buyers struggled with cluttered real estate portals loaded with duplicate listings, lagging maps, and high response times for broker contacts.',
    features: [
      'Interactive micro-cached search database loaded with premium properties across key sectors.',
      'Lightning-fast page routing and dynamic brokerage inquiries with robust validation.',
      'Edge-optimized responsiveness designed with immersive user interfaces and elegant layouts.'
    ],
    results: [
      'Accelerated average page response times to under 350ms globally.',
      'Boosted client inquiries and lead captures by 42% in the first month.',
      'Seamless deployment on Vercel ensuring 100% serverless high-availability.'
    ],
    imageMockupColor: 'from-violet-600/30 via-indigo-600/10 to-transparent',
    githubUrl: '#',
    demoUrl: 'https://bigbroker-iota.vercel.app/',
    featured: true
  },
  {
    id: 'meena-properties',
    title: 'Meena Properties - Visual Property Hub',
    category: 'web',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'GitHub Pages', 'Lucide Icons'],
    problemSolved: 'Local agency lacked a professional digital presence to display available land parcels, apartments, and villas to premium clients with modern responsive layouts.',
    features: [
      'Immersive listing grids with customizable criteria filtering systems.',
      'Modern, highly polished tactile cards built with responsive typography and fluid transitions.',
      'Zero-latency static asset serving designed specifically for clean client displays.'
    ],
    results: [
      'Successfully hosted on GitHub Pages with sub-second page rendering loops.',
      'Improved digital portfolio view rates by 68% for localized audiences.',
      'Eliminated monthly cloud hosting costs through serverless static pipelines.'
    ],
    imageMockupColor: 'from-cyan-600/30 via-emerald-600/10 to-transparent',
    githubUrl: '#',
    demoUrl: 'https://rohankkw.github.io/meena-properties',
    featured: true
  },
  {
    id: 'food-delivery',
    title: 'SavorSwift - Enterprise Delivery Pipeline',
    category: 'mobile',
    techStack: ['React Native', 'Node.js', 'PostgreSQL', 'Redis', 'WebSockets', 'AWS'],
    problemSolved: 'Legacy delivery system suffered 3.2-second dispatch latency resulting in cold food and disgruntled couriers. Tracking coordinates lagged behind by 30 seconds on average.',
    features: [
      'Sub-600ms automatic driver-to-restaurant dispatch routing based on spatial trigonometry.',
      'Real-time sub-second GPS telemetry stream utilizing WebSocket pub/sub framework.',
      'Interactive geo-fencing for automatic restaurant departure and courier arrival pings.'
    ],
    results: [
      'Dispatched dispatch latency by 84%, down from 3200ms to 450ms.',
      'Improved transit-to-delivery speed by 18 minutes on average.',
      'Reduced average order delivery drop errors by 94.2%.'
    ],
    imageMockupColor: 'from-orange-600/20 via-red-600/10 to-transparent',
    githubUrl: '#',
    demoUrl: '#',
    featured: true
  },
  {
    id: 'recipe-platform',
    title: 'ChefMind AI - Neural Recipe Engine',
    category: 'ai',
    techStack: ['Next.js', 'Gemini APIs', 'Pinecone Vector DB', 'Tailwind CSS', 'TypeScript', 'Node.js'],
    problemSolved: 'Generic culinary portals fail to adapt dynamically to real-time pantry inventory, causing substantial food waste and highly irrelevant recipe recommendations.',
    features: [
      'Computer vision neural models to automatically classify, catalog, and expire pantry ingredients.',
      'Semantic recipe searches utilizing Gemini embeddings synced against a repository of 200,000 professional recipes.',
      'Adaptive micro-nutritional tailoring for diabetic, gluten-free, and athletic performance diets.'
    ],
    results: [
      'Average user household food waste decreased by 41.2% in 30 days.',
      'Recorded 1.2M user diet modifications calculated with zero system API latency.',
      'NPS score increased to 74 among active subscription members.'
    ],
    imageMockupColor: 'from-emerald-600/20 via-teal-600/10 to-transparent',
    githubUrl: '#',
    demoUrl: '#',
    featured: true
  },
  {
    id: 'gym-management',
    title: 'FlexCore - SaaS Gym & CRM Organizer',
    category: 'saas',
    techStack: ['Next.js', 'PostgreSQL', 'TypeScript', 'Stripe Connect', 'Docker', 'Firebase Auth'],
    problemSolved: 'Mid-sized fitness clubs were utilizing 4 separate tools for scheduling, member billing, instructor payroll, and check-ins, leaking over 8% in billing overhead.',
    features: [
      'Unified single dashboard merging class scheduling, customized trainer payroll, and subscription cycles.',
      'Stripe-powered friction-free automated monthly subscription renewal and direct invoice billing.',
      'Instant frictionless check-ins via real-time camera QR codes linked to client profile validation.'
    ],
    results: [
      'Saved multi-facility clubs an average of $2,300/month by retiring overlapping vendors.',
      'Reduced payment failed-chasing rate from 11.2% down to 1.4% via automated Stripe rebills.',
      'Increased general member class attendance bookings by 37.8%.'
    ],
    imageMockupColor: 'from-blue-600/20 via-indigo-600/10 to-transparent',
    githubUrl: '#',
    demoUrl: '#',
    featured: false
  },
  {
    id: 'voice-support',
    title: 'AuraCall AI - Conversational Voice Agent',
    category: 'ai',
    techStack: ['Python', 'Gemini Live API', 'Deepgram TTS', 'WebSockets', 'FastAPI', 'Salesforce CRM'],
    problemSolved: 'Support hotlines faced bottleneck queue surges exceeding 25 minutes during peak product launch cycles, dropping customer satisfaction scores.',
    features: [
      'Dual-stream full-duplex conversational voice engine boasting an ultra-low latency response rate (<550ms).',
      'Dynamic knowledge injection matching live customer questions to internal enterprise documentation.',
      'Autonomous system context swapping for billing adjustments, booking, and ticket exports.'
    ],
    results: [
      'Resolved 72% of high-volume repetitive inbound support calls without human intervention.',
      'Bypassed phone hold queues entirely, reducing user wait times from 25 mins to 0.',
      'Synchronized post-call sentiment summaries directly to Salesforce in under 3 seconds.'
    ],
    imageMockupColor: 'from-fuchsia-600/20 via-pink-600/10 to-transparent',
    githubUrl: '#',
    demoUrl: '#',
    featured: true
  },
  {
    id: 'ecommerce-platform',
    title: 'VeloCart - Headless Commercely Platform',
    category: 'web',
    techStack: ['React', 'Next.js', 'Express', 'MongoDB', 'Cloudflare Workers', 'Tailwind CSS'],
    problemSolved: 'Monolithic ecommerce sites buckled under seasonal traffic spikes, while mobile loads exceeding 5 seconds resulted in high shopping cart abandonment.',
    features: [
      'Stateless edge-rendered server structure serving lightning-fast product pages globally.',
      'Dynamic instantaneous visual catalog filtering over hundreds of thousands of active SKUs.',
      'Ultra-secure, streamlined 1-click checkout layout utilizing Apple Pay and Google Pay integrations.'
    ],
    results: [
      'Drove average mobile loading speeds from 5.4 seconds to 1.1 seconds.',
      'Increased general system shopping cart check-out conversion rate by 28.4%.',
      'Successfully sustained peak volume surges of 45,000 concurrent page loads with zero outages.'
    ],
    imageMockupColor: 'from-cyan-600/20 via-blue-600/10 to-transparent',
    githubUrl: '#',
    demoUrl: '#',
    featured: false
  },
  {
    id: 'crm-dashboard',
    title: 'ApexPulse - Enterprise Growth CRM',
    category: 'saas',
    techStack: ['Next.js', 'Typescript', 'D3.js', 'PostgreSQL', 'Tailwind CSS', 'Auth0'],
    problemSolved: 'Sales departments had zero clarity over multi-tier client conversion loops. Reps were manually chasing leads, wasting 14 hours per week per rep.',
    features: [
      'Interactive pipeline graphics built in D3 demonstrating flow friction points.',
      'Autonomous client outreach actions taking effect when status changes occur.',
      'Detailed visual deal velocity trackers displaying estimated close dates.'
    ],
    results: [
      'Slashed administrative work hours by 12.5% per sales executive daily.',
      'Lifted overall contract closure percentages by 19.4% is less than 60 days.',
      'Provided absolute live forecasting transparency for CFO financial boards.'
    ],
    imageMockupColor: 'from-violet-600/20 via-purple-600/10 to-transparent',
    githubUrl: '#',
    demoUrl: '#',
    featured: true
  },
  {
    id: 'inventory-system',
    title: 'OptimaFlow - Real-time AI Inventory Controller',
    category: 'saas',
    techStack: ['React', 'Node.js', 'PostgreSQL', 'AWS IoT Core', 'Gemini APIs', 'Docker'],
    problemSolved: 'Multi-warehouse retail operations struggled with over-stocking dead items while simultaneously running dry of high-demand items due to forecasting delays.',
    features: [
      'Predictive inventory exhaustion model adapting dynamically to weather, seasonality, and shipping data.',
      'Warehouse IoT sensor relays tracking real-time crate placements, volumetric weights and alerts.',
      'Autonomous generation of Restock Purchase Orders matching optimal supply schedules.'
    ],
    results: [
      'Reduced average inventory storage holding fees by 26.5% annually.',
      'Secured zero-stockout statuses on high-volume products during high-season events.',
      'Automated millions in purchase order exports with zero clerical entry errors.'
    ],
    imageMockupColor: 'from-rose-600/20 via-orange-600/10 to-transparent',
    githubUrl: '#',
    demoUrl: '#',
    featured: false
  }
];

export const processSteps: ProcessStep[] = [
  {
    stepNumber: 1,
    title: 'Requirement Analysis',
    description: 'We host deep architecture alignment sessions with your engineering and commercial executives. We convert fuzzy ideas into fully functional technical scope specifications, mapping exact endpoints, database schemas, and data pipelines.',
    duration: 'Week 1',
    deliverables: ['Detailed Architecture Design Document', 'Interactive Scope Estimate', 'Database schema mapping'],
    iconName: 'Search'
  },
  {
    stepNumber: 2,
    title: 'UI/UX Planning & Prototyping',
    description: 'Our design group constructs pristine Figma assets, charting high-fidelity interactive flowcharts. We ensure user workflows feel incredibly smooth, natural, and highly intentional, in perfect alignment with your design language.',
    duration: 'Weeks 2-3',
    deliverables: ['Interactive Figma prototypes', 'Complete Tailwind Design System tokens', 'Full viewport user maps'],
    iconName: 'Palette'
  },
  {
    stepNumber: 3,
    title: 'Surgical Development',
    description: 'Our senior engineering staff writes clean, modular, and highly performant TypeScript. We construct robust test beds alongside development, utilizing micro-architectures to isolate capabilities and ensure long-term stability.',
    duration: 'Weeks 4-10',
    deliverables: ['Modular production-grade codebase', 'Continuous integration pipelines', 'Comprehensive test suites'],
    iconName: 'Code'
  },
  {
    stepNumber: 4,
    title: 'Strict Quality Testing',
    description: 'Our dedicated QA division performs heavy stress operations. We trigger performance testing arrays, inspect edge-security rules, verify unit/integration coverages, and run cross-viewport responsive checks.',
    duration: 'Week 11',
    deliverables: ['Lighthouse performance reports', 'Automated QA test results', 'Vulnerability security audits'],
    iconName: 'CheckCircle'
  },
  {
    stepNumber: 5,
    title: 'Production Launch',
    description: 'We orchestrate secure, zero-downtime containerized deployments on premium infrastructure models across AWS or Google Cloud services. We run DNS integrations and CDN edge caching layers.',
    duration: 'Week 12',
    deliverables: ['Live deployed production environment', 'Global Cloudflare or AWS CDN setups', 'Secure database backups setup'],
    iconName: 'Rocket'
  },
  {
    stepNumber: 6,
    title: 'Enterprise Maintenance',
    description: 'Post-launch operations include active system monitoring. We configure automatic error reporting telemetry, apply necessary software patches, update dependencies, and optimize databases proactively.',
    duration: 'Ongoing',
    deliverables: ['24/7/365 uptime monitoring alerts', 'Monthly dependency & patch reports', 'Proactive database index adjustments'],
    iconName: 'ShieldAlert'
  }
];

export const testimonialsData: Testimonial[] = [
  {
    id: 't1',
    name: 'Sarah Jenkins',
    role: 'Chief Technology Officer',
    company: 'SavorSwift Delivery Group',
    avatarUrl: 'SJ',
    rating: 5,
    review: 'WrotX rebuilt our entire courier routing engine in under three months. Their engineering discipline was incredible – they delivered clean, fully tested React Native and WebSocket code that instantly slashed dispatch lag. The transition was smooth, and our delivery speeds have skyrocketed.',
    metricsAchieved: 'Slashed Dispatch Latency by 84%'
  },
  {
    id: 't2',
    name: 'Marcus Vance',
    role: 'VP of Product',
    company: 'ChefMind Culinary Systems',
    avatarUrl: 'MV',
    rating: 5,
    review: 'Most agencies hand you a gorgeous skin on top of a fragile backend. WrotX is built different. They crafted a complex AI recommendation engine using Gemini APIs and Pinecone vector databases that operates at an outstanding low latency. Our users are consistently amazed by how smart recommended meals are.',
    metricsAchieved: 'Reduced Household Food Waste by 41%'
  },
  {
    id: 't3',
    name: 'Rebecca Thorne',
    role: 'Founder & CEO',
    company: 'FlexCore Fitness SaaS',
    avatarUrl: 'RT',
    rating: 5,
    review: 'As a non-technical founder, finding an agency you can trust is extremely rare. WrotX acted not just as a developer, but as a strategic technology partner. They designed, developed, and deployed our entire SaaS membership framework with beautiful Stripe recurring billing in record time.',
    metricsAchieved: 'Saved $2,300/month in Vendor Overlaps'
  },
  {
    id: 't4',
    name: 'Kenneth Choi',
    role: 'Director of Customer Experience',
    company: 'AuraCall Communications',
    avatarUrl: 'KC',
    rating: 5,
    review: 'The AI voice customer support agents WrotX engineered for us feel like science fiction. They speak seamlessly with virtually zero lag, handle complex billing queries directly inside our SalesForce APIs, and automatically update client files. Our wait queue is officially dead.',
    metricsAchieved: 'Handled 72% Support Volume Autonomously'
  }
];

export const techStackData: TechItem[] = [
  { name: 'React', category: 'frontend', glowColor: 'rgba(59, 130, 246, 0.4)' },
  { name: 'Next.js', category: 'frontend', glowColor: 'rgba(255, 255, 255, 0.4)' },
  { name: 'Node.js', category: 'backend', glowColor: 'rgba(34, 197, 94, 0.4)' },
  { name: 'Express', category: 'backend', glowColor: 'rgba(156, 163, 175, 0.3)' },
  { name: 'MongoDB', category: 'database', glowColor: 'rgba(16, 185, 129, 0.4)' },
  { name: 'PostgreSQL', category: 'database', glowColor: 'rgba(37, 99, 235, 0.4)' },
  { name: 'Firebase', category: 'cloud', glowColor: 'rgba(245, 158, 11, 0.4)' },
  { name: 'Docker', category: 'cloud', glowColor: 'rgba(14, 165, 233, 0.4)' },
  { name: 'AWS', category: 'cloud', glowColor: 'rgba(249, 115, 22, 0.4)' },
  { name: 'Tailwind CSS', category: 'frontend', glowColor: 'rgba(6, 182, 212, 0.4)' },
  { name: 'TypeScript', category: 'frontend', glowColor: 'rgba(49, 120, 198, 0.4)' },
  { name: 'OpenAI APIs', category: 'ai', glowColor: 'rgba(16, 185, 129, 0.5)' },
  { name: 'Gemini APIs', category: 'ai', glowColor: 'rgba(99, 102, 241, 0.5)' }
];

export const statsData: StatItem[] = [
  { label: 'Enterprise & App Projects Completed', value: 140, suffix: '+', iconName: 'CheckCircle' },
  { label: 'Happy System Clients Globally', value: 95, suffix: '+', iconName: 'Users' },
  { label: 'Core Software Technologies Used', value: 18, suffix: '+', iconName: 'Code' },
  { label: 'Autonomous AI Solutions Delivered', value: 45, suffix: '+', iconName: 'Cpu' }
];

export const companyDetails = {
  name: 'WrotX',
  mission: 'At WrotX, we hand-craft reliable, scalable digital products and AI automation pipelines. We believe clean architecture, crisp design, and intelligent AI models are the ultimate competitive differentiators of high-exponential ventures.',
  vision: 'To build the next generation of digital infrastructure that scales seamlessly, runs with near-zero latency, and automates manual overhead dynamically so teams can focus purely on expansion.',
  experience: 'Over a decade of core full-stack experience crafting robust digital platforms. Our elite group of engineers, architects, and product strategists from major world tech hubs have delivered high-throughput systems for high-growth startups and global enterprises alike.',
  mindset: 'We operate with an AI-first development and execution philosophy. Rather than appending AI as an after-thought, we design our database structures, pipeline schemas, and user endpoints with intelligent agent automation as the foundational engine.'
};
