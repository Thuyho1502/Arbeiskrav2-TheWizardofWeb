"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { COURSE_CONTENT } from "@/app/faginnhold/coursecontent";

export default function OppgaveCoursePage({ params }: { params: { slug: string } }) {
  const router = useRouter();
  const { slug } = params;
  const course = COURSE_CONTENT[slug];
  const [unlocked, setUnlocked] = useState<boolean | null>(null);

  useEffect(() => {
    if (!course) {
      router.replace("/Oppgaver/[course]/page.tsx");
      return;
    }
    try {
      const raw = localStorage.getItem(`courseProgress_${slug}`) || "{}";
      const progress = JSON.parse(raw) as Record<string, { passed?: boolean }>;
      const allPassed =
        course.chapters.length > 0 &&
        course.chapters.every((c) => progress[c.id]?.passed);
      setUnlocked(allPassed);
    } catch {
      setUnlocked(false);
    }
  }, [course, router, slug]);

  if (!course) return null;

  return (
    <main className="min-h-[70vh] bg-black text-white">
      <section className="mx-auto max-w-5xl px-4 py-10">
        <div className="flex items-center justify-between gap-4">
          <h1 className="text-3xl font-bold">Task — {course.title}</h1>
          <Link
            href="/oppgaver"
            className="rounded border border-white/15 px-3 py-1.5 text-sm hover:bg-white/5"
          >
            ← Back
          </Link>
        </div>

        {unlocked === null && (
          <p className="mt-6 text-white/70">Loading ...</p>
        )}

        {unlocked === false && (
          <div className="mt-6 rounded-xl border border-amber-400/40 bg-amber-500/10 p-4 text-amber-200">
            You must <strong>complete all chapters</strong> in this course before you can open the assignments. Return to{" "}
            <Link href={`/faginnhold/${slug}`} className="underline">
              course page
            </Link>{" "}
            and complete the quiz.
          </div>
        )}

        {unlocked && (
          <>
            <p className="mt-3 text-white/80">
              Great! You have completed the course. Here are the assignments (demo-innhold).
            </p>

            {/* Ví dụ danh sách bài tập – bạn thay bằng nội dung thật */}
            <div className="mt-6 space-y-4">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-white/10 bg-white/5 p-4"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">
                      Task {i + 1}
                    </h3>
                    <span className="rounded-full bg-emerald-600/20 px-2.5 py-1 text-xs text-emerald-300">
                      Ready
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-white/80">
                    Description of the task {i + 1}. (Please include a real problem description and link to solution/editor if you have one.)
                  </p>
                </div>
              ))}
            </div>
          </>
        )}
      </section>
    </main>
  );
}