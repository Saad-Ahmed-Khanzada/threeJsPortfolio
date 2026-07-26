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
  tagline: "I build web and mobile products, and I lead the teams that ship them.",
  heroIntro:
    "Senior software engineer with 4+ years of experience. I take web and mobile products from the first client conversation through to the app store.",
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
  "Senior software engineer with 4+ years of professional experience building web and mobile products for clients in the US, UK, UAE and Pakistan. My work covers the whole delivery cycle. I run requirement sessions with clients, turn what they need into technical plans, write the production React, React Native, Next.js and SvelteKit code, coordinate backend, QA and design, and handle releases through App Store Connect and Google Play. I currently lead a 12-person cross-functional team. I also use AI-assisted analysis to get productive in unfamiliar codebases quickly, which is how I shipped production fixes in Flutter and C++ without having worked in either before.";

export const aboutParagraphs = [
  "I started out as a frontend developer. The title stopped describing the job a while ago. In a normal week I'll be on a call with a client working out what they actually need, turning that into tickets for the team, reviewing pull requests, writing production React Native or Next.js code, tracking down why staging is pointing at the wrong backend, and then showing the finished thing to the client.",
  "That range is on purpose. On most projects the thing slowing delivery isn't the technology. It's whether anyone is holding the whole picture: did we understand what was asked for, does the backend contract match what the app expects, will this build pass review. I try to be the person holding that.",
  "The stack I work in most is React, React Native, Next.js and SvelteKit, with TypeScript, Redux Toolkit and Tailwind, against REST APIs, Firebase and AWS. I handle the release side myself. Firebase setup, native iOS and Android configuration, App Store Connect and Play Console submissions, and separate dev, staging and production environments pointed at the right backends. Secrets go in Secrets Manager, not the repo.",
  "I currently lead a team of twelve: frontend and backend developers, QA engineers, designers and business analysts. I picked that up in the middle of a live project when our Project Manager left. Planning, assigning work, reviewing what goes out, tracking risk and talking to the client are all mine now, and I still write code.",
  "The last piece is how fast I can pick up something new. I use AI heavily for this. Claude, ChatGPT, Codex, and agents I've built around my own workflow. It's how I fixed production bugs in a Flutter meditation app and a C++ mobile codebase without having shipped either language before. I also build workflow automations in n8n. To be clear about what I'm claiming: I'm not a Flutter or C++ specialist. I can be useful in a stack I don't know inside a week.",
];

/* ------------------------------------------------------------------ */
/*  CAREER HIGHLIGHTS                                                  */
/* ------------------------------------------------------------------ */

export const careerHighlights = [
  {
    title: "Led a 12-person cross-functional team",
    detail:
      "Took over delivery leadership on a live social platform build when the Project Manager left. Planning, task assignment, code review, risk tracking and client communication across frontend, backend, QA, design and business analysis.",
    icon: "users",
  },
  {
    title: "Delivered for clients in four markets",
    detail:
      "Production software for companies in the United States, United Kingdom, United Arab Emirates and Pakistan. That includes Zong, Ufone and Jazz, the three largest mobile operators in Pakistan.",
    icon: "globe",
  },
  {
    title: "Ships web and mobile from the same seat",
    detail:
      "React and Next.js on the web, React Native and Expo on mobile, SvelteKit for PWAs that need to be fast. One engineer covering both sides of a product instead of handing off between them.",
    icon: "layers",
  },
  {
    title: "Gets productive in unfamiliar stacks fast",
    detail:
      "Fixed and shipped production bugs in a Flutter codebase and a C++ mobile codebase with no prior production experience in either. AI-assisted code analysis got me to working knowledge in days.",
    icon: "zap",
  },
  {
    title: "Owns the release pipeline",
    detail:
      "Firebase and native iOS/Android configuration, App Store Connect and Play Console submissions, separate dev, staging and production environments, and AWS Secrets Manager for credentials.",
    icon: "rocket",
  },
  {
    title: "Builds AI agents and automations",
    detail:
      "Custom AI coding agents tuned to how I work, plus business workflow automation in n8n covering customer service, voice intake and internal operations.",
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
      "Performance optimization",
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
      "Full delivery of a web or mobile product, from the first requirement session through architecture and build to the store release.",
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
      "Owning a delivery that needs someone accountable for it. Planning, coordination across disciplines, review, and reporting back to the client.",
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
      "Cross-platform iOS and Android apps in React Native and Expo, including the native configuration and release work most teams get stuck on.",
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
      "Automating operational and engineering workflows with n8n and AI agents, plus putting language models into products that already exist.",
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
      "Finding and fixing production problems in code nobody on your team currently owns. AI-assisted analysis gets me oriented quickly.",
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
      "Fast PWAs with server-side rendering, offline support, and the SEO behavior marketing teams keep asking for.",
    deliverables: [
      "SvelteKit / Next.js PWA",
      "SSR & CSR strategy",
      "Offline & caching behavior",
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
    designationNote: "Hired as Senior React & React Native Developer. The scope now includes technical leadership and delivery ownership.",
    location: "Dover, Delaware, United States",
    workMode: "Remote",
    startDate: "2024-12",
    endDate: null,
    period: "Dec 2024 – Present",
    current: true,
    summary:
      "Lead engineer and delivery owner on several client products at once, covering the mobile and web build, cross-functional team leadership, releases, and talking to clients directly.",
    responsibilities: [
      "Lead delivery for a 12-person cross-functional team covering frontend, backend, QA, design and business analysis",
      "Run requirement sessions, feature discussions and release demos directly with clients",
      "Break business requirements into technical tasks, plan sprints and assign work across disciplines",
      "Review team output before it reaches the client, and hold coding standards through pull request review",
      "Own releases: Firebase, native iOS and Android configuration, App Store Connect and Play Console",
      "Set up dev, staging and production environments, and check each one points at the right backend",
    ],
    contributions: [
      "Took over delivery leadership on a live social platform engagement when the Project Manager left. Picked up planning, coordination and client reporting for a 12-person team without pausing the schedule",
      "Led the React Native build and team coordination for InvestWizz, a US investment platform, owning sprint planning and delivery alongside hands-on development",
      "Fixed production bugs in Vastu, a Flutter meditation app, with no prior production Flutter experience. Used AI-assisted analysis to learn the codebase and shipped the fixes the client hired us for",
      "Traced and fixed bugs in Walkaround, a mobile product on a C++ codebase, working from basic C++ knowledge and AI-assisted code reading",
      "Delivered CallMe, a communication platform for calling incarcerated family members through government-approved numbers, working inside the constraints regulated telephony puts on client-side flows",
      "Built AI-powered workflow automations in n8n, plus custom coding agents tuned to how the team works",
      "Set up token and refresh-token auth with protected navigation, and standardized how Redux Toolkit state is structured across projects",
      "Mentored junior developers through code review and pairing",
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
    period: "Jun 2024 – Jan 2025",
    current: false,
    summary:
      "Senior frontend engineer on a network-integrated portal platform, leading the interface build and API integration for a responsive progressive web app.",
    responsibilities: [
      "Build production UI in Next.js with TypeScript, Tailwind CSS, ShadCN and NextUI",
      "Integrate REST and FastAPI endpoints for dynamic data",
      "Keep the layout working across browsers and screen sizes",
      "Improve web performance and page delivery",
    ],
    contributions: [
      "Led development of a network-integrated portal system, owning the frontend architecture and where it met the backend services",
      "Delivered a responsive progressive web app that behaved consistently on desktop, tablet and mobile",
      "Built a reusable component layer on ShadCN and NextUI that cut duplicated UI work across portal modules",
      "Wired up REST and FastAPI integrations to replace static placeholder content with live backend data",
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
    period: "Jul 2023 – Jul 2024",
    current: false,
    summary:
      "Frontend engineer building progressive web apps for the largest telecom operators in Pakistan. This is where my work grew past the interface into server-side rendering and owning the data layer.",
    responsibilities: [
      "Build progressive web apps in SvelteKit using both server-side and client-side rendering",
      "Write CRUD operations and data access layers",
      "Work directly with the design team in Figma",
      "Prepare builds for client review and sign-off",
    ],
    contributions: [
      "Delivered three telecom PWAs and got client sign-off on all of them, for Zong, Ufone and Jazz, the largest mobile operators in Pakistan. Each one needed its own data model and rendering approach",
      "Grew from frontend work into full-stack delivery with SvelteKit, taking on rendering decisions and data access instead of just consuming a finished API",
      "Integrated PocketBase as the data backend for the Jazz platform, handling storage and retrieval end to end",
      "Worked in Figma alongside the designers, editing files directly to settle implementation conflicts before they reached development",
      "Drew the server-side and client-side rendering boundaries carefully so user data stayed intact across PWA sessions",
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
    period: "Dec 2022 – Jul 2023",
    current: false,
    summary:
      "My first leadership role. Coordinating delivery across disciplines on technical projects while building responsive frontend interfaces.",
    responsibilities: [
      "Coordinate teams across disciplines to hit delivery dates and budgets",
      "Build responsive interfaces with CSS and modern frontend tooling",
      "Set up version control practice for the team",
      "Help make the shared development pipeline work better",
    ],
    contributions: [
      "Coordinated teams across disciplines to deliver technical projects on time and on budget. This was the first role where I was responsible for more than my own tickets",
      "Introduced a proper Git workflow and branching strategy, which ended the merge conflicts and overwritten work that had been slowing everyone down",
      "Built responsive layouts that held up across screen sizes, and improved how work was handed over inside the team",
    ],
    technologies: ["React", "JavaScript", "CSS3", "Responsive Design", "Git"],
  },
];

/* ------------------------------------------------------------------ */
/*  LEADERSHIP & CLIENT COMMUNICATION                                  */
/* ------------------------------------------------------------------ */

export const leadershipData = {
  headline: "Leading delivery, not only writing features",
  intro:
    "My job title has usually said developer. The work has always included what a technical lead does, and on my current project it includes all of it.",
  pillars: [
    {
      title: "Team Leadership",
      body:
        "I lead a 12-person cross-functional team: frontend and backend developers, QA engineers, designers and business analysts. I took it on partway through the engagement when the Project Manager left, and picked up planning, task assignment, review, unblocking people and tracking progress without stopping delivery. I run several projects at once and I look at everything before it goes to a client.",
      points: [
        "Lead 12 people across five disciplines",
        "Plan development work and assign tasks",
        "Review finished work before it goes to the client",
        "Clear blockers and watch project health",
        "Coordinate frontend, backend, QA, design and BA",
        "Run several projects at the same time",
      ],
    },
    {
      title: "Client Communication",
      body:
        "I work with clients directly, not through someone else. That means running requirement sessions, talking through new features, saying honestly when something can't be built the way they've described it, demoing releases, and turning their feedback into tickets the team can pick up. Clients consistently give me good feedback on communication.",
      points: [
        "Run client meetings and requirement gathering",
        "Present finished work and demo releases",
        "Explain technical constraints and trade-offs",
        "Turn business needs into development tasks",
        "Negotiate scope against the timeline",
        "Report progress to stakeholders",
      ],
    },
    {
      title: "Project Ownership",
      body:
        "I don't work ticket to ticket. I take responsibility for how it turns out: understanding the business need behind a request, breaking it down, planning the release, spotting risk before it becomes a delay, and staying on the hook through to production.",
      points: [
        "Understand the business need, not only the ticket",
        "Break requirements into technical tasks",
        "Plan and sequence releases",
        "Spot risk early and raise it",
        "Own delivery through to production",
        "Stay accountable after launch",
      ],
    },
    {
      title: "DevOps & Release Coordination",
      body:
        "Not my job title, and regularly my responsibility anyway. I set up Firebase, configure the native Android and iOS apps, manage App Store Connect and Play Console, stand up dev, staging and production environments pointed at the right backends, work with AWS Secrets Manager, and sort out infrastructure needs with the DevOps engineers.",
      points: [
        "Firebase project and service setup",
        "Native Android and iOS app configuration",
        "App Store Connect and Google Play Console",
        "Dev, staging and production environments",
        "AWS Secrets Manager for credentials",
        "Working with DevOps engineers",
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
    "The most useful thing I've learned in the last two years is how to get productive in a codebase I've never seen. I use Claude, ChatGPT and Codex as analysis tools, and I write my own agents for the parts of my workflow that repeat.",
  proofPoints: [
    {
      title: "Flutter production fixes: Vastu",
      body:
        "A client hired us purely to fix production bugs in a Flutter meditation app. I had close to no Flutter experience. I used AI-assisted analysis to build a working picture of the codebase and how it handled state, found the causes, and delivered the fixes.",
      takeaway: "This isn't Flutter expertise. It's evidence I can become useful in an unfamiliar framework quickly.",
    },
    {
      title: "C++ debugging: Walkaround",
      body:
        "Walkaround is a mobile product on a C++ codebase. I knew basic C++ and nothing about this particular system. I used AI to work through the code, narrow down the failure paths, fix the bugs and ship them.",
      takeaway: "This isn't C++ expertise. It's problem-solving in a language outside my main stack.",
    },
    {
      title: "Agents built for my own workflow",
      body:
        "I build AI agents configured against my own engineering standards and project conventions, so what comes out matches the architecture already in place and doesn't need rewriting.",
      takeaway: "Productivity that compounds, instead of one-off prompting.",
    },
    {
      title: "n8n workflow automation",
      body:
        "Business workflow automations in n8n. That includes AI customer service over Telegram with contextual replies generated by OpenAI, and a voice order intake system that combines telephony with speech processing.",
      takeaway: "Automation as something I deliver, not a side interest.",
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
    client: "Confidential, under active development",
    employer: "Bitrupt",
    role: "Technical Lead & Senior Software Engineer",
    date: "2026-02-01",
    period: "Feb 2026 – Present",
    duration: "Ongoing",
    description:
      "A social and creator platform across web and mobile. I lead a 12-person cross-functional team on both sides of it, after taking over delivery leadership partway through when the Project Manager left.",
    detailedDescription:
      "A social and creator platform, still in development, built across web and mobile. I lead delivery for a team of twelve: frontend and backend developers, QA engineers, designers and business analysts. I'm still hands-on in both the web and mobile codebases. The leadership side came to me partway through the engagement when the Project Manager left, and I picked up planning, task assignment, review, risk tracking and client communication without the schedule slipping. The client and product stay unnamed while the build is in progress.",
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
      "Web and mobile surfaces developed in parallel, risking divergent behavior and duplicated logic",
      "Twelve people across five disciplines, each with different dependencies and blockers",
    ],
    solutions: [
      "Took over delivery myself instead of waiting for a replacement, and absorbed planning, assignment and client reporting",
      "Established a single review gate so nothing reached the client without being checked against the requirement",
      "Kept shared behavior and data contracts aligned across web and mobile so neither side drifted",
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
    period: "Sep 2025 – Feb 2026",
    duration: "6 months",
    description:
      "A US investment platform where I did the team leadership and delivery management as well as the React Native build. One of my strongest engagements.",
    detailedDescription:
      "InvestWizz is an investment platform for the US market, built as a React Native mobile app. The role had two halves. I led the team and owned delivery, which meant sprint planning, task assignment, coordination and client communication. I also built production features myself. Financial products leave very little room for ambiguity in how data and state are handled, so a lot of the work went into making sure the app's picture of a user's holdings stayed correct and readable under every network and navigation condition.",
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
      "Set up a rhythm of written updates and recorded demos so the client stayed informed without waiting for overlapping working hours",
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
    period: "Jan 2025 – Apr 2025",
    duration: "4 months",
    description:
      "A secure communication platform letting families call incarcerated relatives through government-approved numbers, built under real regulatory constraints.",
    detailedDescription:
      "CallMe lets people call incarcerated family members through government-approved phone numbers, inside the compliance rules the corrections facilities set. The interesting engineering problem wasn't the calling. It was that almost every action a user takes has a compliance rule attached to it. Approved numbers, permitted contacts and whether a call is allowed at all are decided by an outside authority. So the app had to treat the server as the only source of truth on what a user could do, and explain refusals clearly without showing the rules behind them.",
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
    period: "Jul 2025 – Sep 2025",
    duration: "3 months",
    description:
      "A Flutter meditation app where the client hired us purely to fix production bugs, in a framework I hadn't worked in before.",
    detailedDescription:
      "Vastu is a meditation app built in Flutter. The client hired us specifically to fix production bugs, not to build features. Flutter and Dart weren't part of my working stack, and nobody had budgeted time for me to learn them. I used AI-assisted code analysis to build a working understanding of the codebase, its widget tree, how it handled state and where it touched the platform. That took days instead of weeks. From there I found the causes, fixed them and delivered. This project is on my portfolio as evidence I adapt, not as a claim to know Flutter.",
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
      "Reproduced every reported bug before touching it, so the fixes hit causes and not symptoms",
      "Followed the conventions already in the codebase instead of importing React Native habits into a Flutter project",
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
    period: "Apr 2025 – Jun 2025",
    duration: "3 months",
    description:
      "A mobile application on a C++ codebase. I knew basic C++ and used AI-assisted analysis to isolate the failure paths and ship the fixes.",
    detailedDescription:
      "Walkaround is a mobile app built on a C++ codebase, which is a long way from my usual React and React Native work. My C++ was basic and I didn't know the system at all. I used AI to read through the codebase, trace the failure paths behind the reported issues, fix the bugs and deliver. Same as with Vastu, this is here to show problem-solving in unfamiliar territory, not to claim C++ as one of my skills.",
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
      "Fixes had to be surgical. Broad refactoring wasn't an option in code I didn't own",
    ],
    solutions: [
      "Used AI-assisted analysis to build a call-path model of the areas under suspicion before editing anything",
      "Kept changes narrow and local to reduce the risk of regressions in code I did not fully own",
      "Checked behavior at each step instead of assuming I understood the semantics",
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
    period: "Nov 2024 – Mar 2025",
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
      "Optimize render performance during active sessions",
    ],
    challenges: [
      "Live workout tracking re-renders frequently and degrades quickly if state is structured carelessly",
      "Gesture interactions had to stay responsive mid-exercise, when the user is not looking closely at the screen",
      "Reminder notifications needed to be useful without becoming noise",
    ],
    solutions: [
      "Scoped state carefully and only reached for useMemo and useCallback where profiling showed a real re-render cost",
      "Used React Native Gesture Handler for interactions that stay on the native thread and survive heavy JS work",
      "Structured Firebase Cloud Messaging around user-set schedules instead of generic push",
    ],
    impact:
      "Delivered a fitness app that runs consistently on both platforms, with the live tracking path tuned against measurements instead of guesses.",
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
    period: "Jun 2025 – Present",
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
      "Built validation and escalation paths so a workflow hands off to a human instead of failing quietly",
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
    period: "Sep 2024 – Nov 2024",
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
      "Journal entries get written half-asleep, so capture had to take almost no effort",
      "Model output had to read as an observation, not a fact",
    ],
    solutions: [
      "Prioritized voice capture over typing for the primary entry path",
      "Presented the analysis as patterns we had noticed, not as a verdict",
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
    period: "Aug 2024 – Oct 2024",
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
      "Built a clear escalation path instead of letting the model answer everything",
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
    period: "May 2024 – Aug 2024",
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
      "Framed assistant output as information, never as financial advice",
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
    period: "Jul 2024 – Sep 2024",
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
    period: "Jul 2024 – Sep 2024",
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
      "Modeled pets as their own entities under an owner, instead of assuming one animal per account",
      "Built reminders around actual medication intervals instead of generic notifications",
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
    period: "Apr 2024 – Jul 2024",
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
      "Anonymous reporting has to actually stay anonymous",
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
    period: "Mar 2024 – Jun 2024",
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
    period: "May 2024 – Jun 2024",
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
      "Showed carbohydrate and glucose data in plain language, not clinical terms",
    ],
    impact:
      "Delivered a working diabetes tracking tool covering glucose logging, intake monitoring, and meal planning.",
    achievements: [
      "Shipped a health tracking web application in Next.js",
      "Chose SSR or CSR per view instead of applying one everywhere",
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
    client: "Jazz, the largest mobile operator in Pakistan",
    employer: "Vectracom Pvt Ltd",
    role: "Frontend Developer",
    date: "2023-10-01",
    period: "Oct 2023 – Feb 2024",
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
      "Usage and billing figures have to be right. Users check them against what they expect to see",
    ],
    solutions: [
      "Used SvelteKit's rendering model to keep first paint fast on low-end devices and slow connections",
      "Kept usage and billing figures server-rendered instead of assembling them in the browser",
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
      "Service customization",
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
    client: "Ufone, national telecom operator",
    employer: "Vectracom Pvt Ltd",
    role: "Frontend Developer",
    date: "2023-11-10",
    period: "Nov 2023 – Jan 2024",
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
      "Ensure responsive behavior and offline capability",
    ],
    challenges: [
      "Plan comparison is dense information that becomes unusable on a phone if laid out carelessly",
      "Marketing pages needed genuine SEO performance",
    ],
    solutions: [
      "Designed the comparison views mobile-first, so the desktop layout expanded outward instead of squeezing down",
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
    client: "Zong, national telecom operator",
    employer: "Vectracom Pvt Ltd",
    role: "Frontend Developer",
    date: "2023-12-30",
    period: "Dec 2023 – Mar 2024",
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
      "Made upgrade flows confirmable at each step instead of optimistic",
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
    period: "Feb 2023 – May 2023",
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
      "Showed availability limits while booking, so nothing failed after submission",
      "Structured history around the vehicle, not the account",
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
    period: "Jul 2022 – Sep 2022",
    duration: "3 months",
    description:
      "A movie discovery and review site with search, ratings and watchlists. One of my early React projects.",
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
      "Third-party API rate limits constrained search behavior",
      "Filtering across many dimensions degraded quickly without care",
    ],
    solutions: [
      "Debounced search and cached results to stay within rate limits",
      "Kept filter state derived instead of duplicated",
    ],
    impact:
      "This is where I learned the React fundamentals the rest of my work sits on: component composition, derived state, API integration.",
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
    description: "My default for new work. Typed contracts, state and navigation",
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
    description: "Fixed production bugs using AI-assisted analysis. Not a core stack",
    experience: "Project exposure",
    level: "Working knowledge",
    icon: "flutter",
    color: "#02569B",
  },
  {
    name: "C++",
    category: "Exposure",
    description: "Debugged a production mobile codebase. Not a core stack",
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
    - `role` and `context` are the anonymized fallback and carry most of the
      credibility on their own ("Product Manager, US investment platform").
    - `consent` records what was actually agreed, so a future edit cannot
      accidentally promote an anonymized quote to a named one.

  Example of a fully anonymized entry (safe without naming anyone):

    {
      quote: "Saad ran our requirement sessions better than the agency we
              replaced, and we always knew where the build stood.",
      name: null,
      role: "Product Manager",
      company: null,
      context: "US investment platform",
      project: "InvestWizz",
      consent: "anonymized",
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
    period: "Oct 2019 – Aug 2023",
  },
  {
    institution: "Whales College",
    qualification: "Higher Secondary School / A-Levels",
    location: "Karachi, Pakistan",
    period: "Aug 2017 – Aug 2019",
  },
];

export const certificationsData = [
  {
    name: "Cloud Solution Architecture (AWS)",
    issuer: "Hazza Institute of Technology",
    period: "Mar 2023 – Sep 2023",
  },
  {
    name: "Cypress Automation Testing",
    issuer: "Professional training",
    period: "Jan 2022 – Mar 2022",
  },
  {
    name: "Web Programming with ReactJS",
    issuer: "Professional training",
    period: "Jan 2022 – Feb 2022",
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
