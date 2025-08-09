import type { Experience } from "../types/experiences";

export const EXPERIENCES: Experience[] = [
  {
    id: "AI Chef Master",
    companyName: "AI Chef Master",
    companyLogo:
      "https://media.licdn.com/dms/image/v2/D4D0BAQEH5U_eX4A-nA/company-logo_200_200/B4DZciAsSLGUAI-/0/1748622297008?e=1757548800&v=beta&t=sbIP2iD01li1LMFGc_m-jNBxu6o1aDWIvZrwNo3ZLxY",
    positions: [
      {
        id: "20f8bfe5-b6a3-4b0d-ac2f-6fccd50d417e",
        title: "Frontend Developer Intern",
        employmentPeriod: {
          start: "04.2024",
          end: "06.2024",
        },
        employmentType: "Full-time",
        icon: "code",
        description: `- Increased user engagement by 40% and boosted site performance score from 73 to 95+ by migrating to Next.js 14 and optimizing images.

- Improved page load speed by 35% with code splitting and CDN caching.

- Cut unnecessary re-renders by 45% using React and Redux best practices.

- Built 8+ features including Dark Mode (82% adoption), real-time notifications, and smart search.

- Delivered consistent, user-friendly UI/UX across web and mobile platforms.

`,
        skills: [
          "TypeScript",
          "Next.js",
          "React Native",
          "React",
          "shadcn/ui",
          "Tailwind CSS",
          "Agile",
          "Teamwork",
          "Research",
          "Problem-solving",
        ],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: false,
  },

  {
    id: "education",
    companyName: "Education",
    positions: [
      {
        id: "c47f5903-88ae-4512-8a50-0b91b0cf99b6",
        title: "Masters of computer application — Jain university (Online)",
        employmentPeriod: {
          start: "08.2025",
          end: "2027",
        },
        icon: "education",
        description: `- Currently pursuing MCA with focus on Information Systems and Software Development.  
- Building skills in programming, system design, and advanced databases.  
- Learning concepts in distributed systems and software engineering.  
- Developing teamwork, communication, and presentation skills through coursework and projects.  `,
        skills: [
          "C++",
          "Java",
          "Python",
          "Data Structures",
          "Algorithms",
          "Advanced Databases",
          "Systems Design",
          "Distributed Systems",
          "Software Engineering",
          "Self-learning",
          "Teamwork",
          "Presentation",
        ],
      },
      {
        id: "70131ed8-36d9-4e54-8c78-eaed18240eca",
        title:
          "Bachelor of Computer Applications — Presidency College, Bangalore",
        employmentPeriod: {
          start: "08.2022",
          end: "06.2025",
        },
        icon: "education",
        description: `- Completed Bachelor’s degree in Computer Applications from Presidency College, Bengaluru.

- Gained strong foundation in programming languages including C, C++, Java, and Python.

- Developed expertise in web technologies such as HTML, CSS, JavaScript, and frameworks like React and Angular.

- Built hands-on experience with backend development using PHP, Node.js, and database management with MySQL and MongoDB.

- Gained practical knowledge of operating systems, computer networks, and data structures & algorithms.

- Worked with version control systems like Git for collaborative software development.

- Developed skills in software testing, debugging, and performance optimization.

- Completed internships and hands-on labs to apply theoretical knowledge in practical scenarios.

- Participated in workshops and seminars on emerging technologies like AI, Machine Learning, and Cybersecurity.

`,
        skills: [
          "Data Structures & Algorithms",
          "C++ Programming",
          "Web Development with PHP & Javascript",
          "Database Management using MySQL",
          "Backend Development with Node.js",
          "Document Processing using Pandoc",
          "Self-Learning & Problem Solving",
        ],
      },
      {
        id: "36c4c6fb-02d0-48c0-8947-fda6e9a24af7",
        title: "Pre University Karnataka — (12 class)",
        employmentPeriod: {
          start: "06.2021",
          end: "06.2022",
        },
        icon: "education",
      },
    ],
  },
];
