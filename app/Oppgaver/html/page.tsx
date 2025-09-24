"use client";

import { useEffect, useMemo, useState } from "react";

type Rule = { label: string; re: RegExp; must?: boolean };
type Task = {
  id: string;
  title: string;
  blurb: string;
  starter: string;
  rules: Rule[];
};

const STARTER = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>My Page</title>
</head>
<body>
  <h1>Hello!</h1>
  <p>Start writing HTML here…</p>
</body>
</html>`.trim();

const TASKS: Task[] = [
  {
    id: "basic",
    title: "1) Basic HTML page",
    blurb:
      "Tạo trang HTML đầy đủ: doctype, lang, title, một tiêu đề chính và đoạn văn, một ảnh (có alt) và một liên kết.",
    starter: STARTER,
    rules: [
      { label: "<!DOCTYPE html>", re: /<!DOCTYPE\s+html>/i, must: true },
      { label: 'Thuộc tính lang trên <html>', re: /<html[^>]*\blang=("|')[^"']+\1/i, must: true },
      { label: "<title>", re: /<title>[^<]+<\/title>/i, must: true },
      // bỏ cờ s, dùng [\s\S]* để khớp xuống dòng
      { label: "<h1>", re: /<h1>[\s\S]*?<\/h1>/i, must: true },
      { label: "<p>", re: /<p>[\s\S]*?<\/p>/i, must: true },
      { label: "<img> có alt", re: /<img[^>]*\bsrc=("|')[^"']+\1[^>]*\balt=("|')[^"']+\2/i, must: true },
      { label: "<a href>", re: /<a[^>]*\bhref=("|')[^"']+\1[^>]*>/i, must: true },
    ],
  },
  {
    id: "nav",
    title: "2) Navigation menu",
    blurb:
      "Tạo <nav> chứa danh sách liên kết: dùng <ul><li><a> với ít nhất 3 liên kết (href='#').",
    starter: STARTER.replace(
      "<h1>Hello!</h1>",
      `<nav>
  <ul>
    <li><a href="#home">Home</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
</nav>
<h1>Hello!</h1>`
    ),
    rules: [
      { label: "<nav>", re: /<nav[\s\S]*<\/nav>/i, must: true },
      { label: "<ul> + <li>", re: /<ul[\s\S]*<li>[\s\S]*<\/li>[\s\S]*<\/ul>/i, must: true },
      { label: "Ít nhất 3 <a href='#'>", re: /<a[^>]*href=("|')#/gi }, // count >=3 ở dưới
    ],
  },
  {
    id: "semantics",
    title: "3) Semantic layout",
    blurb:
      "Dùng semantic tags: <header>, <main>, <section> hoặc <article>, và <footer>.",
    starter: STARTER.replace(
      "<body>",
      `<body>
<header><h1>Site</h1></header>
<main>
  <section>
    <article>
      <h2>Article title</h2>
      <p>Some content…</p>
    </article>
  </section>
</main>
<footer>© Wizard of Web</footer>`
    ),
    rules: [
      { label: "<header>", re: /<header[\s\S]*<\/header>/i, must: true },
      { label: "<main>", re: /<main[\s\S]*<\/main>/i, must: true },
      { label: "<section> hoặc <article>", re: /<(section|article)[\s\S]*<\/(section|article)>/i, must: true },
      { label: "<footer>", re: /<footer[\s\S]*<\/footer>/i, must: true },
    ],
  },
  {
    id: "form",
    title: "4) Accessible form",
    blurb:
      "Tạo form với label + input (tên), label + input type='email' (email), và nút submit.",
    starter: STARTER.replace(
      "<p>Start writing HTML here…</p>",
      `<form action="#">
  <label for="name">Name</label>
  <input id="name" name="name" type="text" required />

  <label for="email">Email</label>
  <input id="email" name="email" type="email" required />

  <button type="submit">Send</button>
</form>`
    ),
    rules: [
      { label: "<form>", re: /<form[^>]*>/i, must: true },
      { label: "<label for> khớp với input#id", re: /<label[^>]*for=("|')(name|email)\1/i, must: true },
      { label: "input type='email'", re: /<input[^>]*type=("|')email\1/i, must: true },
      { label: "nút submit", re: /<(button|input)[^>]*(type=("|')submit\3)?[^>]*>/i, must: true },
    ],
  },
  {
    id: "media",
    title: "5) Media & meta viewport",
    blurb:
      "Thêm <meta name='viewport'> trong <head>. Dùng <figure><img><figcaption> để mô tả một ảnh.",
    starter: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
  />
  <title>Media & Meta</title>
</head>
<body>
  <figure>
    <img src="https://picsum.photos/600/300" alt="Random image" />
    <figcaption>A random beautiful photo.</figcaption>
  </figure>
</body>
</html>`.trim(),
    rules: [
      { label: "meta viewport", re: /<meta[^>]*name=("|')viewport\1[^>]*>/i, must: true },
      { label: "<figure>", re: /<figure[\s\S]*<\/figure>/i, must: true },
      { label: "<img alt>", re: /<img[^>]*\balt=("|')[^"']+\1/i, must: true },
      // bỏ cờ s
      { label: "<figcaption>", re: /<figcaption>[\s\S]*?<\/figcaption>/i, must: true },
    ],
  },
];

const STORAGE_KEY = "oppgaver_html_code";

export default function HtmlOppgaverPage() {
  const [activeId, setActiveId] = useState<string>(TASKS[0].id);
  const task = useMemo(() => TASKS.find(t => t.id === activeId)!, [activeId]);
  const [code, setCode] = useState(task.starter);
  const [result, setResult] = useState<string | null>(null);
  const [checks, setChecks] = useState<{label: string; ok: boolean}[]>([]);

  // load/save per-task code
  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY);
    const map: Record<string, string> = raw ? JSON.parse(raw) : {};
    setCode(map[activeId] ?? task.starter);
    setResult(null);
    setChecks([]);
  }, [activeId, task.starter]);

  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY);
    const map: Record<string, string> = raw ? JSON.parse(raw) : {};
    map[activeId] = code;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(map));
  }, [activeId, code]);

  const run = () => setResult(code);

  const reset = () => {
    setCode(task.starter);
    setResult(null);
    setChecks([]);
  };

  const check = () => {
    const evals = task.rules.map(r => {
      if (r.label.includes("Ít nhất 3") && /<a[^>]*href=("|')#/gi.test(code)) {
        // đếm số <a href='#'>
        const matches = code.match(/<a[^>]*href=("|')#/gi) || [];
        return { label: `${r.label} (tìm thấy ${matches.length})`, ok: matches.length >= 3 };
      }
      return { label: r.label, ok: r.re.test(code) };
    });
    setChecks(evals);
  };

  const passed = checks.length > 0 && checks.every(c => c.ok);

  return (
    <main className="bg-black text-white min-h-[80vh]">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <header className="mb-6">
          <h1 className="text-3xl font-bold">HTML — Oppgaver (Tổng hợp)</h1>
          <p className="text-white/80 mt-2">
            Chọn bài ở cột trái, gõ HTML vào ô soạn thảo, bấm <b>Run</b> để xem
            preview và <b>Check</b> để tự chấm.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Sidebar tasks */}
          <aside className="lg:col-span-4 space-y-3">
            {TASKS.map(t => {
              const active = t.id === activeId;
              return (
                <button
                  key={t.id}
                  onClick={() => setActiveId(t.id)}
                  className={[
                    "w-full rounded-xl border p-4 text-left transition",
                    active
                      ? "bg-white/10 border-white/20"
                      : "bg-white/5 border-white/10 hover:bg-white/10",
                  ].join(" ")}
                >
                  <div className="text-sm uppercase tracking-wide text-white/60">
                    Oppgave
                  </div>
                  <div className="font-semibold">{t.title}</div>
                  <p className="text-sm text-white/70 mt-1 line-clamp-2">
                    {t.blurb}
                  </p>
                </button>
              );
            })}
          </aside>

          {/* Editor + actions + preview */}
          <section className="lg:col-span-8">
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="mb-2 flex items-center gap-2">
                <span className="font-semibold">{task.title}</span>
                {passed && (
                  <span className="ml-2 rounded-full bg-emerald-600 px-2 py-0.5 text-xs font-semibold">
                    Passed
                  </span>
                )}
              </div>

              <textarea
                value={code}
                onChange={e => setCode(e.target.value)}
                spellCheck={false}
                className="h-80 w-full resize-y rounded-md bg-black/70 p-3 font-mono text-sm text-white outline-none ring-1 ring-white/10"
                aria-label="HTML editor"
              />

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
                  Check
                </button>
                <button
                  onClick={reset}
                  className="rounded bg-white/10 px-3 py-2 text-sm font-semibold hover:bg-white/20"
                >
                  Reset
                </button>
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
                    Bấm <b>Run</b> để xem kết quả
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
