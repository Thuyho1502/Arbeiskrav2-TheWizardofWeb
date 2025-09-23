"use client";

import { COURSE_CONTENT } from "@/app/faginnhold/coursecontent";
import { useState, useEffect,useMemo } from "react";
import { useRouter } from "next/navigation";
import { useCourseFlow } from "../../../../../store/courseFlow";
import type { QuizQuestion } from "@/app/faginnhold/coursecontent";

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

  // print correct answer in console

  useEffect(() => {
    try {
      console.clear();
    } catch {}
    console.log("%c[QUIZ ANSWERS]", "font-weight:bold; font-size:12px");
    console.table(makeCorrectAnswerTable(questions));
    console.log("Pass threshold:", passPercent + "%");
  }, [questions, passPercent]);

  const total = questions.length;

  const canSubmit = useMemo(
    () => Object.keys(selections).length > 0,
    [selections]
  );

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem(`courseProgress_${slug}`) || "{}");
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

    if (pct >= passPercent && nextChapterIndex < course.chapters.length) {
      unlockNextChapter(slug, nextChapterIndex);
    }

    const newProgress = {
      ...progress,
      [chapterId]: { answered: selections, score: pct, passed: pct >= passPercent },
    };
    localStorage.setItem(`courseProgress_${slug}`, JSON.stringify(newProgress));
    setProgress(newProgress);
  };

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="mb-2 text-4xl font-extrabold">Quiz — {courseTitle}</h1>
      <p className="mb-8 text-lg text-neutral-600">
        Answer all questions. Need <strong>{passPercent}%</strong> to pass.
      </p>

      {questions.map((q, qi) => (
        <div key={q.id} className="rounded-lg border p-4 mb-4">
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
                  ? "border-emerald-500 bg-emerald-100" // chọn đúng
                  : !isCorrect && isSelected
                  ? "border-rose-500 bg-rose-100" // chọn sai
                  : isCorrect
                  ? "border-emerald-300 bg-emerald-100/20" // đáp án đúng (không chọn)
                  : "border-neutral-200"
                : "border-neutral-200";

              return (
                <label
                  key={op.id}
                  className={`flex cursor-pointer items-center gap-2 rounded border px-3 py-2 hover:bg-neutral-50 dark:hover:bg-neutral-900 ${borderClass}`}
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
          disabled={Object.keys(selections).length === 0}
          className="rounded bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700"
        >
          Submit
        </button>
        <button
          onClick={() => router.push(`/faginnhold/${slug}`)}
          className="rounded border px-4 py-2 hover:bg-neutral-50"
        >
          ← Back
        </button>
      </div>

      {submitted && (
        <div className="mt-6 rounded-lg border p-4">
          <div className="text-lg">
            Score: <strong>{score}%</strong> (Need {passPercent}% to pass)
          </div>
          {score >= passPercent ? (
            <div className="mt-2 rounded bg-emerald-600/10 p-3 text-emerald-700">
              🎉 Pass “{chapterTitle}”.
            </div>
          ) : (
            <div className="mt-2 rounded bg-rose-600/10 p-3 text-rose-700">
              Fail. Try again 😿 
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
  );
}
