export const navItems = [
  { name: "About", link: "#about" },
  { name: "Skills", link: "#skills" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for psychology.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Actively seeking Full-Time Software Engineer roles",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "CMAP Data Export & Reporting",
    des: "Automated curriculum-mapping exports with PHP(Laravel) + MySQL, generating analysis-ready Excel reports and cutting manual work for instructors.",
    img: "/cmap.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    skills: ["PHP", "Tailwind CSS", "Laravel", "node.js", "MySQL"],
    link: "https://curriculum.ok.ubc.ca/",
  },
  {
    id: 2,
    title: "HelpMe: Confluence → AI Chatbot Pipeline",
    des: "Python pipeline that ingests Confluence content into a pgvector-backed store to power context-aware Q&A with secure token-based access.",
    img: "/helpme.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    skills: ["React", "TypeScript", "Docker", "PostgreSQL", "Python"],
    link: "https://coursehelp.ubc.ca/courses",
  },
  {
    id: 3,
    title: "Exam Analytics Dashboard",
    des: "Full-stack dashboard for assessment insights—React/Next.js UI, Node.js APIs, and SQL queries for fast, actionable faculty analytics.",
    img: "/ct3.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    skills: [
      "React",
      "Tailwind CSS",
      "TypeScript",
      "Three.js",
      "PHP",
      "MySQL",
      "PHPUnit",
      "Jest",
    ],
    link: "https://github.com/UBCO-COSC499-S2025/team-3-capstone-ct3/tree/master",
  },
  {
    id: 4,
    title: "ServiceNow Ticket Insights",
    des: "Data pipeline + visualizations to track helpdesk volume, resolution time, and onboarding issues; informed process improvements.",
    img: "/serviceNow.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    skills: [
      "Python",
      "MS Excel",
      "Power BI",
      "ServiceNow",
      "Python libraries for analytics",
    ],
    link: "https://github.com/chawla971",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Full-stack Programmer CMAP (Co-op)",
    desc: "Built an automated data-export feature for CMAP (PHP/OOP, MySQL) that assembles program/course data into analysis-ready Excel reports per stakeholder needs—eliminating manual spreadsheets and accelerating curriculum planning",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Learning Technology Rover (Co-op)",
    desc: "Delivered multi-channel ed-tech support and analyzed 500+ ServiceNow tickets (Python/Excel) into dashboards that cut resolution time 30%—while leading a WCAG-compliant CTL website redesign to improve navigation and accessibility.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Software Engineer Intern",
    desc: "Built modular MVVM React/TypeScript UIs and C#/.NET REST APIs in Agile sprints for bike & permit apps—implementing DI, structured logging, and resilient error handling on Azure to improve maintainability, observability, and scalability.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
];

export const skills = [
  {
    category: "Frontend",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Jest"],
  },
  {
    category: "Backend",
    technologies: ["Node.js", "PHP", "C#", ".NET", "Laravel", "REST APIs"],
  },
  {
    category: "Data & Analytics",
    technologies: ["Python", "Excel", "Power BI", "MySQL", "postgreSQL"],
  },
  {
    category: "Tools & Others",
    technologies: ["Git", "AWS", "Swagger", "Cursor", "Github Actions"],
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/chawla971",
  },
  {
    id: 2,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/sahil-chawla-971sai/",
  },
];
