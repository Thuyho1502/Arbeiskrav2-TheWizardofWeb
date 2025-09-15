// app/Faginnhold/courses.ts
export type CourseLevel = "Beginner" | "Intermediate" | "Advanced";

export type Course = {
  slug: string;
  title: string;
  level: CourseLevel;
  blurb: string;
   image?: string;   // fallback nếu không có video
  video?: string;   // đường dẫn video preview
  poster?: string;  // thumbnail hiển thị trước khi play
  href?: string;
};

export const COURSES: Course[] = [
  {
    slug: "html",
    title: "HTML",
    level: "Beginner",
    blurb:
      "Create your first website with the building blocks of the web and understand semantic markup.",
    video: "/image/herohtml.mp4",   // <— đúng với thư mục ‘image’ trong public
    href: "/Oppgaver",
  },
  {
    slug: "css",
    title: "CSS",
    level: "Beginner",
    blurb:
      "Selectors, layout (Flex & Grid), colors, fonts, and responsive design you’ll actually use.",
    video: "/image/heroCss.mp4",  
    href: "/Oppgaver",
  },
  {
    slug: "javascript",
    title: "JavaScript",
    level: "Beginner",
    blurb:
      "Variables, loops, functions, and events to start building interactive web apps.",
    video: "/image/herojavascript.mp4",   
    href: "/Oppgaver",
  },
  {
    slug: "command-line",
    title: "Command Line",
    level: "Beginner",
    blurb:
      "Navigate and manipulate your filesystem from the terminal like a pro.",
    video: "/image/herocommand.mp4",   
    href: "/Oppgaver",
  },
  {
    slug: "git",
    title: "Git & GitHub",
    level: "Intermediate",
    blurb:
      "Version control, branching, pull requests, and collaborating on projects.",
    video: "/image/herogit.mp4",   
    href: "/Oppgaver",
  },
  {
    slug: "react",
    title: "React",
    level: "Intermediate",
    blurb:
      "Components, props, state, and effects—the core ideas to build modern UIs.",
    video: "/image/heroreact.mp4",   
    href: "/Oppgaver",
  },
  // Bạn có thể thêm TypeScript, Zustand, Next.js… theo mẫu này
];
