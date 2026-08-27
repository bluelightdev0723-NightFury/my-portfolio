export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  product?: string;
  highlights: string[];
  technologies: string[];
}

export interface SkillCategory {
  name: string;
  items: string[];
}

export interface ProjectItem {
  title: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  image?: string;
  images?: string[];
  honor?: string;
}

export interface EducationItem {
  period: string;
  degree: string;
  institution: string;
}

export interface CommunityItem {
  title: string;
  image: string;
}

export interface HonorItem {
  placement: string;
  event: string;
  venue: string;
  date: string;
  description: string;
  prize: string;
  technologies: string[];
  image: string;
}

export interface PortfolioData {
  name: string;
  title: string;
  tagline: string;
  summary: string;
  stats: { label: string; value: string }[];
  contact: {
    phone: string;
    email: string;
    linkedin: string;
    github: string;
    resumeUrl: string;
  };
  experience: ExperienceItem[];
  skills: SkillCategory[];
  projects: ProjectItem[];
  honors: HonorItem[];
  certifications: string[];
  education: EducationItem[];
  community: CommunityItem[];
  communityGroups: string[];
}

export const portfolio: PortfolioData = {
  name: "Andrew Juers",
  title: "Lead Software Engineer",
  tagline:
    "GenAI Systems · Distributed Systems · Cloud Architecture",
  summary:
    "Lead Mobile & AI Developer with 11+ years of experience building scalable mobile applications and intelligent experiences across Android, iOS, and cross-platform ecosystems. Proven expertise in mobile architecture, Backend & API Architecture, LLM integration, AI agent workflows, computer vision, speech and voice technologies, and connected IoT experiences. Driven by modern architecture, high performance, security, and creating reliable products that combine intelligent AI capabilities with exceptional mobile experiences.",
  stats: [
    { label: "Years Experience", value: "11+" },
    { label: "Industries", value: "5+" },
    { label: "Core Technologies", value: "11+" },
    { label: "Users & Subscribers Served", value: "Millions+" },
  ],
  contact: {
    phone: "(+14342936929)",
    email: "andrewjuers0723@gmail.com",
    linkedin: "http://linkedin.com/in/andrew-j-9a2ab9420",
    github: "https://github.com/andrewjuers",
    resumeUrl: "/resume.pdf",
  },
  experience: [
    {
      company: "T-Mobile",
      role: "Lead Android Developer",
      period: "01/2024 – Present",
      product: "T-Life · Telecom · Mobile & AI",
      highlights: [
        "Led architectural modernization and Jetpack Compose migration for T-Life, serving millions of subscribers.",
        "Integrated LLM APIs, AI agent workflows, computer vision, and voice AI into mobile experiences.",
        "Built modular Android architecture with Clean Architecture, MVVM, Kotlin Coroutines, and Flow.",
      ],
      technologies: [
        "Kotlin",
        "Jetpack Compose",
        "AI/LLM",
        "BLE",
        "GraphQL",
      ],
    },
    {
      company: "Goldman Sachs",
      role: "Senior iOS / Cross-Platform Mobile Developer",
      period: "11/2021 – Present",
      product: "Fintech · Trading & Wealth Management",
      highlights: [
        "Architected high-frequency trading and wealth management applications using React Native, Swift, and SwiftUI.",
        "Designed modular MVVM-C architecture with Combine and real-time market data.",
        "Integrated AI-powered workflows, WebSockets, secure authentication, and high-performance native modules.",
      ],
      technologies: [
        "Swift",
        "SwiftUI",
        "React Native",
        "LLM APIs",
        "WebSockets",
      ],
    },
    {
      company: "Spirit Airlines",
      role: "Senior Android Developer",
      period: "09/2019 – 10/2021",
      product: "Travel · Consumer Mobile",
      highlights: [
        "Led Android development across booking, check-in, boarding, loyalty, and payment experiences.",
        "Modernized legacy Java modules with Kotlin and modular offline-first architecture.",
        "Improved performance, security, automated testing, and CI/CD.",
      ],
      technologies: [
        "Kotlin",
        "Android",
        "Room",
        "Firebase",
        "CI/CD",
      ],
    },
    {
      company: "Chevrolet",
      role: "Android Developer",
      period: "12/2017 – 08/2019",
      product: "Automotive · Connected Vehicles",
      highlights: [
        "Developed connected-vehicle experiences spanning mobile, cloud, and in-vehicle systems.",
        "Built real-time vehicle communication using REST, GraphQL, MQTT, and BLE.",
        "Implemented secure remote controls, telemetry, offline workflows, and performance optimization.",
      ],
      technologies: [
        "BLE",
        "IoT",
        "MQTT",
        "GraphQL",
        "Android Automotive",
      ],
    },
    {
      company: "JCPenney",
      role: "Android Developer",
      period: "04/2016 – 11/2017",
      product: "Retail · E-Commerce",
      highlights: [
        "Built scalable product catalogs, cart, checkout, payments, and personalized recommendations.",
        "Improved offline browsing, image performance, memory usage, and startup performance.",
        "Established automated testing and CI/CD for multi-flavor and white-label releases.",
      ],
      technologies: [
        "Kotlin/Java",
        "E-Commerce",
        "Payments",
        "Performance",
        "CI/CD",
      ],
    },
    {
      company: "Regeneron Pharmaceuticals",
      role: "Android Developer",
      period: "01/2015 – 03/2016",
      product: "Life Sciences · Research",
      highlights: [
        "Developed secure mobile workflows for research and field operations.",
        "Implemented offline synchronization, encrypted storage, REST APIs, and role-based access.",
        "Built barcode/QR workflows, automated testing, diagnostics, and reliable data synchronization.",
      ],
      technologies: [
        "Java",
        "REST APIs",
        "SQLite",
        "Security",
        "Offline-First",
      ],
    },
  ],
  skills: [
    {
      name: "Mobile Development",
      items: [
        "Java",
        "Kotlin",
        "Swift",
        "SwiftUI",
        "Jetpack Compose",
        "React Native",
        "Kotlin Multiplatform(KMM)",
      ],
    },
    {
      name: "Architecture",
      items: [
        "Clean Architecture",
        "MVVM",
        "MVVM-C",
        "Modular Architecture",
        "Kotlin Coroutines",
        "Kotlin Flow",
      ],
    },
    {
      name: "Cloud & DevOps",
      items: [
        "AWS",
        "Microsoft Azure",
        "GCP",
        "CI / CD",
        "Jenkins",
        "GitHub Actions",
        "Fastlane",
      ],
    },
    {
      name: "AI Engineering",
      items: [
        "Python",
        "LLM APIs",
        "AI Agent Workflows",
        "OpenCV",
        "Speech-to-Text",
        "Text-to-Speech",
        "Voice AI",
      ],
    },
    {
      name: "Backend & APIs",
      items: [
        "REST APIs",
        "GraphQL",
        "PostgreSQL",
        "OAuth 2.0",
        "JWT",
      ],
    },
    {
      name: "Connected & Security",
      items: [
        "BLE",
        "IoT Integration",
        "MQTT",
        "Websockets",
        "Mobile Application Security",
        "Biometric Authentication",
      ],
    },
  ],
  projects: [
    {
      title: "T-Life",
      description:
        "AI-powered mobile commerce and connected-home experiences with guided onboarding, smart device controls, and real-time support flows.",
      technologies: [
        "Kotlin",
        "Jetpack Compose",
        "React Native",
        "LLM APIs",
        "STT",
        "TTS",
        "AI agents",
        "API integration",
      ],
      liveUrl: "https://aagam30794.web.app/",
      githubUrl: "https://github.com/andrewjuers",
      image: "/images/Infobot-2.gif",
      images: [
        "/images/Infobot-2.gif",
        "/images/Journeybot.gif",
        "/images/Recycle_TradeIn.gif",
        "/images/T-Satellite.gif",
        "/images/Update_EditCart.gif",
        "/images/5g-gateway-frame.gif",
      ],
    },
    {
      title: "Goldman Sachs Marquee",
      description:
        "Served as a Senior iOS & Cross-Platform Developer, architecting, scaling, and delivering secure, enterprise-grade mobile solutions across trading, wealth management, and checkout platforms.",
      technologies: ["Android Studio", "KMM", "Python", "AI agents", "WebSockets", "AWS"],
      liveUrl: "https://andrewjuers.github.io/StocksApp/",
      githubUrl: "https://github.com/andrewjuers/StocksApp",
      image: "/images/vs-mobile-hand-image-21x9.avif",
      images: [
        "/images/vs-mobile-hand-image-21x9.avif",
        "/images/marketview-mobile-hand-image-21x9.avif",
        "/images/mq-mobile-feature-list-execution-services-1x1.avif",
        "/images/mq-mobile-feature-list-investment-decisions-mv-vs-1x1.avif",
        "/images/mq-mobile-feature-list-thought-leadership-1x1.avif",
        "/images/vs-blue-chip-background-phone-card-3x2.avif",
        "/images/vs-feature-list-backtest-1x1.avif",
        "/images/vs-feature-list-execution-1x1.avif",
        "/images/vs-feature-list-mobile-features-1x1.avif",
        "/images/vs-feature-list-share-1x1.avif",
      ],
    },
    {
      title: "Spirit Airlines",
      description:
        "Engineered and optimized high-volume, mission-critical consumer travel features, including flight booking, digital check-in, and seat selection, for Spirit Airlines' flagship Android application.",
      technologies: [
        "Android Studio",
        "KMM",
        "React Native",
        "Python",
        "agent workflows",
        "API integration",
      ],
      image: "/images/spirit-08.jpg",
      images: [
        "/images/spirit-01.jpeg",
        "/images/spirit-02.jpeg",
        "/images/spirit-03.jpeg",
        "/images/spirit-04.jpeg",
        "/images/spirit-05.jpeg",
        "/images/spirit-06.jpeg",
        "/images/spirit-07.jpeg",
        "/images/spirit-08.jpg",
        "/images/spirit-09.jpg",
        "/images/spirit-10.jpeg",
        "/images/spirit-11.jpeg",
      ],
    },
    {
      title: "myChevrolet",
      description:
        "Integrated mobile, cloud, and in-vehicle systems while collaborating with embedded teams to define robust APIs and connectivity workflows.",
      technologies: [
        "MVVM",
        "Multi-module Android architecture",
        "Embedded Vehicle Systems",
        "REST APIs",
        "Vehicle-command APIs",
        "Real-time event systems",
        "Secure storage",
        "Certificate-based authentication",
        "Python",
        "agent workflows",
        "API integration",
      ],
      image: "/images/vehicle-01.jpeg",
      images: [
        "/images/vehicle-01.jpeg",
        "/images/vehicle-02.jpeg",
        "/images/vehicle-03.jpeg",
        "/images/vehicle-04.jpeg",
        "/images/vehicle-05.jpeg",
        "/images/vehicle-06.jpeg",
        "/images/vehicle-07.jpeg",
        "/images/vehicle-08.jpeg",
        "/images/vehicle-09.jpeg",
        "/images/vehicle-10.jpeg",
        "/images/vehicle-11.jpeg",
        "/images/vehicle-12.jpeg",
        "/images/vehicle-13.jpeg",
        "/images/vehicle-14.jpeg",
        "/images/vehicle-15.jpeg",
        "/images/vehicle-16.jpeg",
        "/images/vehicle-17.jpeg",
        "/images/vehicle-18.jpeg",
        "/images/vehicle-19.jpeg",
        "/images/vehicle-20.jpeg",
        "/images/vehicle-21.jpeg",
        "/images/vehicle-22.jpeg",
        "/images/vehicle-23.jpeg",
        "/images/vehicle-24.jpeg",
        "/images/vehicle-25.jpeg",
        "/images/vehicle-26.jpeg",
        "/images/vehicle-27.jpeg",
        "/images/vehicle-28.jpeg",
      ],
    },
  ],
  honors: [
    {
      placement: "2nd Runner Up",
      event: "HACKATHON 2018",
      venue: "GEP, Mumbai",
      date: "Jun 2018",
      description:
        "Engineered a smart chatbot assistant prototype using Microsoft Cognitive Services and the LUIS Model — natural language understanding for enterprise workflows.",
      prize: "₹20,000 cash prize",
      technologies: [
        "Microsoft Cognitive Services",
        "LUIS",
        "C#",
        "Azure",
      ],
      image: "/images/hackathon.svg",
    },
  ],
  certifications: [
    "Node.js Essential Training",
    "Microservices Foundations",
    "Building RESTful APIs with Node.js and Express",
    "AWS Lambda",
    "Advanced JavaScript Masterclass",
    "Leadership: Becoming an Effective and Dynamic Leader",
  ],
  education: [
    {
      period: "2012 – 2016",
      degree: "B.E. in Computer Engineering",
      institution:
        "K.J. Somaiya College of Engineering (Autonomous)",
    },
    {
      period: "2010 – 2012",
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Mithibai College, Mumbai University",
    },
  ],
  community: [
    {
      title: "Google Cloud Community Day",
      image: "/images/GCP.jpeg",
    },
    {
      title: "Microsoft Ignite Tour",
      image: "/images/Ignite.jpg",
    },
    {
      title: "Elastic Community — GDG Cloud Mumbai",
      image: "/images/as.jpg",
    },
  ],
  communityGroups: [
    "Orkes Developer Meetups (Google HQ, Bangalore)",
    "Elastic Community (Mumbai)",
    "Google Cloud Community (Mumbai)",
    "MS Office Addin",
    "MS Ignite",
  ],
};
