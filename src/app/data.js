/*
Websites:

- https://github.com/pmndrs/gltfjsx (GLTF JSX for 3D Models)
- https://lucide.dev/icons/ (Lucide Icons)
- https://github.com/anuraghazra/github-readme-stats (Github Readme Stats)
- https://skillicons.dev (Skill Icons to show skills)
- https://github-readme-streak-stats.herokuapp.com (Github Readme Streak Stats)

:root {
  --background: 27 27 27;
  --foreground: 225 225 225;
  --muted: 115 115 115;
  --accent: 254 254 91; #FEFE5B
}

*/

export const projectsData = [
  {
    id: 1,
    name: "FitForge Pro",
    description: "A comprehensive fitness tracking mobile application with workout planning, nutrition monitoring, and progress analytics built with React Native CLI, TypeScript, and NestJS backend",
    date: "2024-10-15",
    technologies: ["React Native CLI", "TypeScript", "NestJS", "JWT Authentication", "REST APIs"],
    category: "Mobile App",
    detailedDescription: "FitForge Pro is a full-stack fitness application that helps users track their workouts, monitor nutrition, and analyze their fitness progress. Features include custom workout creation, meal planning, progress photos, and detailed analytics. Built with a robust NestJS backend providing RESTful APIs and real-time data synchronization.",
    features: [
      "Custom workout creation and tracking",
      "Nutrition monitoring with calorie counting",
      "Progress analytics and reporting",
      "Social features for workout sharing",
      "Offline workout tracking",
      "Integration with fitness wearables"
    ]
  },
  {
    id: 2,
    name: "DreamScope Analytics",
    description: "An AI-powered dream analysis mobile application that interprets and tracks sleep patterns, built with React Native CLI, TypeScript, and NestJS with machine learning capabilities",
    date: "2024-09-20",
    technologies: ["React Native CLI", "TypeScript", "NestJS", "OpenAI API", "REST APIs"],
    category: "Mobile App",
    detailedDescription: "DreamScope Analytics uses advanced AI algorithms to analyze dream patterns, sleep quality, and provide personalized insights. The app features dream journaling, pattern recognition, and mood correlation analysis to help users understand their sleep better.",
    features: [
      "Dream journal with voice-to-text",
      "AI-powered dream interpretation",
      "Sleep pattern analysis",
      "Mood correlation tracking",
      "Personalized sleep recommendations",
      "Data visualization and trends"
    ]
  },
  {
    id: 3,
    name: "WealthWise Portfolio",
    description: "A sophisticated investment management mobile application for portfolio tracking, market analysis, and financial planning built with React Native Expo, TypeScript, and FastAPI",
    date: "2024-08-30",
    technologies: ["React Native Expo", "TypeScript", "FastAPI", "Python", "Real-time APIs"],
    category: "Mobile App",
    detailedDescription: "WealthWise Portfolio provides comprehensive investment management tools including real-time market data, portfolio analysis, risk assessment, and automated rebalancing suggestions. Features advanced charting, news integration, and personalized investment recommendations.",
    features: [
      "Real-time portfolio tracking",
      "Market data and analysis",
      "Risk assessment tools",
      "Investment recommendations",
      "News and market insights",
      "Automated alerts and notifications"
    ]
  },
  {
    id: 4,
    name: "SmartReply Customer Bot",
    description: "An intelligent Telegram customer service automation bot built with N8N workflow automation, integrating OpenAI for contextual responses and automated customer support",
    date: "2024-08-15",
    technologies: ["N8N", "Telegram Bot API", "OpenAI API", "Webhook Integration", "AI Automation"],
    category: "Automation Bot",
    detailedDescription: "SmartReply is an advanced customer service automation solution that handles customer inquiries through Telegram. The bot uses OpenAI's language models to understand customer context and provide intelligent, helpful responses, significantly reducing response time and improving customer satisfaction.",
    features: [
      "Automated customer inquiry handling",
      "Context-aware AI responses using OpenAI",
      "Multi-language support capabilities",
      "Escalation to human agents when needed",
      "Customer conversation history tracking",
      "Real-time response analytics and reporting"
    ]
  },
  {
    id: 5,
    name: "VoiceOrder Restaurant System",
    description: "An automated restaurant ordering system using N8N workflows with Twilio voice integration and OpenAI speech processing for hands-free order management",
    date: "2024-07-30",
    technologies: ["N8N", "Twilio Voice API", "OpenAI Voice API", "Webhook Automation", "Speech-to-Text"],
    category: "Automation Bot",
    detailedDescription: "VoiceOrder revolutionizes restaurant operations by allowing customers to place orders through voice calls. The system uses Twilio for voice handling and OpenAI for speech recognition and natural language processing, creating a seamless ordering experience that reduces staff workload and improves order accuracy.",
    features: [
      "Voice-activated order placement",
      "Natural language order processing",
      "Menu item recognition and validation",
      "Automatic order confirmation and scheduling",
      "Integration with restaurant POS systems",
      "Voice-based payment processing support"
    ]
  },
  {
    id: 6,
    name: "PawCare Guardian",
    description: "A comprehensive animal care management mobile application for pet health tracking, veterinary appointments, and care reminders built with React Native Expo, TypeScript, and Firebase",
    date: "2024-07-25",
    technologies: ["React Native Expo", "TypeScript", "Firebase", "Cloud Firestore", "Push Notifications"],
    category: "Mobile App",
    detailedDescription: "PawCare Guardian helps pet owners manage their animals' health records, schedule veterinary appointments, track medications, and receive care reminders. Features include vaccination tracking, health monitoring, and emergency vet finder.",
    features: [
      "Pet health record management",
      "Vaccination and medication tracking",
      "Veterinary appointment scheduling",
      "Emergency vet finder with GPS",
      "Care reminders and notifications",
      "Multi-pet family management"
    ]
  },
  {
    id: 7,
    name: "GlobalConnect Voice",
    description: "A worldwide calling application with high-quality voice communication, international calling features, and real-time messaging built with React Native Expo, TypeScript, and Firebase",
    date: "2024-06-15",
    technologies: ["React Native Expo", "TypeScript", "Firebase", "WebRTC", "Real-time Database"],
    category: "Mobile App",
    detailedDescription: "GlobalConnect Voice provides crystal-clear international calling with competitive rates, group calling features, and integrated messaging. Built with WebRTC for peer-to-peer communication and Firebase for user management and call routing.",
    features: [
      "High-quality international calling",
      "Group video and voice calls",
      "Real-time messaging",
      "Contact synchronization",
      "Call history and analytics",
      "Offline message delivery"
    ]
  },
  {
    id: 8,
    name: "Korra AI",
    description: "An AI-powered chatbot application for cryptocurrency trading assistance and market analysis built with React Native Expo, TypeScript, and Firebase",
    date: "2024-08-01",
    technologies: ["React Native Expo", "TypeScript", "Firebase", "AI/ML", "Crypto APIs"],
    category: "Mobile App",
    detailedDescription: "Korra AI is an intelligent cryptocurrency assistant that provides market analysis, trading suggestions, and portfolio management through natural language conversations. Features real-time market data integration and personalized trading insights.",
    features: [
      "AI-powered crypto market analysis",
      "Natural language trading queries",
      "Portfolio tracking and insights",
      "Real-time market alerts",
      "Educational crypto content",
      "Secure wallet integration"
    ]
  },
  {
    id: 9,
    name: "CrimeDoor Public Safety",
    description: "A community safety mobile application for reporting and tracking registered sex offenders with location-based alerts built with React Native Expo, JavaScript, and Firebase",
    date: "2024-07-01",
    technologies: ["React Native Expo", "JavaScript", "Firebase", "Geolocation", "Push Notifications"],
    category: "Mobile App",
    detailedDescription: "CrimeDoor Public Safety is a community-focused app that helps users stay informed about registered sex offenders in their area. Features include location-based alerts, anonymous reporting, and community safety resources.",
    features: [
      "Location-based offender tracking",
      "Anonymous reporting system",
      "Community safety alerts",
      "Educational safety resources",
      "Neighborhood watch integration",
      "Emergency contact features"
    ]
  },
  {
    id: 10,
    name: "Ufone Digital Hub",
    description: "A progressive web application for telecommunications services with static pages and server-side rendering built with SvelteKit, JavaScript, and Tailwind CSS",
    date: "2023-11-10",
    technologies: ["SvelteKit", "JavaScript", "Tailwind CSS", "SSR", "PWA"],
    category: "Web Application",
    detailedDescription: "Ufone Digital Hub is a modern PWA providing telecommunications services information, plan comparisons, and customer support features. Built with SvelteKit for optimal performance and SEO, featuring responsive design and offline capabilities.",
    features: [
      "Service plan comparisons",
      "Customer support portal",
      "Bill payment integration",
      "Coverage area maps",
      "Promotional offers display",
      "Offline browsing capabilities"
    ]
  },
  {
    id: 11,
    name: "Jazz World Portal",
    description: "A progressive web application with user data tracking and telecommunications services built with SvelteKit, JavaScript, and Tailwind CSS",
    date: "2023-08-30",
    technologies: ["SvelteKit", "JavaScript", "Tailwind CSS", "PWA", "Local Storage"],
    category: "Web Application",
    detailedDescription: "Jazz World Portal offers comprehensive telecommunications services with user account management, data usage tracking, and personalized service recommendations. Features real-time data synchronization and responsive design.",
    features: [
      "User account management",
      "Data usage tracking",
      "Service customization",
      "Real-time notifications",
      "Payment history",
      "Customer service chat"
    ]
  },
  {
    id: 12,
    name: "Movie Portal Cinema",
    description: "A comprehensive movie discovery and review platform with advanced search, ratings, and watchlist features built with React and modern web technologies",
    date: "2022-07-12",
    technologies: ["React", "JavaScript", "CSS3", "Movie APIs", "Local Storage"],
    category: "Web Application",
    detailedDescription: "Movie Portal Cinema is a feature-rich web application for movie enthusiasts to discover, rate, and track their favorite films. Includes advanced filtering, personalized recommendations, and social features for sharing reviews.",
    features: [
      "Advanced movie search and filtering",
      "Personal watchlist management",
      "User ratings and reviews",
      "Movie recommendations",
      "Trailer integration",
      "Social sharing features"
    ]
  },
  {
    id: 13,
    name: "Zong Connect PWA",
    description: "A progressive web application for telecommunications user data tracking and service management built with SvelteKit, JavaScript, and Tailwind CSS",
    date: "2023-12-30",
    technologies: ["SvelteKit", "JavaScript", "Tailwind CSS", "PWA", "Local Storage"],
    category: "Web Application",
    detailedDescription: "Zong Connect PWA provides seamless telecommunications service management with real-time data tracking, bill management, and customer support integration. Features offline functionality and push notifications.",
    features: [
      "Real-time data monitoring",
      "Bill management and payments",
      "Service plan upgrades",
      "Customer support integration",
      "Usage analytics",
      "Offline functionality"
    ]
  },
  {
    id: 14,
    name: "Dream Drivers Service",
    description: "A comprehensive car service progressive web application for booking, tracking, and managing automotive services built with Next.js and modern web technologies",
    date: "2023-02-01",
    technologies: ["Next.js", "React", "JavaScript", "CSS3", "Service APIs"],
    category: "Web Application",
    detailedDescription: "Dream Drivers Service is a full-featured car service platform enabling users to book automotive services, track service history, and manage vehicle maintenance. Features real-time booking, service provider ratings, and maintenance reminders.",
    features: [
      "Service booking and scheduling",
      "Real-time service tracking",
      "Service provider ratings",
      "Maintenance history tracking",
      "Cost estimation tools",
      "Payment integration"
    ]
  },
  {
    id: 15,
    name: "Sugar Balance Health",
    description: "A diabetes management progressive web application for blood sugar tracking, meal planning, and health monitoring built with Next.js",
    date: "2024-06-01",
    technologies: ["Next.js", "React", "JavaScript", "Health APIs", "Local Storage"],
    category: "Web Application",
    detailedDescription: "Sugar Balance Health provides comprehensive diabetes management tools including blood glucose tracking, meal planning, medication reminders, and health analytics for better diabetes control.",
    features: [
      "Blood glucose level tracking",
      "Meal planning and carb counting",
      "Medication reminders",
      "Health analytics and reports",
      "Doctor appointment scheduling",
      "Emergency contact features"
    ]
  },
  {
    id: 16,
    name: "Moves Crypto Gaming",
    description: "A mobile gaming application where users play probability-based games to boost trading signals and earn cryptocurrency rewards built with React Native",
    date: "2024-06-01",
    technologies: ["React Native", "JavaScript", "Crypto APIs", "Game Engine", "Blockchain Integration"],
    category: "Mobile App",
    detailedDescription: "Moves Crypto Gaming combines mobile gaming with cryptocurrency earning opportunities. Users participate in probability-based games that generate trading signals while earning crypto rewards through gameplay achievements.",
    features: [
      "Probability-based gaming mechanics",
      "Crypto reward system",
      "Trading signal generation",
      "Leaderboards and competitions",
      "Wallet integration",
      "Real-time crypto market data"
    ]
  }
];
export const techStackData = [
  {
    name: "React",
    category: "Frontend Framework",
    description: "A JavaScript library for building user interfaces",
    icon: "react",
    color: "#61DAFB"
  },
  {
    name: "Next.js",
    category: "Frontend Framework",
    description: "The React framework for production applications",
    icon: "nextjs",
    color: "#000000"
  },
  {
    name: "React Native",
    category: "Mobile Development",
    description: "Build native mobile apps using React",
    icon: "react",
    color: "#61DAFB"
  },
  {
    name: "Expo",
    category: "Mobile Development",
    description: "Platform for universal React applications",
    icon: "expo",
    color: "#000020"
  },
  {
    name: "SvelteKit",
    category: "Frontend Framework",
    description: "The fastest way to build svelte apps",
    icon: "svelte",
    color: "#FF3E00"
  },
  {
    name: "JavaScript",
    category: "Programming Language",
    description: "Dynamic programming language for web development",
    icon: "javascript",
    color: "#F7DF1E"
  },
  {
    name: "TypeScript",
    category: "Programming Language",
    description: "Typed superset of JavaScript",
    icon: "typescript",
    color: "#3178C6"
  },
  {
    name: "Tailwind CSS",
    category: "Styling",
    description: "Utility-first CSS framework",
    icon: "tailwindcss",
    color: "#06B6D4"
  },
  {
    name: "Redux",
    category: "State Management",
    description: "Predictable state container for JavaScript apps",
    icon: "redux",
    color: "#764ABC"
  },
  {
    name: "Redux Toolkit",
    category: "State Management",
    description: "The official, opinionated toolkit for Redux",
    icon: "redux",
    color: "#764ABC"
  },
  {
    name: "Axios",
    category: "HTTP Client",
    description: "Promise-based HTTP client for JavaScript",
    icon: "axios",
    color: "#5A29E4"
  },
  {
    name: "Swift",
    category: "Mobile Development",
    description: "Programming language for iOS development",
    icon: "swift",
    color: "#FA7343"
  },
  {
    name: "Google Play Console",
    category: "App Distribution",
    description: "Platform for publishing Android apps",
    icon: "googleplay",
    color: "#01875F"
  },
  {
    name: "N8N",
    category: "Automation",
    description: "Workflow automation for technical people",
    icon: "n8n",
    color: "#EA4B71"
  },
  {
    name: "AI Agents",
    category: "Artificial Intelligence",
    description: "Intelligent automation and AI integration",
    icon: "openai",
    color: "#412991"
  }
];

export const BtnList = [
  { label: "About", link: "/about", icon: "about", newTab: false },
  { label: "Projects", link: "/projects", icon: "projects", newTab: false },
  { label: "Contact", link: "/contact", icon: "contact", newTab: false },
  { label: "Tech Stack", link: "/tech-stack", icon: "stack", newTab: false },
  {
    label: "Github",
    link: "https://github.com/Saad-Ahmed-Khanzada",
    icon: "github",
    newTab: true,
  },
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/saad-ahmed-khanzada/",
    icon: "linkedin",
    newTab: true,
  },
  {
    label: "Instagram",
    link: "https://www.instagram.com/saadahmed_khanzada/",
    icon: "instagram",
    newTab: true,
  },
  {
    label: "Resume",
    link: "/Saad's_Resume_2025.pdf",
    icon: "resume",
    newTab: true,
  },
];