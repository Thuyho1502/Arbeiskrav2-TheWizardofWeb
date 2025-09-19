// app/faginnhold/[slug]/[chapter]/quiz/ClientQuiz.tsx
"use client";
import { COURSE_CONTENT } from "@/app/faginnhold/coursecontent";

import { useMemo, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
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

  // ===== Debug props vào console để chắc chắn không undefined =====
  useEffect(() => {
    console.log("[ClientQuiz props]", {
      slug,
      courseTitle,
      chapterId,
      chapterTitle,
      passPercent,
      questionsCount: Array.isArray(questions) ? questions.length : "N/A",
    });
  }, [slug, courseTitle, chapterId, chapterTitle, passPercent, questions]);

  // Guard: nếu questions không hợp lệ thì trả ra thông báo, tránh crash
  if (!Array.isArray(questions)) {
    console.error("Quiz questions is not an array:", questions);
    return (
      <main className="mx-auto max-w-3xl px-4 py-10">
        <h1 className="mb-2 text-3xl font-bold">Quiz — {courseTitle}</h1>
        <p>Quiz chưa được cấu hình đúng.</p>
      </main>
    );
  }

  const [selections, setSelections] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  // ===== In đáp án đúng ngay khi mở trang =====
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

  const handlePick = (qid: string, oid: string) => {
    setSelections((prev) => ({ ...prev, [qid]: oid }));
  };

  const submit = () => {
    let correct = 0;
    const detailed = questions.map((q, i) => {
      const chosenId = selections[q.id];
      const correctOpt = q.options.find((o) => o.correct);
      const isCorrect = chosenId === correctOpt?.id;
      if (isCorrect) correct += 1;
      return {
        "#": i + 1,
        qid: q.id,
        chosen: chosenId ?? "—",
        correct: correctOpt?.id ?? "—",
        result: isCorrect ? "✓" : "✗",
      };
    });

    const pct = total > 0 ? Math.round((correct / total) * 100) : 0;
    setScore(pct);
    setSubmitted(true);

    console.log("%c[QUIZ SUBMIT RESULT]", "font-weight:bold; font-size:12px");
    console.table(detailed);
    console.log(`Score: ${pct}%  |  Pass need: ${passPercent}%  |  Passed: ${pct >= passPercent}`);
  };

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="mb-2 text-4xl font-extrabold">Quiz — {courseTitle}</h1>
      <p className="mb-8 text-lg text-neutral-600">
        Trả lời tất cả câu hỏi. Cần đạt <strong>{passPercent}%</strong> để qua chương.
      </p>

      {total === 0 ? (
        <div className="rounded-lg border p-4">Chương này chưa có câu hỏi.</div>
      ) : (
        <section className="space-y-6">
          {questions.map((q, qi) => (
            <div key={q.id} className="rounded-lg border p-4">
              <h3 className="mb-3 text-lg font-semibold">
                {qi + 1}. {q.question}
              </h3>

              <div className="space-y-2">
                {q.options.map((op) => (
                  <label
                    key={op.id}
                    className="flex cursor-pointer items-center gap-2 rounded border px-3 py-2 hover:bg-neutral-50 dark:hover:bg-neutral-900"
                  >
                    <input
                      type="radio"
                      name={`q_${q.id}`}
                      value={op.id}
                      checked={selections[q.id] === op.id}
                      onChange={() => handlePick(q.id, op.id)}
                    />
                    <span>{op.text}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}
        </section>
      )}

      <div className="mt-8 flex items-center gap-3">
        <button
          onClick={submit}
          disabled={!canSubmit || total === 0}
          className="rounded bg-indigo-600 px-4 py-2 font-semibold text-white enabled:hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Nộp bài
        </button>

        <button
          onClick={() => router.push(`/faginnhold/${slug}`)}
          className="rounded border px-4 py-2 hover:bg-neutral-50 dark:hover:bg-neutral-900"
        >
          ← Tilbake til {courseTitle}
        </button>
      </div>

      {submitted && (
        <div className="mt-6 rounded-lg border p-4">
          <div className="text-lg">
            Điểm: <strong>{score}%</strong> (cần {passPercent}% để qua)
          </div>
          {score >= passPercent ? (
            <div className="mt-2 rounded bg-emerald-600/10 p-3 text-emerald-700">
              🎉 Bạn đã qua chương “{chapterTitle}”.
            </div>
          ) : (
            <div className="mt-2 rounded bg-rose-600/10 p-3 text-rose-700">
              😿 Chưa đạt. Hãy thử lại nhé!
            </div>
          )}
          {/* Nếu pass và có chương tiếp theo thì hiện nút Next */}
    {score >= passPercent && (() => {
      const course = COURSE_CONTENT[slug];
      const chapterIndex = course.chapters.findIndex(c => c.id === chapterId);
      const nextChapter = chapterIndex >= 0 ? course.chapters[chapterIndex + 1] : undefined;

      if (!nextChapter) return null;

      return (
        <button
          onClick={() =>
            router.push(`/faginnhold/${slug}/${nextChapter.id}/${nextChapter.lessons[0].id}`)
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
