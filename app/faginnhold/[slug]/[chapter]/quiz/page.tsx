import { notFound } from "next/navigation";
import { COURSE_CONTENT } from "../../../coursecontent";

type RouteParams = { slug: string; chapter: string };

export default async function QuizPage({
  params,
}: {
  params: Promise<RouteParams>;
}) {
  // ⬇️ BẮT BUỘC: await params
  const { slug, chapter } = await params;

  const course = COURSE_CONTENT[slug];
  if (!course) return notFound();

  const ch = course.chapters.find((c) => c.id === chapter);
  if (!ch) return notFound();

  return (
    <main className="mx-auto max-w-3xl px-4 py-8">
      <h1 className="text-2xl font-bold">Quiz — {course.title}</h1>
      <p className="mt-2 text-sm text-neutral-600">
        (Placeholder) Render quiz cho chapter: <b>{ch.title}</b>.
      </p>
    </main>
  );
}
