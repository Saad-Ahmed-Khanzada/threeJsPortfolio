/*
  SINGLE SOURCE OF TRUTH FOR PORTFOLIO CONTENT
  --------------------------------------------
  Every page reads from this file. To update the site, edit the data here —
  no component changes required.

  This file is kept in sync with:
    docs/Portfolio-Content.docx  (editable content management document)

  Theme tokens live in src/app/globals.css (:root).
*/

/* ------------------------------------------------------------------ */
/*  IDENTITY                                                           */
/* ------------------------------------------------------------------ */

export const personalData = {
  name: "Saad Ahmed Khanzada",
  shortName: "Saad Ahmed",
  title: "Senior Software Engineer",
  secondaryTitles: ["Product Engineer", "Technical Lead"],
  tagline: "I build production web and mobile products — and lead the teams that ship them.",
  heroIntro:
    "Senior software engineer with 4+ years delivering web and mobile products end to end: requirements with the client, architecture, implementation, release, and everything in between.",
  location: "Karachi, Pakistan",
  availability: "Open to remote roles worldwide",
  email: "saadkhanzada1@gmail.com",
  phone: "+92 324 2400532",
  yearsExperience: "4+",
  projectsDelivered: "20+",
  teamLed: "12",
  resumeUrl: "/Saad_Ahmed_Khanzada_Resume.pdf",
  links: {
    github: "https://github.com/Saad-Ahmed-Khanzada",
    linkedin: "https://www.linkedin.com/in/saad-ahmed-khanzada/",
    instagram: "https://www.instagram.com/saadahmed_khanzada/",
  },
};

/* ------------------------------------------------------------------ */
/*  PROFESSIONAL SUMMARY & ABOUT                                       */
/* ------------------------------------------------------------------ */

export const professionalSummary =
  "Senior software engineer with 4+ years of professional experience building and delivering web and mobile products for clients across the US, UK, UAE, and Pakistan. I work across the full delivery lifecycle — running client requirement sessions, breaking business goals into technical plans, writing production React, React Native, Next.js, and SvelteKit code, coordinating backend, QA, and design, and owning the release pipeline through App Store Connect, Google Play Console, and multi-environment configuration. I currently lead a 12-person cross-functional team, and I use AI-assisted engineering to become productive in unfamiliar codebases fast, including shipping production fixes in Flutter and C++ stacks I had not worked in before.";

export const aboutParagraphs = [
  "I started as a frontend developer and the title stopped describing the work a while ago. Today a typical week has me on a client call clarifying requirements, translating those requirements into tickets for the team, reviewing pull requests, writing production React Native or Next.js code, chasing down an environment misconfiguration before a release, and presenting the result back to the client.",
  "That range is deliberate. I have found that the constraint on most projects is not any single technology — it is whether someone is holding the whole thing together: whether the requirement was understood, whether the backend contract matches what the app expects, whether staging points at the right environment, whether the build will actually pass review. I try to be that person.",
  "On the engineering side I work primarily in React, React Native, Next.js, and SvelteKit with TypeScript, Redux Toolkit, and Tailwind, backed by REST APIs, Firebase, and AWS services. I handle release engineering myself — Firebase configuration, native iOS and Android setup, App Store Connect and Google Play submissions, and separate development, staging, and production environments wired to the correct backends with secrets managed properly rather than committed.",
  "On the leadership side I currently lead a 12-person cross-functional team of frontend and backend developers, QA engineers, designers, and business analysts. I took that on mid-project when the Project Manager left an active engagement, and I now own planning, task assignment, review, risk tracking, and client communication for it while still contributing code.",
  "The last piece is speed of learning. I lean heavily on AI-assisted engineering — Claude, ChatGPT, Codex, and purpose-built agents I write for my own workflow — to get productive in unfamiliar codebases quickly. It is how I resolved production defects in a Flutter meditation app and a C++ mobile codebase without prior production experience in either language. I also build AI-powered workflow automations in n8n. I do not claim to be a Flutter or C++ specialist; I claim I can be useful in an unfamiliar stack in days rather than months.",
];

/* ------------------------------------------------------------------ */
/*  CAREER HIGHLIGHTS                                                  */
/* ------------------------------------------------------------------ */

export const careerHighlights = [
  {
    title: "Led a 12-person cross-functional team",
    detail:
      "Stepped into delivery leadership of an active social platform build after the Project Manager departed. Now own planning, task assignment, code review, risk tracking, and client communication across frontend, backend, QA, design, and business analysis.",
    icon: "users",
  },
  {
    title: "Delivered for clients on four markets",
    detail:
      "Production software for organisations in the United States, United Kingdom, United Arab Emirates, and Pakistan — including national telecom operators Zong, Ufone, and Jazz.",
    icon: "globe",
  },
  {
    title: "Ships web and mobile from the same seat",
    detail:
      "React and Next.js on the web, React Native and Expo on mobile, SvelteKit for high-performance PWAs — one engineer covering both surfaces of a product instead of handing off between them.",
    icon: "layers",
  },
  {
    title: "Productive in unfamiliar stacks fast",
    detail:
      "Resolved and shipped production defects in a Flutter codebase and a C++ mobile codebase with no prior production experience in either, using AI-assisted code analysis to build working context in days.",
    icon: "zap",
  },
  {
    title: "Owns the release pipeline",
    detail:
      "Firebase and native iOS/Android configuration, App Store Connect and Google Play Console submissions, separate development, staging, and production environments, and AWS Secrets Manager for credential handling.",
    icon: "rocket",
  },
  {
    title: "Builds AI agents and automations",
    detail:
      "Custom AI coding agents tuned to my own development workflow, plus AI-powered business workflow automation in n8n covering customer service, voice intake, and internal operations.",
    icon: "bot",
  },
];

/* ------------------------------------------------------------------ */
/*  CORE COMPETENCIES                                                  */
/* ------------------------------------------------------------------ */

export const coreCompetencies = [
  {
    group: "Engineering",
    items: [
      "Web & mobile product development",
      "Cross-platform React Native / Expo",
      "Component architecture & design systems",
      "State management at scale",
      "REST API integration & data contracts",
      "Performance optimisation",
    ],
  },
  {
    group: "Leadership & Delivery",
    items: [
      "Cross-functional team leadership",
      "Sprint planning & task breakdown",
      "Code review & quality gates",
      "Risk identification & escalation",
      "Release planning",
      "Multi-project coordination",
    ],
  },
  {
    group: "Client & Product",
    items: [
      "Requirement gathering workshops",
      "Client demos & release walkthroughs",
      "Translating business needs to tickets",
      "Communicating technical constraints",
      "Scope negotiation",
      "Stakeholder reporting",
    ],
  },
  {
    group: "Platform & Automation",
    items: [
      "App Store Connect & Google Play releases",
      "Firebase configuration & services",
      "Multi-environment setup (dev/stage/prod)",
      "AWS Secrets Manager & integrations",
      "AI-assisted engineering workflows",
      "n8n workflow automation",
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  SERVICES                                                           */
/* ------------------------------------------------------------------ */

export const servicesData = [
  {
    title: "Product Engineering",
    description:
      "End-to-end delivery of a web or mobile product — from requirement sessions through architecture, implementation, and store release.",
    deliverables: [
      "Technical planning & architecture",
      "React / Next.js / React Native build",
      "API integration & state design",
      "Store submission & release",
    ],
    icon: "box",
  },
  {
    title: "Technical Leadership",
    description:
      "Taking ownership of a delivery that needs someone accountable: planning, coordination across disciplines, review, and client reporting.",
    deliverables: [
      "Sprint planning & task assignment",
      "Cross-team coordination",
      "Code review & quality standards",
      "Risk tracking & client updates",
    ],
    icon: "users",
  },
  {
    title: "Mobile App Development",
    description:
      "Cross-platform iOS and Android applications in React Native and Expo, including the native configuration and release work most teams get stuck on.",
    deliverables: [
      "React Native / Expo application",
      "Native iOS & Android configuration",
      "Push notifications & deep linking",
      "App Store & Play Console delivery",
    ],
    icon: "smartphone",
  },
  {
    title: "AI & Workflow Automation",
    description:
      "Automating operational and engineering workflows with n8n and AI agents, and integrating language models into existing products.",
    deliverables: [
      "n8n workflow design & build",
      "AI agent development",
      "LLM API integration",
      "Internal tooling & productivity agents",
    ],
    icon: "bot",
  },
  {
    title: "Legacy & Unfamiliar Codebases",
    description:
      "Diagnosing and fixing production issues in codebases nobody on your team currently owns, using AI-assisted analysis to build context quickly.",
    deliverables: [
      "Codebase analysis & documentation",
      "Production defect resolution",
      "Handover-ready notes",
      "Stabilisation before feature work",
    ],
    icon: "wrench",
  },
  {
    title: "Progressive Web Apps",
    description:
      "High-performance PWAs with server-side rendering, offline capability, and the SEO characteristics marketing teams actually need.",
    deliverables: [
      "SvelteKit / Next.js PWA",
      "SSR & CSR strategy",
      "Offline & caching behaviour",
      "Performance & SEO tuning",
    ],
    icon: "globe",
  },
];

/* ------------------------------------------------------------------ */
/*  WORK EXPERIENCE                                                    */
/* ------------------------------------------------------------------ */

export const experienceData = [
  {
    id: "bitrupt",
    company: "Bitrupt",
    position: "Senior Software Engineer",
    designationNote: "Hired as Senior React & React Native Developer; scope now spans technical leadership and delivery ownership",
    location: "Dover, Delaware, United States",
    workMode: "Remote",
    startDate: "2024-12",
    endDate: null,
    period: "Dec 2024 — Present",
    current: true,
    summary:
      "Lead engineer and delivery owner across multiple concurrent client products, covering mobile and web implementation, cross-functional team leadership, release engineering, and direct client communication.",
    responsibilities: [
      "Lead delivery of a 12-person cross-functional team spanning frontend, backend, QA, design, and business analysis",
      "Run client requirement sessions, feature discussions, and release demonstrations directly with stakeholders",
      "Break business requirements into technical tasks, plan sprints, and assign work across disciplines",
      "Review team output before it reaches the client and enforce coding standards through pull request review",
      "Own release engineering: Firebase, native iOS and Android configuration, App Store Connect, and Google Play Console",
      "Configure development, staging, and production environments and verify each points at the correct backend",
    ],
    contributions: [
      "Assumed delivery leadership of an active social platform engagement mid-project after the Project Manager departed, taking on planning, coordination, and client reporting for a 12-person team without pausing the delivery schedule",
      "Led the React Native build and team coordination for InvestWizz, a US investment platform, owning sprint planning and delivery management alongside hands-on development",
      "Resolved production defects in Vastu, a Flutter meditation application, despite no prior production Flutter experience — used AI-assisted analysis to build working knowledge of the codebase and shipped the fixes the client had engaged us for",
      "Diagnosed and fixed defects in Walkaround, a mobile product built on a C++ codebase, working from basic C++ familiarity and AI-assisted code comprehension",
      "Delivered CallMe, a compliance-sensitive communication platform for calling incarcerated family members through government-approved numbers, handling the constraints that regulated telephony imposes on client-side flows",
      "Built AI-powered workflow automations in n8n and custom AI coding agents tuned to the team's development workflow",
      "Established token and refresh-token authentication flows with protected navigation, and standardised Redux Toolkit state architecture across projects",
      "Mentored junior developers through structured code review and pairing",
    ],
    technologies: [
      "React Native",
      "Expo",
      "TypeScript",
      "Redux Toolkit",
      "React",
      "Next.js",
      "Firebase",
      "AWS Secrets Manager",
      "REST APIs",
      "n8n",
      "Flutter",
      "C++",
    ],
  },
  {
    id: "7g-fuse",
    company: "7G Fuse",
    position: "Senior Frontend Developer",
    designationNote: null,
    location: "Abu Dhabi, United Arab Emirates",
    workMode: "Remote",
    startDate: "2024-06",
    endDate: "2025-01",
    period: "Jun 2024 — Jan 2025",
    current: false,
    summary:
      "Senior frontend engineer on a network-integrated portal platform, leading the interface build and API integration for a responsive progressive web application.",
    responsibilities: [
      "Build production UI in Next.js with TypeScript, Tailwind CSS, ShadCN, and NextUI",
      "Integrate REST and FastAPI endpoints for dynamic data flows",
      "Ensure cross-browser and cross-device responsiveness",
      "Optimise web performance and page delivery",
    ],
    contributions: [
      "Led development of a network-integrated portal system, taking responsibility for the frontend architecture and its integration surface with backend services",
      "Delivered a responsive progressive web application that held up consistently across desktop, tablet, and mobile",
      "Built a reusable component layer on ShadCN and NextUI that reduced duplicated UI work across portal modules",
      "Wired dynamic data interaction through REST and FastAPI integrations, replacing static placeholder content with live backend data",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "ShadCN",
      "NextUI",
      "REST APIs",
      "FastAPI",
      "PWA",
    ],
  },
  {
    id: "vectracom",
    company: "Vectracom Pvt Ltd",
    position: "Frontend Developer",
    designationNote: null,
    location: "Karachi, Pakistan",
    workMode: "On-site",
    startDate: "2023-07",
    endDate: "2024-07",
    period: "Jul 2023 — Jul 2024",
    current: false,
    summary:
      "Frontend engineer delivering progressive web applications for Pakistan's largest telecom operators, and the point at which my work expanded from interface development into server-side rendering and data layer ownership.",
    responsibilities: [
      "Build progressive web applications in SvelteKit with server-side and client-side rendering",
      "Implement CRUD operations and data access layers",
      "Collaborate directly with design teams, working in Figma",
      "Prepare builds for client review and deployment approval",
    ],
    contributions: [
      "Delivered and secured client approval for three telecom PWAs for Zong, Ufone, and Jazz — Pakistan's largest mobile operators — each requiring its own data model and rendering strategy",
      "Extended scope from frontend into full-stack delivery with SvelteKit, taking ownership of server-side rendering decisions and data access rather than consuming a finished API",
      "Integrated PocketBase as the data backend for the Jazz platform, handling data management and retrieval end to end",
      "Worked directly in Figma with designers, editing designs in place to resolve implementation conflicts before they reached development",
      "Handled server-side and client-side rendering boundaries deliberately to keep user data integrity intact across PWA sessions",
    ],
    technologies: [
      "SvelteKit",
      "JavaScript",
      "Tailwind CSS",
      "PocketBase",
      "PWA",
      "SSR",
      "React",
      "Figma",
    ],
  },
  {
    id: "wordfibre",
    company: "WordFibre Ltd",
    position: "Lead Frontend Developer",
    designationNote: null,
    location: "Stirling, Scotland, United Kingdom",
    workMode: "Remote",
    startDate: "2022-12",
    endDate: "2023-07",
    period: "Dec 2022 — Jul 2023",
    current: false,
    summary:
      "First leadership role: coordinating cross-disciplinary delivery on technical projects while building responsive frontend interfaces.",
    responsibilities: [
      "Coordinate cross-disciplinary teams to hit delivery dates and budgets",
      "Build responsive interfaces with CSS and modern frontend tooling",
      "Establish version control practice across the team",
      "Contribute to an efficient shared development pipeline",
    ],
    contributions: [
      "Coordinated cross-disciplinary teams through delivery of technical initiatives on schedule and within budget — the first role where my responsibility extended past my own tickets",
      "Introduced structured Git workflow and branching practice, removing the merge conflicts and overwritten work that had been slowing the team down",
      "Built responsive layouts that held together across viewport sizes, and improved handover quality across the shared development pipeline",
    ],
    technologies: ["React", "JavaScript", "CSS3", "Responsive Design", "Git"],
  },
];

/* ------------------------------------------------------------------ */
/*  LEADERSHIP & CLIENT COMMUNICATION                                  */
/* ------------------------------------------------------------------ */

export const leadershipData = {
  headline: "Leading delivery, not just writing features",
  intro:
    "My official designation has usually said developer. The work has consistently included the things a technical lead does — and on my current project, all of them.",
  pillars: [
    {
      title: "Team Leadership",
      body:
        "I currently lead a 12-person cross-functional team: frontend developers, backend developers, QA engineers, designers, and business analysts. I took it on mid-engagement when the Project Manager left, and picked up planning, task assignment, review, blocker removal, and progress tracking without a delivery pause. I run multiple projects concurrently and review everything before it reaches a client.",
      points: [
        "Lead 12 people across five disciplines",
        "Plan development work and assign tasks",
        "Review completed work before client delivery",
        "Remove blockers and track project health",
        "Coordinate frontend, backend, QA, design, and BA",
        "Run multiple concurrent projects",
      ],
    },
    {
      title: "Client Communication",
      body:
        "I work with clients directly rather than through a layer. That means running requirement sessions, discussing new features, explaining honestly when something is not technically feasible in the shape requested, demonstrating releases, and converting the feedback into tickets the team can act on. I consistently receive positive client feedback on communication and professionalism.",
      points: [
        "Run client meetings and requirement gathering",
        "Present completed work and demo releases",
        "Explain technical constraints and trade-offs",
        "Translate business needs into development tasks",
        "Negotiate scope against timeline",
        "Report progress to stakeholders",
      ],
    },
    {
      title: "Project Ownership",
      body:
        "I do not work ticket to ticket. I take responsibility for the outcome: understanding the business requirement behind a request, decomposing it, planning the release, identifying the risk before it becomes a delay, and staying accountable through to production.",
      points: [
        "Understand the business requirement, not just the ticket",
        "Break requirements into technical tasks",
        "Plan and sequence releases",
        "Identify and escalate risk early",
        "Own delivery through to production",
        "Stay accountable after launch",
      ],
    },
    {
      title: "DevOps & Release Coordination",
      body:
        "Not my official title, and regularly my responsibility. I configure Firebase, set up native Android and iOS applications, manage App Store Connect and Google Play Console, stand up development, staging, and production environments pointed at the correct backends, work with AWS Secrets Manager, and coordinate infrastructure requirements with dedicated DevOps engineers.",
      points: [
        "Firebase project and service configuration",
        "Native Android and iOS app setup",
        "App Store Connect and Google Play Console",
        "Development, staging, and production environments",
        "AWS Secrets Manager for credential handling",
        "Coordination with DevOps engineers",
      ],
    },
  ],
};

/* ------------------------------------------------------------------ */
/*  AI & AUTOMATION                                                    */
/* ------------------------------------------------------------------ */

export const aiAutomationData = {
  headline: "AI-assisted engineering",
  intro:
    "The most useful skill I have picked up in the last two years is getting productive in an unfamiliar codebase fast. I use Claude, ChatGPT, and Codex as analysis tools, and I write my own specialised agents for recurring parts of my workflow.",
  proofPoints: [
    {
      title: "Flutter production fixes — Vastu",
      body:
        "A client engaged us specifically to resolve production bugs in a Flutter meditation application. I had effectively no Flutter experience. I used AI-assisted analysis to build a working model of the codebase and its state handling, resolved the defects, and delivered the fixes.",
      takeaway: "Not Flutter expertise — demonstrated ability to become useful in an unfamiliar framework quickly.",
    },
    {
      title: "C++ codebase debugging — Walkaround",
      body:
        "Walkaround is a mobile product built on a C++ codebase. I knew basic C++ and nothing about this system. I used AI to work through the code, isolate the failure paths, resolve the bugs, and ship the fixes.",
      takeaway: "Not C++ expertise — demonstrated problem-solving in a language and codebase outside my primary stack.",
    },
    {
      title: "Purpose-built development agents",
      body:
        "I build specialised AI agents configured against my own engineering standards and project conventions, so generated code arrives consistent with the architecture instead of needing to be rewritten.",
      takeaway: "Compounding productivity rather than one-off prompting.",
    },
    {
      title: "n8n workflow automation",
      body:
        "Intelligent business workflow automations in n8n, including AI-powered customer service handling over Telegram with OpenAI-generated contextual responses, and a voice-driven order intake system combining telephony with speech processing.",
      takeaway: "Automation and workflow engineering as a deliverable, not a side interest.",
    },
  ],
  tools: ["Claude", "ChatGPT", "OpenAI Codex", "AI coding agents", "n8n", "OpenAI API"],
};

/* ------------------------------------------------------------------ */
/*  PROJECTS                                                           */
/* ------------------------------------------------------------------ */

export const projectsData = [
  {
    id: 1,
    slug: "confidential-social-platform",
    name: "Social Platform (Confidential)",
    confidential: true,
    featured: true,
    category: "Web & Mobile",
    client: "Confidential — under active development",
    employer: "Bitrupt",
    role: "Technical Lead & Senior Software Engineer",
    date: "2026-02-01",
    period: "Feb 2026 — Present",
    duration: "Ongoing",
    description:
      "A social and creator platform spanning web and mobile. I lead a 12-person cross-functional team across both surfaces, having taken over delivery leadership mid-project after the Project Manager departed.",
    detailedDescription:
      "An in-development social and creator platform built across web and mobile. I lead delivery for a 12-person cross-functional team — frontend developers, backend developers, QA engineers, designers, and business analysts — while remaining hands-on across both the web and mobile codebases. I inherited this leadership responsibility mid-engagement when the Project Manager left, and picked up planning, task assignment, review, risk tracking, and direct client communication without interrupting the delivery schedule. The client and product remain unnamed while the build is in progress.",
    technologies: [
      "React Native",
      "Next.js",
      "TypeScript",
      "Redux Toolkit",
      "REST APIs",
      "Firebase",
    ],
    responsibilities: [
      "Lead a 12-person cross-functional team across web and mobile delivery",
      "Plan sprints, decompose requirements, and assign work across five disciplines",
      "Review all output before it reaches the client",
      "Run client meetings, feature discussions, and release demonstrations",
      "Contribute production code on both the web and mobile surfaces",
      "Track risk and project health, and escalate early",
    ],
    challenges: [
      "The Project Manager left during an active engagement, leaving planning, coordination, and client communication without an owner",
      "Web and mobile surfaces developed in parallel, risking divergent behaviour and duplicated logic",
      "Twelve people across five disciplines, each with different dependencies and blockers",
    ],
    solutions: [
      "Took over delivery ownership directly rather than waiting for a replacement, absorbing planning, assignment, and client reporting into my own remit",
      "Established a single review gate so nothing reached the client without being checked against the requirement",
      "Kept shared behaviour and data contracts aligned deliberately across web and mobile instead of letting each surface drift",
      "Ran regular coordination across disciplines to surface blockers before they turned into schedule slippage",
    ],
    impact:
      "Delivery continued on schedule through a mid-project leadership vacancy, with no pause for handover and no loss of client confidence.",
    achievements: [
      "Absorbed a departing Project Manager's responsibilities without a delivery pause",
      "Now the accountable owner for a 12-person cross-functional team",
      "Sustained direct client relationship through a disruptive internal transition",
    ],
    features: [
      "Creator profiles and social graph",
      "Content feed and discovery",
      "Cross-platform web and mobile parity",
      "Real-time interaction and notifications",
      "Authenticated, role-aware navigation",
    ],
  },
  {
    id: 2,
    slug: "investwizz",
    name: "InvestWizz",
    featured: true,
    category: "Mobile App",
    client: "US-based investment platform",
    employer: "Bitrupt",
    role: "Team Lead & React Native Developer",
    date: "2025-09-15",
    period: "Sep 2025 — Feb 2026",
    duration: "6 months",
    description:
      "A US investment platform where I combined team leadership and delivery management with hands-on React Native development — one of my strongest engagements.",
    detailedDescription:
      "InvestWizz is an investment platform for the US market, delivered as a React Native mobile application. My role combined two halves: leading the team and owning delivery — sprint planning, task assignment, coordination, and client communication — while building production features myself. Financial products carry a low tolerance for ambiguity in data handling and state, so a significant part of the work was making sure the app's model of a user's holdings stayed correct and legible under every network and navigation condition.",
    technologies: [
      "React Native",
      "TypeScript",
      "Redux Toolkit",
      "REST APIs",
      "Firebase",
      "Real-time data",
    ],
    responsibilities: [
      "Lead the project team and own delivery to the client",
      "Run sprint planning and coordinate task assignment",
      "Build production React Native features",
      "Communicate directly with the client on requirements and releases",
      "Review team code before delivery",
      "Manage the delivery timeline and flag risk",
    ],
    challenges: [
      "Financial data leaves no room for stale or inconsistent state in the UI",
      "Delivery leadership and hands-on implementation competing for the same hours",
      "US-market client with expectations set on time zones eight to eleven hours away",
    ],
    solutions: [
      "Structured Redux Toolkit state around clear ownership of server data so portfolio figures could not silently drift from the backend",
      "Front-loaded planning and review into predictable blocks so implementation time stayed protected",
      "Established an asynchronous communication rhythm — written updates and recorded demonstrations — so the client stayed informed without waiting on overlapping hours",
    ],
    impact:
      "Delivered a production investment application for the US market with a single engineer accountable for both the build quality and the client relationship.",
    achievements: [
      "Owned delivery and team leadership while remaining a hands-on contributor",
      "Maintained direct client relationship through the full engagement",
      "Established the state architecture pattern reused on later mobile projects",
    ],
    features: [
      "Portfolio tracking and holdings overview",
      "Market data and analysis views",
      "Risk assessment tooling",
      "Investment insights and recommendations",
      "Market news integration",
      "Alerts and notifications",
    ],
  },
  {
    id: 3,
    slug: "callme",
    name: "CallMe",
    featured: true,
    category: "Mobile App",
    client: "Secure corrections communication provider",
    employer: "Bitrupt",
    role: "Senior Mobile Engineer",
    date: "2025-01-15",
    period: "Jan 2025 — Apr 2025",
    duration: "4 months",
    description:
      "A secure communication platform letting families call incarcerated relatives through government-approved numbers, built under real regulatory constraints.",
    detailedDescription:
      "CallMe is a secure communication platform that enables users to call incarcerated family members through government-approved phone numbers, subject to corrections-facility compliance requirements. The interesting engineering problem here was not the calling itself — it was that almost every user action had a compliance rule attached to it. Approved numbers, permitted contacts, and call eligibility are all determined by external authority, so the client had to treat the server as the sole source of truth on what a user was allowed to do, and communicate refusals clearly without exposing the underlying rules.",
    technologies: [
      "React Native",
      "Expo",
      "TypeScript",
      "Firebase",
      "REST APIs",
      "Real-time communication",
    ],
    responsibilities: [
      "Build the mobile application and its calling flows",
      "Implement approved-number and permitted-contact handling",
      "Integrate compliance-gated backend endpoints",
      "Handle authentication and secure session management",
      "Design clear failure and refusal states for blocked actions",
    ],
    challenges: [
      "Call eligibility is decided by external corrections authority, not by the app",
      "A blocked call must be explained to the user without leaking the compliance rules behind it",
      "No tolerance for the client caching a permission state that has since been revoked",
    ],
    solutions: [
      "Treated the backend as the only authority on eligibility, with the client never inferring or caching permission to place a call",
      "Built explicit, human-readable states for every refusal path so users understood the outcome without being shown the rule set",
      "Kept sensitive contact and approval data off long-lived client storage",
    ],
    impact:
      "Delivered a working communication channel for families separated by incarceration, inside compliance constraints that rule out most conventional mobile calling patterns.",
    achievements: [
      "Shipped a regulated-domain mobile product with externally controlled permissions",
      "Designed refusal and error states that stayed clear without exposing compliance logic",
    ],
    features: [
      "Calling via government-approved numbers",
      "Approved contact management",
      "Compliance-gated call eligibility",
      "Secure authentication and sessions",
      "Call history",
      "Clear, explained failure states",
    ],
  },
  {
    id: 4,
    slug: "vastu",
    name: "Vastu",
    featured: true,
    category: "Mobile App",
    client: "Meditation app publisher",
    employer: "Bitrupt",
    role: "Production Support Engineer (AI-assisted)",
    date: "2025-07-01",
    period: "Jul 2025 — Sep 2025",
    duration: "3 months",
    description:
      "A Flutter meditation application where the client engaged us purely to resolve production bugs — in a framework I had not worked in before.",
    detailedDescription:
      "Vastu is a meditation application built in Flutter. The client engaged us specifically to resolve production bugs, not to build features. Flutter and Dart were outside my working stack, and the engagement had no ramp-up period budgeted. I used AI-assisted code analysis to build a working understanding of the codebase — its widget tree, state handling, and platform integration points — quickly enough to be useful in days rather than weeks, then diagnosed and resolved the defects and delivered the fixes. This project is on my portfolio as evidence of adaptability, not as a claim to Flutter expertise.",
    technologies: ["Flutter", "Dart", "AI-assisted analysis", "Mobile debugging"],
    responsibilities: [
      "Build working understanding of an unfamiliar Flutter codebase at speed",
      "Reproduce and diagnose reported production defects",
      "Implement fixes consistent with the existing architecture",
      "Verify fixes across platforms and deliver to the client",
    ],
    challenges: [
      "No prior production experience in Flutter or Dart",
      "Inherited codebase with no handover and no documentation",
      "Client engaged us for outcomes, with no learning period in scope",
    ],
    solutions: [
      "Used AI-assisted code analysis to map the widget tree, state flow, and platform integration points before changing anything",
      "Reproduced each reported defect first, so fixes addressed causes rather than symptoms",
      "Matched the existing codebase's conventions rather than importing React Native habits into a Flutter project",
    ],
    impact:
      "Client received the production fixes they engaged us for, in a framework the team had no prior production experience in.",
    achievements: [
      "Delivered production fixes in an unfamiliar framework with no ramp-up period",
      "Demonstrated AI-assisted onboarding into a foreign codebase as a repeatable capability",
    ],
    features: [
      "Production defect diagnosis and resolution",
      "Cross-platform verification",
      "Fixes aligned to existing architecture",
      "Handover-ready documentation of findings",
    ],
  },
  {
    id: 5,
    slug: "walkaround",
    name: "Walkaround",
    featured: true,
    category: "Mobile App",
    client: "Confidential",
    employer: "Bitrupt",
    role: "Production Support Engineer (AI-assisted)",
    date: "2025-04-15",
    period: "Apr 2025 — Jun 2025",
    duration: "3 months",
    description:
      "A mobile application on a C++ codebase. I knew basic C++ and used AI-assisted analysis to isolate the failure paths and ship the fixes.",
    detailedDescription:
      "Walkaround is a mobile application built on a C++ codebase — a long way from my primary React and React Native work. My C++ knowledge was basic and the system was unfamiliar. I used AI-assisted code comprehension to work through the codebase, trace the failure paths behind the reported issues, resolve the bugs, and deliver the fixes. As with Vastu, this is on my portfolio to demonstrate problem-solving in unfamiliar territory rather than to claim C++ as a core competency.",
    technologies: ["C++", "Mobile development", "AI-assisted analysis", "Debugging"],
    responsibilities: [
      "Work through an unfamiliar C++ mobile codebase",
      "Trace and isolate failure paths behind reported issues",
      "Implement and verify fixes",
      "Deliver working builds to the client",
    ],
    challenges: [
      "Only basic C++ knowledge against a substantial existing codebase",
      "Compiled-language debugging without established familiarity with the build system",
      "Fixes needed to be surgical — broad refactoring was not an option",
    ],
    solutions: [
      "Used AI-assisted analysis to build a call-path model of the areas under suspicion before editing anything",
      "Kept changes narrow and local to reduce the risk of regressions in code I did not fully own",
      "Verified behaviour empirically at each step rather than trusting assumptions about unfamiliar semantics",
    ],
    impact:
      "Reported defects resolved and delivered in a language and codebase outside my primary stack.",
    achievements: [
      "Shipped production fixes in C++ from a basic starting knowledge",
      "Second demonstration of AI-assisted entry into an unfamiliar stack, after Vastu",
    ],
    features: [
      "C++ codebase analysis",
      "Failure path isolation",
      "Surgical, low-regression fixes",
      "Verified delivery to client",
    ],
  },
  {
    id: 6,
    slug: "fitsono",
    name: "Fitsono",
    featured: true,
    category: "Mobile App",
    client: "Fitness and gym operator",
    employer: "Bitrupt",
    role: "Senior Mobile Engineer",
    date: "2024-11-01",
    period: "Nov 2024 — Mar 2025",
    duration: "5 months",
    description:
      "A cross-platform fitness and gym application in React Native, covering workout tracking, progress, and notification-driven engagement.",
    detailedDescription:
      "Fitsono is a fitness and gym application built with React Native for iOS and Android. It covers workout planning and tracking, progress history, and the reminder mechanics that determine whether a fitness app is used past the first week. I owned the mobile implementation: navigation architecture, Redux Toolkit state for authentication and workout progress, gesture-driven interactions, render performance during active workout sessions, and Firebase Cloud Messaging for workout reminders.",
    technologies: [
      "React Native",
      "TypeScript",
      "Redux Toolkit",
      "React Navigation",
      "Firebase Cloud Messaging",
      "Gesture Handler",
    ],
    responsibilities: [
      "Build the cross-platform application for iOS and Android",
      "Design navigation architecture across workout, progress, and profile flows",
      "Manage authentication, workout progress, and preferences in Redux Toolkit",
      "Implement gesture-driven interactions and animations",
      "Integrate push notifications for workout reminders",
      "Optimise render performance during active sessions",
    ],
    challenges: [
      "Live workout tracking re-renders frequently and degrades quickly if state is structured carelessly",
      "Gesture interactions had to stay responsive mid-exercise, when the user is not looking closely at the screen",
      "Reminder notifications needed to be useful without becoming noise",
    ],
    solutions: [
      "Scoped state deliberately and applied useMemo and useCallback where profiling showed real re-render cost, rather than by reflex",
      "Used React Native Gesture Handler for interactions that stay on the native thread and survive heavy JS work",
      "Structured Firebase Cloud Messaging around user-set schedules instead of generic push",
    ],
    impact:
      "Delivered a production fitness application running consistently on both platforms, with the real-time tracking path performance-tuned rather than assumed.",
    achievements: [
      "Shipped cross-platform iOS and Android from one codebase",
      "Performance-tuned the live tracking path against measured re-render cost",
      "Integrated schedule-aware reminder notifications",
    ],
    features: [
      "Custom workout creation and tracking",
      "Real-time workout session tracking",
      "Progress analytics and history",
      "Push notification workout reminders",
      "Nutrition and calorie monitoring",
      "Offline workout tracking",
    ],
  },
  {
    id: 7,
    slug: "n8n-automation-suite",
    name: "AI Workflow Automation Suite (n8n)",
    featured: true,
    category: "AI & Automation",
    client: "Internal tooling and client automations",
    employer: "Bitrupt",
    role: "Automation Engineer & AI Agent Architect",
    date: "2025-06-01",
    period: "Jun 2025 — Present",
    duration: "Ongoing",
    description:
      "AI-powered business and engineering workflow automation built in n8n, plus custom AI coding agents tuned to my own development workflow.",
    detailedDescription:
      "An ongoing body of automation work in n8n covering both client-facing business workflows and internal engineering productivity. On the business side this includes AI-powered customer service handling, voice-driven intake, and operational workflows that connect services which do not natively integrate. On the engineering side it includes specialised AI coding agents configured against my own architecture standards and project conventions, so that generated output arrives consistent with the codebase instead of needing to be rewritten. The distinction matters: prompting a model is a one-off, whereas an agent encoding your standards compounds.",
    technologies: [
      "n8n",
      "OpenAI API",
      "Webhooks",
      "REST APIs",
      "Claude",
      "AI agents",
    ],
    responsibilities: [
      "Design and build n8n workflow automations",
      "Integrate language models into operational workflows",
      "Build custom AI coding agents around engineering standards",
      "Connect services lacking native integrations",
      "Maintain and iterate on live automations",
    ],
    challenges: [
      "Language model output is non-deterministic, which is a poor fit for workflows that must not fail silently",
      "Generic AI coding assistants produce code that ignores project architecture and has to be rewritten",
      "Automations that touch live business processes cannot be debugged casually in production",
    ],
    solutions: [
      "Built explicit validation and escalation paths so a workflow hands off to a human rather than failing quietly",
      "Encoded architecture rules, folder conventions, and standards directly into purpose-built agents so output lands consistent with the codebase",
      "Kept automations observable, with logged steps that make failure diagnosable after the fact",
    ],
    impact:
      "Reduced manual handling in repeated operational workflows and cut the review-and-rewrite cost of AI-assisted development by making generated code conform to project standards.",
    achievements: [
      "Built AI-powered customer service automation with contextual response generation and human escalation",
      "Built voice-driven order intake combining telephony with speech processing",
      "Developed reusable AI coding agents encoding engineering standards",
    ],
    features: [
      "AI-powered customer service handling",
      "Voice intake and speech processing",
      "Contextual response generation",
      "Human escalation paths",
      "Cross-service integration",
      "Custom development agents",
    ],
  },
  {
    id: 8,
    slug: "dreamscope-analytics",
    name: "DreamScope Analytics",
    featured: false,
    category: "Mobile App",
    client: "Wellness product",
    employer: null,
    role: "Mobile Engineer",
    date: "2024-09-20",
    period: "Sep 2024 — Nov 2024",
    duration: "3 months",
    description:
      "A dream journalling and sleep pattern application using language models to surface patterns across entries over time.",
    detailedDescription:
      "DreamScope Analytics is a React Native application for dream journalling and sleep pattern tracking, using language model analysis to identify recurring themes and correlate entries with recorded mood over time. Built with React Native CLI and TypeScript against a NestJS backend.",
    technologies: [
      "React Native CLI",
      "TypeScript",
      "NestJS",
      "OpenAI API",
      "REST APIs",
    ],
    responsibilities: [
      "Build the mobile application and journalling flows",
      "Integrate voice-to-text capture",
      "Integrate language model analysis endpoints",
      "Build data visualisation for patterns and trends",
    ],
    challenges: [
      "Journal entries are written half-asleep — capture had to be near-frictionless",
      "Language model interpretation needed framing as insight rather than fact",
    ],
    solutions: [
      "Prioritised voice capture over typing for the primary entry path",
      "Presented analysis as observed patterns rather than definitive interpretation",
    ],
    impact:
      "Delivered a working journalling and analysis product with language model insight built into the core loop.",
    achievements: [
      "Integrated LLM analysis into a consumer mobile product",
      "Built a low-friction capture flow suited to actual usage conditions",
    ],
    features: [
      "Dream journal with voice-to-text",
      "AI-assisted pattern interpretation",
      "Sleep pattern analysis",
      "Mood correlation tracking",
      "Data visualisation and trends",
    ],
  },
  {
    id: 9,
    slug: "smartreply-customer-bot",
    name: "SmartReply Customer Bot",
    featured: false,
    category: "AI & Automation",
    client: "Customer service automation",
    employer: null,
    role: "Automation Engineer",
    date: "2024-08-15",
    period: "Aug 2024 — Oct 2024",
    duration: "3 months",
    description:
      "A Telegram customer service bot built in n8n with OpenAI-generated contextual responses and escalation to human agents.",
    detailedDescription:
      "A customer service automation handling inbound enquiries over Telegram. Built in n8n with OpenAI for contextual response generation, conversation history tracking, and an explicit escalation path to human agents when confidence is low or the request falls outside scope.",
    technologies: [
      "n8n",
      "Telegram Bot API",
      "OpenAI API",
      "Webhooks",
      "AI automation",
    ],
    responsibilities: [
      "Design the automation workflow and conversation handling",
      "Integrate OpenAI for contextual response generation",
      "Build escalation logic to human agents",
      "Track conversation history across sessions",
    ],
    challenges: [
      "A confidently wrong automated answer is worse than no answer",
      "Conversation context had to persist across a stateless webhook flow",
    ],
    solutions: [
      "Built explicit escalation rather than letting the model answer everything",
      "Persisted conversation history so responses stayed contextual across turns",
    ],
    impact:
      "Reduced first-response time on routine enquiries while keeping non-routine cases in human hands.",
    achievements: [
      "Shipped a production AI customer service workflow with human escalation",
      "Maintained conversation context across a stateless integration",
    ],
    features: [
      "Automated enquiry handling",
      "Context-aware AI responses",
      "Escalation to human agents",
      "Conversation history tracking",
      "Multi-language capability",
      "Response analytics",
    ],
  },
  {
    id: 10,
    slug: "korra-ai",
    name: "Korra AI",
    featured: false,
    category: "Mobile App",
    client: "Crypto wallet and assistant product",
    employer: null,
    role: "Mobile Engineer",
    date: "2024-05-01",
    period: "May 2024 — Aug 2024",
    duration: "4 months",
    description:
      "A React Native app combining e-wallet functionality with an AI assistant, live chat, and automated responses for crypto market queries.",
    detailedDescription:
      "Korra AI is a React Native application combining e-wallet functionality with an AI assistant for cryptocurrency market queries, live chat, and automated responses. Built with NativeWind for styling and Firebase for authentication and data, handling user accounts and transaction records securely.",
    technologies: [
      "React Native",
      "NativeWind",
      "Firebase",
      "AI/ML",
      "Crypto APIs",
      "TypeScript",
    ],
    responsibilities: [
      "Build the mobile application and wallet interface",
      "Integrate Firebase authentication and data layer",
      "Implement AI assistant and live chat flows",
      "Handle transaction records securely",
    ],
    challenges: [
      "Wallet and transaction data demands correctness under poor connectivity",
      "AI responses about volatile markets required careful framing",
    ],
    solutions: [
      "Kept transaction state authoritative on the backend, never inferred client-side",
      "Framed assistant output as information rather than financial advice",
    ],
    impact:
      "Delivered a combined wallet and AI assistant product with secure account and transaction handling.",
    achievements: [
      "Integrated conversational AI into a financial mobile product",
      "Built secure Firebase-backed authentication and transaction handling",
    ],
    features: [
      "E-wallet functionality",
      "AI assistant for market queries",
      "Live chat and automated responses",
      "Secure account management",
      "Real-time market data",
      "Transaction history",
    ],
  },
  {
    id: 11,
    slug: "voiceorder-restaurant-system",
    name: "VoiceOrder Restaurant System",
    featured: false,
    category: "AI & Automation",
    client: "Restaurant operations",
    employer: null,
    role: "Automation Engineer",
    date: "2024-07-30",
    period: "Jul 2024 — Sep 2024",
    duration: "3 months",
    description:
      "Voice-driven restaurant order intake built in n8n, combining telephony with speech processing and natural language order parsing.",
    detailedDescription:
      "An automated restaurant ordering system letting customers place orders by voice call. Built in n8n with telephony integration for call handling and OpenAI for speech recognition and natural language order parsing, including menu item validation and order confirmation.",
    technologies: [
      "n8n",
      "Twilio Voice API",
      "OpenAI Voice API",
      "Webhooks",
      "Speech-to-text",
    ],
    responsibilities: [
      "Design the voice intake workflow",
      "Integrate telephony call handling",
      "Implement speech recognition and order parsing",
      "Build menu validation and confirmation logic",
    ],
    challenges: [
      "Spoken orders are ambiguous, accented, and frequently amended mid-sentence",
      "A misheard order becomes a real cost to the restaurant",
    ],
    solutions: [
      "Validated every parsed item against the actual menu before accepting it",
      "Built explicit spoken confirmation before committing an order",
    ],
    impact:
      "Removed staff time from routine phone order taking while keeping order accuracy verified before commitment.",
    achievements: [
      "Shipped a voice-to-order automation with menu validation",
      "Combined telephony and speech processing in a single n8n workflow",
    ],
    features: [
      "Voice-activated order placement",
      "Natural language order parsing",
      "Menu item recognition and validation",
      "Spoken order confirmation",
      "POS integration",
      "Scheduling support",
    ],
  },
  {
    id: 12,
    slug: "pawcare-guardian",
    name: "PawCare Guardian",
    featured: false,
    category: "Mobile App",
    client: "Pet care product",
    employer: null,
    role: "Mobile Engineer",
    date: "2024-07-25",
    period: "Jul 2024 — Sep 2024",
    duration: "3 months",
    description:
      "An animal care management app for pet health records, veterinary scheduling, medication tracking, and care reminders.",
    detailedDescription:
      "PawCare Guardian helps pet owners manage health records, schedule veterinary appointments, track medications, and receive care reminders. Built with React Native Expo, TypeScript, and Firebase with Cloud Firestore, including vaccination tracking and a GPS-based emergency vet finder.",
    technologies: [
      "React Native Expo",
      "TypeScript",
      "Firebase",
      "Cloud Firestore",
      "Push Notifications",
      "Geolocation",
    ],
    responsibilities: [
      "Build the mobile application and record management flows",
      "Implement Firestore data modelling for multi-pet households",
      "Integrate geolocation for emergency vet search",
      "Build scheduled care reminders",
    ],
    challenges: [
      "Households with several animals broke a single-pet data model",
      "Medication reminders carry real consequences when missed",
    ],
    solutions: [
      "Modelled pets as first-class entities under an owner rather than assuming one animal per account",
      "Built reminder scheduling around medication intervals rather than generic notifications",
    ],
    impact:
      "Delivered a working pet health record and reminder system supporting multi-animal households.",
    achievements: [
      "Built multi-pet data modelling in Firestore",
      "Integrated GPS emergency vet search",
    ],
    features: [
      "Pet health record management",
      "Vaccination and medication tracking",
      "Veterinary appointment scheduling",
      "GPS emergency vet finder",
      "Care reminders and notifications",
      "Multi-pet household management",
    ],
  },
  {
    id: 13,
    slug: "crimedoor-public-safety",
    name: "CrimeDoor Public Safety",
    featured: false,
    category: "Mobile App",
    client: "Community safety product",
    employer: null,
    role: "Mobile Engineer",
    date: "2024-04-01",
    period: "Apr 2024 — Jul 2024",
    duration: "4 months",
    description:
      "A community safety application providing location-based registered offender information and anonymous reporting.",
    detailedDescription:
      "CrimeDoor Public Safety provides location-based information on registered sex offenders alongside anonymous reporting and community safety resources. Built with React Native Expo 51 and Firebase for authentication and data, with location-based alerting and real-time updates.",
    technologies: [
      "React Native Expo 51",
      "JavaScript",
      "Firebase",
      "Geolocation",
      "Push Notifications",
    ],
    responsibilities: [
      "Build the mobile application and map-based views",
      "Implement location-based alerting",
      "Build the anonymous reporting flow",
      "Integrate Firebase authentication and data",
    ],
    challenges: [
      "Sensitive public-record data demanded careful, non-inflammatory presentation",
      "Anonymous reporting must stay genuinely anonymous",
    ],
    solutions: [
      "Presented public-record data factually, without editorial framing",
      "Kept reporting flows free of identifying metadata",
    ],
    impact:
      "Delivered a location-aware public safety application handling sensitive public-record data responsibly.",
    achievements: [
      "Shipped location-based alerting on Expo 51",
      "Built an anonymous reporting path with no identifying metadata",
    ],
    features: [
      "Location-based offender information",
      "Anonymous reporting",
      "Community safety alerts",
      "Real-time updates",
      "Safety resources",
      "Emergency contacts",
    ],
  },
  {
    id: 14,
    slug: "moves-crypto-gaming",
    name: "Moves",
    featured: false,
    category: "Mobile App",
    client: "Freelance engagement",
    employer: null,
    role: "Mobile Engineer",
    date: "2024-03-01",
    period: "Mar 2024 — Jun 2024",
    duration: "4 months",
    description:
      "A freelance mobile game where users play probability-based rounds to boost trading signals and earn rewards.",
    detailedDescription:
      "Moves is a freelance mobile application where users play a probability-based game to boost trading signals and earn rewards. Built with React Native, Redux for state management, and Firebase for backend services, including leaderboards and real-time market data.",
    technologies: [
      "React Native",
      "JavaScript",
      "Redux",
      "Firebase",
      "Crypto APIs",
    ],
    responsibilities: [
      "Build the mobile game application",
      "Implement game mechanics and reward logic",
      "Manage state with Redux",
      "Integrate Firebase backend services",
    ],
    challenges: [
      "Probability outcomes had to be authoritative server-side to be trustworthy",
      "Reward accounting could not tolerate client-side manipulation",
    ],
    solutions: [
      "Kept outcome resolution and reward accrual on the backend, with the client rendering results only",
      "Treated all game state as server-owned",
    ],
    impact:
      "Delivered a complete freelance mobile game with server-authoritative outcomes and reward accounting.",
    achievements: [
      "Sole engineer on a freelance mobile product end to end",
      "Built server-authoritative game and reward mechanics",
    ],
    features: [
      "Probability-based game mechanics",
      "Reward system",
      "Trading signal generation",
      "Leaderboards and competitions",
      "Wallet integration",
      "Real-time market data",
    ],
  },
  {
    id: 15,
    slug: "sugar-balance-health",
    name: "Sugar Balance",
    featured: false,
    category: "Web Application",
    client: "Diabetes management product",
    employer: null,
    role: "Frontend Engineer",
    date: "2024-05-01",
    period: "May 2024 — Jun 2024",
    duration: "2 months",
    description:
      "A diabetes management web application for blood glucose tracking, sugar intake monitoring, and meal planning.",
    detailedDescription:
      "Sugar Balance is a Next.js web application for diabetes management, letting users track blood glucose levels, monitor sugar intake, plan meals with carbohydrate counting, and set medication reminders. Built with server-side and client-side rendering applied where each was appropriate.",
    technologies: ["Next.js", "React", "JavaScript", "SSR", "Health APIs"],
    responsibilities: [
      "Build the web application and tracking interfaces",
      "Implement glucose and intake logging",
      "Build meal planning with carbohydrate counting",
      "Apply SSR and CSR where each fit",
    ],
    challenges: [
      "Health logging must be fast enough to happen several times a day",
      "Carbohydrate data needed to stay legible to non-technical users",
    ],
    solutions: [
      "Kept the logging path to the minimum interaction cost",
      "Presented carbohydrate and glucose data in plain terms rather than clinical framing",
    ],
    impact:
      "Delivered a working diabetes tracking tool covering glucose logging, intake monitoring, and meal planning.",
    achievements: [
      "Shipped a health tracking web application in Next.js",
      "Applied SSR and CSR deliberately per view rather than uniformly",
    ],
    features: [
      "Blood glucose tracking",
      "Sugar intake monitoring",
      "Meal planning and carb counting",
      "Medication reminders",
      "Health analytics and reports",
      "Appointment scheduling",
    ],
  },
  {
    id: 16,
    slug: "jazz-world-portal",
    name: "Jazz World Portal",
    featured: true,
    category: "Web Application",
    client: "Jazz — Pakistan's largest mobile operator",
    employer: "Vectracom Pvt Ltd",
    role: "Frontend Developer",
    date: "2023-10-01",
    period: "Oct 2023 — Feb 2024",
    duration: "5 months",
    description:
      "A progressive web application for Jazz, Pakistan's largest mobile operator, with account management and data usage tracking at national scale.",
    detailedDescription:
      "A progressive web application for Jazz, Pakistan's largest telecommunications operator. Covers user account management, data usage tracking, service customisation, and payment history. Built with SvelteKit using both server-side and client-side rendering, with PocketBase integrated as the data backend for management and retrieval.",
    technologies: [
      "SvelteKit",
      "JavaScript",
      "Tailwind CSS",
      "PocketBase",
      "PWA",
      "SSR",
    ],
    responsibilities: [
      "Build the progressive web application",
      "Integrate PocketBase as the data backend",
      "Implement server-side and client-side rendering",
      "Build account management and usage tracking views",
      "Deliver builds for client approval",
    ],
    challenges: [
      "A national operator's user base spans a very wide range of devices and network conditions",
      "Usage and billing data must be accurate — users check it against their own expectations",
    ],
    solutions: [
      "Used SvelteKit's rendering model to keep first paint fast on low-end devices and slow connections",
      "Kept usage and billing figures server-rendered rather than assembled client-side",
    ],
    impact:
      "Delivered and secured client approval for a PWA serving the subscriber base of Pakistan's largest mobile operator.",
    achievements: [
      "Shipped a production PWA for a national telecom operator",
      "Integrated PocketBase end to end for data management and retrieval",
    ],
    features: [
      "User account management",
      "Data usage tracking",
      "Service customisation",
      "Payment history",
      "Real-time notifications",
      "Offline browsing",
    ],
  },
  {
    id: 17,
    slug: "ufone-digital-hub",
    name: "Ufone Digital Hub",
    featured: false,
    category: "Web Application",
    client: "Ufone — national telecom operator",
    employer: "Vectracom Pvt Ltd",
    role: "Frontend Developer",
    date: "2023-11-10",
    period: "Nov 2023 — Jan 2024",
    duration: "3 months",
    description:
      "A telecommunications progressive web application for Ufone covering plan comparison, support, and coverage information.",
    detailedDescription:
      "A progressive web application for Ufone providing service plan comparison, customer support access, bill payment entry points, and coverage area information. Built with SvelteKit for rendering performance and SEO, with responsive design and offline capability.",
    technologies: ["SvelteKit", "JavaScript", "Tailwind CSS", "SSR", "PWA"],
    responsibilities: [
      "Build the progressive web application",
      "Implement static and server-rendered pages",
      "Build plan comparison interfaces",
      "Ensure responsive behaviour and offline capability",
    ],
    challenges: [
      "Plan comparison is dense information that becomes unusable on a phone if laid out carelessly",
      "Marketing pages needed genuine SEO performance",
    ],
    solutions: [
      "Designed comparison views mobile-first, so the desktop layout was an expansion rather than a compression",
      "Used SvelteKit server rendering for the pages that needed to be indexed",
    ],
    impact:
      "Delivered a client-approved telecom PWA with plan comparison usable on the devices customers actually browse from.",
    achievements: [
      "Second national telecom PWA delivered and approved",
      "Built mobile-first comparison interfaces for dense plan data",
    ],
    features: [
      "Service plan comparison",
      "Customer support portal",
      "Bill payment entry",
      "Coverage area information",
      "Promotional offers",
      "Offline browsing",
    ],
  },
  {
    id: 18,
    slug: "zong-connect-pwa",
    name: "Zong Connect PWA",
    featured: false,
    category: "Web Application",
    client: "Zong — national telecom operator",
    employer: "Vectracom Pvt Ltd",
    role: "Frontend Developer",
    date: "2023-12-30",
    period: "Dec 2023 — Mar 2024",
    duration: "4 months",
    description:
      "A telecommunications PWA for Zong covering real-time data monitoring, bill management, and service upgrades.",
    detailedDescription:
      "A progressive web application for Zong providing real-time data usage monitoring, bill management and payments, service plan upgrades, and customer support integration. Built with SvelteKit and Tailwind CSS with offline functionality and push notification support.",
    technologies: ["SvelteKit", "JavaScript", "Tailwind CSS", "PWA", "SSR"],
    responsibilities: [
      "Build the progressive web application",
      "Implement real-time data usage monitoring",
      "Build bill management and upgrade flows",
      "Implement offline functionality",
    ],
    challenges: [
      "Usage monitoring needed to feel live without hammering the backend",
      "Upgrade flows touch billing, so partial completion was unacceptable",
    ],
    solutions: [
      "Balanced polling and cache freshness so figures stayed current without excessive requests",
      "Made upgrade flows explicit and confirmable at each step rather than optimistic",
    ],
    impact:
      "Delivered the third of three national telecom PWAs, completing the set that secured client approval at Vectracom.",
    achievements: [
      "Third national telecom PWA delivered and approved",
      "Built billing-adjacent flows with explicit confirmation",
    ],
    features: [
      "Real-time data monitoring",
      "Bill management and payments",
      "Service plan upgrades",
      "Customer support integration",
      "Usage analytics",
      "Offline functionality",
    ],
  },
  {
    id: 19,
    slug: "dream-drivers-service",
    name: "Dream Drivers Service",
    featured: false,
    category: "Web Application",
    client: "Automotive services",
    employer: null,
    role: "Frontend Developer",
    date: "2023-02-01",
    period: "Feb 2023 — May 2023",
    duration: "4 months",
    description:
      "A car service platform for booking, tracking, and managing automotive maintenance, built with Next.js.",
    detailedDescription:
      "Dream Drivers Service is a car service platform enabling users to book automotive services, track service progress, and manage vehicle maintenance history. Built with Next.js, including real-time booking, provider ratings, cost estimation, and maintenance reminders.",
    technologies: ["Next.js", "React", "JavaScript", "CSS3", "Service APIs"],
    responsibilities: [
      "Build the web application and booking flows",
      "Implement service tracking views",
      "Build maintenance history and reminders",
      "Integrate cost estimation",
    ],
    challenges: [
      "Booking against real-world service capacity meant handling conflicts gracefully",
      "Maintenance history needed to stay useful over years, not weeks",
    ],
    solutions: [
      "Surfaced availability constraints during booking rather than failing after submission",
      "Structured history around the vehicle rather than the account",
    ],
    impact:
      "Delivered a complete service booking and vehicle maintenance platform.",
    achievements: [
      "Built end-to-end booking and tracking in Next.js",
      "Structured maintenance history around vehicles for long-term usefulness",
    ],
    features: [
      "Service booking and scheduling",
      "Real-time service tracking",
      "Provider ratings",
      "Maintenance history",
      "Cost estimation",
      "Payment integration",
    ],
  },
  {
    id: 20,
    slug: "movie-portal-cinema",
    name: "Movie Portal Cinema",
    featured: false,
    category: "Web Application",
    client: "Personal project",
    employer: null,
    role: "Frontend Developer",
    date: "2022-07-12",
    period: "Jul 2022 — Sep 2022",
    duration: "3 months",
    description:
      "A movie discovery and review platform with advanced search, ratings, and watchlist management — an early React project.",
    detailedDescription:
      "Movie Portal Cinema is a React application for discovering, rating, and tracking films, with advanced filtering, personal watchlists, recommendations, and trailer integration. An early project from the period where I was building React fundamentals in depth.",
    technologies: ["React", "JavaScript", "CSS3", "Movie APIs", "Local Storage"],
    responsibilities: [
      "Build the React application",
      "Implement search and advanced filtering",
      "Build watchlist and rating features",
      "Integrate third-party movie APIs",
    ],
    challenges: [
      "Third-party API rate limits constrained search behaviour",
      "Filtering across many dimensions degraded quickly without care",
    ],
    solutions: [
      "Debounced search and cached results to stay within rate limits",
      "Kept filter state derived rather than duplicated",
    ],
    impact:
      "Built the React fundamentals — component composition, derived state, API integration — that the rest of my work is grounded in.",
    achievements: [
      "Delivered a complete React application independently",
      "Built API caching and debouncing from first principles",
    ],
    features: [
      "Advanced movie search and filtering",
      "Personal watchlist management",
      "User ratings and reviews",
      "Recommendations",
      "Trailer integration",
      "Social sharing",
    ],
  },
];

export const projectCategories = [
  "All",
  "Web & Mobile",
  "Mobile App",
  "Web Application",
  "AI & Automation",
];

/* ------------------------------------------------------------------ */
/*  TECHNICAL SKILLS                                                   */
/* ------------------------------------------------------------------ */

export const techStackData = [
  {
    name: "React",
    category: "Frontend",
    description: "Primary web framework across 4 years of production work",
    experience: "4 years",
    level: "Expert",
    icon: "react",
    color: "#61DAFB",
  },
  {
    name: "React Native",
    category: "Mobile",
    description: "Cross-platform iOS and Android, including native configuration and release",
    experience: "4 years",
    level: "Expert",
    icon: "react",
    color: "#61DAFB",
  },
  {
    name: "JavaScript",
    category: "Languages",
    description: "Core language throughout my professional work",
    experience: "4+ years",
    level: "Expert",
    icon: "javascript",
    color: "#F7DF1E",
  },
  {
    name: "TypeScript",
    category: "Languages",
    description: "Default choice for new work — typed contracts, state, and navigation",
    experience: "3 years",
    level: "Advanced",
    icon: "typescript",
    color: "#3178C6",
  },
  {
    name: "Next.js",
    category: "Frontend",
    description: "SSR, static generation, and App Router for production web applications",
    experience: "2 years",
    level: "Advanced",
    icon: "nextjs",
    color: "#FFFFFF",
  },
  {
    name: "SvelteKit",
    category: "Frontend",
    description: "High-performance PWAs delivered for national telecom operators",
    experience: "1 year",
    level: "Proficient",
    icon: "svelte",
    color: "#FF3E00",
  },
  {
    name: "Expo",
    category: "Mobile",
    description: "Managed and bare workflows, EAS builds, and store delivery",
    experience: "3 years",
    level: "Advanced",
    icon: "expo",
    color: "#FFFFFF",
  },
  {
    name: "Redux Toolkit",
    category: "State",
    description: "Modular slice architecture for cross-feature state at scale",
    experience: "3 years",
    level: "Advanced",
    icon: "redux",
    color: "#764ABC",
  },
  {
    name: "React Navigation",
    category: "Mobile",
    description: "Nested stacks, protected routes, deep linking, and auth flows",
    experience: "3 years",
    level: "Advanced",
    icon: "react",
    color: "#61DAFB",
  },
  {
    name: "Tailwind CSS",
    category: "Styling",
    description: "Utility-first styling on web, NativeWind on mobile",
    experience: "3 years",
    level: "Advanced",
    icon: "tailwindcss",
    color: "#06B6D4",
  },
  {
    name: "REST APIs",
    category: "Backend & Data",
    description: "Integration, contract design, error handling, and caching strategy",
    experience: "4 years",
    level: "Advanced",
    icon: "postman",
    color: "#FF6C37",
  },
  {
    name: "Firebase",
    category: "Backend & Data",
    description: "Authentication, Firestore, Cloud Messaging, and project configuration",
    experience: "3 years",
    level: "Advanced",
    icon: "firebase",
    color: "#FFCA28",
  },
  {
    name: "AWS",
    category: "Backend & Data",
    description: "Service integrations and Secrets Manager for credential handling",
    experience: "2 years",
    level: "Proficient",
    icon: "aws",
    color: "#FF9900",
  },
  {
    name: "PocketBase",
    category: "Backend & Data",
    description: "Data backend for telecom PWA delivery",
    experience: "1 year",
    level: "Proficient",
    icon: "",
    color: "#B8DBE4",
  },
  {
    name: "n8n",
    category: "AI & Automation",
    description: "AI-powered business and engineering workflow automation",
    experience: "2 years",
    level: "Advanced",
    icon: "",
    color: "#EA4B71",
  },
  {
    name: "AI Agents",
    category: "AI & Automation",
    description: "Custom coding agents built around my own engineering standards",
    experience: "2 years",
    level: "Advanced",
    icon: "openai",
    color: "#412991",
  },
  {
    name: "OpenAI API",
    category: "AI & Automation",
    description: "LLM and speech integration inside products and automations",
    experience: "2 years",
    level: "Advanced",
    icon: "openai",
    color: "#412991",
  },
  {
    name: "App Store Connect",
    category: "Release & DevOps",
    description: "iOS builds, signing, TestFlight, and App Store submission",
    experience: "3 years",
    level: "Advanced",
    icon: "apple",
    color: "#FFFFFF",
  },
  {
    name: "Google Play Console",
    category: "Release & DevOps",
    description: "Android builds, release tracks, and Play Store submission",
    experience: "3 years",
    level: "Advanced",
    icon: "androidstudio",
    color: "#01875F",
  },
  {
    name: "Git",
    category: "Release & DevOps",
    description: "Branching strategy, review workflow, and release hygiene",
    experience: "4+ years",
    level: "Expert",
    icon: "git",
    color: "#F05032",
  },
  {
    name: "Figma",
    category: "Design & Tooling",
    description: "Design handoff, and editing designs directly to resolve implementation conflicts",
    experience: "3 years",
    level: "Proficient",
    icon: "figma",
    color: "#F24E1E",
  },
  {
    name: "Flutter",
    category: "Exposure",
    description: "Production defect resolution via AI-assisted analysis — not a core stack",
    experience: "Project exposure",
    level: "Working knowledge",
    icon: "flutter",
    color: "#02569B",
  },
  {
    name: "C++",
    category: "Exposure",
    description: "Production debugging on a mobile codebase — not a core stack",
    experience: "Project exposure",
    level: "Working knowledge",
    icon: "cpp",
    color: "#00599C",
  },
];

export const techCategories = [
  "Frontend",
  "Mobile",
  "Languages",
  "State",
  "Styling",
  "Backend & Data",
  "AI & Automation",
  "Release & DevOps",
  "Design & Tooling",
  "Exposure",
];

/* ------------------------------------------------------------------ */
/*  TESTIMONIALS                                                       */
/* ------------------------------------------------------------------ */

/*
  Client testimonials.

  The section does not render at all while this array is empty, so it is safe
  to leave as-is until you have consent. Never populate it with a quote lifted
  from private correspondence — see docs/Portfolio-Content.docx section 17.

  Attribution rules encoded here:
    - `name` and `company` are OPTIONAL and must be null unless the person has
      given explicit permission to be named publicly.
    - `role` and `context` are the anonymised fallback and carry most of the
      credibility on their own ("Product Manager, US investment platform").
    - `consent` records what was actually agreed, so a future edit cannot
      accidentally promote an anonymised quote to a named one.

  Example of a fully anonymised entry (safe without naming anyone):

    {
      quote: "Saad ran our requirement sessions better than the agency we
              replaced, and we always knew where the build stood.",
      name: null,
      role: "Product Manager",
      company: null,
      context: "US investment platform",
      project: "InvestWizz",
      consent: "anonymised",
    }

  Example of a named entry (only after written permission):

    {
      quote: "...",
      name: "Jane Doe",
      role: "Head of Product",
      company: "Acme Corp",
      context: null,
      project: "InvestWizz",
      consent: "named",
    }
*/
export const testimonialsData = [];

/*
  Public LinkedIn recommendations are the lowest-risk form of social proof:
  the author published them themselves, so no new consent is needed and no
  private correspondence is being republished. Set this to your LinkedIn
  recommendations URL to surface a link alongside the section.
*/
export const linkedInRecommendationsUrl = `${personalData.links.linkedin}details/recommendations/`;

/* ------------------------------------------------------------------ */
/*  EDUCATION, CERTIFICATIONS, LANGUAGES                               */
/* ------------------------------------------------------------------ */

export const educationData = [
  {
    institution: "DHA Suffa University",
    qualification: "Bachelor of Science, Computer Science",
    location: "Karachi, Pakistan",
    period: "Oct 2019 — Aug 2023",
  },
  {
    institution: "Whales College",
    qualification: "Higher Secondary School / A-Levels",
    location: "Karachi, Pakistan",
    period: "Aug 2017 — Aug 2019",
  },
];

export const certificationsData = [
  {
    name: "Cloud Solution Architecture (AWS)",
    issuer: "Hazza Institute of Technology",
    period: "Mar 2023 — Sep 2023",
  },
  {
    name: "Cypress Automation Testing",
    issuer: "Professional training",
    period: "Jan 2022 — Mar 2022",
  },
  {
    name: "Web Programming with ReactJS",
    issuer: "Professional training",
    period: "Jan 2022 — Feb 2022",
  },
];

export const languagesData = [
  { name: "Urdu", level: "Native / bilingual proficiency" },
  { name: "English", level: "Full professional proficiency" },
  { name: "German", level: "Basic proficiency" },
];

/* ------------------------------------------------------------------ */
/*  NAVIGATION                                                         */
/* ------------------------------------------------------------------ */

export const BtnList = [
  { label: "About", link: "/about", icon: "about", newTab: false },
  { label: "Experience", link: "/experience", icon: "experience", newTab: false },
  { label: "Projects", link: "/projects", icon: "projects", newTab: false },
  { label: "Tech Stack", link: "/tech-stack", icon: "stack", newTab: false },
  { label: "Contact", link: "/contact", icon: "contact", newTab: false },
  {
    label: "Resume",
    link: personalData.resumeUrl,
    icon: "resume",
    newTab: true,
  },
  {
    label: "GitHub",
    link: personalData.links.github,
    icon: "github",
    newTab: true,
  },
  {
    label: "LinkedIn",
    link: personalData.links.linkedin,
    icon: "linkedin",
    newTab: true,
  },
];
