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

  // Trạng thái
  const isChapterUnlocked = useCourseFlow((s) => s.isChapterUnlocked);
  const canTakeOppgave = useCourseFlow((s) => s.canTakeOppgave);
  const hasPassedQuiz = useCourseFlow((s) => s.hasPassedQuiz);
  const hasCompletedOppgave = useCourseFlow((s) => s.hasCompletedOppgave);

  // Khởi tạo course trong store
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
            ← Back to course list
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
              {/* Header chapter */}
              <div className="mb-3 flex items-center justify-between gap-3">
                <h2 className="text-xl font-semibold">
                  {idx + 1}. {ch.title}
                </h2>

                {/* Nút Start Lesson / Quiz */}
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
                    Locked
                  </span>
                )}
              </div>

              {/* Thông báo nếu chưa unlock */}
              {!unlocked && (
                <p className="text-sm text-yellow-600 mt-1">
                  Bạn cần hoàn thành các bài học trước để mở chapter này
                </p>
              )}

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
                                unlocked ? "" : "pointer-events-none opacity-50"
                              }`}
                            >
                              {ls.title}
                            </Link>
                          </td>
                          <td className="py-2 text-right text-neutral-500">
                            {/* Có thể hiển thị trạng thái lesson */}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <p className="text-sm text-neutral-500">No lessons.</p>
              )}

              {/* Link Quiz */}
              <div className="mt-3">
                <Link
                  href={`/faginnhold/${slug}/${ch.id}/quiz`}
                  className={`text-sm font-medium text-indigo-600 hover:underline ${
                    unlocked ? "" : "pointer-events-none opacity-50"
                  }`}
                >
                  Take the chapter quiz →
                </Link>

                {hasPassedQuiz(slug, ch.id) && (
                  <span className="ml-2 text-sm font-semibold text-green-600">
                    ✅ Quiz passed
                  </span>
                )}
              </div>

              {/* Link Oppgave */}
              <div className="mt-2">
                <Link
                  href={`/faginnhold/${slug}/${ch.id}/oppgave`}
                  className={`text-sm font-medium text-green-600 hover:underline ${
                    unlocked && canTakeOppgave(slug, ch.id)
                      ? ""
                      : "pointer-events-none opacity-50"
                  }`}
                >
                  Start Oppgave →
                </Link>

                {hasCompletedOppgave(slug, ch.id) && (
                  <span className="ml-2 text-sm font-semibold text-green-600">
                    ✅ Oppgave completed
                  </span>
                )}
              </div>
            </section>
          );
        })}
      </div>
    </main>
  );
}
