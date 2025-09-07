<div align="center">
  <br />
    <img src="https://github.com/chawla971/portfolio/assets/151519281/c6ca3c03-6cb7-4f67-a9b9-a73da5bfa0d8" alt="Sahil Chawla Portfolio Banner">
  <br />

  <div>
    <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
    <img src="https://img.shields.io/badge/-React-black?style=for-the-badge&logoColor=white&logo=react&color=61DAFB" alt="react" />
    <img src="https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="typescript" />
    <img src="https://img.shields.io/badge/-Three_JS-black?style=for-the-badge&logoColor=white&logo=threedotjs&color=000000" alt="three.js" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
    <img src="https://img.shields.io/badge/-PHP-black?style=for-the-badge&logoColor=white&logo=php&color=777BB4" alt="php" />
    <img src="https://img.shields.io/badge/-Python-black?style=for-the-badge&logoColor=white&logo=python&color=3776AB" alt="python" />
  </div>

  <h3 align="center">Sahil Chawla's Portfolio</h3>

   <div align="center">
     A modern, interactive portfolio showcasing my journey as a Software Engineer and my passion for technology, psychology, and creative problem-solving.
    </div>
</div>

## 📋 <a name="table">Table of Contents</a>

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)
5. 🕸️ [Code Examples](#snippets)
6. 🔗 [Connect With Me](#links)
7. 🚀 [About This Portfolio](#more)

## <a name="introduction">🤖 Introduction</a>

Welcome to my personal portfolio! This is a modern, interactive showcase of my journey as a Software Engineer, built with Next.js, Three.js, and Framer Motion. 

As a tech enthusiast with a passion for psychology, I've created this portfolio to demonstrate not just my technical skills, but also my personality and interests. The site features:

- **Interactive 3D elements** that bring the experience to life
- **Personal project showcases** highlighting my real-world experience
- **Monthly picks section** where I share my current favorite anime and music
- **Dynamic animations** that create an engaging user experience
- **Responsive design** that works seamlessly across all devices

This portfolio represents my commitment to continuous learning and my belief that technology should be both functional and delightful to use.

**Currently seeking Full-Time Software Engineer opportunities** - let's connect and build something amazing together!

## <a name="tech-stack">⚙️ Tech Stack</a>

### Portfolio Website
- **Next.js** - React framework for production
- **React** - Component-based UI library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Three.js** - 3D graphics library
- **Framer Motion** - Animation library

### My Overall Tech Stack
*Technologies I've used across various projects*

**Frontend & UI**
- React, Next.js, TypeScript, Tailwind CSS, Jest

**Backend & APIs**
- Node.js, PHP, C#, .NET, Laravel, REST APIs

**Data & Analytics**
- Python, MySQL, PostgreSQL, Excel, Power BI

**Tools & DevOps**
- Git, AWS, Docker, Swagger, GitHub Actions

## <a name="features">🔋 Features</a>

👉 **Hero Section**: Captivating introduction featuring a spotlight effect and dynamic background with personalized messaging.

👉 **Bento Grid**: Modern layout presenting personal information using cutting-edge CSS design techniques, showcasing my personality and interests.

👉 **Skills Showcase**: Interactive display of technical skills organized by category (Frontend, Backend, Data & Analytics, Tools).

👉 **Project Gallery**: Real-world project showcases including:
   - CMAP Data Export & Reporting system
   - HelpMe: Confluence → AI Chatbot Pipeline
   - Exam Analytics Dashboard
   - ServiceNow Ticket Insights

👉 **Experience Timeline**: Professional background highlighting co-op experiences and internships with detailed descriptions.

👉 **Monthly Picks**: Personal touch featuring current favorite anime and music recommendations with direct links to streaming platforms.

👉 **3D Elements**: Interactive 3D design elements, including a GitHub-style globe and card hover effects, adding depth and engagement.

👉 **Canvas Effects**: Innovative use of HTML5 canvas to create visually striking effects in the "approaches" section.

👉 **Floating Navigation**: Smooth, responsive navigation that follows the user as they scroll through the portfolio.

👉 **Responsive Design**: Seamless adaptability across all devices, ensuring optimal viewing experience for every user.

👉 **Modern Animations**: Framer Motion animations that bring the interface to life with smooth transitions and micro-interactions. 

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/chawla971/portfolio.git
cd portfolio
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

## <a name="snippets">🕸️ Snippets</a>

<details>
<summary><code>data/index.ts</code></summary>

```typescript
export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
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
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
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

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
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
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Software Engineer Intern",
    desc: "Built modular MVVM React/TypeScript UIs and C#/.NET REST APIs in Agile sprints for bike & permit apps—implementing DI, structured logging, and resilient error handling on Azure to improve maintainability, observability, and scalability.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
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
```

</details>

<details>
<summary><code>tailwind.config.ts</code></summary>

```ts
import type { Config } from "tailwindcss";

const svgToDataUri = require("mini-svg-data-uri");

const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        black: {
          DEFAULT: "#000",
          100: "#000319",
          200: "rgba(17, 25, 40, 0.75)",
          300: "rgba(255, 255, 255, 0.125)",
        },
        white: {
          DEFAULT: "#FFF",
          100: "#BEC1DD",
          200: "#C1C2D3",
        },
        blue: {
          "100": "#E4ECFF",
        },
        purple: "#CBACF9",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        spotlight: {
          "0%": {
            opacity: "0",
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: "1",
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
        shimmer: {
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "-200% 0",
          },
        },
        moveHorizontal: {
          "0%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
          "50%": {
            transform: "translateX(50%) translateY(10%)",
          },
          "100%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
        },
        moveInCircle: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "50%": {
            transform: "rotate(180deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        moveVertical: {
          "0%": {
            transform: "translateY(-50%)",
          },
          "50%": {
            transform: "translateY(50%)",
          },
          "100%": {
            transform: "translateY(-50%)",
          },
        },
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        spotlight: "spotlight 2s ease .75s 1 forwards",
        shimmer: "shimmer 2s linear infinite",
        first: "moveVertical 30s ease infinite",
        second: "moveInCircle 20s reverse infinite",
        third: "moveInCircle 40s linear infinite",
        fourth: "moveHorizontal 40s ease infinite",
        fifth: "moveInCircle 20s ease infinite",
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    addVariablesForColors,
    function ({ matchUtilities, theme }: any) {
      matchUtilities(
        {
          "bg-grid": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="100" height="100" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-grid-small": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-dot": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      );
    },
  ],
} satisfies Config;

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

export default config;
```

</details>

<details>
<summary><code>globals.css</code></summary>

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 240 10% 3.9%;

    --card: 0 0% 100%;
    --card-foreground: 240 10% 3.9%;

    --popover: 0 0% 100%;
    --popover-foreground: 240 10% 3.9%;

    --primary: 240 5.9% 10%;
    --primary-foreground: 0 0% 98%;

    --secondary: 240 4.8% 95.9%;
    --secondary-foreground: 240 5.9% 10%;

    --muted: 240 4.8% 95.9%;
    --muted-foreground: 240 3.8% 46.1%;

    --accent: 240 4.8% 95.9%;
    --accent-foreground: 240 5.9% 10%;

    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 0 0% 98%;

    --border: 240 5.9% 90%;
    --input: 240 5.9% 90%;
    --ring: 240 10% 3.9%;

    --radius: 0.5rem;
  }

  .dark {
    --background: 240 10% 3.9%;
    --foreground: 0 0% 98%;

    --card: 240 10% 3.9%;
    --card-foreground: 0 0% 98%;

    --popover: 240 10% 3.9%;
    --popover-foreground: 0 0% 98%;

    --primary: 0 0% 98%;
    --primary-foreground: 240 5.9% 10%;

    --secondary: 240 3.7% 15.9%;
    --secondary-foreground: 0 0% 98%;

    --muted: 240 3.7% 15.9%;
    --muted-foreground: 240 5% 64.9%;

    --accent: 240 3.7% 15.9%;
    --accent-foreground: 0 0% 98%;

    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 0 0% 98%;

    --border: 240 3.7% 15.9%;
    --input: 240 3.7% 15.9%;
    --ring: 240 4.9% 83.9%;
  }
}

@layer base {
  * {
    @apply border-border !scroll-smooth;
  }
  body {
    @apply bg-background text-foreground;
  }
  button {
    @apply active:outline-none;
  }
}

@layer utilities {
  .heading {
    @apply font-bold text-4xl md:text-5xl text-center;
  }

  .black-gradient {
    background: linear-gradient(90deg, #161a31 0%, #06091f 100%);
  }
}
```

</details>


<details>
<summary><code>Linear Gradient</code></summary>

```js
style={{
        //   add these two
        //   you can generate the color from here https://cssgradient.io/
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
```
</details>


## <a name="links">🔗 Connect With Me</a>

- **GitHub**: [@chawla971](https://github.com/chawla971)
- **LinkedIn**: [Sahil Chawla](https://www.linkedin.com/in/sahil-chawla-971sai/)
- **Email**: [Contact me directly](mailto:your-email@example.com)

## <a name="more">🚀 About This Portfolio</a>

This portfolio was built as a personal project to showcase my skills and personality. It combines modern web technologies with creative design to create an engaging user experience.

**Key Highlights:**
- Built with Next.js 14 and TypeScript for type safety
- Features custom 3D animations using Three.js
- Responsive design that works on all devices
- Personal touches like monthly recommendations
- Real project showcases with live demos

**Technologies Used:**
- Frontend: Next.js, React, TypeScript, Tailwind CSS
- 3D Graphics: Three.js, Framer Motion
- Backend: Node.js, PHP, C#
- Databases: MySQL, PostgreSQL
- Tools: Git, Docker, AWS

Feel free to explore the code and reach out if you'd like to collaborate on a project!

<!-- Portfolio updated - 2025-01-17 -->
