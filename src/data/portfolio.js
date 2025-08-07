// Personal Information
export const personalInfo = {
  name: "Ishimwe Divin",
  title: "IT Student & Network Security Enthusiast", 
  subtitle: "BSc in IT – Networks & Communication Systems",
  location: "Kigali, Rwanda",
  email: "ishimwedivin2@gmail.com",
  phone: "+250 788 955 906",
  linkedin: "https://www.linkedin.com/in/ishimwedivin2/",
  github: "https://github.com/ishimwedivin2/",
  portfolio: "https://ishimwedivin.vercel.app",
  avatar: "/avatar.jpg", // Add your photo here
  bio: "I'm an IT student passionate about solving real-world problems through tech. I enjoy building full-stack apps, deploying secure servers, and helping users with technical issues. I learn fast, adapt quickly, and love collaborating in tech environments.",
  expectedGraduation: "2025",
  university: "Adventist University of Central Africa (AUCA)",
  resume: "/resume.pdf",
  social: {
    github: "https://github.com/ishimwedivin2/",
    linkedin: "https://www.linkedin.com/in/ishimwedivin2/",
    email: "mailto:ishimwedivin2@gmail.com"
  }
};

// Education
export const education = [
  {
    id: 1,
    degree: "BSc in IT – Networks & Communication Systems",
    institution: "Adventist University of Central Africa (AUCA)",
    location: "Kigali, Rwanda",
    period: "2022 - 2026",
    expectedGraduation: "2026",
    status: "Expected Graduation",
    description: "Comprehensive program covering network infrastructure, cybersecurity, telecommunications, and system administration with hands-on laboratory experience.",
    icon: "🎓"
  }
];

// Certifications
export const certifications = [
  {
    id: 1,
    name: "Advanced Network Operations",
    issuer: "ISOC x AUCA",
    year: "2024",
    description: "Advanced training in network operations, security protocols, and infrastructure management.",
    icon: "🛡️"
  },
  {
    id: 2,
    name: "Cisco Network Essentials",
    issuer: "Cisco Academy", 
    year: "2024",
    description: "Foundational networking concepts, routing, switching, and network troubleshooting.",
    icon: "🌐"
  },
  {
    id: 3,
    name: "English Proficiency Certificate",
    issuer: "AUCA",
    year: "2024",
    description: "Professional level English proficiency certification for technical communication.",
    icon: "🗣️"
  }
];

// Experience
export const experience = [
  {
    id: 1,
    title: "IT Intern",
    company: "IDA Technology",
    period: "Sep – Dec 2024",
    location: "Kigali, Rwanda",
    type: "Internship",
    description: "Gained hands-on experience in Linux server management, software development, and technical troubleshooting in a professional IT environment.",
    responsibilities: [
      "Managed Linux servers, updates, and troubleshooting",
      "Helped build internal tools with Spring Boot + React",
      "Implemented secure server configurations and monitoring",
      "Provided technical support and documentation"
    ],
    skills: ["Linux", "Spring Boot", "React", "Git", "Server Management"],
    technologies: ["Linux", "Spring Boot", "React", "Git", "Server Management"],
    icon: "💼"
  }
];

// Skills with categories and proficiency levels
export const skills = [
  {
    category: "Network & Security",
    items: [
      { name: "TCP/IP Networking", level: 90, icon: "🌐" },
      { name: "pfSense Firewall", level: 85, icon: "�️" },
      { name: "Snort IDS/IPS", level: 80, icon: "�" },
      { name: "ModSecurity WAF", level: 85, icon: "⚡" },
      { name: "Linux Security", level: 88, icon: "🔒" },
      { name: "UFW Firewall", level: 85, icon: "🔥" },
      { name: "Network Analysis", level: 82, icon: "�" }
    ]
  },
  {
    category: "Backend Development", 
    items: [
      { name: "Java", level: 88, icon: "☕" },
      { name: "Spring Boot", level: 85, icon: "🍃" },
      { name: "REST APIs", level: 90, icon: "�" },
      { name: "PostgreSQL", level: 80, icon: "🐘" },
      { name: "MySQL", level: 82, icon: "🗄️" },
      { name: "PHP", level: 75, icon: "�" },
      { name: "OOP Design", level: 88, icon: "🏗️" }
    ]
  },
  {
    category: "Frontend Development",
    items: [
      { name: "React.js", level: 85, icon: "⚛️" },
      { name: "JavaScript", level: 82, icon: "�" },
      { name: "HTML/CSS", level: 88, icon: "�" },
      { name: "Responsive Design", level: 85, icon: "📱" },
      { name: "UI/UX Design", level: 75, icon: "🎨" },
      { name: "Multilingual Apps", level: 80, icon: "🌍" },
      { name: "Modern CSS", level: 82, icon: "💫" }
    ]
  },
  {
    category: "Infrastructure & DevOps",
    items: [
      { name: "Docker", level: 85, icon: "�" },
      { name: "Linux Administration", level: 90, icon: "�" },
      { name: "Nginx/Apache", level: 82, icon: "🌐" },
      { name: "Traefik", level: 78, icon: "🔀" },
      { name: "Git/Version Control", level: 88, icon: "�" },
      { name: "Bash Scripting", level: 80, icon: "💻" },
      { name: "Cloud Basics", level: 75, icon: "☁️" }
    ]
  }
];

// Projects
export const projects = [
  {
    id: 1,
    title: "Grocery Management System",
    description: "Full-stack application with advanced authentication, role-based access control, and multilingual support.",
    longDescription: "A comprehensive grocery management system built with Spring Boot backend and React frontend. Features secure authentication, role-based access control, multilingual UI support, and complete CRUD operations for inventory management.",
    image: "/images/img.jpg",
    technologies: ["Spring Boot", "React", "PostgreSQL", "JWT Auth", "REST APIs", "Multilingual Support"],
    tags: ["Spring Boot", "React", "PostgreSQL", "JWT", "Multilingual"],
    features: [
      "Secure authentication & authorization",
      "Role-based access control",
      "Multilingual UI (English/Kinyarwanda)",
      "Real-time inventory tracking",
      "Advanced search & filtering",
      "Responsive design"
    ],
    liveDemo: "#", // Add your live demo link
    demo: "#",
    github: "#", // Add your GitHub repo link
    status: "Completed",
    type: "Full-Stack Application",
    category: "Full Stack",
    featured: true
  },
  {
    id: 2,
    title: "Dockerized PHP Portfolio with Traefik",
    description: "Containerized portfolio deployment with advanced networking, SSL termination, and security configurations.",
    longDescription: "A containerized portfolio solution using Docker, Traefik reverse proxy, and comprehensive security measures including SSL certificates, firewall configuration, and HTTPS enforcement.",
    image: "/projects/docker-portfolio.jpg",
    technologies: ["PHP", "MySQL", "Docker", "Traefik", "Nginx", "UFW", "SSL/TLS"],
    tags: ["Docker", "PHP", "MySQL", "Traefik", "SSL"],
    features: [
      "Docker containerization",
      "Traefik reverse proxy",
      "Automatic SSL certificates",
      "UFW firewall configuration", 
      "HTTPS enforcement",
      "Production-ready deployment"
    ],
    liveDemo: "https://ishimwedivin.vercel.app",
    demo: "https://ishimwedivin.vercel.app",
    github: "#", // Add your GitHub repo link
    status: "Deployed",
    type: "DevOps & Deployment",
    category: "DevOps",
    featured: true
  },
  {
    id: 3,
    title: "Cybersecurity Labs",
    description: "Comprehensive security testing environment with WAF, IDS/IPS, and firewall implementations.",
    longDescription: "Advanced cybersecurity laboratory setup featuring Web Application Firewall (ModSecurity), Intrusion Detection/Prevention Systems (Snort), pfSense firewall configuration, and HTTPS implementation on Ubuntu/Kali Linux.",
    image: "/projects/security-lab.jpg",
    technologies: ["ModSecurity", "Snort", "pfSense", "Ubuntu", "Kali Linux", "Docker", "Network Security"],
    tags: ["ModSecurity", "Snort", "pfSense", "Security", "Linux"],
    features: [
      "ModSecurity WAF implementation",
      "Snort IDS/IPS configuration",
      "pfSense firewall setup",
      "Attack simulation & testing",
      "Server hardening techniques",
      "Docker-based lab deployment"
    ],
    liveDemo: null,
    demo: null,
    github: "#", // Add if public
    status: "Ongoing",
    type: "Security Research",
    category: "Cybersecurity",
    featured: true
  }
];

// Career Goals & Languages
export const careerGoals = {
  lookingFor: ["Remote internships", "Freelance work", "Open-source contribution"],
  focusAreas: ["Network Security", "Full-stack Development", "DevOps"],
  interests: [
    "Cybersecurity research and implementation",
    "Cloud infrastructure and automation", 
    "Full-stack web development",
    "Linux system administration",
    "Network architecture and security"
  ]
};

// Languages
export const languages = [
  { name: "English", level: "Proficient", icon: "🇺🇸" },
  { name: "Kinyarwanda", level: "Native", icon: "🇷🇼" },
  { name: "German", level: "Basic", icon: "🇩🇪" }
];

// Articles (Blog posts)
export const articles = [
  {
    id: 1,
    title: "Building Secure Infrastructure with Docker and Traefik",
    excerpt: "A comprehensive guide to deploying secure containerized applications with automatic SSL certificates and reverse proxy configuration.",
    date: "2024-12-15",
    readTime: "8 min read",
    category: "DevOps",
    tags: ["Docker", "Traefik", "SSL", "Security"],
    link: "#",
    featured: true,
    published: true
  },
  {
    id: 2,
    title: "Implementing Network Security with pfSense and Snort",
    excerpt: "Learn how to build a comprehensive network security solution using pfSense firewall and Snort IDS/IPS for threat detection.",
    date: "2024-11-28",
    readTime: "12 min read",
    category: "Network Security",
    tags: ["pfSense", "Snort", "Network Security", "IDS/IPS"],
    link: "#",
    featured: true,
    published: true
  },
  {
    id: 3,
    title: "Full-Stack Development with Spring Boot and React",
    excerpt: "Building modern web applications with secure authentication, role-based access control, and multilingual support.",
    date: "2024-10-20",
    readTime: "10 min read",
    category: "Web Development",
    tags: ["Spring Boot", "React", "Authentication", "Full Stack"],
    link: "#",
    featured: false,
    published: true
  }
];
