// app/faginnhold/course.ts

export type CourseLevel = "Beginner" | "Intermediate" | "Advanced"|"Comming soon";

/** Kiểu dữ liệu dành cho thẻ course ở trang /faginnhold */
export type CourseCardModel = {
  slug: string;
  title: string;
  blurb?: string;
  level?: CourseLevel;
  /** Chọn 1 trong 2 media: video (kèm poster) hoặc image */
  video?: string;   // ví dụ: "/image/herohtml.mp4" (trong public/)
  href?: string;
};

export const COURSES: CourseCardModel[] = [
  {
    slug: "html",
    title: "HTML",
    level: "Beginner",
    blurb:
      "Create your first website with the building blocks of the web and understand semantic markup.",
    video: "/image/herohtml.mp4",
  },
  {
    slug: "css",
    title: "CSS",
    level: "Beginner",
    blurb:
      "Selectors, layout (Flex & Grid), colors, fonts, and responsive design you’ll actually use.",
    video: "/image/heroCss.mp4",
  },
  {
    slug: "javascript",
    title: "JavaScript",
    level: "Beginner",
    blurb:
      "Variables, loops, functions, and events to start building interactive web apps.",
    video: "/image/herojavascript.mp4",
  },
  {
    slug: "command-line",
    title: "Command Line",
    level: "Comming soon",
    blurb:
      "Navigate and manipulate your filesystem from the terminal like a pro.",
    video: "/image/herocommand.mp4",
  },
  {
    slug: "git",
    title: "Git & GitHub",
    level: "Comming soon",
    blurb:
      "Version control, branching, pull requests, and collaborating on projects.",
    video: "/image/herogit.mp4",
  },
  {
    slug: "react",
    title: "React",
    level: "Comming soon",
    blurb:
      "Components, props, state, and effects—the core ideas to build modern UIs.",
    video: "/image/heroreact.mp4",
  },
  // Thêm TypeScript, Zustand, Next.js... theo mẫu này nếu cần
];
