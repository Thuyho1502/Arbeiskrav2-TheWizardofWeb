// app/faginnhold/[slug]/[chapter]/quiz/ClientQuiz.tsx
"use client";

import { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";

import { COURSE_CONTENT } from "@/app/faginnhold/coursecontent";
import type { QuizQuestion } from "@/app/faginnhold/coursecontent";
import { useCourseFlow } from "../../../../../store/courseFlow";
import SimpleCertificate from "@/app/components/SimpleCertificate/page";

type Props = {
  slug: string;
  courseTitle: string;
  chapterId: string;
  chapterTitle: string;
  passPercent: number;
  questions: QuizQuestion[];
};

function makeCorrectAnswerTable(questions: QuizQuestion[]) {
  return questions.map((q, i) => {
    const correct = q.options.find((o) => o.correct);
    return {
      "#": i + 1,
      id: q.id,
      question: q.question,
      correctId: correct?.id ?? "—",
      correctText: correct?.text ?? "—",
    };
  });
}

export default function ClientQuiz({
  slug,
  courseTitle,
  chapterId,
  chapterTitle,
  passPercent,
  questions,
}: Props) {
  const router = useRouter();
  const unlockNextChapter = useCourseFlow((s) => s.unlockNextChapter);

  const [selections, setSelections] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [progress, setProgress] = useState<Record<string, any>>({});
  const [showCert, setShowCert] = useState(false);
  const [studentName, setStudentName] = useState(
    () => (typeof window !== "undefined" && localStorage.getItem("studentName")) || ""
  );

  // Khoá scroll khi mở certificate
  useEffect(() => {
    document.body.style.overflow = showCert ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [showCert]);

  // In đáp án đúng ra console để kiểm
  useEffect(() => {
    try {
      console.clear();
    } catch {}
    console.log("%c[QUIZ ANSWERS]", "font-weight:bold; font-size:12px");
    console.table(makeCorrectAnswerTable(questions));
    console.log("Pass threshold:", passPercent + "%");
  }, [questions, passPercent]);

  const canSubmit = useMemo(
    () => Object.keys(selections).length > 0,
    [selections]
  );

  // Khôi phục tiến độ nếu có
  useEffect(() => {
    const saved = JSON.parse(
      localStorage.getItem(`courseProgress_${slug}`) || "{}"
    );
    setProgress(saved);
    if (saved[chapterId]) {
      setSelections(saved[chapterId].answered || {});
      setScore(saved[chapterId].score || 0);
      setSubmitted(!!saved[chapterId].passed);
    }
  }, [slug, chapterId]);

  const handlePick = (qid: string, oid: string) => {
    setSelections((prev) => ({ ...prev, [qid]: oid }));
  };

  const submit = () => {
    let correct = 0;
    questions.forEach((q) => {
      const chosenId = selections[q.id];
      const correctOpt = q.options.find((o) => o.correct);
      if (chosenId === correctOpt?.id) correct++;
    });

    const pct = Math.round((correct / questions.length) * 100);
    setScore(pct);
    setSubmitted(true);

    const course = COURSE_CONTENT[slug];
    const chapterIndex = course.chapters.findIndex((c) => c.id === chapterId);
    const nextChapterIndex = chapterIndex + 1;
    const isLastChapter = chapterIndex === course.chapters.length - 1;

    if (pct >= passPercent && nextChapterIndex < course.chapters.length) {
      unlockNextChapter(slug, nextChapterIndex);
    }

    const newProgress = {
      ...progress,
      [chapterId]: {
        answered: selections,
        score: pct,
        passed: pct >= passPercent,
      },
    };
    localStorage.setItem(
      `courseProgress_${slug}`,
      JSON.stringify(newProgress)
    );
    setProgress(newProgress);

    if (pct >= passPercent && isLastChapter) {
      setShowCert(true);
    }
  };

  const handleChangeName = (v: string) => {
    setStudentName(v);
    try {
      localStorage.setItem("studentName", v);
    } catch {}
  };

  return (
    <div className="relative isolate w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-black text-white">
      <main className="mx-auto max-w-3xl px-4 py-10">
        <h1 className="mb-2 text-4xl font-extrabold">Quiz — {courseTitle}</h1>
        <p className="mb-8 text-lg text-white/70">
          Answer all questions. Need <strong>{passPercent}%</strong> to pass.
        </p>

        {questions.map((q, qi) => (
          <div key={q.id} className="rounded-lg border border-white/15 p-4 mb-4">
            <h3 className="mb-3 font-semibold">
              {qi + 1}. {q.question}
            </h3>

            <div className="space-y-2">
              {q.options.map((op) => {
                const correctOpt = q.options.find((o) => o.correct);
                const isSelected = selections[q.id] === op.id;
                const isCorrect = op.id === correctOpt?.id;

                const borderClass = submitted
                  ? isCorrect && isSelected
                    ? "border-emerald-400 bg-emerald-600/15"
                    : !isCorrect && isSelected
                    ? "border-rose-400 bg-rose-600/15"
                    : isCorrect
                    ? "border-emerald-300/70 bg-emerald-600/10"
                    : "border-white/15"
                  : "border-white/15";

                return (
                  <label
                    key={op.id}
                    className={`flex cursor-pointer items-center gap-2 rounded border px-3 py-2 hover:bg-white/5 ${borderClass}`}
                  >
                    <input
                      type="radio"
                      name={`q_${q.id}`}
                      value={op.id}
                      checked={isSelected}
                      onChange={() => !submitted && handlePick(q.id, op.id)}
                      disabled={submitted}
                    />
                    <span>{op.text}</span>
                  </label>
                );
              })}
            </div>
          </div>
        ))}

        <div className="flex gap-3 mt-4">
          <button
            onClick={submit}
            disabled={!canSubmit}
            className="rounded bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700 disabled:opacity-50"
          >
            Submit
          </button>
          <button
            onClick={() => router.push(`/faginnhold/${slug}`)}
            className="rounded border border-white/15 px-4 py-2 hover:bg-white/5"
          >
            ← Back
          </button>
        </div>
        {submitted && (
        <div className="mt-6 rounded-lg border p-4">
          <div className="text-lg">
            Score: <strong>{score}%</strong> (need {passPercent}% to pass)
          </div>
          {score >= passPercent ? (
            <div className="mt-2 rounded bg-emerald-600/10 p-3 text-emerald-700">
              🎉 Gratulation!!! You passed the chapter “{chapterTitle}”.
            </div>
          ) : (
            <div className="mt-2 rounded bg-rose-600/10 p-3 text-rose-700">
              😿 Let's try again!
            </div>
          )}

          {score >= passPercent &&
            (() => {
              const course = COURSE_CONTENT[slug];
              const chapterIndex = course.chapters.findIndex((c) => c.id === chapterId);
              const nextChapter =
                chapterIndex >= 0 ? course.chapters[chapterIndex + 1] : undefined;

              if (!nextChapter) return null;

              return (
                <button
                  onClick={() =>
                    router.push(
                      `/faginnhold/${slug}/${nextChapter.id}/${nextChapter.lessons[0].id}`
                    )
                  }
                  className="mt-4 rounded bg-indigo-600 px-4 py-2 font-semibold text-white hover:bg-indigo-700"
                >
                  Next Chapter → {nextChapter.title}
                </button>
              );
            })()}
        </div>
      )}
      </main>

      {/* Certificate modal */}
      {showCert && (
        <>
          <div className="fixed inset-0 z-40 bg-black/70" />
          <div className="fixed inset-0 z-50 grid place-items-center p-4">
            <SimpleCertificate
              courseTitle={courseTitle}
              studentName={studentName}
              onChangeName={handleChangeName}
              onClose={() => setShowCert(false)}
              goHome={() => router.push("/")}
              goFaginnhold={() => router.push("/faginnhold")}
              goOppgaver={() => router.push("/Oppgaver")}
            />
          </div>
        </>
      )}
    </div>
  );
}