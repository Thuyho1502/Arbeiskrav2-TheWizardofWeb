// app/faginnhold/[slug]/ClientOverview.tsx
"use client";

import Link from "next/link";
import { useEffect, useMemo } from "react";
import type { CourseDetail } from "../coursecontent";
import { useCourseFlow } from "@/store/courseFlow";
import { Press_Start_2P } from "next/font/google";


export const pixelFont = Press_Start_2P({ subsets: ["latin"], weight: "400" });

type Props = { slug: string; course: CourseDetail };

export default function ClientOverview({ slug, course }: Props) {
  const ensureCourse = useCourseFlow((s) => s.ensureCourse);
  const isChapterUnlocked = useCourseFlow((s) => s.isChapterUnlocked);

  useEffect(() => {
    ensureCourse(slug);
  }, [slug, ensureCourse]);

  const chapters = useMemo(() => course.chapters ?? [], [course]);

  return (
    <main className="bg-black text-white">
      {/* HERO */}
      <section aria-label="course-hero" key={slug}>
        <div className="relative isolate w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
          <div className="relative h-[48vh] min-h-[260px] md:h-[56vh] lg:h-[64vh] overflow-hidden">
            {course.video ? (
              <video
                className="absolute inset-0 h-full w-full object-cover object-center"
                muted
                loop
                autoPlay
                playsInline
                preload="metadata"
                // nếu bạn có poster trong data:
                // poster={course.poster}
              >
                <source src={course.video} type="video/mp4" />
              </video>
            ) : (
              // Fallback nếu không có video
              <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900" />
            )}

            {/* overlay để chữ nổi */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 z-10 mx-auto max-w-6xl px-4 pb-8">
              <h1 className={`${pixelFont.className} text-3xl md:text-4xl`}>
                {course.title}
              </h1>
              {course.description && (
                <p className="mt-2 max-w-3xl text-white/90">{course.description}</p>
              )}
              <div className="mt-3">
                <Link
                  href="/faginnhold"
                  className="text-sm text-white/80 hover:text-white hover:underline"
                >
                  ← Tilbake til kursliste
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NỘI DUNG */}
      <section className="mx-auto max-w-6xl px-4 py-8">
        <div className="space-y-8">
          {chapters.map((ch, idx) => {
            const unlocked = isChapterUnlocked(slug, idx);
            const firstLesson = ch.lessons?.[0];

            return (
              <section
                key={ch.id}
                className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-4"
              >
                <div className="mb-3 flex items-center justify-between gap-3">
                  <h2 className="text-xl font-semibold">
                    {idx + 1}. {ch.title}
                  </h2>

                  {unlocked ? (
                    firstLesson ? (
                      <Link
                        href={`/faginnhold/${slug}/${ch.id}/${firstLesson.id}`}
                        className="rounded bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500"
                      >
                        Start
                      </Link>
                    ) : (
                      <Link
                        href={`/faginnhold/${slug}/${ch.id}/quiz`}
                        className="rounded bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500"
                      >
                        Start quiz
                      </Link>
                    )
                  ) : (
                    <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/60">
                      Låst
                    </span>
                  )}
                </div>

                {ch.lessons?.length ? (
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                      <thead className="text-white/70">
                        <tr>
                          <th className="py-2">Lesson</th>
                          <th className="py-2 text-right">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {ch.lessons.map((ls) => (
                          <tr key={ls.id} className="border-t border-white/10">
                            <td className="py-2 pr-4">
                              <Link
                                href={`/faginnhold/${slug}/${ch.id}/${ls.id}`}
                                className={`hover:underline ${
                                  unlocked ? "text-white" : "pointer-events-none text-white/40"
                                }`}
                              >
                                {ls.title}
                              </Link>
                            </td>
                            <td className="py-2 text-right text-white/60" />
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <p className="text-sm text-white/70">Ingen leksjoner.</p>
                )}

                <div className="mt-3">
                  <Link
                    href={`/faginnhold/${slug}/${ch.id}/quiz`}
                    className={`text-sm font-medium hover:text-amber-300 ${
                      unlocked ? "text-white" : "pointer-events-none text-white/40"
                    }`}
                  >
                    Ta kapittel-quiz →
                  </Link>
                </div>
              </section>
            );
          })}
        </div>
      </section>
    </main>
  );
}