"use client";

import { useEffect, useMemo, useState } from "react";
import { COURSES } from "@/app/faginnhold/course";

export type Rule = { label: string; re: RegExp; must?: boolean };
export type Task = {
  id: string;
  title: string;
  blurb: string;
  starter: string;
  rules: Rule[];
};


type Props = {
  tasks: Task[];
  storageKey: string;
  courseTitle: string;
};

const STORAGE_KEY = "oppgaver_html_code";

export default function GenericOppgaverPage({ tasks, storageKey, courseTitle }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const task = useMemo(() => tasks[activeIndex], [activeIndex]);
  const [code, setCode] = useState(task.starter);
  const [result, setResult] = useState<string | null>(null);
  const [checks, setChecks] = useState<{ label: string; ok: boolean }[]>([]);
  const [completed, setCompleted] = useState<boolean[]>(Array(tasks.length).fill(false));

  // Load code từ localStorage hoặc starter khi đổi bài
  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY);
    const map: Record<string, string> = raw ? JSON.parse(raw) : {};
    const savedCode = map[task.id] ||"";
    setCode(savedCode);
    setResult(null);
    setChecks([]);

    // Luôn in starter code ra console khi load bài mới
    console.log("Suggested answers for:", task.title);
    console.log(task.starter);
  }, [task]);

  // Lưu code vào localStorage
  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY);
    const map: Record<string, string> = raw ? JSON.parse(raw) : {};
    map[task.id] = code;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(map));
  }, [task.id, code]);

  const run = () => setResult(code);

  const reset = () => {
    setCode("");
    setResult(null);
    setChecks([]);
    console.log("Suggested answers for:", task.title);
    console.log(task.starter);
  };

  const check = () => {
    const evals = task.rules.map((r) => {
      if (r.label.includes("At least 3") && /<a[^>]*href=("|')#/gi.test(code)) {
        const matches = code.match(/<a[^>]*href=("|')#/gi) || [];
        return { label: `${r.label} (find${matches.length})`, ok: matches.length >= 3 };
      }
      return { label: r.label, ok: r.re.test(code) };
    });
    setChecks(evals);
  };

  //const passed = checks.length > 0 && checks.every((c) => c.ok);
  const progress = Math.round((completed.filter(Boolean).length / tasks.length) * 100);


const submit = () => {
  // Chạy check và lấy kết quả trực tiếp
  const evals = task.rules.map((r) => {
    if (r.label.includes("At least 3") && /<a[^>]*href=("|')#/gi.test(code)) {
      const matches = code.match(/<a[^>]*href=("|')#/gi) || [];
      return { label: `${r.label} (find ${matches.length})`, ok: matches.length >= 3 };
    }
    return { label: r.label, ok: r.re.test(code) };
  });

  setChecks(evals); 

  const isPassed = evals.every((c) => c.ok); 

  if (!isPassed) {
    alert("The assignment is not completed. Please check again!");
    return;
  }

  const updated = [...completed];
  updated[activeIndex] = true;
  setCompleted(updated);

  if (updated.every(Boolean)) {
    alert(" Congratulations! You have completed the course and received your certificate.");
  } else if (activeIndex < tasks.length - 1) {
    setActiveIndex(activeIndex + 1);
  }
};

  const goBack = () => {
    if (activeIndex > 0) setActiveIndex(activeIndex - 1);
  };

  const goNext = () => {
    if (activeIndex < tasks.length - 1) setActiveIndex(activeIndex + 1);
  };

  return (
    <main className="bg-black text-white min-h-[80vh]">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <header className="mb-6">

          <h1 className="text-3xl font-bold">{courseTitle}</h1>
          <p className="text-white/80 mt-2">
            Select the article in the left column, type HTML in the edit box, click <b>Run</b> to see
            preview, <b>Hint</b> to check, and <b>Submit</b> to submit .
          </p>
          <div className="mt-3 text-sm">
            Progress: <span className="font-semibold text-emerald-400">{progress}%</span>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Sidebar tasks */}
          <aside className="lg:col-span-4 space-y-3">
            {tasks.map((t, idx) => {
              const active = idx === activeIndex;
              const done = completed[idx];
              return (
                <button
                  key={t.id}
                  onClick={() => setActiveIndex(idx)}
                  className={[
                    "w-full rounded-xl border p-4 text-left transition",
                    active
                      ? "bg-white/10 border-white/20"
                      : "bg-white/5 border-white/10 hover:bg-white/10",
                  ].join(" ")}
                >
                  <div className="text-sm uppercase tracking-wide text-white/60">Oppgave</div>
                  <div className="font-semibold flex items-center justify-between">
                    {t.title}
                    {done && (
                      <span className="ml-2 rounded-full bg-emerald-600 px-2 py-0.5 text-xs font-semibold">
                        Done
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-white/70 mb-4">{t.blurb}</p>
                </button>
                
              );
            })}
          </aside>

          {/* Editor + actions + preview */}
          <section className="lg:col-span-8">
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="mb-2 flex items-center gap-2">
                <span className="font-semibold">{task.title}</span>
                {completed[activeIndex] && (
                  <span className="ml-2 rounded-full bg-emerald-600 px-2 py-0.5 text-xs font-semibold">
                    Done
                  </span>
                )}
              </div>
              <p className="text-sm text-white/70 mb-3">{task.blurb}</p>

              <textarea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                spellCheck={false}
                className="h-80 w-full resize-y rounded-md bg-black/70 p-3 font-mono text-sm text-white outline-none ring-1 ring-white/10"
                aria-label="HTML editor"
              />

              <div className="mt-3 flex items-center justify-between">
                <div className="mt-3 flex flex-wrap gap-3">
                  <button
                    onClick={run}
                    className="rounded bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500"
                  >
                    Run
                  </button>
                  <button
                    onClick={check}
                    className="rounded bg-emerald-600 px-3 py-2 text-sm font-semibold text-white hover:bg-emerald-500"
                  >
                    Hint
                  </button>
                  <button
                    onClick={reset}
                    className="rounded bg-white/10 px-3 py-2 text-sm font-semibold hover:bg-white/20"
                  >
                    Reset
                  </button>
                  <button
                    onClick={submit}
                    className="rounded bg-blue-600 px-3 py-2 text-sm font-semibold text-white hover:bg-blue-500"
                  >
                    Submit
                  </button>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={goBack}
                    disabled={activeIndex === 0}
                    className="rounded bg-gray-600 px-3 py-2 text-sm font-semibold text-white disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Back
                  </button>
                  <button
                    onClick={goNext}
                    disabled={activeIndex === tasks.length - 1}
                    className="rounded bg-gray-600 px-3 py-2 text-sm font-semibold text-white disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Next
                  </button>
                </div>
              </div>

              {/* Checklist */}
              {checks.length > 0 && (
                <ul className="mt-4 space-y-1 text-sm">
                  {checks.map((c, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span
                        className={[
                          "inline-flex h-4 w-4 items-center justify-center rounded-full text-[10px]",
                          c.ok ? "bg-emerald-600" : "bg-rose-600",
                        ].join(" ")}
                        aria-hidden
                      >
                        {c.ok ? "✓" : "!"}
                      </span>
                      <span className={c.ok ? "text-emerald-300" : "text-rose-300"}>
                        {c.label}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Preview */}
            <div className="mt-6 rounded-xl border border-white/10 bg-white/5">
              <div className="px-4 py-2 text-sm text-white/70">Preview</div>
              <div className="h-72 overflow-hidden rounded-b-xl border-t border-white/10 bg-white">
                {result ? (
                  <iframe
                    title="preview"
                    className="h-full w-full"
                    sandbox="allow-same-origin allow-forms allow-scripts"
                    srcDoc={result}
                  />
                ) : (
                  <div className="flex h-full items-center justify-center text-sm text-neutral-500">
                    Press<b>Run</b> tp see the result
                  </div>
                )}
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}