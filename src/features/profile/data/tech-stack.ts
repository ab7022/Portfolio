import { MdApi } from "react-icons/md";
import {
  SiCloudflare,
  SiCplusplus,
  SiCss3,
  SiDocker,
  SiExpo,
  SiExpress,
  SiGit,
  SiGithub,
  SiGraphql,
  SiHtml5,
  SiJavascript,
  SiLinux,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiOpenai,
  SiPostgresql,
  SiPostman,
  SiPrisma,
  SiPython,
  SiReact,
  SiRedis,
  SiSocketdotio,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiWebrtc,
} from "react-icons/si";

import type { TechStack } from "../types/tech-stack";

export const TECH_STACK: TechStack[] = [
  // ===== Frontend =====
  {
    key: "typescript",
    title: "TypeScript",
    href: "https://www.typescriptlang.org/",
    categories: ["Language"],
    icon: SiTypescript,
  },
  {
    key: "js",
    title: "JavaScript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    categories: ["Language"],
    icon: SiJavascript,
  },
  {
    key: "html5",
    title: "HTML5",
    href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    categories: ["Markup"],
    icon: SiHtml5,
  },
  {
    key: "css3",
    title: "CSS3",
    href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    categories: ["Style"],
    icon: SiCss3,
  },
  {
    key: "react",
    title: "React",
    href: "https://react.dev/",
    categories: ["Library", "UI Library"],
    icon: SiReact,
  },
  {
    key: "nextjs2",
    title: "Next.js",
    href: "https://nextjs.org/",
    categories: ["Framework"],
    theme: true,
    icon: SiNextdotjs,
  },
  {
    key: "tailwindcss",
    title: "Tailwind CSS",
    href: "https://tailwindcss.com/",
    categories: ["Framework"],
    icon: SiTailwindcss,
  },

  // ===== Mobile =====
  {
    key: "reactnative",
    title: "React Native",
    href: "https://reactnative.dev/",
    categories: ["Mobile", "Framework"],
    icon: SiReact,
  },
  {
    key: "expo",
    title: "Expo",
    href: "https://expo.dev/",
    categories: ["Mobile", "Framework"],
    icon: SiExpo,
  },

  // ===== Backend =====
  {
    key: "nodejs",
    title: "Node.js",
    href: "https://nodejs.org/",
    categories: ["Runtime Environment"],
  },
  {
    key: "express",
    title: "Express.js",
    href: "https://expressjs.com/",
    categories: ["Backend", "Framework"],
    icon: SiExpress,
  },
  {
    key: "restapi",
    title: "REST API",
    href: "https://restfulapi.net/",
    categories: ["Backend", "API"],
    icon: MdApi,
  },
  {
    key: "graphql",
    title: "GraphQL",
    href: "https://graphql.org/",
    categories: ["Backend", "API"],
    icon: SiGraphql,
  },
  {
    key: "webrtc",
    title: "WebRTC",
    href: "https://webrtc.org/",
    categories: ["Backend", "Real-time"],
    icon: SiWebrtc,
  },
  {
    key: "socketio",
    title: "Socket.IO",
    href: "https://socket.io/",
    categories: ["Backend", "Real-time"],
    icon: SiSocketdotio,
  },
  {
    key: "openai",
    title: "OpenAI API",
    href: "https://platform.openai.com/",
    categories: ["AI/ML"],
  },

  // ===== Databases & ORM =====
  {
    key: "mysql",
    title: "MySQL",
    href: "https://www.mysql.com/",
    categories: ["Database"],
    icon: SiMysql,
  },
  {
    key: "postgresql",
    title: "PostgreSQL",
    href: "https://www.postgresql.org/",
    categories: ["Database"],
    icon: SiPostgresql,
  },
  {
    key: "mongodb",
    title: "MongoDB",
    href: "https://www.mongodb.com/",
    categories: ["Database"],
    icon: SiMongodb,
  },
  {
    key: "redis",
    title: "Redis",
    href: "https://redis.io/",
    categories: ["Database"],
    icon: SiRedis,
  },
  {
    key: "prisma",
    title: "Prisma ORM",
    href: "https://www.prisma.io/",
    categories: ["ORM"],
    icon: SiPrisma,
  },
  {
    key: "OpenAI",
    title: "OpenAI",
    href: "https://www.openai.com/",
    categories: ["AI/ML"],
    icon: SiOpenai,
  },
  // ===== DevOps / Cloud =====
  {
    key: "git",
    title: "Git",
    href: "https://git-scm.com/",
    categories: ["Version Control"],
    icon: SiGit,
  },
  {
    key: "github",
    title: "GitHub",
    href: "https://github.com/",
    categories: ["Version Control"],
    icon: SiGithub,
  },
  {
    key: "docker",
    title: "Docker",
    href: "https://www.docker.com/",
    categories: ["Containerization"],
    icon: SiDocker,
  },
  {
    key: "vercel",
    title: "Vercel",
    href: "https://vercel.com/",
    categories: ["Cloud"],
    icon: SiVercel,
  },
  {
    key: "aws",
    title: "AWS",
    href: "https://aws.amazon.com/",
    categories: ["Cloud"],
  },
  {
    key: "cloudflare",
    title: "Cloudflare",
    href: "https://www.cloudflare.com/",
    categories: ["Cloud", "Security"],
    icon: SiCloudflare,
  },

  // ===== Tools =====
  {
    key: "postman",
    title: "Postman",
    href: "https://www.postman.com/",
    categories: ["Tools", "API"],
    icon: SiPostman,
  },

  // ===== Other Languages =====
  {
    key: "python",
    title: "Python",
    href: "https://www.python.org/",
    categories: ["Language"],
    icon: SiPython,
  },
  {
    key: "java",
    title: "Java",
    href: "https://www.java.com/",
    categories: ["Language"],
  },
  {
    key: "cpp",
    title: "C++",
    href: "https://isocpp.org/",
    categories: ["Language"],
    icon: SiCplusplus,
  },

  // ===== OS =====
  {
    key: "linux",
    title: "Linux",
    href: "https://www.linux.org/",
    categories: ["OS"],
    icon: SiLinux,
  },
];
