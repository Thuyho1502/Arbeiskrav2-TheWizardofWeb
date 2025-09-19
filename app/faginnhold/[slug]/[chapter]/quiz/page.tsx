// app/faginnhold/[slug]/[chapter]/quiz/page.tsx
import { notFound } from "next/navigation";
import ClientQuiz from "./ClientQuiz";
import { COURSE_CONTENT, type CourseDetail, type Chapter } from "@/app/faginnhold/coursecontent";

type Params = {
  slug: string;
  chapter: string;
};

// Next.js 15: params là Promise — cần await để tránh cảnh báo
export default async function QuizPage(props: { params: Promise<Params> }) {
  const { slug, chapter } = await props.params;

  const course: CourseDetail | undefined = COURSE_CONTENT[slug];
  if (!course) return notFound();

  const chap: Chapter | undefined = course.chapters.find((c) => c.id === chapter);
  if (!chap) return notFound();

  return (
    <ClientQuiz
      slug={slug}
      courseTitle={course.title}
      chapterId={chap.id}
      chapterTitle={chap.title}
      passPercent={chap.quiz.passPercent}
      questions={chap.quiz.questions}
    />
  );
}
