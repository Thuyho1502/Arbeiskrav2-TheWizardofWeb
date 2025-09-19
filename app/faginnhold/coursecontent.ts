// app/faginnhold/coursecontent.ts

import WhatIsHTML from "./contents/html/WhatIsHTML";
import Headings from "./contents/html/Heading";
import StyleLesson from "./contents/html/StyleLesson";

export type Lesson = {
  id: string;
  title: string;
  content?: string;
  /** Component hiển thị nội dung bài học (tùy chọn) */
  component?: React.ComponentType;
};

export type QuizOption = {
  id: string;
  text: string;
  correct?: boolean; // mỗi câu chỉ 1 đáp án đúng
};

export type QuizQuestion = {
  id: string;
  question: string;
  options: QuizOption[];
};

export type Chapter = {
  /** dùng trong URL: /[slug]/[chapter]/... */
  id: string;
  title: string;
  description?: string;
  /** dùng trong URL: /[slug]/[chapter]/[lesson] */
  lessons: Lesson[];
  quiz: {
    /** % phải đúng để pass, ví dụ 80 */
    passPercent: number;
    questions: QuizQuestion[];
  };
};

export type CourseDetail = {
  /** phải khớp với COURSES.slug */
  slug: string;
  title: string;
  description?: string;
  chapters: Chapter[];
};

/** Dữ liệu mẫu để test flow lesson/quiz */
export const COURSE_CONTENT: Record<string, CourseDetail> = {
  html: {
    slug: "html",
    title: "HTML",
    description: "Learn the building blocks of the web: tags, elements, and structure.",
    chapters: [
      {
        id: "intro",
        title: "Getting Started with HTML",
        description: "Setup, basic tags and structure.",
        lessons: [
          { id: "what-is-html", title: "What is HTML?", component: WhatIsHTML },
          { id: "headings", title: "Headings", component: Headings },
          { id: "newspaper", title: "Newspaper" },
          { id: "images", title: "Images and Alt Text" },
        ],
        quiz: {
          passPercent: 80,
          questions: [
            {
              id: "q1",
              question: "Which tag creates a hyperlink?",
              options: [
                { id: "a", text: "<a>", correct: true },
                { id: "b", text: "<link>" },
                { id: "c", text: "<href>" },
                { id: "d", text: "<url>" },
              ],
            },
            {
              id: "q2",
              question: "Which part of the page contains metadata such as <title> and CSS links?",
              options: [
                { id: "a", text: "<head>", correct: true },
                { id: "b", text: "<body>" },
                { id: "c", text: "<header>" },
                { id: "d", text: "<main>" },
              ],
            },
            {
              id: "q3",
              question: "Which tag is used to insert an image?",
              options: [
                { id: "a", text: "<image>" },
                { id: "b", text: "<img>", correct: true },
                { id: "c", text: "<pic>" },
                { id: "d", text: "<figure>" },
              ],
            },
            {
              id: "q4",
              question: "Which attribute provides alternative text for an image?",
              options: [
                { id: "a", text: "src" },
                { id: "b", text: "href" },
                { id: "c", text: "alt", correct: true },
                { id: "d", text: "title" },
              ],
            },
            {
              id: "q5",
              question: "Which tag is used to insert a line break?",
              options: [
                { id: "a", text: "<break>" },
                { id: "b", text: "<lb>" },
                { id: "c", text: "<br>", correct: true },
                { id: "d", text: "<newline>" },
              ],
            },
            {
              id: "q6",
              question: "Which heading tag has the highest level of importance?",
              options: [
                { id: "a", text: "<h6>" },
                { id: "b", text: "<h1>", correct: true },
                { id: "c", text: "<head>" },
                { id: "d", text: "<title>" },
              ],
            },
            {
              id: "q7",
              question: "Which tag is used to contain a paragraph of text?",
              options: [
                { id: "a", text: "<div>" },
                { id: "b", text: "<span>" },
                { id: "c", text: "<p>", correct: true },
                { id: "d", text: "<section>" },
              ],
            },
            {
              id: "q8",
              question: "Which attribute specifies the destination address of a link?",
              options: [
                { id: "a", text: "src" },
                { id: "b", text: "href", correct: true },
                { id: "c", text: "alt" },
                { id: "d", text: "rel" },
              ],
            },
            {
              id: "q9",
              question: "What declaration is placed at the beginning of a valid HTML5 document?",
              options: [
                { id: "a", text: "<!DOCTYPE html>", correct: true },
                { id: "b", text: "<DOCTYPE5>" },
                { id: "c", text: "<?html5?>" },
                { id: "d", text: "<html doctype='5'>" },
              ],
            },
            {
              id: "q10",
              question: "Where does the main content displayed to users primarily reside?",
              options: [
                { id: "a", text: "<head>" },
                { id: "b", text: "<main>" },
                { id: "c", text: "<body>", correct: true },
                { id: "d", text: "<footer>" },
              ],
            },
          ],

        },
      },
      {
        id: "structure-semantics",
        title: "Layout & Semantics",
        description: "Semantic elements and document outline.",
        lessons: [
          { id: "style", title: "Style", component: StyleLesson  },
          { id: "lists-tables", title: "Lists & Tables" },
        ],
        quiz: {
          passPercent: 80,
          questions: [
            {
              id: "q1",
              question: "Which element represents a self-contained composition?",
              options: [
                { id: "a", text: "<div>" },
                { id: "b", text: "<article>", correct: true },
                { id: "c", text: "<section>" },
                { id: "d", text: "<span>" },
              ],
            },
            {
              id: "q2",
              question: "Which is best for navigation links?",
              options: [
                { id: "a", text: "<nav>", correct: true },
                { id: "b", text: "<menu>" },
                { id: "c", text: "<aside>" },
                { id: "d", text: "<figure>" },
              ],
            },
          ],
        },
      },
    ],
  },

  css: {
    slug: "css",
    title: "CSS",
    chapters: [
      {
        id: "basics",
        title: "Selectors & The Box Model",
        lessons: [
          { id: "selectors", title: "Basic Selectors" },
          { id: "box-model", title: "Margin, Border, Padding" },
        ],
        quiz: {
          passPercent: 80,
          questions: [
            {
              id: "q1",
              question: "Which selector targets elements by class?",
              options: [
                { id: "a", text: "#header" },
                { id: "b", text: ".title", correct: true },
                { id: "c", text: "div" },
                { id: "d", text: "*" },
              ],
            },
            {
              id: "q2",
              question: "Which property controls the space inside the border?",
              options: [
                { id: "a", text: "margin" },
                { id: "b", text: "padding", correct: true },
                { id: "c", text: "gap" },
                { id: "d", text: "outline" },
              ],
            },
          ],
        },
      },
      {
        id: "layout",
        title: "Flex & Grid",
        lessons: [
          { id: "flexbox", title: "Flexbox Essentials" },
          { id: "grid", title: "CSS Grid Basics" },
        ],
        quiz: {
          passPercent: 80,
          questions: [
            {
              id: "q1",
              question: "Which property turns a container into a flex container?",
              options: [
                { id: "a", text: "display: block" },
                { id: "b", text: "display: flex", correct: true },
                { id: "c", text: "position: flex" },
                { id: "d", text: "flex: 1" },
              ],
            },
            {
              id: "q2",
              question: "What creates columns in CSS Grid?",
              options: [
                { id: "a", text: "grid-template-columns", correct: true },
                { id: "b", text: "grid-column-gap" },
                { id: "c", text: "grid-auto-flow" },
                { id: "d", text: "justify-content" },
              ],
            },
          ],
        },
      },
    ],
  },

  javascript: {
    slug: "javascript",
    title: "JavaScript",
    chapters: [
      {
        id: "language-basics",
        title: "Basics",
        lessons: [
          { id: "variables", title: "Variables (let/const)" },
          { id: "functions", title: "Functions" },
          { id: "arrays", title: "Arrays & Loops" },
        ],
        quiz: {
          passPercent: 80,
          questions: [
            {
              id: "q1",
              question:
                "Which keyword declares a block-scoped variable that can be reassigned?",
              options: [
                { id: "a", text: "const" },
                { id: "b", text: "let", correct: true },
                { id: "c", text: "var" },
                { id: "d", text: "static" },
              ],
            },
            {
              id: "q2",
              question: "Which method adds an item to the end of an array?",
              options: [
                { id: "a", text: "push", correct: true },
                { id: "b", text: "pop" },
                { id: "c", text: "shift" },
                { id: "d", text: "unshift" },
              ],
            },
          ],
        },
      },
      {
        id: "dom-events",
        title: "DOM & Events",
        lessons: [
          { id: "selectors", title: "Querying Elements" },
          { id: "events", title: "Event Listeners" },
        ],
        quiz: {
          passPercent: 80,
          questions: [
            {
              id: "q1",
              question: "How do you attach a click handler?",
              options: [
                { id: "a", text: "element.on('click', cb)" },
                {
                  id: "b",
                  text: "element.addEventListener('click', cb)",
                  correct: true,
                },
                { id: "c", text: "onclick(element, cb)" },
                { id: "d", text: "document.click(cb)" },
              ],
            },
            {
              id: "q2",
              question: "Which returns the first element matching the selector?",
              options: [
                { id: "a", text: "getElementById" },
                { id: "b", text: "querySelector", correct: true },
                { id: "c", text: "querySelectorAll" },
                { id: "d", text: "getElementsByClassName" },
              ],
            },
          ],
        },
      },
    ],
  },

  "command-line": {
    slug: "command-line",
    title: "Command Line",
    chapters: [
      {
        id: "navigation",
        title: "Navigation & Files",
        lessons: [
          { id: "ls-pwd", title: "ls & pwd" },
          { id: "cd-mkdir", title: "cd & mkdir" },
          { id: "rm-mv", title: "rm & mv" },
        ],
        quiz: {
          passPercent: 80,
          questions: [
            {
              id: "q1",
              question: "Which command lists files in the current directory?",
              options: [
                { id: "a", text: "pwd" },
                { id: "b", text: "ls", correct: true },
                { id: "c", text: "cd" },
                { id: "d", text: "cat" },
              ],
            },
            {
              id: "q2",
              question: "Which command creates a new directory?",
              options: [
                { id: "a", text: "mkdir", correct: true },
                { id: "b", text: "touch" },
                { id: "c", text: "rm" },
                { id: "d", text: "open" },
              ],
            },
          ],
        },
      },
    ],
  },

  git: {
    slug: "git",
    title: "Git & GitHub",
    chapters: [
      {
        id: "basics",
        title: "Git Basics",
        lessons: [
          { id: "init", title: "git init" },
          { id: "commit", title: "git add & git commit" },
          { id: "remote", title: "git remote & git push" },
        ],
        quiz: {
          passPercent: 80,
          questions: [
            {
              id: "q1",
              question: "Which command stages changes?",
              options: [
                { id: "a", text: "git add", correct: true },
                { id: "b", text: "git commit" },
                { id: "c", text: "git push" },
                { id: "d", text: "git status" },
              ],
            },
            {
              id: "q2",
              question: "Which command creates a new repo in the current folder?",
              options: [
                { id: "a", text: "git init", correct: true },
                { id: "b", text: "git clone" },
                { id: "c", text: "git create" },
                { id: "d", text: "git new" },
              ],
            },
          ],
        },
      },
    ],
  },

  react: {
    slug: "react",
    title: "React",
    chapters: [
      {
        id: "components-state",
        title: "Components & State",
        lessons: [
          { id: "components", title: "Function Components" },
          { id: "props", title: "Props" },
          { id: "state", title: "useState" },
        ],
        quiz: {
          passPercent: 80,
          questions: [
            {
              id: "q1",
              question: "Which hook is used to manage local component state?",
              options: [
                { id: "a", text: "useEffect" },
                { id: "b", text: "useState", correct: true },
                { id: "c", text: "useMemo" },
                { id: "d", text: "useRef" },
              ],
            },
            {
              id: "q2",
              question: "Props in React are…",
              options: [
                { id: "a", text: "mutable state" },
                { id: "b", text: "immutable inputs", correct: true },
                { id: "c", text: "global variables" },
                { id: "d", text: "lifecycle events" },
              ],
            },
          ],
        },
      },
      {
        id: "effects-routing",
        title: "Effects & Routing",
        lessons: [
          { id: "effect", title: "useEffect Basics" },
          { id: "next-routing", title: "Next.js App Router Basics" },
        ],
        quiz: {
          passPercent: 80,
          questions: [
            {
              id: "q1",
              question: "useEffect runs after…",
              options: [
                { id: "a", text: "every render by default", correct: true },
                { id: "b", text: "only once" },
                { id: "c", text: "on server only" },
                { id: "d", text: "never" },
              ],
            },
            {
              id: "q2",
              question: "Which folder defines routes in Next.js (App Router)?",
              options: [
                { id: "a", text: "src/routes" },
                { id: "b", text: "pages" },
                { id: "c", text: "app", correct: true },
                { id: "d", text: "public" },
              ],
            },
          ],
        },
      },
    ],
  },
};
