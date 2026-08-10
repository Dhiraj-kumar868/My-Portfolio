import {
  PersonalDetails,
  ExperienceItem,
  ProjectItem,
  SkillItem,
  EducationItem,
  CertificationItem,
  HackerRankAchievement,
  WhatsAppTemplate
} from '../types/portfolio';

export const personalDetails: PersonalDetails = {
  name: "Dhiraj Kumar Sah",
  titles: [
    "Senior Software Engineer",
    "Fintech Systems Architect",
    "Full-Stack Specialist",
    "Engineering Lead"
  ],
  primaryTitle: "Senior Software Engineer",
  tagline: "Architecting High-Volume Fintech Platforms • Scalable Systems • Engineering Leadership",
  bio: "Senior Software Engineer with 4+ years of hands-on experience building enterprise fintech solutions, digital lending platforms, and real-time payment processing architectures. Proven track record in leading engineering teams, engineering high-throughput microservices, and serving premier institutions like Jio Financial Services and IDBI Bank.",
  email: "dhirajkumarsah940@gmail.com",
  phone: "+91-9827436646",
  whatsappNumber: "919827436646",
  location: "Bengaluru, India",
  yearsOfExperience: "4+",
  projectsCount: "15+",
  usersImpacted: "100K+",
  github: "https://github.com/dhiraj-kumar868",
  linkedin: "https://linkedin.com/in/dhiraj-kumar-sah940",
  resumeUrl: "#",
  stats: [
    { label: "Years Experience", value: "4+", description: "In Fintech & Enterprise Software" },
    { label: "Production Users", value: "100K+", description: "Active Daily Transactions" },
    { label: "Latency Reduction", value: "40%", description: "System Optimization" },
    { label: "Team Leadership", value: "7 Mbrs", description: "Mentoring & Delivery" }
  ]
};

export const experiencesData: ExperienceItem[] = [
  {
    id: "zee-senior-se",
    title: "Senior Software Engineer",
    company: "Ezee.ai | Veefin Group",
    location: "Bengaluru, India",
    period: "July 2025 - Present",
    type: "current",
    description: "Technical Lead for the Lend.ezee enterprise digital lending suite. Directing architecture, code quality, and team mentorship.",
    achievements: [
      {
        text: "Led and mentored a 7-member cross-functional engineering team for Lend.ezee digital lending platform",
        metric: "7 Engineers Led"
      },
      {
        text: "Architected scalable microservices and robust API gateways for high-volume financial transactions",
        metric: "100K+ Active Users"
      },
      {
        text: "Established rigorous CI/CD automation, code review standards, and observability pipelines",
        metric: "25% Fewer Prod Defects"
      }
    ],
    skills: ["Team Leadership", "System Architecture", "Fintech Solutions", "Security Compliance", "Microservices"]
  },
  {
    id: "zee-se",
    title: "Software Engineer",
    company: "Ezee.ai | Veefin Group",
    location: "Bengaluru, India",
    period: "June 2023 - June 2025",
    type: "past",
    description: "Designed, developed, and deployed full-stack web and mobile applications for leading NBFCs and tier-1 banking institutions.",
    achievements: [
      {
        text: "Engineered high-performance web and mobile solutions for 10+ NBFCs and enterprise banking clients",
        metric: "30% Faster Processing"
      },
      {
        text: "Delivered strategic digital lending and onboarding engines for Jio Financial Services and IDBI Bank",
        metric: "Enterprise Tier-1 Impact"
      },
      {
        text: "Integrated RBI-compliant biometrics and Aadhaar-based digital KYC authentication pipelines",
        metric: "100% Security Compliant"
      },
      {
        text: "Collaborated with product managers and UX designers to deliver client features on schedule",
        metric: "98% On-Time Delivery"
      }
    ],
    skills: ["Full Stack Development", "API Integration", "Database Optimization", "React", "Node.js", "Flutter"]
  },
  {
    id: "zee-intern",
    title: "Software Engineer Intern",
    company: "Ezee.ai | Veefin Group",
    location: "Bengaluru, India",
    period: "June 2022 - June 2023",
    type: "past",
    description: "Focused on core API optimizations, database query tuning, and developing internal administrative master-data tooling.",
    achievements: [
      {
        text: "Optimized backend payload serialization and database indices, drastically reducing overall API latency",
        metric: "40% Latency Reduction"
      },
      {
        text: "Built full-stack Dataset Web Application for complex master data management across financial systems",
        metric: "Led to Full-Time Conversion"
      },
      {
        text: "Authored end-to-end integration test suites and technical API documentation",
        metric: "1K+ Daily Client Users"
      }
    ],
    skills: ["Performance Optimization", "Web Development", "REST API Design", "MongoDB", "TypeScript"]
  }
];

export const projectsData: ProjectItem[] = [
  {
    id: "bcms-platform",
    title: "BCMS - Business Correspondent Management System",
    subtitle: "Enterprise Virtual Accounting & AePS Transaction Engine",
    category: "Fintech",
    description: "Comprehensive virtual accounting system for 50,000+ Business Correspondents with real-time AePS biometric transactional integration and ledger reconciliation.",
    longDescription: "BCMS is an enterprise-grade financial management platform designed to empower over 50,000 Business Correspondents operating in semi-urban and rural financial nodes. It processes millions of daily transactions, offering automated commission calculation, instant ledger balancing, biometrically authenticated AePS withdrawals, and real-time fraud monitoring.",
    architectureHighlights: [
      "Micro-frontend architecture using Angular and Flutter web/mobile modules.",
      "High-throughput Node.js microservices processing concurrent AePS financial hooks.",
      "Sharded MongoDB data store with cached Redis operational state.",
      "End-to-end encryption for biometric payloads adhering to RBI security directives."
    ],
    keyDeliverables: [
      "Real-time AePS transaction processing engine",
      "Dynamic ledger balancing & automated commission payout system",
      "Multi-tenant admin dashboard with analytics and risk reporting",
      "Offline-capable mobile client for field correspondents"
    ],
    technologies: [
      { name: "Node.js", proficiency: 95, color: "bg-green-500" },
      { name: "Flutter", proficiency: 92, color: "bg-blue-500" },
      { name: "Angular", proficiency: 88, color: "bg-red-500" },
      { name: "MongoDB", proficiency: 90, color: "bg-emerald-500" }
    ],
    metrics: [
      { label: "Active BCs", value: "50,000+" },
      { label: "Uptime", value: "99.95%" },
      { label: "Txn Latency", value: "< 250ms" }
    ],
    githubUrl: "https://github.com/dhiraj-kumar868",
    featured: true,
    impact: "Powers financial inclusion for over 50K field agents handling high-volume daily transactions across India."
  },
  {
    id: "lend-ezee-platform",
    title: "Lend.ezee Digital Lending Suite",
    subtitle: "End-to-End Loan Origination & Management Engine",
    category: "Fintech",
    description: "Next-gen digital loan origination and underwriting engine powering instant personal and MSME loan workflows for Jio Financial Services & IDBI Bank.",
    longDescription: "Lend.ezee transforms paperless loan origination by orchestrating digital KYC, credit bureau score pulls (CIBIL/Experian), automated document parsing, algorithmic risk modeling, and instant loan disbursement. Built for extreme scalability and auditability.",
    architectureHighlights: [
      "Event-driven architecture for async third-party credit score & e-sign verifications.",
      "React + TypeScript modern UI with state machine workflow management.",
      "RBI compliance vault for encrypted storage of Sensitive Personal Data (SPD).",
      "Sub-second decision engine with configurable credit rule matrix."
    ],
    keyDeliverables: [
      "Paperless digital journey reducing loan processing from 3 days to 5 minutes",
      "Plug-and-play SDK for 10+ NBFC partner integrations",
      "Real-time e-KYC and e-NACH mandate registration",
      "Comprehensive Risk Audit trail module for regulatory compliance"
    ],
    technologies: [
      { name: "React", proficiency: 95, color: "bg-cyan-500" },
      { name: "TypeScript", proficiency: 95, color: "bg-blue-600" },
      { name: "Express.js", proficiency: 90, color: "bg-gray-700" },
      { name: "Oracle SQL", proficiency: 85, color: "bg-red-600" }
    ],
    metrics: [
      { label: "NBFC Clients", value: "10+" },
      { label: "Processing Speed", value: "5 Mins" },
      { label: "Loan Volume", value: "₹500Cr+" }
    ],
    githubUrl: "https://github.com/dhiraj-kumar868",
    featured: true,
    impact: "Cut loan origination processing time by 80% while serving major banking & NBFC entities."
  },
  {
    id: "master-dataset-app",
    title: "Dataset Master Management System",
    subtitle: "High-Performance Administrative Data Pipeline",
    category: "Full-Stack",
    description: "Enterprise web application built to streamline complex master data configuration, versioning, and rule synchronization across multiple banking environments.",
    longDescription: "A specialized platform engineered to eliminate configuration drift across multi-tenant financial microservices. Enables system administrators to modify bank parameter rules, fee structures, interest tiers, and geographic mapping with instantaneous hot-reloading across active nodes.",
    architectureHighlights: [
      "Role-based access control (RBAC) with granular permission trees.",
      "Optimized pagination and inline cell editing supporting 100,000+ data rows.",
      "Audit logs with point-in-time state rollback capabilities.",
      "RESTful API integration with automated schema validation."
    ],
    keyDeliverables: [
      "Dynamic data grid with real-time validation and CSV batch import/export",
      "Automated configuration rollback engine",
      "Visual rule builder for financial fee structures"
    ],
    technologies: [
      { name: "React", proficiency: 95, color: "bg-cyan-500" },
      { name: "Node.js", proficiency: 90, color: "bg-green-600" },
      { name: "Tailwind CSS", proficiency: 92, color: "bg-sky-500" },
      { name: "MongoDB", proficiency: 88, color: "bg-emerald-600" }
    ],
    metrics: [
      { label: "Data Volume", value: "100K+ Rows" },
      { label: "Sync Time", value: "Instant" },
      { label: "User Satisfaction", value: "99%" }
    ],
    githubUrl: "https://github.com/dhiraj-kumar868",
    featured: true,
    impact: "Streamlined multi-tenant environment configurations, saving hundreds of engineering support hours."
  },
  {
    id: "aeps-biometric-gateway",
    title: "AePS Biometric Authentication Engine",
    subtitle: "RBI Compliant Aadhaar Payment Service Bridge",
    category: "Mobile",
    description: "Cross-platform mobile and web SDK for Aadhaar Enabled Payment System (AePS) with STQC-certified biometric scanner drivers.",
    longDescription: "Designed for seamless biometric verification, this library abstracts complex USB device communication across Android and web browsers to capture and verify fingerprint signatures directly against UIDAI servers with low latency.",
    architectureHighlights: [
      "Hardware abstraction layer for Morpho, Mantra, and Startek scanners.",
      "High security ISO 19794-2 biometric template format conversion.",
      "Hardware-level TLS 1.3 payload encryption."
    ],
    keyDeliverables: [
      "Flutter cross-platform biometric scanner plugin",
      "Web-USB browser driver connector for desktop terminals",
      "High security tokenization pipeline"
    ],
    technologies: [
      { name: "Flutter", proficiency: 95, color: "bg-blue-500" },
      { name: "Dart", proficiency: 90, color: "bg-cyan-600" },
      { name: "Android Studio", proficiency: 85, color: "bg-green-500" }
    ],
    metrics: [
      { label: "Hardware Support", value: "5+ Brands" },
      { label: "Match Speed", value: "< 1.2s" },
      { label: "Reliability", value: "99.8%" }
    ],
    featured: false,
    impact: "Enabled micro-ATM terminal hardware integration across remote banking hubs."
  }
];

export const skillsData: SkillItem[] = [
  // Languages & Frameworks
  { name: 'JavaScript (ES6+)', level: 95, category: 'languages', featured: true },
  { name: 'TypeScript', level: 95, category: 'languages', featured: true },
  { name: 'React.js', level: 95, category: 'languages', featured: true },
  { name: 'Node.js', level: 92, category: 'languages', featured: true },
  { name: 'Express.js', level: 90, category: 'languages', featured: false },
  { name: 'Flutter & Dart', level: 92, category: 'languages', featured: true },
  { name: 'Angular', level: 88, category: 'languages', featured: false },
  { name: 'Java', level: 88, category: 'languages', featured: false },
  { name: 'HTML5 & CSS3', level: 95, category: 'frontend', featured: false },
  { name: 'Tailwind CSS', level: 95, category: 'frontend', featured: true },
  { name: 'Bootstrap / Material UI', level: 90, category: 'frontend', featured: false },
  
  // Backend & DB
  { name: 'RESTful Microservices', level: 95, category: 'backend', featured: true },
  { name: 'MongoDB & Mongoose', level: 88, category: 'backend', featured: true },
  { name: 'Oracle SQL / MySQL', level: 85, category: 'backend', featured: false },
  { name: 'GraphQL & Apollo', level: 82, category: 'backend', featured: false },
  { name: 'WebSockets & Socket.io', level: 85, category: 'backend', featured: false },

  // State Management & Architecture
  { name: 'Redux Toolkit / Context API', level: 95, category: 'state', featured: true },
  { name: 'RxJS & NgRx', level: 88, category: 'state', featured: false },
  { name: 'Bloc & Provider (Flutter)', level: 92, category: 'state', featured: false },
  { name: 'System Design & Architecture', level: 90, category: 'state', featured: true },

  // DevOps & Tools
  { name: 'Git & GitHub / GitLab', level: 95, category: 'tools', featured: true },
  { name: 'Postman & API Testing', level: 95, category: 'tools', featured: false },
  { name: 'VS Code & IntelliJ', level: 95, category: 'tools', featured: false },
  { name: 'Docker & CI/CD Pipelines', level: 85, category: 'tools', featured: true }
];

export const educationData: EducationItem[] = [
  {
    degree: "Bachelor of Technology in Computer Science & Engineering",
    institution: "Kalinga Institute of Industrial Technology (KIIT)",
    location: "Bhubaneswar, Odisha, India",
    period: "July 2019 - May 2023",
    score: "9.27 / 10.0",
    scoreType: "CGPA",
    honors: "First Class with Distinction",
    achievements: [
      "Awarded prestigious Study in India (SII) Merit Scholarship for full academic excellence",
      "Consistently ranked in the top percentile of the computer science department",
      "Organized national-level hackathons and technical symposiums as student lead",
      "Specialized in Software Engineering, Data Structures, Algorithms, and Cloud Architectures"
    ]
  },
  {
    degree: "+2 High School (Intermediate of Science)",
    institution: "Kantipur Secondary School",
    location: "Biratnagar, Nepal",
    period: "2017 - 2019",
    score: "84%",
    scoreType: "Percentage",
    honors: "Distinction",
    achievements: [
      "Deep foundation in Physics, Chemistry, and Advanced Mathematics",
      "Winner of regional science quiz and logical reasoning competitions"
    ]
  },
  {
    degree: "Secondary Education Examination (SEE)",
    institution: "Bal Bodh Secondary School",
    location: "Kanchanrup, Saptari, Nepal",
    period: "2017",
    score: "87.5%",
    scoreType: "Percentage",
    honors: "Board Merit Distinction",
    achievements: [
      "Highest academic scorer in school board examinations"
    ]
  }
];

export const certificationsData: CertificationItem[] = [
  {
    id: "star-achiever-2024",
    title: "Star Achiever of the Year 2024",
    issuer: "Ezee.ai | Veefin Group",
    date: "2025",
    type: "award",
    description: "Awarded top honor for outstanding technical leadership, architecting high-impact fintech solutions, and exemplary team mentorship.",
    badge: "🏆 Star Achiever Award"
  },
  {
    id: "cert-react-dev",
    title: "Certified React Developer",
    issuer: "Knowledge Gate",
    date: "2025",
    type: "certification",
    description: "Professional certification mastering advanced React pattern design, SSR/CSR architectures, performance hooks, and state management.",
    badge: "📜 React Specialist"
  },
  {
    id: "cert-java-fullstack",
    title: "Full Stack Java Developer",
    issuer: "Naresh i Technologies",
    date: "2022",
    type: "certification",
    description: "Comprehensive mastery over enterprise Java, Spring Boot, microservices architecture, and SQL database design.",
    badge: "📜 Full-Stack Java"
  },
  {
    id: "cert-flutter-dev",
    title: "Android App Developer (Flutter)",
    issuer: "ThinkNEXT Technologies",
    date: "2021",
    type: "certification",
    description: "Specialized certification in cross-platform mobile development with Flutter, Dart state management, and native plugin bridges.",
    badge: "📜 Mobile Developer"
  },
  {
    id: "sii-scholarship",
    title: "SII Merit Scholarship Recipient",
    issuer: "Ministry of Education & KIIT",
    date: "2019-2023",
    type: "scholarship",
    description: "Full merit scholarship covering four-year engineering tuition and university sponsorship.",
    badge: "🎓 Merit Scholar"
  }
];

export const hackerRankData: HackerRankAchievement[] = [
  {
    title: "Problem Solving (Intermediate & Advanced)",
    stars: 5,
    description: "5-Star rating solving complex graph algorithms, dynamic programming, and data structure challenges."
  },
  {
    title: "Java & Object Oriented Design",
    stars: 5,
    description: "5-Star rating demonstrating expert mastery of core Java, concurrency, and OOP patterns."
  },
  {
    title: "JavaScript & ES6 Functional Patterns",
    stars: 5,
    description: "Certified expertise in modern asynchronous JavaScript, closures, and DOM events."
  },
  {
    title: "SQL & Relational Database Queries",
    stars: 5,
    description: "Mastery of complex SQL joins, subqueries, and database indexing optimization."
  }
];

export const whatsAppTemplatesData: WhatsAppTemplate[] = [
  {
    id: "hiring",
    label: "💼 Hiring / Full-Time Role",
    message: "Hi Dhiraj, I came across your impressive portfolio! We have an exciting Senior Software Engineer opportunity at our company and would love to discuss your experience in Fintech/Full-Stack development.",
    icon: "Briefcase"
  },
  {
    id: "project",
    label: "🚀 Freelance / Consulting",
    message: "Hi Dhiraj, I reviewed your work on Lend.ezee and BCMS. I have a custom fintech/web software project and would like to consult with you on architectural setup and development.",
    icon: "Code"
  },
  {
    id: "quick_chat",
    label: "☕ Technical Connect / Networking",
    message: "Hi Dhiraj, I'm reaching out from LinkedIn/Portfolio. I really liked your work and would love to connect for a quick tech chat!",
    icon: "MessageSquare"
  }
];
