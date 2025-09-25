"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { COURSE_CONTENT } from "@/app/faginnhold/coursecontent";

type CourseProgress = Record<
  string,
  { answered?: Record<string, string>; score?: number; passed?: boolean }
>;
type CourseCompletion = {
  completed: boolean;
  passedChapters: number;
  totalChapters: number;
};

function getCompletion(slugLower: string): CourseCompletion {
  const course = Object.values(COURSE_CONTENT).find(
    (c) => c.slug.toLowerCase() === slugLower
  );
  if (!course)
    return { completed: false, passedChapters: 0, totalChapters: 0 };

  try {
    const raw = localStorage.getItem(`courseProgress_${slugLower}`) || "{}";
    const progress: CourseProgress = JSON.parse(raw);
    const total = course.chapters.length;
    const passed = course.chapters.filter((c) => progress[c.id]?.passed).length;
    return {
      completed: passed === total && total > 0,
      passedChapters: passed,
      totalChapters: total,
    };
  } catch {
    return {
      completed: false,
      passedChapters: 0,
      totalChapters: course.chapters.length,
    };
  }
}

export default function OppgaverIndex() {
  const [ready, setReady] = useState(false);
  const [status, setStatus] = useState<Record<string, CourseCompletion>>({});

  useEffect(() => {
    const s: Record<string, CourseCompletion> = {};
    Object.values(COURSE_CONTENT).forEach((course) => {
      const slugLower = course.slug.toLowerCase();
      s[slugLower] = getCompletion(slugLower);
    });
    setStatus(s);
    setReady(true);
  }, []);

  return (
    <main className="min-h-[70vh] bg-black text-white">
      <section className="mx-auto max-w-6xl px-4 py-10">
        <h1 className="text-3xl font-bold">Assignments</h1>
        <p className="mt-2 text-white/80">
          Select a course to work on assignments. You must complete the course
          before you can access the assignments.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Object.values(COURSE_CONTENT).map((course) => {
            const slugLower = course.slug.toLowerCase();
            const comp = status[slugLower] ?? {
              completed: false,
              passedChapters: 0,
              totalChapters: course.chapters.length,
            };
            const pct =
              comp.totalChapters > 0
                ? Math.round(
                    (comp.passedChapters / comp.totalChapters) * 100
                  )
                : 0;

            return (
              <div
                key={slugLower}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-white ring-1 ring-white/5 hover:bg-gradient-to-br from-indigo-500 to-emerald-500 text-white font-black"
              >
                <div className="relative h-40 w-full overflow-hidden">
                  {course.video ? (
                    <video
                      className="absolute inset-0 h-full w-full object-cover group-hover:scale-[1.02] transition"
                      muted
                      loop
                      autoPlay
                      playsInline
                      preload="metadata"
                    >
                      <source src={course.video} type="video/mp4" />
                    </video>
                  ) : (
                    <div className="absolute inset-0 grid place-items-center text-black">
                      {course.title}
                    </div>
                  )}
                </div>

                <div className="p-4">
                  <div className="text-[11px] uppercase tracking-widest text-black/50">
                    Course
                  </div>
                  <h3 className="mt-1 line-clamp-1 text-lg font-semibold text-black">
                    {course.title}
                  </h3>
                  {course.description && (
                    <p className="mt-1 line-clamp-2 text-sm text-black">
                      {course.description}
                    </p>
                  )}

                  <div className="mt-3 flex items-center gap-2">
                    <span
                      className={`inline-flex items-center gap-2 rounded-full px-2.5 py-1 text-xs font-semibold ${
                        comp.completed
                          ? "bg-emerald-600 text-white"
                          : "bg-black/30 text-black"
                      }`}
                    >
                      {comp.completed
                        ? "Ready for assignments"
                        : `Progress: ${pct}%`}
                    </span>

                    <Link
                      href={`/Oppgaver/${slugLower}`} // keep route as-is
                      className={`ml-auto rounded-md px-3 py-1.5 text-sm font-semibold ${
                        comp.completed
                          ? "bg-indigo-600 text-white hover:bg-indigo-500"
                          : "bg-black/70 text-white/80 pointer-events-none"
                      }`}
                    >
                      Open
                    </Link>
                  </div>

                  {!comp.completed && ready && (
                    <p className="mt-2 text-xs text-red-400">
                      Complete the course to unlock assignments.
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
