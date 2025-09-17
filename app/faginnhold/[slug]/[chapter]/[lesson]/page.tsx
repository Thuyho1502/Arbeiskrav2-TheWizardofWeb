import { notFound } from "next/navigation";
import { COURSE_CONTENT } from "../../../coursecontent";
import ClientLesson from "./ClientLesson";

type RouteParams = { slug: string; chapter: string; lesson: string };

export default async function LessonPage({
  params,
}: {
  params: Promise<RouteParams>;
}) {
  // ⬇️ BẮT BUỘC: await params
  const { slug, chapter, lesson } = await params;

  const course = COURSE_CONTENT[slug];
  if (!course) return notFound();

  const chapterIndex = course.chapters.findIndex((c) => c.id === chapter);
  if (chapterIndex === -1) return notFound();

  return (
    <ClientLesson
      slug={slug}
      course={course}
      chapterId={chapter}
      lessonId={lesson}
      chapterIndex={chapterIndex}
    />
  );
}
