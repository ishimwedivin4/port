export const personalInfo = {
  name: "Divin Ishimwe",
  title: "Network & Software Developer",
  tagline: "Bridging Systems and Code | Networks | Java & React | Linux Wizard",
  email: "divin.ishimwe@example.com",
  location: "Kigali, Rwanda",
  bio: "I'm a passionate Network and Communication Systems student at AUCA with a deep love for software development. I bridge the gap between network infrastructure and modern applications, specializing in Spring Boot, React.js, and system administration. My journey spans from configuring enterprise firewalls to building full-stack applications, always with security and performance in mind.",
  resume: "/resume.pdf",
  social: {
    github: "https://github.com/divinishimwe",
    linkedin: "https://linkedin.com/in/divinishimwe",
    email: "mailto:divin.ishimwe@example.com"
  }
};

export const skills = [
  {
    category: "Frontend Development",
    items: [
      { name: "React.js", level: 90, icon: "⚛️" },
      { name: "JavaScript/ES6+", level: 85, icon: "🟨" },
      { name: "HTML5 & CSS3", level: 95, icon: "🌐" },
      { name: "Tailwind CSS", level: 80, icon: "🎨" },
      { name: "Responsive Design", level: 90, icon: "📱" }
    ]
  },
  {
    category: "Backend Development",
    items: [
      { name: "Spring Boot", level: 85, icon: "🍃" },
      { name: "Java", level: 80, icon: "☕" },
      { name: "PostgreSQL", level: 75, icon: "🐘" },
      { name: "MySQL", level: 70, icon: "🗄️" },
      { name: "RESTful APIs", level: 85, icon: "🔗" }
    ]
  },
  {
    category: "Infrastructure & DevOps",
    items: [
      { name: "Docker", level: 75, icon: "🐳" },
      { name: "Linux Administration", level: 85, icon: "🐧" },
      { name: "Nginx", level: 70, icon: "⚡" },
      { name: "Traefik", level: 65, icon: "🔀" },
      { name: "Git & GitHub", level: 90, icon: "📚" }
    ]
  },
  {
    category: "Network & Security",
    items: [
      { name: "pfSense Firewall", level: 80, icon: "🛡️" },
      { name: "Snort IDS/IPS", level: 75, icon: "🔍" },
      { name: "Network Analysis", level: 85, icon: "📊" },
      { name: "Cybersecurity", level: 70, icon: "🔒" },
      { name: "Network Configuration", level: 80, icon: "🌐" }
    ]
  }
];

export const projects = [
  {
    id: 1,
    title: "Spring Boot Portfolio CRUD",
    description: "Full-stack portfolio management system with user authentication, project CRUD operations, and responsive design. Built with Spring Boot backend and React frontend.",
    image: "/projects/portfolio-crud.jpg",
    tags: ["Spring Boot", "React", "PostgreSQL", "JWT", "Bootstrap"],
    github: "https://github.com/divinishimwe/portfolio-crud",
    demo: null,
    featured: true,
    category: "Full Stack"
  },
  {
    id: 2,
    title: "Enterprise Firewall with pfSense",
    description: "Configured and deployed pfSense firewall for small business network. Implemented VLANs, traffic shaping, VPN access, and comprehensive security policies.",
    image: "/projects/pfsense-firewall.jpg",
    tags: ["pfSense", "Network Security", "VPN", "VLAN", "Traffic Shaping"],
    github: null,
    demo: null,
    featured: true,
    category: "Network Security"
  },
  {
    id: 3,
    title: "Intrusion Detection System",
    description: "Deployed Snort IDS/IPS to monitor network traffic and detect potential security threats. Created custom rules and integrated with log analysis tools.",
    image: "/projects/snort-ids.jpg",
    tags: ["Snort", "IDS/IPS", "Network Monitoring", "Security Analysis", "Linux"],
    github: "https://github.com/divinishimwe/snort-config",
    demo: null,
    featured: true,
    category: "Cybersecurity"
  },
  {
    id: 4,
    title: "Dockerized PHP Portfolio",
    description: "Multi-container PHP application with MySQL database, Nginx web server, and Traefik reverse proxy. Fully containerized development and production environment.",
    image: "/projects/docker-portfolio.jpg",
    tags: ["Docker", "PHP", "MySQL", "Nginx", "Traefik", "Docker Compose"],
    github: "https://github.com/divinishimwe/docker-php-portfolio",
    demo: "https://portfolio.divinishimwe.dev",
    featured: false,
    category: "DevOps"
  },
  {
    id: 5,
    title: "React Task Management App",
    description: "Modern task management application with drag-and-drop functionality, real-time updates, and responsive design built with React and local storage.",
    image: "/projects/task-manager.jpg",
    tags: ["React", "JavaScript", "Local Storage", "CSS3", "Responsive"],
    github: "https://github.com/divinishimwe/react-task-manager",
    demo: "https://tasks.divinishimwe.dev",
    featured: false,
    category: "Frontend"
  },
  {
    id: 6,
    title: "Network Monitoring Dashboard",
    description: "Real-time network monitoring dashboard displaying bandwidth usage, device status, and traffic analysis. Built with React and network monitoring APIs.",
    image: "/projects/network-dashboard.jpg",
    tags: ["React", "Network APIs", "Charts.js", "Real-time", "Monitoring"],
    github: "https://github.com/divinishimwe/network-monitor",
    demo: null,
    featured: false,
    category: "Network"
  }
];

export const articles = [
  {
    id: 1,
    title: "Setting up pfSense for Small Business Networks",
    excerpt: "A comprehensive guide to configuring pfSense firewall for small business environments, including VLAN setup, traffic shaping, and VPN configuration.",
    date: "2024-12-15",
    readTime: "8 min read",
    tags: ["pfSense", "Network Security", "Small Business"],
    published: true,
    slug: "pfsense-small-business-setup"
  },
  {
    id: 2,
    title: "Dockerizing Spring Boot Applications",
    excerpt: "Learn how to containerize Spring Boot applications with Docker, including multi-stage builds, environment configuration, and production best practices.",
    date: "2024-11-28",
    readTime: "12 min read",
    tags: ["Docker", "Spring Boot", "DevOps"],
    published: true,
    slug: "dockerizing-spring-boot-apps"
  },
  {
    id: 3,
    title: "Building Intrusion Detection Systems with Snort",
    excerpt: "Step-by-step guide to deploying and configuring Snort IDS for network security monitoring, including custom rule creation and log analysis.",
    date: "2024-11-10",
    readTime: "15 min read",
    tags: ["Snort", "IDS", "Network Security", "Linux"],
    published: true,
    slug: "snort-ids-setup-guide"
  },
  {
    id: 4,
    title: "React Best Practices for Modern Web Development",
    excerpt: "Essential React patterns and practices for building scalable, maintainable web applications, including hooks, performance optimization, and state management.",
    date: "2024-10-22",
    readTime: "10 min read",
    tags: ["React", "JavaScript", "Best Practices"],
    published: false,
    slug: "react-best-practices-2024"
  }
];

export const experience = [
  {
    id: 1,
    title: "Network Systems Intern",
    company: "TechCorp Rwanda",
    location: "Kigali, Rwanda",
    period: "June 2024 - August 2024",
    description: "Assisted in network infrastructure management, configured routers and switches, and supported cybersecurity initiatives.",
    skills: ["Network Configuration", "Cisco Equipment", "Network Troubleshooting"]
  },
  {
    id: 2,
    title: "Web Development Freelancer",
    company: "Self-Employed",
    location: "Remote",
    period: "January 2024 - Present",
    description: "Developed custom web applications for local businesses using React, Spring Boot, and modern web technologies.",
    skills: ["React", "Spring Boot", "PostgreSQL", "Client Communication"]
  }
];

export const education = [
  {
    id: 1,
    degree: "Bachelor's in Network and Communication Systems",
    institution: "Adventist University of Central Africa (AUCA)",
    location: "Kigali, Rwanda",
    period: "2022 - 2026 (Expected)",
    description: "Focusing on network infrastructure, cybersecurity, and system administration with additional coursework in software development."
  }
];
