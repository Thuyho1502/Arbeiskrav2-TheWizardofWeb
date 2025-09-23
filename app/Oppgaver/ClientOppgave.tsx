"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useCourseFlow } from "@/store/courseFlow";
import { COURSE_CONTENT } from "../faginnhold/coursecontent";

type Props = {
  slug: string;
  chapterId: string;
};

export default function ClientOppgave({ slug, chapterId }: Props) {
  const router = useRouter();

  const ensureCourse = useCourseFlow((s) => s.ensureCourse);
  const canTakeOppgave = useCourseFlow((s) => s.canTakeOppgave(slug, chapterId));
  const markOppgaveDone = useCourseFlow((s) => s.markOppgaveDone);
  const hasCompletedOppgave = useCourseFlow((s) => s.hasCompletedOppgave(slug, chapterId));

  const chapter = COURSE_CONTENT[slug].chapters.find((c) => c.id === chapterId);

  useEffect(() => {
    ensureCourse(slug);
  }, [slug, ensureCourse]);

  if (!chapter) return <p>Chapter not found.</p>;
  if (!canTakeOppgave) return <p>Bạn chưa đủ điều kiện làm Oppgave. Hoàn thành tất cả lessons và pass quiz trước nhé.</p>;

  const submitOppgave = () => {
    // Demo: giả lập điểm 100%
    const score = 100;
    markOppgaveDone(slug, chapterId, score);
    alert("Oppgave hoàn thành! Chúc mừng!");
    router.push(`/faginnhold/${slug}`); // quay về overview
  };

  return (
    <main className="mx-auto max-w-3xl px-4 py-8">
      <h1 className="text-2xl font-bold">Oppgave: {chapter.title}</h1>

      {hasCompletedOppgave ? (
        <p className="mt-4 text-green-600 font-semibold">
          ✅ Bạn đã hoàn thành Oppgave này.
        </p>
      ) : (
        <>
          <p className="mt-4">Nội dung bài tập cho chapter này...</p>
          <button
            onClick={submitOppgave}
            className="mt-6 rounded bg-emerald-600 px-4 py-2 text-white hover:bg-emerald-700"
          >
            Hoàn thành Oppgave
          </button>
        </>
      )}
    </main>
  );
}
