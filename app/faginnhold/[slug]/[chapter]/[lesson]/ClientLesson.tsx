// app/faginnhold/[slug]/[chapter]/[lesson]/ClientLesson.tsx
"use client";

import { useMemo } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useCourseFlow } from "@/store/courseFlow";
import type { CourseDetail } from "@/app/faginnhold/coursecontent";

export default function ClientLesson({
  slug,
  course,
  chapterId,
  lessonId,
  chapterIndex,
}: {
  slug: string;
  course: CourseDetail;
  chapterId: string;
  lessonId: string;
  chapterIndex: number;
}) {
  const router = useRouter();
  const ensureCourse = useCourseFlow((s) => s.ensureCourse);
  const markLessonDone = useCourseFlow((s) => s.markLessonDone);
  ensureCourse(slug);

  const chapter = useMemo(
    () => course.chapters.find((c) => c.id === chapterId)!,
    [course, chapterId]
  );
  const lessonIndex = chapter.lessons.findIndex((l) => l.id === lessonId);
  const lesson = chapter.lessons[lessonIndex];

  const nextStep = () => {
    const nextLesson = chapter.lessons[lessonIndex + 1];
    if (nextLesson) {
      router.push(`/faginnhold/${slug}/${chapter.id}/${nextLesson.id}`);
      return;
    }
    router.push(`/faginnhold/${slug}/${chapter.id}/quiz`);
  };
  const onDone = () => {
    markLessonDone(slug, chapter.id, lesson.id);
    nextStep();
  };

  return (
    <main className="mx-auto max-w-3xl px-4 py-8">
      <div className="mb-6">
        <Link
          href={`/faginnhold/${slug}`}
          className="text-sm text-neutral-500 hover:underline"
        >
          ← Tilbake til {course.title}
        </Link>
      </div>

      <h1 className="text-3xl font-bold">
        {course.title} — {chapter.title}
      </h1>
      <h2 className="mt-1 text-xl font-semibold">
        {lessonIndex + 1}. {lesson.title}
      </h2>

<div className="prose mt-6">
  {lesson.component ? (() => {
    const LessonComponent = lesson.component; // React cần PascalCase
    return <LessonComponent />;
  })() : (
    <div dangerouslySetInnerHTML={{ __html: lesson.content ?? "<p>Chưa có nội dung</p>" }} />
  )}
</div>




      <div className="mt-8 flex items-center gap-3">
        <button
          onClick={onDone}
          className="rounded bg-emerald-600 px-4 py-2 text-white hover:bg-emerald-700"
        >
          Done
        </button>

        <button
          onClick={nextStep}
          className="rounded border px-4 py-2 hover:bg-neutral-50 dark:hover:bg-neutral-900"
        >
          Neste
        </button>
      </div>
    </main>
  );
}   