import type { Project } from "../types/projects";

export const PROJECTS: Project[] = [
  {
    id: "DevlopAI",
    title: "Devlop.app",
    period: {
      start: "04.2025",
      end: "08.2025",
    },
    link: "https://devlop.app",
    skills: [
      "Next.js",
      "React Native",
      "OpenAI",
      "TypeScript",
      "Tailwind CSS",
      "Snack SDK",
      "Prisma",
      "AWS",
    ],
    description: `AI-powered no-code platform to instantly generate and preview full-stack mobile apps.
- 🤖 Generate complete React Native apps from simple prompts
- 📱 Live preview with interactive device simulator
- 💾 Export full project code as ZIP, APK, or GitHub repo
- ⚡ Seamless AI-driven edits for rapid iteration and launch
- 🚀 2,000+ signups, 11,000+ active users, and $X in revenue in 3 months
- added integration for github and supabase`,
    logo: "/DevlopAi.png",
    logoDark: "/DevlopAI-2.png",
    isExpanded: true,
  },

  {
    id: "Kumospace",
    title: "Kumospace",
    period: {
      start: "11.2024",
      end: "01.2025",
    },
    link: "https://kumospace.vercel.app",
    skills: [
      "WebRTC",
      "Next.js 15",
      "Tailwind CSS v3",
      "shadcn/ui",
      "WebSockets",
      "prisma",
      "Socket.io",
      "Vercel",
    ],
    description: `Kumospace is a collaboration hub with crystal‑clear HD video calls (up to 100 participants), natural voice channels, one‑click screen sharing, and secure direct/group messaging with end‑to‑end encryption. It powers focused teamwork with built‑in task management, real‑time progress tracking, and dedicated team spaces for every project.

- 🏢 Live team presence with frictionless collaboration
- 📊 Actionable analytics to track workspace productivity
- 💬 Crystal-clear audio and instant video chats for natural conversations
- 🌎 Work from anywhere on any device
- 💡 Interactive virtual environments that boost engagement
`,
  },
  {
    id: "Eazyfolio",
    title: "Eazyfolio",
    period: {
      start: "05.2024",
      end: "08.2024",
    },
    link: "https://eazyfolio.vercel.app/",
    skills: [
      "Next.js",
      "Open Source",
      "Tailwind CSS",
      "Radix UI",
      "shadcn/ui",
      "Vercel",
    ],
    description: `EazyFolio is a popular no‑code portfolio builder to launch a professional personal site in minutes. It includes polished templates, a resume generator, and a dashboard to manage your site and subscription. and its used by 25,000+ users.

- Template gallery with modern themes, live demos, and detail pages
- Resume/PDF generation (via React PDF) with sections for work, education, skills, and projects
- User dashboard showing site status, quick links, and subscription/trial management
- “My Account” forms to capture personal info, experience (multi‑entry), education, skills, achievements, and projects
- Authentication and database integration (NextAuth + Prisma)
- Asset handling with AWS S3 SDK
`,
    logo: "/Eazyfolio.jpeg",
  },

  {
    id: "Quraan-Kareem",
    title: "Quraan Kareem",
    period: {
      start: "07.2025",
      end: "08.2025",
    },

    link: "https://play.google.com/store/apps/details?id=com.quranapp.mobile",
    skills: [
      "React Native",
      "TWRNC",
      "API",
      "Firebase",
      "Android",
      "Play Store",
    ],
    description: `Quraan App is a modern, lightweight Quran companion for reading, listening, and study on the go. It offers a clean, distraction-free interface with fast search, bookmarking, and optional offline access.

- Complete Mushaf with clear Uthmani script
- Audio recitations (ayah/surah), with streaming and optional offline downloads
- Translations in multiple languages, toggle per ayah
- Tafsir references for deeper study
- Powerful search by surah, ayah, and keywords
- Bookmarks, favorites, and last-read tracking
- Adjustable font size, themes (light/dark), and reading modes
- Verse sharing (copy as text or share image)
- Daily ayah notifications and study reminders
- Khatm (completion) progress tracker
`,
    logo: "/Quraan.png",
  },
  {
    id: "Portfolio",
    title: "Portfolio",
    period: {
      start: "01.2025",
      end: "03.2025",
    },
    link: "https://github.com/ab7022/chanhdai.com",
    skills: [
      "Open Source",
      "Next.js 15",
      "Tailwind CSS v4",
      "Radix UI",
      "Motion",
      "shadcn/ui",
      "Vercel",
    ],
    description: `A minimal portfolio and blog.
- Clean & modern design
- Light & Dark theme support
- vCard integration
- SEO optimizatised
- AI-friendly [/llms.txt](https://llmstxt.org)
- Spam-protected email
- Installable PWA`,
    logo: "/logo.svg",
    logoDark: "/logo-white.svg",
  },
  {
    id: "Chefify",
    title: "Chefify",
    period: {
      start: "02.2024",
      end: "05.2024",
    },
    link: "https://chefify.vercel.app",
    skills: ["React", "Node.js", "MongoDB", "API", "OpenAI", "tailwindcss"],
    description: `Chefify is an AI-powered recipe discovery website that helps you find, explore, and cook delicious meals with ease. Search by cravings or ingredients, browse curated categories, and get smart suggestions tailored to your taste.

- AI Search for natural-language recipe queries with helpful, formatted results
- Explore and search recipes powered by TheMealDB, with “Show more” pagination
- Category browsing with quick filters and curated suggestions
- Detailed recipe pages with images, category/area info, and easy navigation
- Like/favorite recipes and view them in your Profile (login required)
- Simple authentication with Login/Logout and token-based session
`,
  },
  {
    id: "Ideaally",
    title: "Ideaally",
    period: {
      start: "02.2024",
      end: "03.2024",
    },
    link: "https://ideaally.vercel.app/",
    skills: ["Chatbot", "OpenAI", "React", "Nodejs Whatsapp Clone"],
    description: `Whatsapp clone with AI chatbot integration. It allows users to chat with an AI assistant that can answer questions, provide information, and engage in conversations. The project showcases the integration of OpenAI's language model into a messaging platform, enabling users to interact with AI in a familiar chat interface.`,
  },
  {
    id: "Paytm",
    title: "Paytm Clone",
    period: {
      start: "01.2024",
      end: "02.2024",
    },
    link: "https://paytm-2.vercel.app/",
    skills: ["Money Transfer", "React", "Nodejs", "mongoose"],
    description: `A minimal PayTM-style digital payments web app that lets users manage a wallet and transfer money. Built as a learning project in JavaScript, covering core flows like sign up, add money, send/receive, and view transactions.

`,
  },
  {
    id: "Ecommerce",
    title: "Ecommerce Website",
    period: {
      start: "08.2023",
      end: "11.2023",
    },
    link: "https://github.com/ab7022/Online-Shop/",
    skills: ["Ecommerce Store", "React", "Nodejs", "mongoose"],
    description: `A minimal Ecommerce website that allows users to browse and purchase products. Built as a learning project in JavaScript, covering core flows like product listing, shopping cart, and checkout.
`,
  },
];
