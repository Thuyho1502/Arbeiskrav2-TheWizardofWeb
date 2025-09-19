
"use client";

import { useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import type { CourseDetail } from "../../../coursecontent";
import { useCourseFlow } from "../../../../../store/courseFlow";

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

  // đảm bảo course đã có trong store
  useEffect(() => {
    ensureCourse(slug);
  }, [ensureCourse, slug]);

  const chapter = useMemo(
    () => course.chapters.find((c) => c.id === chapterId),
    [course, chapterId]
  );

  if (!chapter) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-8">
        <p>Chapter not found.</p>
        <Link href={`/faginnhold/${slug}`} className="text-indigo-600 underline">
          ← Back to course
        </Link>
      </main>
    );
  }

  const lessonIndex = chapter.lessons.findIndex((l) => l.id === lessonId);
  const lesson = chapter.lessons[lessonIndex];
  const LessonComp = lesson?.component;

  const goNext = () => {
    const nextLesson = chapter.lessons[lessonIndex + 1];
    if (nextLesson) {
      router.push(`/faginnhold/${slug}/${chapter.id}/${nextLesson.id}`);
      return;
    }
    // hết bài -> chuyển sang quiz của chapter
    router.push(`/faginnhold/${slug}/${chapter.id}/quiz`);
  };

  const onDone = () => {
    if (lesson) {
      markLessonDone(slug, chapter.id, lesson.id);
    }
    goNext();
  };

  return (
    <main className="mx-auto px-2 py-2 bg-black/90 text-white">
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
        {lessonIndex + 1}. {lesson?.title}
      </h2>

      {/* Nội dung bài học */}
      {LessonComp ? (
        <div className="mt-6">
          <LessonComp />
        </div>
      ) : (
        <div className="prose prose-neutral mt-6 dark:prose-invert">
          <p>
            (Demo) Nội dung bài <strong>{lesson?.title}</strong>. Bạn có thể render
            từ <code>lesson.component</code> nếu có.
          </p>
        </div>
      )}

      <div className="mt-8 flex items-center gap-3">
        <button
          onClick={onDone}
          className="rounded bg-emerald-600 px-4 py-2 text-white hover:bg-emerald-700"
        >
          Done
        </button>

        <button
          onClick={goNext}
          className="rounded border px-4 py-2 hover:bg-neutral-50 dark:hover:bg-neutral-900"
        >
          Neste
        </button>
      </div>
    </main>
  );
}
