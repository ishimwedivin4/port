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
    category: "Network & Security",
    items: [
      { name: "pfSense Firewall", level: 85, icon: "🛡️" },
      { name: "Snort IDS/IPS", level: 80, icon: "🔍" },
      { name: "Network Analysis", level: 90, icon: "📊" },
      { name: "Wireshark", level: 85, icon: "🔬" },
      { name: "Cybersecurity", level: 80, icon: "🔒" },
      { name: "Network Configuration", level: 85, icon: "🌐" },
      { name: "VPN & Tunneling", level: 75, icon: "🔐" }
    ]
  },
  {
    category: "Backend Development",
    items: [
      { name: "Spring Boot", level: 85, icon: "🍃" },
      { name: "Java", level: 80, icon: "☕" },
      { name: "Node.js", level: 75, icon: "🟢" },
      { name: "PostgreSQL", level: 75, icon: "🐘" },
      { name: "MySQL", level: 70, icon: "🗄️" },
      { name: "RESTful APIs", level: 85, icon: "🔗" },
      { name: "Microservices", level: 70, icon: "🏗️" }
    ]
  },
  {
    category: "Frontend Development",
    items: [
      { name: "React.js", level: 90, icon: "⚛️" },
      { name: "JavaScript/ES6+", level: 85, icon: "🟨" },
      { name: "HTML5 & CSS3", level: 95, icon: "🌐" },
      { name: "Tailwind CSS", level: 80, icon: "🎨" },
      { name: "TypeScript", level: 75, icon: "🔷" },
      { name: "Responsive Design", level: 90, icon: "📱" },
      { name: "Vite/Webpack", level: 70, icon: "⚡" }
    ]
  },
  {
    category: "Infrastructure & DevOps",
    items: [
      { name: "Linux Administration", level: 90, icon: "🐧" },
      { name: "Docker", level: 80, icon: "🐳" },
      { name: "Git & GitHub", level: 95, icon: "📚" },
      { name: "Nginx", level: 75, icon: "⚡" },
      { name: "Traefik", level: 70, icon: "🔀" },
      { name: "AWS/Cloud", level: 65, icon: "☁️" },
      { name: "CI/CD", level: 60, icon: "🔄" }
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
    description: "Modern task management application built with React, featuring drag-and-drop functionality, real-time updates, and responsive design.",
    image: "/projects/react-tasks.jpg",
    tags: ["React", "JavaScript", "CSS3", "LocalStorage", "Responsive"],
    github: "https://github.com/divinishimwe/react-task-manager",
    demo: "https://tasks.divinishimwe.dev",
    featured: false,
    category: "Frontend"
  },
  {
    id: 6,
    title: "Network Security Lab",
    description: "Virtual network lab setup for testing security configurations, penetration testing, and network analysis. Includes multiple VLANs and security tools.",
    image: "/projects/security-lab.jpg",
    tags: ["VirtualBox", "pfSense", "Kali Linux", "Network Security", "Penetration Testing"],
    github: "https://github.com/divinishimwe/network-security-lab",
    demo: null,
    featured: false,
    category: "Network"
  }
];

export const education = [
  {
    id: 1,
    degree: "Bachelor of Science in Network and Communication Systems",
    institution: "Adventist University of Central Africa (AUCA)",
    location: "Kigali, Rwanda",
    period: "2021 - 2025",
    description: "Comprehensive program covering network infrastructure, cybersecurity, telecommunications, and system administration with hands-on laboratory experience."
  }
];

export const experience = [
  {
    id: 1,
    title: "Network Systems Intern",
    company: "Tech Solutions Rwanda",
    location: "Kigali, Rwanda",
    period: "Jun 2023 - Aug 2023",
    description: "Assisted in network infrastructure maintenance, configured enterprise firewalls, and supported system administration tasks for small to medium businesses.",
    skills: ["pfSense", "Network Configuration", "System Administration", "Technical Support"]
  },
  {
    id: 2,
    title: "Full-Stack Developer (Freelance)",
    company: "Independent Projects",
    location: "Remote",
    period: "2022 - Present",
    description: "Developed web applications using Spring Boot and React.js, implemented secure authentication systems, and deployed applications using Docker and modern DevOps practices.",
    skills: ["Spring Boot", "React.js", "PostgreSQL", "Docker", "AWS"]
  }
];

export const articles = [
  {
    id: 1,
    title: "Building Secure Network Infrastructure with pfSense",
    excerpt: "A comprehensive guide to setting up enterprise-grade network security using pfSense firewall, including VPN configuration and traffic monitoring.",
    date: "2024-03-15",
    readTime: "8 min read",
    category: "Network Security",
    tags: ["pfSense", "Network Security", "VPN", "Firewall"],
    link: "https://blog.divinishimwe.dev/pfsense-security-guide",
    featured: true,
    published: false
  },
  {
    id: 2,
    title: "Full-Stack Development with Spring Boot and React",
    excerpt: "Learn how to build modern web applications by combining the power of Spring Boot backend with React frontend, including authentication and deployment.",
    date: "2024-02-28",
    readTime: "12 min read",
    category: "Web Development",
    tags: ["Spring Boot", "React", "Full Stack", "Authentication"],
    link: "https://blog.divinishimwe.dev/spring-boot-react-guide",
    featured: true,
    published: false
  },
  {
    id: 3,
    title: "Docker Containerization for Java Applications",
    excerpt: "Master containerization of Java applications with Docker, including best practices for Spring Boot applications and multi-stage builds.",
    date: "2024-01-20",
    readTime: "10 min read",
    category: "DevOps",
    tags: ["Docker", "Java", "Spring Boot", "Containerization"],
    link: "https://blog.divinishimwe.dev/docker-java-guide",
    featured: false,
    published: false
  }
];
