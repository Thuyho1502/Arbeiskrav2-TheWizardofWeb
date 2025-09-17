// app/faginnhold/[slug]/ClientOverview.tsx
"use client";

import Link from "next/link";
import { useEffect, useMemo } from "react";
import type { CourseDetail } from "../coursecontent";
import { useCourseFlow } from "@/store/courseFlow";

type Props = {
  slug: string;
  course: CourseDetail;
};

export default function ClientOverview({ slug, course }: Props) {
  const ensureCourse = useCourseFlow((s) => s.ensureCourse);
  const isChapterUnlocked = useCourseFlow((s) => s.isChapterUnlocked);

  // Đảm bảo có state cho course trong Zustand
  useEffect(() => {
    ensureCourse(slug);
  }, [slug, ensureCourse]);

  const chapters = useMemo(() => course.chapters ?? [], [course]);

  return (
    <main className="mx-auto max-w-5xl px-4 py-8">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold">{course.title}</h1>
        {course.description && (
          <p className="mt-2 text-neutral-600 dark:text-neutral-300">
            {course.description}
          </p>
        )}
        <div className="mt-3">
          <Link
            href="/faginnhold"
            className="text-sm text-neutral-500 hover:underline"
          >
            ← Tilbake til kursliste
          </Link>
        </div>
      </header>

      {/* Danh sách chapter */}
      <div className="space-y-8">
        {chapters.map((ch, idx) => {
          const unlocked = isChapterUnlocked(slug, idx);
          const firstLesson = ch.lessons?.[0];

          return (
            <section key={ch.id} className="rounded-xl border p-4">
              <div className="mb-3 flex items-center justify-between gap-3">
                <h2 className="text-xl font-semibold">
                  {idx + 1}. {ch.title}
                </h2>

                {/* Nút Start: vào bài đầu tiên, nếu không có bài thì trỏ sang quiz */}
                {unlocked ? (
                  firstLesson ? (
                    <Link
                      href={`/faginnhold/${slug}/${ch.id}/${firstLesson.id}`}
                      className="rounded bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-700"
                    >
                      Start
                    </Link>
                  ) : (
                    <Link
                      href={`/faginnhold/${slug}/${ch.id}/quiz`}
                      className="rounded bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-700"
                    >
                      Start quiz
                    </Link>
                  )
                ) : (
                  <span className="rounded-full bg-neutral-200 px-3 py-1 text-xs font-semibold text-neutral-600">
                    Låst
                  </span>
                )}
              </div>

              {/* Bảng lesson */}
              {ch.lessons && ch.lessons.length > 0 ? (
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm">
                    <thead className="text-neutral-500">
                      <tr>
                        <th className="py-2">Lesson</th>
                        <th className="py-2 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {ch.lessons.map((ls) => (
                        <tr key={ls.id} className="border-t">
                          <td className="py-2 pr-4">
                            <Link
                              href={`/faginnhold/${slug}/${ch.id}/${ls.id}`}
                              className={`hover:underline ${
                                unlocked
                                  ? ""
                                  : "pointer-events-none opacity-50"
                              }`}
                            >
                              {ls.title}
                            </Link>
                          </td>
                          <td className="py-2 text-right text-neutral-500">
                            {/* Có thể hiển thị trạng thái / nút phụ ở đây */}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <p className="text-sm text-neutral-500">Ingen leksjoner.</p>
              )}

              {/* Link quiz của chapter */}
              <div className="mt-3">
                <Link
                  href={`/faginnhold/${slug}/${ch.id}/quiz`}
                  className={`text-sm font-medium text-indigo-600 hover:underline ${
                    unlocked ? "" : "pointer-events-none opacity-50"
                  }`}
                >
                  Ta kapittel-quiz →
                </Link>
              </div>
            </section>
          );
        })}
      </div>
    </main>
  );
}
