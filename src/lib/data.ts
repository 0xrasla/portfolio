export interface WorkExperience {
  period: string;
  role: string;
  company: string;
  description: string;
  skills: string[];
  achievements?: string[];
}

export const workExperience: WorkExperience[] = [
  {
    period: "Sep 2025 - Present",
    role: "Senior Software Engineer",
    company: "Radiantze, USA (Remote)",
    description:
      "Architecting an AI-driven product suite, designing advanced backend infrastructure (event-driven services, scalable APIs, distributed caching), and leading/mentoring junior engineers on code quality, testing, and system design.",
    skills: [
      "TypeScript",
      "Svelte",
      "React",
      "Bun",
      "Next.js",
      "AWS",
      "Docker",
      "Python",
      "FastAPI",
      "Three.js",
      "LLM",
    ],
    achievements: [
      "Architected an AI retrieval-augmented generation (RAG) pipeline with vector search (pgvector/Qdrant) to power semantic chat and auto-summarization features",
      "Integrated multiple LLM providers (OpenAI / Anthropic) behind a unified abstraction to enable smart routing and cost optimization",
      "Built GPU/CPU hybrid job orchestration for embedding + inference workloads using a Bun microservice layer and FastAPI async workers",
      "Implemented real-time 3D models for realtime collabration with ai",
    ],
  },
  {
    period: "Oct 2023 - Sep 2025",
    role: "Senior Software Engineer",
    company: "Wenoxo Technologies Private Limited, Nagercoil",
    description:
      "Leading backend and frontend development in Svelte, Nextjs, Bun and NestJS stack for scalable enterprise applications. Collaborating closely with cross-functional teams to implement robust software architecture and optimize system performance.",
    skills: [
      "MERN, MEVN Stack",
      "Software Design",
      "TypeScript",
      "AWS",
      "Svelte",
      "Bun",
      "Next.js",
      "Drizzle",
      "Linux",
      "Three.js",
    ],
    achievements: [
      "Led the redesign of a legacy module to increase performance by 65%",
      "Introduced best practices for scalable architecture and modular code structure",
      "Mentored junior developers on design patterns and testing strategies",
      "Implemented an interactive 3D data visualization widget in Next.js (Three.js) improving user engagement metrics",
    ],
  },
  {
    period: "Jul 2022 - Oct 2023",
    role: "Full Stack Developer",
    company: "J Tech World, Dubai",
    description:
      "Built and maintained web applications using modern front-end and back-end technologies. Focused on delivering high-performance and visually appealing solutions for enterprise clients.",
    skills: [
      "Tailwind CSS",
      "MongoDB",
      "React",
      "Node.js",
      "Express",
      "Next.js",
      "Firebase",
    ],
    achievements: [
      "Developed a custom CMS dashboard that reduced content publishing time by 70%",
      "Improved app responsiveness and accessibility using Tailwind CSS and best UI/UX practices",
      "Collaborated with designers and backend engineers to ship features faster",
    ],
  },
  {
    period: "Dec 2021 - May 2022",
    role: "Full Stack Developer",
    company: "Theecode Technologies Pvt Ltd, Chennai",
    description:
      "Worked on developing modular, maintainable full-stack applications using modern JavaScript and database technologies. Contributed to both frontend and backend features and bug fixes.",
    skills: ["React", "Node.js", "MongoDB", "Express", "Angular", "Git"],
    achievements: [
      "Delivered end-to-end solutions for client dashboards and internal tools",
      "Enhanced code quality with reusable components and improved state management",
    ],
  },
  {
    period: "Oct 2021 - May 2022",
    role: "Full Stack Developer",
    company: "VINTEK SOLUTION, Chennai",
    description:
      "Built responsive web applications and admin panels, integrating REST APIs and implementing role-based authentication.",
    skills: [
      "JavaScript",
      "React",
      "Node.js",
      "MongoDB",
      "Chakra UI",
      "API Integration",
    ],
    achievements: [
      "Refactored core modules to reduce code duplication by a lot.",
      "Implemented login/auth modules with role-based access controls",
    ],
  },
  {
    period: "Nov 2020 - Apr 2021",
    role: "Web Developer Intern",
    company: "VirtualMaze, Chennai",
    description:
      "Assisted the dev team in building features for internal tools and client projects. Gained hands-on experience in frontend and backend tasks.",
    skills: ["HTML", "CSS", "JavaScript", "Python", "Bootstrap"],
    achievements: [
      "Contributed to bug fixes and enhancements in production apps",
      "Built reusable UI components to speed up frontend development",
      "Learned and Build Python Scripts for automating internal company tasks",
    ],
  },
];

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
  stats: {
    stars: number;
    views: number;
    forks: number;
  };
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Dropit - Drag & Drop Component",
    description:
      "A simple, beautiful React drag-and-drop file picker built with shadcn/ui",
    image:
      "https://raw.githubusercontent.com/0xrasla/dropit-react/refs/heads/master/public/dropit-dark.png",
    tags: ["Shadcn", "Next js", "Tailwind"],
    github: "https://github.com/0xrasla/dropit-react",
    demo: "https://0xrasla.github.io/dropit-react/",
    stats: {
      stars: 8,
      views: 201,
      forks: 0,
    },
  },
  {
    id: 2,
    title: "Logify - Logging Middleware",
    description:
      "A beautiful, fast, and type-safe logging middleware for Node.js web applications.",
    image: "",
    tags: ["Node.js", "Elysia.js", "Express.js"],
    github: "https://github.com/0xrasla/logify",
    demo: "",
    stats: {
      stars: 13,
      views: 0,
      forks: 0,
    },
  },
  {
    id: 3,
    title: "Multiplayer Tic Tac Toe",
    description:
      "Added multiplayer to my old tic tac toe game coded in HTML, CSS, and JavaScript.",
    image: "",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/0xrasla/multiplayer-tictactoe",
    demo: "",
    stats: {
      stars: 2,
      views: 0,
      forks: 0,
    },
  },
  {
    id: 4,
    title: "Guess The Code Game",
    description:
      "A guessing game where you can guess the programming language by seeing the source code.",
    image: "",
    tags: ["Next.js", "React", "TypeScript"],
    github: "https://github.com/0xrasla/guess-the-code-game",
    demo: "",
    stats: {
      stars: 4,
      views: 0,
      forks: 2,
    },
  },
  {
    id: 5,
    title: "Snippet Share",
    description: "A platform where you can share code snippets.",
    image: "",
    tags: ["TypeScript", "CSS", "JavaScript"],
    github: "https://github.com/0xrasla/snippet-share",
    demo: "",
    stats: {
      stars: 0,
      views: 0,
      forks: 0,
    },
  },
  {
    id: 6,
    title: "GitMatch",
    description:
      "An app to see your GitHub stats and compare your profile with others.",
    image: "",
    tags: ["Next.js", "Tailwind", "TypeScript"],
    github: "https://github.com/0xrasla/gitmatch",
    demo: "",
    stats: {
      stars: 6,
      views: 0,
      forks: 2,
    },
  },
];

export interface Video {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  duration: string;
  url: string;
}

export const videos: Video[] = [
  {
    id: 1,
    title: "HTML Crash Course For Free 👀(2023) - Full Tamil Tutorial ✌",
    description:
      "A web development tutorial video from My Coding Diary channel.",
    thumbnail: "https://img.youtube.com/vi/y9m8Xgcr9ns/hqdefault.jpg",
    duration: "58:02",
    url: "http://www.youtube.com/watch?v=y9m8Xgcr9ns",
  },
  {
    id: 2,
    title: "CSS Crash Course For Free 👀(2023) - Full Tamil Tutorial ✌",
    description:
      "A web development tutorial video from My Coding Diary channel.",
    thumbnail: "https://img.youtube.com/vi/1L1sGOa8rXc/hqdefault.jpg",
    duration: "01:19:38",
    url: "http://www.youtube.com/watch?v=1L1sGOa8rXc",
  },
  {
    id: 3,
    title: "🚀 DaisyUI | Build Stunning UIs for web| Tamil Video (🔥)",
    description:
      "A web development tutorial video from My Coding Diary channel.",
    thumbnail: "https://img.youtube.com/vi/2ZLfgQE4NZk/hqdefault.jpg",
    duration: "10:23",
    url: "http://www.youtube.com/watch?v=2ZLfgQE4NZk",
  },
];

export interface SocialLink {
  label: string;
  url: string;
  icon?: string;
}

export const socialLinks: SocialLink[] = [
  { label: "GitHub", url: "https://github.com/0xrasla", icon: "lucide:github" },
  {
    label: "Twitter / X",
    url: "https://x.com/0xRasla",
    icon: "lucide:twitter",
  },
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/thinesh-rasla-779ba2189",
    icon: "lucide:linkedin",
  },
  {
    label: "YouTube",
    url: "https://www.youtube.com/@MyCodingDiary",
    icon: "lucide:youtube",
  },
  { label: "Email", url: "mailto:thineshrasla@gmail.com", icon: "lucide:mail" },
];

export const siteMeta = {
  title: "Thinesh Rasla | 0xRasla — My Coding Diary",
  description:
    "I'm Thinesh Rasla (aka 0xRasla), a passionate full-stack developer from India. I build clean web & mobile apps with React, Svelte, and Flutter. Follow my journey on My Coding Diary!",
  keywords: [
    "Thinesh Rasla",
    "0xRasla",
    "My Coding Diary",
    "web developer portfolio",
    "Svelte developer",
    "React developer",
    "Flutter apps",
    "Open source developer",
    "Indian developer",
    "Next.js portfolio",
  ],
  author: "Thinesh Rasla",
  url: "https://rasla.me/",
  ogImage: "https://avatars.githubusercontent.com/u/76244740?v=4",
  twitter: {
    handle: "@0xRasla",
  },
};
