export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string[];
  technologies: string[];
  type: "work" | "freelance" | "education";
  location: string;
}

export const experiences: Experience[] = [
  {
    id: "1",
    title: "Senior Frontend Developer",
    company: "Think Us - IT Staff Augmentation",
    period: "10/2025 - Present",
    description: [
      "Developed file upload and import modules using AWS S3.",
      "Built customizable lists with CSV export capabilities.",
      "Implemented advanced Form.io components with time tracking.",
      "Integrated dynamic forms with Node.js APIs.",
    ],
    technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    type: "work",
    location: "Remote",
  },
  {
    id: "2",
    title: "Full Stack Developer",
    company: "Freelance",
    period: "10/2019 - Present",
    description: [
      "Developed custom web and mobile applications for international clients.",
      "Built full-stack solutions using React, Vue, Angular, and React Native.",
      "Implemented backend services with Node.js, Express, and various databases.",
      "Delivered responsive, performant applications with modern UI frameworks.",
    ],
    technologies: ["React", "Vue", "Angular", "React Native", "Node.js", "TypeScript", "PostgreSQL", "MongoDB"],
    type: "freelance",
    location: "Remote",
  },
  {
    id: "3",
    title: "Senior Frontend Developer",
    company: "Lean Tech",
    period: "10/2023 - 08/2025",
    description: [
      "Collaborated with design and back-end teams to integrate complex APIs and create responsive interfaces.",
      "Optimized application performance, improving page load times and user experience.",
      "Contributed to code refactoring and architectural improvements for scalability.",
      "Mentored junior developers and provided code reviews to maintain quality standards.",
    ],
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Zustand"],
    type: "work",
    location: "Remote",
  },
  {
    id: "4",
    title: "Mobile Senior Frontend Developer",
    company: "Rithmn",
    period: "02/2023 - 08/2024",
    description: [
      "Developed mobile applications for international clients using React Native and Expo.",
      "Delivered high-performance, responsive solutions that improved client engagement by 15%.",
      "Managed end-to-end development from requirements gathering to deployment.",
    ],
    technologies: ["React Native", "TypeScript", "Firebase", "Expo"],
    type: "work",
    location: "Remote",
  },
  {
    id: "5",
    title: "Senior Frontend Developer",
    company: "Gluky",
    period: "02/2019 - 05/2023",
    description: [
      "Provided technical support and feature development for an Angular/Ionic incentives platform.",
      "Designed and implemented reusable UI components including comments wall and shopping cart.",
      "Contributed to monorepo architecture implementation for optimized frontend deployment.",
      "Assisted in migrating legacy components to current Angular versions.",
    ],
    technologies: ["Angular", "Ionic", "TypeScript", "Firebase"],
    type: "work",
    location: "Remote",
  },
];

